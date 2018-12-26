<template>
<div class="myTrade" id="myTrade">
    <div class="head">
      <van-nav-bar :title='title'
        @click-left="back"
        @click-right="onClickRight"
        right-text="筛选"
        style="text-align: center"
        left-arrow>
      </van-nav-bar>
    </div>
	<div style="padding-top: .91rem;">
    <van-list
      v-model="loading"
      @load="init"
      :finished="finished"
      >
      <ul class="list">
        <li v-for="(item, index) in list" v-if="list.length > 0">
          <div class="separate" v-if="index!=0"></div>
          <p class="top">
            {{item.updateTime}}
            <span>
              {{item.statusName}}
            </span>
          </p>
          <div class="center">
            <router-link :to="{name: 'wantedDetail', params: { id: item.farmhouseRentingNumber}}">
            <van-row gutter="10">
              <van-col span="24" class="right">
                <p class="van-ellipsis" style="font-size:.32rem">
                  <span>{{item.managementSubject}}</span>{{item.title}}
                </p>
                <p class="van-ellipsis">
                    {{item.info}}
                </p>
                <p class="van-ellipsis">
                    <i style="color: #c8c8cd; font-size: .26rem" class="iconfont icon-dizhi"></i>
                  {{item.address}}
                   <span style="float: right;"><span style="color: #C40722; font-size: .28rem">{{item.rentingPrice}}万元</span>/年</span>
                </p>
                <p class="van-ellipsis">
                  <span class="tag" v-for="tag in item.characteristics">{{tag}}</span>
                </p>
              </van-col>
            </van-row>
            </router-link>
          </div>
          <div class="bottom">
            <!-- null:全部 1：展示 0：待审核 -1：审核未通过.-2:已下架 -->
            <span>编辑</span>
            <span @click="delSellRenting(1, item.id, index)">删除</span>
            <span @click="delSellRenting(2, item.id, index)">下架</span>
            <span @click="delSellRenting(3, item.id, index)">上架</span>
          </div>
        </li>
        <template v-if="list.length == 0 && finished">
          <noList :detail='"求租"'/>
        </template>
      </ul>
    </van-list>
	</div>


    <!--右侧弹出层-->
    <van-popup v-model="show"
      class="layer"
      :close-on-click-overlay=false
      position="right">
       <div class="container">
         <van-nav-bar
           title="筛选"
           left-arrow
           @click-left="onClickLeft"
         />
         <div class="common">
           <van-row gutter="10">
             <van-col span="8" class="left">标题搜索</van-col>
             <van-col span="16" class="right">
               <input type="text" v-model="value" placeholder="请输入标题搜索">
             </van-col>
           </van-row>
         </div>
         <div class="bottom">
            <button @click="init(value)">搜索</button>
            <button style="background-color: #C4C4C6; margin-top: .2rem" @click="init(null,true)">清空筛选条件</button>
         </div>
       </div>
    </van-popup>


    <van-actionsheet v-model="timeshow" :title="timetitle" style="text-align: center">
      <van-datetime-picker
        v-show="timeType == 1"
        type="date"
        v-model="currentDatestart"
        @confirm='timeclose'
        @cancel='timeclose'
      />
      <van-datetime-picker
        v-show="timeType == 2"
        type="date"
        :min-date="currentDatestart"
        v-model="currentDate"
        @confirm='timeclose'
        @cancel='timeclose'
      />
    </van-actionsheet>
  </div>
</template>

<script>
    import { Dialog } from 'vant';
    import noList from "../../common/noList";
    export default {
        name: "myTrade",
        components: {
          noList
        },
        data() {
            return {
              show:false,
              value:'',
              imgSrc:'../../../../static/images/slide_01.jpg',
              title: '我的求租',
              timetitle: '选择时间',
              timeshow: false,
              list: [],

              currentDatestart: new Date(),
              currentDate: new Date(),
              startDate: '选择开始时间',
              endDate: '选择结束时间',

              loading: false,
              finished: false,

              rows: 20,
              page: 1,

              timeType: 1
            }
        },
        methods: {
          back(){
            this.$router.back(-1)
          },
          onClickLeft(){
            this.show=false;
          },
          onClickRight(){
            this.show=true;
          },
          timeshowClick(o){
            this.timeshow = true
            this.timeType = o
            if(o==1){
              this.timetitle = '选择开始时间'
            } else {
              this.timetitle = '选择结束时间'
            }
          },
          timeclose(value){
            if(value){
              if(this.timeType == 1){
                this.startDate = this.formatDate(Date.parse(new Date(value))).split(' ')[0]
                this.endDate = '选择结束时间'
              } else {
                this.endDate = this.formatDate(Date.parse(new Date(value))).split(' ')[0]
              }
            }
            this.timeshow = false
          },
          init(info, clear){
            setTimeout(() => {
              var parmas = {page:this.page,rows:this.rows }
              this.show=false

              if(clear) {
                this.page = 1
                parmas.page = 1
                this.title = '我的求租'
              } else {
                if(info && info !== ''){
                  this.page = 1
                  parmas.page = 1
                  parmas.farmInfo = info
                }
                if(info && info !== ''){
                  this.title = '我的求租-查询结果'
                  this.page = 1
                  parmas.page = 1
                }
              }

              this.$http.post('appServiceUser/myNeedrental',parmas).then(res=>{
                if(res.msg == 'success'){
                  this.loading = false;
                  if(this.page == 1){
                    this.list = res.data.rows
                  } else {
                    this.list = this.list.concat(res.data.rows)
                  }
                  this.total = res.data.total
                  this.page = this.page + 1
                  // 数据全部加载完成
                  if (this.list.length >= this.total || this.total == 0) {
                    this.finished = true;
                  }
                } else {
                  this.finished = true;
                }
			        }).catch(error=>{
				          this.finished = true;
              })
            }, 500);
          },
          formatDate(date){
              date = new Date(date);
              var y=date.getFullYear();
              var m=date.getMonth()+1;
              var d=date.getDate();
              var h=date.getHours();
              var m1=date.getMinutes();
              var s=date.getSeconds();
              h = h<10?("0"+h):h;
              m1 = m1<10?("0"+m1):m1;
              s = s<10?("0"+s):s;
              m = m<10?("0"+m):m;
              d = d<10?("0"+d):d;
              return y+"-"+m+"-"+d+" "+h+":"+m1
          },
          delSellRenting(type, id, index) {
            var title = ''
            if (type == 1){
              title = '删除'
            }
            if (type == 2){
              title = '下架'
            }
            if (type == 3){
              title = '上架'
            }
              Dialog.confirm({
                title: title + '操作',
                message: '是否确认' + title + '该求租信息'
              }).then(() => {
                this.$http.post('appServiceUser/delSellRenting',{id,type}).then(res=>{
                  if(res.msg == 'success'){
                    if (type == 1){
                      this.list.splice(index,1)
                    }
                    if (type == 2){
                      this.list[index].status = -2
                      this.list[index].statusName = '已下架'
                    }
                    if (type == 3){
                      this.list[index].status = 1
                      this.list[index].statusName = '展示中'
                    }
                    console.log(this.list)
                  }
                })
              }).catch(() => {
                // on cancel
              });
          }
        },
        computed: {},
        created: function () {
        },
        mounted: function () {
        },

    }
</script>

<style scoped lang="less" type="text/less">
  .head{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
  }
  .myTrade{
    li{
      padding: 0.2rem 0;
      .top{
        margin:0 0.2rem;
        border-bottom: 0.01rem solid #e6e6e6;
        padding: 0.2rem 0;
        span{
          float: right;
          color: #63cf83;
        }
      }
      .center{
        margin:0 0.2rem;
        border-bottom: 0.01rem solid #e6e6e6;
        padding: 0.2rem 0;
        .left{
          height: 1.6rem;
          position: relative;
          p{
            position: absolute;
            width: 95%;
            height: 0.3rem;
            background-color: rgba(0, 0, 0, 0.5);
            bottom: 0;
            color: white;
            line-height: 0.3rem;
            text-indent: 0.2rem;
          }
        }
        .right{
          p:first-child{
            color: black;
            font-size: 0.24rem;
          }
          p{
            color: grey;
            margin-bottom: 0.15rem;
          }
          p:nth-child(4){
            span{
              font-size: 0.24rem;
              color: red;
            }
          }
        }
      }
      .bottom{
        margin:0 0.2rem;
        padding: 0.2rem 0;
       p{
         float: right;
         color: grey;
         span{
           color: red;
           font-size: 0.24rem;
         }
       }
      }
      .separate{
        height: 0.28rem;
        background-color: #f1f0f6;
      }
    }

    .layer{
      .container{
        .common{
          margin: 0.2rem;
          .left{
            color: grey;
            font-size: 0.28rem;
            margin-top: 0.12rem;
          }
          .right{
            input{
              border: 0.01rem solid #e5e5e5;
              background-color: #f1f0f6;
              font-size: 0.28rem;
              width: 100%;
              vertical-align: middle;
              height: 0.7rem;
              padding-left: 0.3rem;
              box-sizing: border-box;
            }
            select{
              border: 0.01rem solid #e5e5e5;
              background-color: #f1f0f6;
              font-size: 0.28rem;
              width: 100%;
              vertical-align: middle;
              height: 0.7rem;
              padding-left: 0.3rem;
              box-sizing: border-box;
            }
          }
          .center{
            button{
              width: 100%;
              height: 0.7rem;
              font-size: 0.2rem;
              background-color: #f1f0f6;
            }
          }
        }
        .bottom{
          padding: 0.15rem;
          button{
            width: 100%;
            height: 0.8rem;
            line-height: 0.8rem;
            background-color: #ff6500;
            text-align: center;
            border-radius: 3px;
            color: white;
            font-size: 0.28rem;
          }
        }
      }
    }
  }
  .tag::nth-of-type(1){
    color: #000
  }
</style>
<style>

  #myTrade .van-ellipsis.van-nav-bar__title{
    text-align: center
  }
</style>
