<template>
  <div>
    <div class="topBar">
      <Header :title='title' :color='color'/>
    </div>
    <div class="header">
      <div class="top">
        <div class="left">
          <img :src="businessLogoUrl" alt="" onerror='this.src="http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg" '/>
        </div>
        <div class="right">
          <p>{{p}}</p>
          <div class="button">
            <div class="online">在线客服</div>
            <div class="number">客服电话:{{number}}</div>
          </div>
        </div>
      </div>
      <div class="bot">
        {{bot}}
      </div>
    </div>
    <div class="blank"></div>
    <div class="content">
      <div class="livenum">订单号： {{orderNo}} 【住宿】</div>
      <div class="detail">
        <p class="title">入住信息</p>
        <p>
          <van-row gutter="5">
            <van-col span="4" class="left">
              入住时间
            </van-col>
            <van-col span="20" class="right">
              {{checkinTime}} 入住
              {{checkoutTime}} 退房
            </van-col>
          </van-row>
        </p>
        <p>
          <van-row gutter="5">
            <van-col span="4">
              农庄信息
            </van-col>
            <van-col span="20">
              {{businessName}}
            </van-col>
          </van-row>
        </p>
        <p>
          <van-row gutter="5">
            <van-col span="4">
              房间信息
            </van-col>
            <van-col span="20">
              {{roomName}}
            </van-col>
          </van-row>
        </p>
      </div>
      <div class="detail">
        <div class="permes">
          <p class="title person">入住人信息</p>
          <!--<div>共{{stayNumber}}人</div>-->
        </div>
        <ul>
          <p>
            <van-row gutter="5">
              <van-col span="4">
                入住人
              </van-col>
              <van-col span="20">
                {{occupantsName}}
              </van-col>
            </van-row>
          </p>
          <p>
            <van-row gutter="5">
              <van-col span="4">
                证件号
              </van-col>
              <van-col span="20">
                {{occupantsIdcard}}
              </van-col>
            </van-row>
          </p>
          <p>
            <van-row gutter="5">
              <van-col span="4">
                手机号
              </van-col>
              <van-col span="20">
               {{occupantsMobile}}
              </van-col>
            </van-row>
          </p>
        </ul>

      </div>
      <div class="detail">
        <p class="title">费用信息</p>
        <p>
          <van-row gutter="5">
            <van-col span="4">
              房费金额
            </van-col>
            <van-col span="20" class="price">
              ￥{{orderPrice}}
            </van-col>
          </van-row>
        </p>
      </div>
    </div>
    <div class="bottom">
      <p>退改政策</p>
      <van-row gutter="5">
        <van-col span="4" class="left">
          退改政策
        </van-col>
        <van-col span="20" class="right">
          {{drawback}}
        </van-col>
      </van-row>
      <p>
        如与商家产生争议，请致电客服电话：（027-65770321）
      </p>
    </div>
  </div>
</template>

<script>
  import Header from '../../../common/Header2'
  import methods from './m/intomethods'

  export default {
    name: "inntoConfirm",
    data() {
      return {
        url: "http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg",
        number: "027-65770321",
        bot: "客服确认平均时间5分钟，确认成功后，我们会发送短信或邮件提醒您支付定金",
        p: "订单提交成功，请等待客户与商户进行确认",
        live: "123987564",
        orderPrice:'',
        drawback:'',
        orderNo:'',
        occupantsMobile:'',
        occupantsName:'',
        roomName:'',
        checkinTime:'',
        checkoutTime:'',
        businessLogoUrl:'',
        businessName:'',
        stayNumber:'',
        timer: null,
        timer2:null,
        myVar:'',
        title:'待确认'
      }
    },
    components: {
      Header
    },
    methods: methods,
    created:function () {
      this.init();
      this.publicBusi()
    },
    beforeDestroy(){
      if(this.myVar){
        clearInterval(this.myVar);
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";

  .header {
    margin-top: 0.92rem;
    min-height: 2.16rem;
    .bt();
    padding: 0.4rem 0.3rem;
    padding-top: 0;
    .top {
      min-height: 1.35rem;
      overflow: auto;
      padding-bottom: 0.12rem;
      .bt();
      .left {
        float: left;
        width: 1.36rem;
        height: 1.2rem;
        margin-right: 0.2rem;

        img {
          width: 100%;
          height: 100%;
        }
      }
      .right {

        p {
          font-size: 0.28rem;
          color: #fb0200;
          font-weight: 600;
          line-height: 0.45rem;
        }
        .button {
          .online {
            padding: 0.15rem 0.32rem;
            font-size: 0.26rem;
            color: #fff;
            background-color: #ff6400;
            float: left;
            border-radius: 2.25rem;
            margin-top: -0.19rem;
            margin-right: 0.37rem;
          }
          .number {
            font-size: 0.25rem;
            margin-left: 0.39rem;
            color: #000002;
            margin-top: 0.33rem;
          }
        }
      }
    }
    .bot {
      font-size: 0.26rem;
      line-height: 0.46rem;
      color: #6d6c71;
      margin-top: 0.19rem;

    }
  }

  .blank {
    .jg()
  }

  .content {
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    .livenum {
      height: 0.87rem;
      line-height: 0.87rem;
      font-size: 0.24rem;
      .hc();
      .bt();
    }
    .detail {
      /*margin: 0 0.2rem;*/
      padding: 0.2rem 0;
      border-bottom: 0.01rem #e6e6e6 solid;
      .title {
        font-size: 0.24rem;
        .tt();
        /*font-weight: 500;*/
        color: #030305;
        float: inherit;
      }
      p {
        font-size: 0.26rem;
        .hc();
        span {
          color: red;
        }
        .right {
          color: #373739;
        }
        .price {
          color: red;
          font-weight: 600;
        }
        margin-bottom: 0.2rem;
      }
      ul {
        padding-top: 0.2rem;
        .bt();
        &:last-child {
          border: none;
        }
      }
      .permes{
        height: 0.453rem;
        .person{
          float: left;
          margin-right: 0.16rem;
        }
        div{
          color: #ff6400;
          margin-top: 0.1rem;
          width: 0.95rem;
          float: left;
        }
      }

    }
    .person {
      margin-bottom: 0;
      p{

      }
    }
  }

  .bottom {
    padding: 0.2rem 0;
    padding-left: 0.13rem;
    padding-right: 0.13rem;
    font-size: 0.25rem;
    p:first-child {
      .tt();
      float: inherit;
    }
    p:last-child(2) {
      font-weight: bold;
      color: #333335;
    }
    div {
      color: grey;
    }
    p, div {
      padding: 0.1rem 0.2rem;
    }
    .right {
      line-height: 0.52rem;
    }
    .left {
      margin-top: 0.1rem;
    }
  }


</style>
