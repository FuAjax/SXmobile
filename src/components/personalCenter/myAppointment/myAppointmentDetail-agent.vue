<template>
    <div class="myOrdersAll">
      <div class="head">
        <van-nav-bar title="预约看房详情"
          @click-left="back"
          left-arrow>
        </van-nav-bar>
      </div>
      <div style="overflow: hidden;">
        <ul class="list">
          <li>
            <div class="center">
              <van-row gutter="10">
                <van-col span="8" class="left">
                  <div style="width: 100%; position: relative;">
                    <img :src=item.farmhouseLogo alt="">
                    <p>{{item.type == 1 ? '已带看' : '未带看'}}</p>
                  </div>
                </van-col>
                <van-col span="16" class="right">
                  <p class="van-ellipsis" style="font-size: .3rem">
                    {{item.farmhouseTitle}}
                  </p>
                  <p class="van-ellipsis">
                    可租{{item.farmhouseYear}}年{{'/' + item.farmhouseFloor}}层{{'/' + item.farmhouseBedroom}}室{{'/' + item.farmhouseArea}}平
                    <span v-if="item.farmhouseYear">¥{{item.farmhouseYear}}万元/年</span>
                  </p>
                  <p class="van-ellipsis">
                    {{item.farmhouseAreaName}}-{{item.farmhouseStreetName}}　　{{item.farmhouseLandspaceName}}
                  </p>
                  <p class="van-ellipsis">
                    {{item.farmhouseCharacteristics}}
                  </p>
                </van-col>
              </van-row>
            </div>
            <div class="separate"></div>
          </li>
        </ul>
        <div class="farmhouseDetail">
          <div class="farmhouseDetail-tit">预约信息</div>
          <div class="farmhouseDetail-tab">
            <div class="table">
              <div class="table-l">称呼</div>
              <div class="table-r">{{item.userName}}</div>
            </div>
            <div class="table">
              <div class="table-l">手机号码</div>
              <div class="table-r">{{item.userMoblie}}</div>
            </div>
            <div class="table">
              <div class="table-l">期望看房日期</div>
              <div class="table-r">{{item.day}}</div>
            </div>
            <div class="table">
              <div class="table-l">期望看房时间</div>
              <div class="table-r">{{item.time}}</div>
            </div>
            <div class="table">
              <div class="table-l">看房要求</div>
              <div class="table-r">{{item.bespeakRequire}}</div>
            </div>
          </div>
          <button class="btn" @click="detail()">{{item.type == 2 ? '添加看房记录' : '查看看房记录'}}</button>
        </div>
      </div>
    </div>
</template>

<script>
import noList from "../../common/noList";
    export default {
        name: "myOrdersAll",
        components: {
          noList
        },
        data() {
          return {
            item: {}
          }
        },
        methods: {
          init(id){
            this.$http.post('appServiceAccount/getBespeak',{id}).then(res=>{
              if(res.msg == 'success'){
                this.item = res.data
              }
            })
          },
          back(){
        	  this.$router.back(-1)
          },
          onClickLeft(){
             this.searchShow = false;
          },
          onClickRight(){
         	  this.searchShow=true;
          },
          detail(){
            this.$router.push({name: 'myAppointmentDetail-detail-agent', query: { id: this.id}})      
          }
        },
        computed: {},
        created: function () {
          if(this.$route.query.id){
            this.id = this.$route.query.id
            this.init(this.$route.query.id)
          }
        },
        mounted: function () {},

    }
</script>
<style scoped lang="less" type="text/less">
  li{
    padding: 0.2rem 0 0;
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
      padding: 0 0 0.2rem;
      .left{
        height: 1.6rem;
        p{
          position: absolute;
          width: 100%;
          height: 0.4rem;
          background-color: rgba(0, 0, 0, 0.5);
          bottom: 0;
          color: white;
          line-height: 0.4rem;
          text-indent: 0.2rem;
          text-align: center
        }
        img{
          display: block;
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
    .people{
      margin:0 0.2rem;
      border-bottom: 0.01rem solid #e6e6e6;
      padding: 0.2rem 0;
      img{
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        vertical-align: middle;
      }
      span{
        width: 1.2rem;
        height: 0.4rem;
        background-color:#fff1e8;
        display: inline-block;
        border-radius: 0.4rem;
        text-align: center;
        line-height: 0.4rem;
        vertical-align: middle;
        color: #ff6c1a;
      }
      i{
        color: #01b436;
      }
    }
    .bottom{
      margin:0 0.2rem;
      padding: 0.2rem 0;
      position: relative;
      .aspan{
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -0.25rem;
        span{
          display: inline-block;
          padding: 0 .2rem;
          box-sizing: border-box;
          min-width: 1.25rem;
          height: 0.5rem;
          border: 0.01rem solid grey;
          text-align: center;
          line-height: 0.5rem;
          border-radius: 0.5rem;
        }
      }
    }
    .separate{
      height: 0.28rem;
      background-color: #f1f0f6;
    }
  }
  
  .farmhouseDetail{
    padding: .3rem;
    box-sizing: border-box;
    .farmhouseDetail-tit{
      font-size: .32rem;
      padding: 0 0 .2rem;
    }
  }
  .table{
    font-size: 0;
    padding: .1rem 0;
    .table-l{
      font-size: .26rem;
      width: 40%;
      display: inline-block;
      color: #686868;
      vertical-align: top;
    }
    .table-r{
      font-size: .26rem;
      width: 60%;
      display: inline-block;
      color: #300005;
      vertical-align: top;
      padding-right: .08rem;
      box-sizing: border-box;
    }
  }
  .btn{
    width: 100%;
    margin: 2.5rem 0;
    line-height: .92rem;
    background: #FF9900;
    font-size: .32rem;
    color: #fff;
    border-radius: .06rem
  }
</style>

<style>

  .myOrdersAll .van-nav-bar__title {
    text-align: center
  }
</style>
