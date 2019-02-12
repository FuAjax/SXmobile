<template>
    <div class="commentManage">
      <div class="header">
        <van-nav-bar :title='title'
          @click-left="back"
            @click-right="onClickRight"
            right-text="筛选" left-arrow>
        </van-nav-bar>
      </div>

	<div >
      <van-tabs @click="onClick">
        <van-list
          v-model="loading"
          :finished="finished"
          @load="init"
          >
          <van-tab title="农庄评论">
            <!--农庄评论-->
            <ul class="grangelist">
              <li v-for="(item, index) in list">
                <p class="top">
                  {{item.createTime}}
                  <span>
                  {{item.isReview == 0 ? '待审核' : item.isReview == 1 ? '已审核': item.isReview == -1 ? '未通过' : ''}}
                </span>
                </p>
                <div class="center">
                  <router-link :to="{name: 'grangedetail', params:{id: item.grangeNumber}}">
                  <van-row gutter="10">
                    <van-col span="8" class="left">
                      <img :src="item.logoUrl" alt="">
                    </van-col>
                    <van-col span="16" class="right">
                      <p class="van-ellipsis">
                        {{item.grangeName}}
                      </p>
                      <p class="score">
                        <stars :rate="item.starLevel"></stars> {{item.starLevel}}分
                      </p>
                    </van-col>
                  </van-row>
                  </router-link>
                </div>
                <div class="comment">
                  <p>
                    {{item.commentText}}
                  </p>
                  <div v-if="item.haveimage == 1">
                    <img v-for="img in item.images" :src="img" alt="">
                  </div>
                </div>
                <div class="bottom clear">
                    <p>
                      <span @click="delComment(2,item.id, index)">删除</span>
                      <!-- <span>编辑</span> -->
                    </p>
                </div>
                <div class="separate"></div>
              </li>
            </ul>
          </van-tab>
          <van-tab title="景点评论">
            <!--农庄评论-->
            <ul class="grangelist">
              <li v-for="(item,index) in list">
                <p class="top">
                  {{item.landspaceName}}
                  <span>
                  {{item.isReview == 0 ? '待审核' : item.isReview == 1 ? '已审核': item.isReview == -1 ? '未通过' : ''}}
                </span>
                </p>
                <div class="center">
                  <router-link :to="{name: 'scenicDetail', params:{id: item.lanspaceNumber}}">
                  <van-row gutter="10">
                    <van-col span="8" class="left">
                      <img :src="item.logoUrl" alt="">
                    </van-col>
                    <van-col span="16" class="right">
                      <p class="van-ellipsis">
                        {{item.landspaceName}}
                      </p>
                      <p class="score">
                        <stars :rate="item.starLevel"></stars> {{item.starLevel}}分
                      </p>
                    </van-col>
                  </van-row>
                  </router-link>
                </div>
                <div class="comment">
                  <p>
                    {{item.commentText}}
                  </p>
                  <div v-if="item.haveimage == 1">
                    <img v-for="img in item.images" :src="img" alt="">
                  </div>
                </div>
                <div class="bottom clear">
                    <p>
                      <span @click="delComment(1,item.id, index)">删除</span>
                      <!-- <span>编辑</span> -->
                    </p>
                </div>
                <div class="separate"></div>
              </li>
            </ul>
          </van-tab>
          <van-tab title="资讯评论">
            <!--文章评论-->
            <ul class="listarticle">
              <li v-for="(item,index) in list">
                <p class="top">
                  {{item.createTime}}
                  <span>{{item.status}}</span>
                  <!-- <span>
                    <i class="iconfont icon-dianzan"></i>
                    10
                  </span> -->
                </p>
                <div class="center">
                  <router-link :to="{name: 'textDetail', params: {id: item.informationId}}">
                  <van-row gutter="10">
                    <van-col span="8" class="left">
                      <img :src="item.informationLogourl" alt="">
                    </van-col>
                    <van-col span="16" class="right">
                      <p class="">
                        {{item.informationTitle}}
                      </p>
                      <!-- <p class="coment">
                        评价：{{item.comment1}}
                      </p> -->
                    </van-col>
                  </van-row>
                  </router-link>
                </div>
                <div class="comment">
                  <p>
                    {{item.comment1}}
                  </p>
                </div>
                <div class="bottom clear">
                  <p>
                    <span @click="delComment(3,item.id, index)">删除</span>
                    <!-- <span>回复</span> -->
                  </p>
                </div>
                <div class="separate"></div>
              </li>
            </ul>
          </van-tab>
        </van-list>
      </van-tabs>
	</div>


      <!--右侧弹出层-->
      <van-popup v-model="searchShow"
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
             <van-col span="8" class="left">状态</van-col>
             <van-col span="16" class="right">
                <select v-model="statusType">
                  <template v-for="item in status">
                    <option :value="item.id">{{item.name}}</option>
                  </template>
                </select>
             </van-col>
           </van-row>
         </div>

          <div class="bottom">
              <button @click="init(statusType, false, true)">搜索</button>
              <button style="background-color: #C4C4C6; margin-top: .2rem" @click="init(null,true)">清空筛选条件</button>
          </div>
        </div>
      </van-popup>

    </div>
</template>

<script>
import { Dialog } from 'vant';
  import stars from 'com/common/rates'
    export default {
        name: "commentManage",
        components:{stars},
        data() {
          return {
            title: '点评管理',
            path: ['appServiceUser/grangeComment','appServiceUser/landspaceComment','appServiceUser/informationComment'],

            currentIndex: 0,
	        	show: false,
	        	searchShow: false,
	        	rows: 20,
	        	page: 1,
	        	list: [],
	        	loading: false,
            finished: false,
            total: 1,
            orderStatus: null,
            currentDate: new Date(),
            minDate: new Date(),
            searchData: {},

            timetitle: '选择时间',
            timeshow: false,
            overlay: true,
            value:'',

            timeType: 1,
            currentDatestart: new Date(),
            currentDate: new Date(),
            startDate: '开始时间',
            endDate: '结束时间',
            status: [
              { id:	null, name: '全部' },
              { id:	1, name: '待审核' },
              { id:	2, name: '已审核' },
            ],
            statusType: null,
          }
        },
        methods: {
          back(){
        	  this.$router.back(-1)
          },
          onClickLeft(){
             this.searchShow = false;
          },
          onClickRight(){
         	  this.searchShow=true;
          },
          cancel(){//取消订单
         	  this.show=true;
          },
          onClick(index, title) {
            this.currentIndex = index
    		    this.page = 1
            this.loading = false
            this.statusType = null
            this.title = '点评管理'
            this.finished = false
            this.list = []
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
                this.endDate = '结束时间'
              } else {
                this.endDate = this.formatDate(Date.parse(new Date(value))).split(' ')[0]
              }
            }
            this.timeshow = false
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
          init(statusType, isclick, isSearch){
            let self = this;
            setTimeout(() => {
              var parmas = {
                page: this.page,
                rows: this.rows
              }
              if(isclick){
                this.statusType = null
                this.title = '点评管理'
                parmas.page = 1
                this.page = 1
              }
              if(this.statusType == 1){
                this.title = '点评管理-待审核'
              } else if (this.statusType == 2){
                this.title = '点评管理-已审核'
              } else {
                this.title = '点评管理'
              }
              if(this.statusType){
                parmas.status = this.statusType - 1
              }
              if(isSearch){
                parmas.page = 1
                this.page = 1
              }
              const path = this.path[this.currentIndex]
              this.$http.post(path,parmas).then(res=>{
                if(res.msg == 'success'){
                  if(isclick || isSearch){
                    this.list = res.data.rows
                  } else {
                    this.list = this.list.concat(res.data.rows)
                  }
                  this.loading = false;
                  this.total = res.data.total
                  this.page = this.page + 1
                  if(this.searchShow){
                    this.searchShow = false;
                  }
                  // 数据全部加载完成
                  if (this.list.length == this.total || this.total == 0) {
                    this.finished = true;
                  }
                }else {
				          this.finished = true;
                }
			        }).catch(error=>{
				          this.finished = true;
              })
            }, 500);
          },
          delComment(type, id, index){
            Dialog.confirm({
              title: '删除操作',
              message: '是否确认删除该条评论, 删除后将无法找回评论内容'
            }).then(() => {
              this.$http.post('appServiceUser/delComment',{type, id}).then(res=>{
                if(res.msg == 'success'){
                  this.list.splice(index,1)
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
  .commentManage{
    .grangelist{
      li{
        padding: 0.2rem 0;
        .top{
          margin:0 0.2rem;
          border-bottom: 0.01rem solid #e6e6e6;
          padding: 0.2rem 0;
          span{
            float: right;
            color: #ff6500;
          }
        }
        .center{
          margin:0 0.2rem;
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
            padding-top: 0.3rem;
            p:first-child{
              color: black;
              font-size: 0.32rem;
            }
            p{
              color: grey;
              margin-bottom: 0.15rem;
            }
           .score{
             color: red;
           }
          }
        }
        .comment{
          margin:0 0.2rem;
          padding: 0.2rem;
          border: 0.01rem solid #e6e6e6;
          background-color: #faf9ff;
          border-radius: 0.1rem;
          div{
            margin-top: 0.2rem;
            img{
              width: 1.4rem;
              height: 1.4rem;
              margin-right: 0.2rem;
            }
          }
        }
        .bottom{
          margin:0 0.2rem;
          padding: 0.2rem;
          p{
            float: right;
            span{
              display: inline-block;
              width: 1.6rem;
              height: 0.55rem;
              border-radius: 0.55rem;
              border: 0.01rem solid #e6e6e6;
              text-align: center;
              line-height: 0.55rem;
            }
            span:nth-child(2){
              background-color: #06a3ea;
              color: white;
            }
          }
        }
        .separate{
          height: 0.28rem;
          background-color: #f1f0f6;
        }
      }
    }
    .listarticle{
      li{
        padding: 0.2rem 0;
        .top{
          margin:0 0.2rem;
          border-bottom: 0.01rem solid #e6e6e6;
          padding: 0.2rem 0;
          span{
            float: right;
            color: red;
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
              font-size: 0.28rem;
            }
            p{
              color: grey;
              margin-bottom: 0.15rem;
            }
            .coment{
              height: 1rem;
            }
          }
        }
        .comment{
          margin:0 0.2rem;
          padding: 0.2rem;
          border: 0.01rem solid #e6e6e6;
          background-color: #faf9ff;
          div{
            margin-top: 0.2rem;
            img{
              width: 1.4rem;
              height: 1.4rem;
            }
          }
        }
        .bottom{
          margin:0 0.2rem;
          padding: 0.2rem;
          p{
            float: right;
            span{
              display: inline-block;
              width: 1.6rem;
              height: 0.55rem;
              border-radius: 0.55rem;
              border: 0.01rem solid #e6e6e6;
              text-align: center;
              line-height: 0.55rem;
            }
            span:nth-child(2){
              background-color: #06a3ea;
              color: white;
            }
          }
        }
        .separate{
          height: 0.28rem;
          background-color: #f1f0f6;
        }
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
  //弹出层
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

</style>

<style lang="less" type="text/less">
.commentManage .header .van-hairline--bottom.van-nav-bar{
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 199!important;
}
  .commentManage .header{
    height: .91rem;
  }
  .commentManage .header .van-hairline--bottom.van-nav-bar .van-ellipsis.van-nav-bar__title{
      text-align: center
  }
</style>
