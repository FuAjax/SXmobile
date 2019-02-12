<template>
    <div class="sharePlay">
      <div class="topBar">
        <Header :title='title' :isback='isback'/>
      </div>
      <div style="width:100%; height:.92rem;"></div>
      <!--搜索-->
      <div class="top">
        <div class="wrap">
          <div  class="search" @click="tosearch">
            <i class="iconfont icon-sousuo"></i>
            <input type="text" placeholder="请输入区域/景点名称">
          </div>
          <router-link :to="{name:'mapFindGrange'}" tag="div" class="find">
            地图找农庄
          </router-link>
        </div>
      </div>

      <!--五个模块-->
      <!--<div class="five">-->
        <!--<div class="wrap">-->
          <!--<div class="fiv" v-for="item  in bblist.slice(1,6)" @click="fivesearch(item.menuRestfulDictionary,item.id)">-->
            <!--<img :src="item.logoUrl">-->
            <!--<p>{{item.text}}</p>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->



      <!--玩乐排行榜-->

      <div v-if="play_list.length>0">
        <!--周边农房-->
        <div class="play">
          <div class="play_top clear">
            <a>
            <span class="orang">游玩</span>排行榜
            </a>
          </div>
          <div class="play_bottom" style="overflow: hidden;">
            <scroll ref="scroll" class="recommend-content" :data="play_list">
              <div :style="'width:' + play_list.length * 3.2 + 'rem'">
                <router-link v-for="(item,index) in play_list" :to="{name:'grangedetail',params:{id:item.grangeNumber}}">
                  <div style="width: 3rem; display: inline-block; padding-right: .2rem;position: relative">
                    <!--<div v-show="index < 3" class="ranking-cover" :style="{background:index==0 ? '#FD6C00': index==1 ? '#8AB9D4' : index==2 ?'#E38900':''}" >-->
                      <!--<i>NO.{{index+1}}</i>-->
                    <!--</div>-->
                    <div v-if='item.fileUrl' :style="'background:url(' + item.fileUrl + ');width: 100%;height: 2rem;background-size:cover;background-position: center center'"></div>
                    <div style="font-size: 0.26rem;" class="van-ellipsis">{{item.grangeName}}</div>
                  </div>
                </router-link>
              </div>
            </scroll>
          </div>
        </div>
      </div>


      <div class="separate"></div>
      <!--条件筛选-->
      <div class="condition">
        <ul class="top_tab clear" >
          <li class="list van-ellipsis" @click="area" :class="{active:area1}">
            {{areatext}}
            <i class="iconfont icon-xiala1" v-show="area1"></i>
            <i class="iconfont icon-xiala" v-show="!area1"></i>
          </li>
          <li class="list van-ellipsis" @click="group" :class="{active:area2}">
            {{deliciousfood}}
            <i class="iconfont icon-xiala1" v-show="area2"></i>
            <i class="iconfont icon-xiala" v-show="!area2"></i>
          </li>
          <li class="list van-ellipsis" @click="weather" :class="{active:area3}">
            筛选
            <i class="iconfont icon-xiala1" v-show="area3"></i>
            <i class="iconfont icon-xiala" v-show="!area3"></i>
          </li>
          <li class="list van-ellipsis" @click="sort" :class="{active:area4}">
            排序
            <i class="iconfont icon-xiala1" v-show="area4"></i>
            <i class="iconfont icon-xiala" v-show="!area4"></i>
          </li>
        </ul>

        <div>
          <div class="area">
            <div v-if="area1" class="regin">
              <div class="left">
                <!--景区/区域-->
                <div v-for="(item,index) in two"
                     @click="twoSpot(index)"
                     :keys="index"
                     :class="{active:index==twoNum}"
                >{{item}}</div>
              </div>
              <div class="right">
                <div v-if="twoNum==0">
                  <van-tree-select
                    :items="item1"
                    :main-active-index="mainActiveIndex"
                    :active-id="activeId"
                    @navclick="onNavClick"
                  />
                </div>
                <div v-if="twoNum==1">
                  <van-tree-select
                    :items="landlist"
                    :main-active-index="mainActiveIndex"
                    :active-id="activeId"
                    @navclick="onlanClick"
                    @itemclick="onLandClick"
                  />
                </div>
              </div>
            </div>
            <!--适合人群-->
            <div v-if="area2" class="group">
              <van-tree-select
                :items="grouplist"
                :active-id="activeId"
                @itemclick="ontypeClick"
              />
            </div>
            <!--筛选-->
            <div v-if="area3" class="season">
              <div>
                <p>价格</p>
                <div class="content">
                    <span v-for="(item,index) in pricelist"
                          :keys="index"
                          @click="priceSpan(item.id)"
                          :class="{orange:item.id==num}">{{item.text}}</span>
                </div>
                <p>适合人群</p>
                <div class="content">
                      <span v-for="(item,index) in houselist"
                            @click="houseSpan(item.id)"
                            :class="{orange:item.id==pnum}"
                            :keys="index">{{item.text}}</span>
                </div>
                <p>经营类型</p>
                <div class="content">
                      <span v-for="(item,index) in facilitylist"
                            @click="facilitySpan(item.id)"
                            :class="{orange:item.id==fnum}"
                            :keys="index">{{item.text}}</span>
                </div>
                <div class="bottom">
                  <span @click="reset" :class="{orange:checknum==1}">重置</span>
                  <span @click="submit" :class="{orange:checknum==2}">确定</span>
                </div>
              </div>
            </div>
            <!--排序-->
            <div v-if="area4" class="rank">
              <van-tree-select
                :items="items"
                :active-id="activeId"
                @itemclick="onItemClick"
              />
            </div>
          </div>
        </div>
      </div>
      <!--景点列表-->
      <div class="list">
        <div class="scenic_wrap">
          <van-list
            v-model="loading"
            :finished="finished"
            @load="init"
          >
            <router-link v-for="(item,index) in playlist" :to="{name:'grangedetail',params:{id:item.grangeNumber}}">
          <van-row gutter="20">
            <!--图-->
            <van-col span="8">
              <div class="left">
                <img :src="item.fileUrl"  v-lazy="item.fileUrl">
              </div>
            </van-col>
            <!--右边文字-->
            <van-col span="16">
              <div class="right">
                <!--风景区-->
                <div  class="mulan van-ellipsis">
                  <span class="lake">{{item.grangeName}}</span>
                </div>
                <!--评分-->
                <div class="grade">
                  <stars :rate="item.totalMark"></stars>
                  <span class="score">{{item.totalMark}}分</span>
                  <p class="much">
                    <span>￥{{item.personConsumption}}</span>/人
                  </p>
                </div>
                <!--定位-->
                <div class="position van-ellipsis">
                  <i class="iconfont icon-dizhi"></i>{{item.fcityName}}-{{item.fareaName}}-{{item.fstreetName}}
                </div>
                <!--数据-->
                <div class="data" v-if="item.facilities">
                  <span v-for="aa in (item.facilities.slice(0,3))" :keys="index">{{aa}}</span>
                </div>
              </div>
            </van-col>
          </van-row>
            </router-link>

          </van-list>
          <noFind v-if="nomessage" name1="农庄" :name2='false'></noFind>
        </div>
      </div>
      <Footer></Footer>
      <goTotop/>
    </div>
</template>

<script>
  import Footer from 'com/common/Footer'
  import Header from "com/common/header"
  import stars from 'com/common/rates'
  import Scroll from 'com/common/swiperX'
  import noFind from 'com/common/notFind'
  import goTotop from 'com/common/goTop'
    export default {
        name: "sharePlay",
        components:{stars,Footer,Header,Scroll,noFind,goTotop},
        data() {
            return {
              areatext:'区域',
              deliciousfood:'游玩项目',
              nomessage:false,
              keywords:'',//关键字

              loading: false,
              finished: false,
              page:1,
              rows:30,
              total: 1,
              bblist:[],
              isback:true,
              title:'游玩',
              scenic_list:[],//景点
              play_list:[],//游玩
              area1:false,
              area2:false,
              area3:false,
              area4:false,
              two:['区域','景点'],
              twoNum:0,
              fourSpan:['漂流','烧烤','棋牌','野菜'],
              items: [
                {
                  // 导航名称
                  text: '所有城市',
                  // 该导航下所有的可选项
                  children: [
                    {
                      text: '智能排序',
                      id: 1002,
                      resful:'znd',
                    },
                    // {
                    //   text: '离我最近',
                    //   id: 1001,
                    //   resful:'',
                    // },
                    {
                      text: '价格低到高',
                      id: 1003,
                      resful:'jgs',
                    },
                    {
                      text: '价格高到低',
                      id: 1004,
                      resful:'jgj',
                    },
                    {
                      text: '评论最高',
                      id: 1005,
                      resful:'pjj',
                    },
                  ]
                },
              ],
              mainActiveIndex: 0,
              activeId:null,
              playlist:[],//游玩列表

              item1:[],//区域树
              landlist:[],//景点树
              grouplist:[],//适合人群
              pricelist:[],//价格列表
              houselist:[],//适合人群
              facilitylist:[],//经营类型

              arearest:'',//区域rest
              landrest:'',//景点rest
              pricerest:'',//价格rest
              peoplerest:'',//适合人群rest
              typelist:'',//游玩项目rest
              facility:'',//经营类型rest
              sortrestful:'',//排序的rest




              checknum:0,
              num:-1,//价格id
              pnum:-1,//适合人群id
              fnum:-1,//经营类型id

            }
        },
        methods: {

          tosearch(){
            // if(this.isSearchIn){
            //   this.$router.go({
            //     name:'search',
            //     query:{name:'游玩',to:'sharePlay'}
            //   })
            //   console.log({
            //     path:'search',
            //     query:{name:'游玩',to:'sharePlay'}
            //   })
            // }
            this.$router.push({
              path:'/search',
              query:{name:'游玩',to:'sharePlay'}
            })
            
          },



          fivesearch(rest,id){
            this.activeId = id;
            this.typelist=rest;
            this.nomessage=false,
            this.page=1;
            this.init();
          },


          area(){
            this.area2=false;
            this.area3=false;
            this.area4=false;
            this.area1=!this.area1;
          },
          group(){
            this.area3=false;
            this.area4=false;
            this.area1=false;
            this.area2=!this.area2;
          },
          weather(){
            this.area4=false;
            this.area1=false;
            this.area2=false;
            this.area3=!this.area3;
          },
          sort(){
            this.area1=false;
            this.area2=false;
            this.area3=false;
            this.area4=!this.area4;
          },
          onNavClick(index) { //区域导航
            this.mainActiveIndex = index;
            this.area1=false;
            this.arearest=this.item1[index].areaRestfulDictionary;
            this.landrest="";
            this.areatext=this.item1[index].text;
            if(index==0){
              this.areatext='区域'
            }
            this.nomessage=false;
            this.keywords="";
            this.page=1;
            this.init();
          },

          // onAreaClick(data){//区域
          //   this.activeId = data.id;
          //   this.area1=false;
          //   this.arearest=data.restFul;
          //
          //   this.landrest="";
          //   this.areatext=data.text;
          //   this.page=1;
          //   this.init();
          // },

          onItemClick(data) { //排序
            console.log(data)
            this.activeId = data.id;
            this.area4=false;
            this.sortrestful=data.resful;
            this.nomessage=false;
            this.keywords="";
            this.page=1;
            this.init();
          },
          twoSpot(index){
            this.twoNum=index;
          },

          rank(){//玩乐排行
            this.$http.post('appServiceGrange/grangeIndex').then(res=>{
              if(res.msg=='success'){
                //美食排行
                let array=[{color:'#ff6500'},{color:'#8ab8d4'},{color:'#e38800'},{color:'#b4b4b9'},{color:'#b4b4b9'},{color:'#b4b4b9'}];
                let foodarr=[];
                res.data.playTopList.map((item,index)=>{
                  let newitem=Object.assign(item,array[index]);
                  foodarr.push(newitem)
                })
                this.play_list=foodarr;
              }else{
                this.$toast(res.info)
              }

            });
          },

          init(){//游玩数据
            setTimeout(()=>{
              const params={
                keyword:this.keywords,
                page:this.page,
                rows:this.rows,
                rest:this.arearest+this.landrest+this.pricerest+this.peoplerest+this.typelist+this.facility+this.sortrestful,
              };
              console.log(params);
              this.$http.post('appServiceGrange/getGrangePlayData',params).then(res=>{
                if(res.msg=='success'){
                  if(this.page==1){
                    this.playlist=res.data.rows;
                  }else{
                    this.playlist=this.playlist.concat(res.data.rows)
                  }
                  if(this.playlist.length==0){
                    this.nomessage=true;
                  };
                  this.page++;
                  this.total=res.data.total;
                  this.loading=false;
                  if(this.playlist.length>=this.total || this.total==0){
                    this.finished=true;
                  }
                }else{
                  this.$toast(res.info)
                  this.finished=true;
                }
              }).catch(error=>{
                this.finished=true;
              })
            },500)
          },
          condition(){
            this.$http.post('appServiceGrange/getGrangePlayParam').then(res=>{
              if(res.msg=='success'){
                //区域
                let aaa=res.data.AreaList;
                aaa.unshift({text:'不限',children:null,areaRestfulDictionary:''});
                // aaa.map(item=>{
                //   item.children.unshift({restFul:'',text:'不限',id:null})
                // })
                this.item1=aaa;
                //景点
                let landaaa=res.data.areaLandList;
                landaaa.unshift({text:'不限',children:[]});
                landaaa.map(item=>{
                  item.children.unshift({restFul:'',text:'不限',id:null})
                })
                this.landlist=landaaa;
                //游玩项目
                let cookaaa=res.data.playParam;
                cookaaa.map(item=>{
                  item.children.unshift({menuRestfulDictionary:'',text:'不限',id:null})
                })
                this.grouplist=cookaaa;
                this.bblist=cookaaa[0].children;
                //价格
                let priceaaa=res.data.priceParam[0].children;
                priceaaa.unshift({menuRestfulDictionary:'',text:'不限',id:-1});
                this.pricelist=priceaaa;
                //适合人群
                let peopleFit=res.data.throngParam[0].children;
                peopleFit.unshift({menuRestfulDictionary:'',text:'不限',id:-1});
                this.houselist=peopleFit;

                //经营类型
                let busType=res.data.managementClassParam[0].children;
                busType.unshift({menuRestfulDictionary:'',text:'不限',id:-1});
                this.facilitylist=busType;
              }else{
                this.$toast(res.info)
              }
            });
          },
          onlanClick(index){//景点导航
            this.mainActiveIndex = index;
            if(index==0){
              this.areatext='区域'
              this.area1=false;
            }
          },
          onLandClick(data){//景点
            this.activeId = data.id;
            this.area1=false;
            this.arearest='';
            this.areatext=data.text;
            this.landrest=data.restFul;
            this.nomessage=false;
            this.keywords="";
            this.page=1;
            this.init();
          },
          ontypeClick(data){//游玩项目

            if(data.text==='不限'){
              this.deliciousfood='游玩项目';
            }else{
              this.deliciousfood=data.text;
            }
            this.activeId = data.id;
            this.area2=false;
            this.typelist=data.menuRestfulDictionary;
            this.nomessage=false;
            this.keywords="";
            this.page=1;
            this.init();
          },
          //价格的颜色
          priceSpan(id){
            this.num=id;
            console.log(id)
          },

          //房型的颜色
          houseSpan(id){
            this.pnum=id;
            console.log(this.pnum)
          },
          //设施的颜色
          facilitySpan(id){
            this.fnum=id;
            console.log(this.fnum)
          },

          reset(){//重置
            this.checknum=1;
            this.num=-1;
            this.pnum=-1;
            this.fnum=-1;
          },
          submit(){//确定
            this.checknum=2;
            this.pricelist.map(item=>{
                if(item.id==this.num){
                  this.pricerest=item.menuRestfulDictionary;
                }
              })
            this.houselist.map(item=>{
                if(item.id==this.pnum){
                  this.peoplerest=item.menuRestfulDictionary;
                }
              })
            this.facilitylist.map(item=>{
                if(item.id==this.fnum){
                  this.facility=item.menuRestfulDictionary;
                }
              })
            this.nomessage=false;
            this.keywords="";
            this.page=1;
            this.init();
            this.area3=false;
          },

        },
        computed: {},
        created: function () {
          this.rank();
          this.condition();
          if(this.$route.query.searchWord){
            this.keywords=this.$route.query.searchWord;
            this.isSearchIn = true
          }
        },
        mounted: function () {
        },

    }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../style/public.less";
  .sharePlay{
    //头部
    .top{
      height: 1rem;
      background-color: #f6f5fb;
      position: relative;
      .wrap{
        position: absolute;
        top: 0.2rem;
        width: 6.8rem;
        left: 50%;
        transform: translateX(-50%);
        .search{
          i{
            font-size: 0.3rem;
            vertical-align: middle;
            margin-left: 0.2rem;
          }
          height: 0.57rem;
          display: inline-block;
          width: 4.9rem;
          vertical-align: middle;
          background-color: white;
          border-radius: 0.57rem;
          padding-top: 0.1rem;
          box-sizing: border-box;
          input{
            vertical-align: middle;
            font-size: 0.2rem;
            border: none;
            outline: none;
            color: #d5eed1;
          }
        }
        .find{
          width: 1.8rem;
          background-color: #00af33;
          vertical-align: middle;
          height: 0.57rem;
          display: inline-block;
          font-size: 0.2rem;
          border-radius: 0.57rem;
          text-align: center;
          line-height: 0.57rem;
          color: #d5eed1;
        }
      }
    }
    .five{
      height:1.79rem;
      .wrap{
        display: inline-block;
        position: relative;
        // left: 50%; translateX(-50%)
        //transform: translateY(-50%);
        top: 50%;
        text-align: center;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        .fiv{
          width:0.86rem;
          text-align: center;
          display: inline-block;
          img{
            width: 0.86rem;
            height: 0.86rem;
            border-radius: 50%;
          }
          p{
            text-align: center;
            width: 100%;
            text-align: center;
            font-size: 0.18rem;
            margin-top: 0.1rem;
          }
        }
        &>div:first-child{
          margin-left: 0;
        }
        &>div{
          margin-left: 0.5rem;
        }
      }


    }


    //好玩
    .scenic{
      padding-left: 0.3rem;
      .scenic_top{
        height: 1.15rem;
        line-height: 1.15rem;
        font-size: 0.24rem;
        font-weight: bold;
        span{
          color: #ff6500;
        }
      }
      .scenic_bottom{
        padding-bottom: 0.2rem;
        .rank{
          padding-right:0.2rem;
          div{
            height: 2rem;
            position: relative;
          }
          p{
            font-size: 0.18rem;
            padding-top: 0.13rem;
          }
        }
      }
    }
    //游玩排行榜
    .play{
      .play_top{
        padding: 0 0.3rem;
        height: 1.15rem;
        line-height: 1.15rem;
        a{
          font-size: 0.32rem;
          font-weight: bold;
        }
        .orang{
          color: #ff6500;
        }
        .right{
          height: 1rem;
          float: right;
        }
      }
      .play_bottom{
        border-bottom: 0.02rem #e4e4e4 solid;
        padding-bottom: 0.2rem;
        padding-left:0.3rem;
        .rank{
          padding-right:0.2rem;
          div{
            height: 2rem;
            position: relative;
            span{
              position: absolute;
              left: 0;
              top:0;
              width: 0.9rem;
              height: 0.4rem;
              text-align: center;
              line-height: 0.3rem;
              i{
                font-size: 0.2rem;
                color: white;
              }
            }
          }
          p{
            font-size: 0.24rem;
            padding-top: 0.13rem;
          }
        }
        .last{
          div{
            i{
              font-size: 1rem;
              color:#b4b4b9;
            }
          }
          p{
            font-size: 0.18rem;
            padding-left: 0.12rem;
          }
        }
      }
    }
    //隔开
    .separate{
      height: 0.2rem;
      background-color: #f1f0f6;
    }
    //条件
    .condition{
      position: relative;
      .top_tab{
        /*border-bottom: 0.01rem solid grey;*/
        margin: 0 0.3rem;
        li{
          height: 0.85rem;
          float: left;
          width: 25%;
          font-size: 0.24rem;
          text-align: center;
          line-height: 0.85rem;
        }
      }
      .area{
        position: absolute;
        top: 0.85rem;
        width: 100%;
        background-color: white;
        border-top:  0.01rem solid #e6e6e6;
        .regin{
          .left{
            width: 25%;
            float: left;
            font-size: 0.2rem;
            margin-left: 0.2rem;
            box-sizing: border-box;
            div{
              border-bottom: 0.01rem solid #e6e6e6;
              height: 0.8rem;
              text-align: center;
              line-height: 0.8rem;
            }
          }
          .right{
            background-color: #faf9ff;
            border-left: 0.01rem solid #e6e6e6;
            width: 72%;
            float: left;
          }
        }
        .group{
          background-color: white;
        }
      }
      .area /deep/ .van-tree-select__nitem--active, .van-tree-select__nitem:active{
        color: #ff6500;
      }

      .season{
        position: relative;
        margin: 0 0.2rem;
        p{
          color: grey;
          margin: 0.2rem 0;
        }
        .content{
          border-bottom: 0.01rem solid #e5e5e5;
          padding-bottom: 0.2rem;
          margin-bottom: 0.2rem;
          span{
            display: inline-block;
            height: 0.55rem;
            padding: 0 0.2rem;
            border-radius: 0.55rem;
            background-color: #f1f0f6;
            text-align: center;
            line-height: 0.55rem;
            margin-right: 0.2rem;
            margin-top: 0.15rem;
          }
        }
        .bottom{
          width: 100%;
          span{
            display: inline-block;
            width: 49%;
            background-color: #fea541;
            color: white;
            height: 0.85rem;
            line-height: 0.85rem;
            vertical-align: middle;
            text-align: center;
          }
        }
      }

    }
    //景点列表
    .list{
      .scenic_wrap{
        padding: 0 0.3rem;
        .van-list{
        a{
          &>div{
            padding: 0.2rem 0;
            border-top: 0.5px rgba(192,192,192,.5) solid;
          }
          .left{
            width: 2.15rem;
            height: 1.58rem;
          }
          .right{
            div{
              margin-bottom: 0.12rem;
            }
            .mulan{
              font-size: 0.24rem;
              .lake{

              }
              .five{
                display: inline-block;
                width: 1.71rem;
                height: 0.3rem;
                font-size: 0.18rem;
                text-align: center;
                line-height: 0.3rem;
                vertical-align: middle;
                border-radius: 0.3rem;
                color: #00a62e;
                margin-left: 0.1rem;
                background-color: #ebf8ee;
              }
            }
            .grade{
              .score{
                font-size: 0.18rem;
                vertical-align: middle;
                color: #ff6500;
              }
              .much{
                display: inline-block;
                font-size: 0.2rem;
                vertical-align: middle;
                float: right;
                margin-top: 0.1rem;
                span{
                  color: #e90009;
                  font-size: 0.24rem;
                  font-weight: bold;
                }
              }
            }
            .position{
              i{
                font-size: 0.3rem;
                color: #c7c6cb;
                vertical-align: middle;
                margin-right: 0.05rem;
              }
              font-size: 0.2rem;
              color: grey;
            }
            .data{
              span{
                font-size: 0.18rem;
                padding: 0 0.1rem;
                border-radius: 0.05rem;
                margin-right: 0.1rem;
              }
              span:first-child{
                border: 0.01rem #099b4c solid;
                color:#099b4c;
              }
              span:nth-child(2){
                border: 0.01rem #00a0e9 solid;
                color:#00a0e9;
              }
              span:nth-child(3){
                border: 0.01rem #eb3d00 solid;
                color:#eb3d00;
              }
              span:nth-child(4){
                border: 0.01rem #e3007b solid;
                color:#e3007b;
              }
            }
          }
          .van-row{
            margin-left: 0!important;
            margin-right: 0!important;
          }
          .variety{
            font-size: 0.18rem;
            color: #ff6500;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
        }
      }
    }
  }
</style>
