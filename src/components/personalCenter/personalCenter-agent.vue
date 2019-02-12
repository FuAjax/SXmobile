<template>
    <div class="personalCenter">
      <div class="top" v-if="!isapp">
        <van-nav-bar
          @click-left="onClickLeft"
          left-arrow>
          <!-- @click-right="onClickRight" -->
          <!-- <van-icon name="chat" slot="right" /> -->
        </van-nav-bar>
      </div>
      <div class="theme" @click="setting">
        <van-row gutter="15">
          <van-col span="6" style="text-align: right">
            <div class="portrait" :style="'background-image: url(' + userInfo.brokerHead + '); background-size:cover; background-position:50% 50%; '"></div>
          </van-col>
          <van-col span="18">
            <div class="right">
              <p>{{userInfo.brokerRealname}}</p>
              <p>欢迎来到三乡工程网</p>
            </div>
          </van-col>
          <i class="iconfont icon-gengduo1" style="position: absolute; top: 56%; right: .40rem; font-size: .36rem; color: #fff"></i>
        </van-row>
      </div>
      <div class="four clear">
        <div @click="manage(1)">
          <i class="iconfont icon-fangzi1" style="color: #f3af32"></i>
          <p>发布农庄</p>
        </div>
        <div @click="manage(2)">
          <i class="iconfont icon-ziyuan-gra" style="color:#f95f29 "></i>
          <p>发布农房</p>
        </div>
      </div>
      <div class="two">
        <div class="agent">
          <div class="farmhouse">
            <span></span>
            数据统计
          </div>
          <div class=" center clear">
            <div style="width: 100%;line-height: 1; padding-bottom: .3rem; margin-bottom: .3rem; border-bottom: 0.01rem #e6e6e6 solid; border-right: 0; font-size: .28rem">农房</div>
            <div @click="goin('farmhouseManage-agent')">
              <span>{{userInfo.farmhouseAdd||0}}</span>
              <p>今日上传</p>
            </div>
            <div @click="goin('farmhouseManage-agent', 3)"> 
              <span>{{userInfo.farmhousePass||0}}</span>
              <p>已通过</p>
            </div>
            <div @click="goin('farmhouseManage-agent', 2)">
              <span>{{userInfo.farmhouseNotPass||0}}</span>
              <p>未通过</p>
            </div>
          </div>
          <div class=" center clear">
            <div style="width: 100%;line-height: 1; padding-bottom: .3rem; margin-bottom: .3rem; border-bottom: 0.01rem #e6e6e6 solid; border-right: 0; font-size: .28rem">预约看房</div>
            <div @click="goin('myAppointment-agent')">
              <span>{{userInfo.bespeakAdd||0}}</span>
              <p>今日新增</p>
            </div>
            <div @click="goin('myAppointment-agent', 3)"> 
              <span>{{userInfo.bespeakStay||0}}</span>
              <p>待带看</p>
            </div>
            <div @click="goin('myAppointment-agent', 2)">
              <span>{{userInfo.bespeakPass||0}}</span>
              <p>已带看</p>
            </div>
          </div>
          <div class=" center clear">
            <div style="width: 100%;line-height: 1; padding-bottom: .3rem; margin-bottom: .3rem; border-bottom: 0.01rem #e6e6e6 solid; border-right: 0; font-size: .28rem">农庄</div>
            <div @click="goin('grangeManage-agent', 2)">
              <span>{{userInfo.grangeAdd||0}}</span>
              <p>今日上传</p>
            </div>
            <div @click="goin('grangeManage-agent', 4)"> 
              <span>{{userInfo.grangePass||0}}</span>
              <p>已通过</p>
            </div>
            <div @click="goin('grangeManage-agent', 3)">
              <span>{{userInfo.grangeNotPass||0}}</span>
              <p>未通过</p>
            </div>
          </div>
        </div>
      </div>
      <!--单元格-->
      <div class="bottom">
        <van-cell-group>
          <van-cell is-link @click="tabnav(1)">
            <template slot="title">
              <i class="iconfont icon-fangzi"></i>
              <span class="van-cell-text">在线买单查询 ({{userInfo.payOnlineCount || 0}})</span>
            </template>
          </van-cell>
          <van-cell is-link @click="tabnav(2)">
            <template slot="title">
              <i class="iconfont icon-fangzi"></i>
              <span class="van-cell-text">农房管理 ({{userInfo.farmhouseCount || 0}})</span>
            </template>
          </van-cell>
          <van-cell is-link @click="tabnav(3)">
            <template slot="title">
              <i class="iconfont icon-time"></i>
              <span class="van-cell-text">预约看房 ({{userInfo.bespeakCount || 0}})</span>
            </template>
          </van-cell>
          <van-cell is-link @click="tabnav(4)">
            <template slot="title">
              <i class="iconfont icon-zu"></i>
              <span class="van-cell-text">农庄管理 ({{userInfo.grangeCount || 0}})</span>
            </template>
          </van-cell>
        </van-cell-group>
      </div>
    </div>
</template>

<script>
  export default {
      name: "personalCenter",
      props:{
        isapp: true
      },
      data() {
          return {
            userInfo: {}
          }
      },
      methods: {
        init(){
          this.$http.post('appServiceAccount/getHome').then(res=>{
            if (res.msg == "success") {
              this.userInfo = res.data
            }
          })
        },
        onClickLeft(){
          this.$router.back(-1)
        },
        goin(path, tab){
          if(tab){
            this.$router.push({name: path, query: { tab }})
          } else {
            this.$router.push({name: path})
          }
        },
        manage(o){		// 管理bar
          if(localStorage.getItem('userInfo')){
            if(o == 1){		// 发布农庄
              this.$router.push({ name: 'IssueGrange-agent' })
            }
            if(o == 2){		//  发布农房
              this.$router.push({ name: 'issueFarm-agent' })
            }
          } else {
            this.$toast('请先登录');
          }
        },
        tabnav(o){		// 副操作bar
          if(localStorage.getItem('userInfo')){
            if(o == 1){		// 在线买单
              this.$router.push({name: 'paymentManage-agent'})
            }
            if(o == 2){		// 农房管理
              this.$router.push({name: 'farmhouseManage-agent'})
            }
            if(o == 3){		// 我的预约
              this.$router.push({name: 'myAppointment-agent'})
            }
            if(o == 4){		// 农庄管理
              this.$router.push({name: 'grangeManage-agent'})
            }
          } else {
            this.$toast('请先登录');
          }
        },
        setting(){
          this.$router.push({name: 'setting-agent'})
        }
      },
      computed: {},
      created: function () {
        this.init()
      },
      mounted: function () {
      },

  }
</script>
<style scoped lang="less" type="text/less">
  .personalCenter{
  	padding-bottom: 2rem;
    .top{
    	position: fixed;
    	top: 0;
    	left: 0;
    	width: 100%;
    	height: .9rem;z-index: 99;
      .van-nav-bar{
        background-color: transparent
      }
    }
    .theme{
      position: relative;
      padding: 1.3rem 0.2rem .5rem;
      background-color:  #ff6b3b;
      .portrait{
        display: inline-block;
        width: 1.36rem;
        height: 1.36rem;
        border-radius: 50%;
        border: solid #F9A177 .08rem;
        box-sizing: border-box;
        background-size: cover;
        background-position: center center;
      }
      .right{
        margin-top: 0.22rem;  
        p:first-child{
          font-size: 0.34rem;
          color: white;
          margin-bottom: 0.1rem;
        }
        p:nth-child(2){
          font-size: 0.28rem;
          color: white;
        }
      }
    }
    .four{
      padding: 0.3rem 0.2rem;
      div{
        width: 50%;
        box-sizing: border-box;
        float: left;
        text-align: center;
        position: relative;
      border-right: 0.01rem #e6e6e6 solid;
        i{
          font-size: 0.5rem;
        }
        p{
          margin-top: 0.14rem;
          color: grey;
          text-align: center;
          font-size: .22rem;
        }
        span{
          position: absolute;
          top: -0.15rem;
          right: 0.3rem;
          width: 0.3rem;
          display: inline-block;
          height: 0.3rem;
          border-radius: 50%;
          border: 0.03rem solid red;
          color: red;
        }
        &:last-child{
          border: none;
        }
      }
    }
    .two{
      background-color: #f6f5fb;
      padding: 0.001rem  0.3rem 0.2rem;
      .farmhouse{
        margin-top: 0.2rem;
        font-size: 0.28rem;
        font-weight: bold;
        line-height: 2;
        span{
          display: inline-block;
          width: 0.05rem;
          height: 0.3rem;
          background-color: #ff6500;
          vertical-align: middle;
        }
      }
      .center{
      	border-radius: .1rem;
      	box-shadow: 0 0 .06rem #CECBCE;
        background-color: white;
        padding: 0.3rem 0;
        margin-top: 0.2rem;
        div:last-child{
          border: none;
        }
        div{
          width: 25%;
          float: left;
          text-align: center;
          position: relative;
          border-right: 0.01rem #e6e6e6 solid;
          box-sizing: border-box;
          p{
            margin-top: 0.06rem;
            color: grey;
          text-align: center; 
          font-size: .22rem;
          }
          span{
          	font-size: .32rem;
          }
        }
      }
    }
    .bottom{
        font-size: 0.3rem;
      i{
        font-size: 0.34rem;
        padding-right: .14rem;
      }
    }
  }
  .personalCenter .two .agent .center div{
    width: 33.333%
  }
</style>
<style type="text/css">
	.personalCenter .van-hairline--bottom::after{
		border: 0;
	}
	.personalCenter .van-cell.van-cell--clickable.van-hairline{
		padding: .3rem;
	}
</style>