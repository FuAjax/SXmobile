<template>
    <div id="grangeManage" class="grangeManage">
    <div class="head">
      <van-nav-bar :title='title'
                   @click-left="back"
                   @click-right="onClickRight"
                   right-text="筛选" left-arrow>
      </van-nav-bar>
    </div>

    <div style="padding-top: .91rem;">
      <van-list
        v-model="loading"
        :finished="finished"
        @load="init"
        >
        <!--列表-->
        <ul class="list" v-if="list.length > 0">
          <li v-for="(item, index) in list">
            <p class="top">
              {{item.createTime}}
              <span>
                  {{item.auditingStauts == -1 ? '审核未通过' : item.auditingStauts == 1 ? '已审核' : '待审核'}}
                </span>
            </p>
            <div class="center">
              <router-link :to="{name: 'grangedetail', params: { id: item.grangeNumber }}">
              <van-row gutter="20">
                <!--图-->
                <van-col span="8">
                  <div class="left">
                    <img :src="item.logoUrl" alt="">
                  </div>
                </van-col>
                <!--右边文字-->
                <van-col span="16">
                  <div class="right">
                    <!--风景区-->
                    <div class="mulan">
                      <span class="lake">{{item.grangeName}}</span>
                    </div>
                    <!--评分-->
                    <div class="grade">
                      {{item.managementClass}}
                      <p class="much">
                        <span>￥{{item.personConsumption}}</span>起
                      </p>
                    </div>
                    <!--定位-->
                    <div class="position">
                      <i class="iconfont icon-dizhi"></i>{{item.address}}
                    </div>
                    <!--数据-->
                    <div class="data">
                      <span v-for="tag in item.plays">{{tag}}</span>
                    </div>
                  </div>
                </van-col>
              </van-row>
              </router-link>
            </div>
            <div class="bottom">
              <stars :rate="item.totalMark"></stars>
              <span class="four">{{item.totalMark}}分</span> |
              {{item.totalAppraisalnumber}}条评论
              <!-- <p class="right">
                  <span>
                  删除
                </span>
                <span class="fix">
                  修改信息
                </span>
              </p> -->
            </div>
            <div class="separate"></div>
          </li>
        </ul>
        <template v-if="list.length == 0 && finished">
          <noList :detail='details'/>
        </template>
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
            <button style="background-color: #C4C4C6; margin-top: .2rem" @click="init(null)">清空筛选条件</button>
          </div>
        </div>
      </van-popup>
    </div>
</template>

<script>
  import noList from "../../common/noList";
  import stars from 'com/common/rates'
    export default {
        components:{
          stars,
          noList
        },
        name: "grangeManage",
        data() {
            return {
              show:false,
              details: '农庄',

              loading: false,
              finished: false,

              rows: 20,
              page: 1,

              value: '',

              list: [],

              title: '我的农庄'
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
          init(info){
            setTimeout(() => {
              var parmas = { page: this.page, rows: this.rows }
              if(info && info !== ''){
                this.page = 1
                parmas.page = 1
                parmas.grangeinfo = info
                this.show=false
                this.title = '我的农庄-查询结果'
              }
              if(info === null){
                this.page = 1
                parmas.page = 1
                this.show=false
                this.title = '我的农庄'
              }
              this.$http.post('appServiceUser/mygrange',parmas).then(res=>{
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
            }, 500)
          }
        },
        computed: {},
        created: function () {

        },
        mounted: function () {}
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
  .grangeManage{
    .list{
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
            width: 2.15rem;
            height: 1.58rem;
          }
          .right{
            div{
              margin-bottom: 0.1rem;
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
              .much{
                float: right;
                display: inline-block;
                font-size: 0.2rem;
                vertical-align: middle;
                margin-left: 0.8rem;
                span{
                  color: #e90009;
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
            }
            .data{
              span{
                font-size: 0.18rem;
                padding: 0 0.1rem;
                border-radius: 0.05rem;
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
        }
        .bottom{
          margin:0 0.2rem;
          padding: 0.2rem 0;
          color: grey;
          .four{
            color: #ff6500;
          }
          .right{
            float: right;
            span{
              width: 1.2rem;
              height: 0.4rem;
              border: 0.01rem solid #e6e6e6;
              display: inline-block;
              border-radius: 0.4rem;
              text-align: center;
              line-height: 0.4rem;
              vertical-align: middle;
            }
            .fix{
              background-color: #00a0e9;
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
</style>
<style>
  #grangeManage .van-hairline--bottom.van-nav-bar .van-ellipsis.van-nav-bar__title{
      text-align: center
  }
</style>
