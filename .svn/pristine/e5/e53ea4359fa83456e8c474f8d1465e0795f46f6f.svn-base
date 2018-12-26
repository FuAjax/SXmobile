<template>
  <div>
    <div class="topBar">
      <Header :title='title' :color='color'/>
    </div>
    <div class="intoAffirm">
      <div class="imgcenter">
        <van-row gutter="20">
          <van-col span="8" class="left">
            <img v-if="businessLogoUrl" :src="businessLogoUrl" alt="">
          </van-col>
          <van-col span="16" class="right">
            <p>商家已接收订单，请尽快支付定金</p>
            <!--<p>入住：{{checkinTime}}</p>-->
            <!--<p>离店：{{checkoutTime}}</p>-->
            <!--<p>房间数量：1间</p>-->
          </van-col>
        </van-row>
      </div>
      <div class="time">
        <p>请您于</p>
        <p>{{outTime}}</p>
        <p>前完成支付，超时。订单会</p>
        <p>自动取消</p>
      </div>
      <div class="blank"></div>
      <div class="number">
        <p class="top">
          订单号：{{orderNo}} 【住宿】
          <!--<span> {{outTime}}</span>-->
        </p>
      </div>
      <div class="detail">
        <p>入住信息
          <!--<span>共{{stayNumber}}人</span>-->
        </p>
        <p>
          <van-row gutter="5">
            <van-col span="4">
              入住时间
            </van-col>
            <van-col span="20">
              <div>入住：{{checkinTime}}</div><br>
              <div>离店：{{checkoutTime}}</div>
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
        <p>入住人信息
          <!--<span>共22人</span>-->
        </p>
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
      </div>
      <div class="detail" style="border-bottom: 0.01rem solid #e6e6e6">
        <p>费用信息</p>
        <p>
          <van-row gutter="5">
            <van-col span="4">
              房费总额
            </van-col>
            <van-col span="20">
              <span>￥{{orderPrice}}</span>
            </van-col>
          </van-row>
        </p>
      </div>
      <div class="blank"></div>
      <div class="bottom1">
        <p>退改政策</p>
        <van-row gutter="3">
          <van-col span="4">
            退改政策：
          </van-col>
          <van-col span="15">
            <span>{{drawback}}</span>
          </van-col>
        </van-row>
        <p>
          如与商家产生争议，请致电客服电话：（027—31212313）
        </p>
      </div>

    </div>
    <!--底部-->
    <div class="bottom clear">
      <div>
        <span>总价</span>
        <span class="price"> ￥{{orderPrice}}</span>
      </div>
      <p>
        <!--<button @click="detail">明细 <i class="iconfont icon-shangsanjiaoxiangshangmianxing"></i></button>-->
        <span @click="pay">
          在线支付
        </span>
      </p>
    </div>

  </div>
</template>

<script>
  import methods from './m/methods'
  import Header from '../../../common/Header'
  export default {
    name: "intoAffirm",
    data() {
      return {
        stayNumber: "",
        roomName: '',
        orderPrice: '',
        outTime: '',
        orderNo: '',
        occupantsName: '',
        occupantsMobile: '',
        occupantsIdcard: '',
        drawback: '',
        checkoutTime: '',
        checkinTime: "",
        businessLogoUrl: "",
        title:"待支付"
      }
    },
    methods: methods,
    created: function () {
      this.init()
    },
    components:{
      Header
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";

  //尾部
  .clear {
    background-color: #fff;
    padding-left: 0.32rem;
    /*position: fixed;*/
    left: 0;
    bottom: 0;
    display: flex;
    height: 1rem;
    font-size: 0.25rem;
    border-top: 1px solid @bc;
    div {
      flex: 1;
      float: left;
      height: 1rem;
      line-height: 1rem;
      /*padding-left: 0.3rem;*/
      .price {
        color: red;
        font-size: 0.25rem;
        font-weight: 600;
      }
    }
    p {
      float: right;

      span {
        /*flex: 1;*/
        padding: 0 0.76rem;
        width: 74%;
        display: inline-block;
        height: 1rem;
        background-color: #ff6500;
        text-align: center;
        line-height: 1rem;
        color: white;
        font-size: 0.24rem;
        float: right;
      }
      button {
        flex: 1;
        font-size: 0.25rem;
        color: #616163;
        background-color: white;
        /*padding-right: 0.3rem;*/
        i {
          float: right;
          margin-top: 0.05rem;
          font-size: 0.12rem;
          /*margin-right: 0.3rem;*/
        }
      }
    }
  }

  .intoAffirm {
    /*padding-bottom: 0.2rem;*/
    margin-top: 0.92rem;
    min-height: 6rem;
    overflow: auto;
    .state {
      padding: 0.32rem;
      border-bottom: 0.01rem #e6e6e6 solid;
      position: relative;
      span {
        color: red;
      }
      p {
        vertical-align: top;
        text-align: center;
        line-height: 0.5rem;
        position: absolute;
        top: 50%;

        right: 0;

        margin-top: -0.25rem;
        margin-right: 0.2rem;
        span {
          display: inline-block;
          color: white;
          width: 1.7rem;
          height: 0.5rem;
          border: 0.01rem solid #e6e6e6;
          border-radius: 0.5rem;
          background-color: #ff6500;
        }
      }
    }
    .order {
      padding: 0.2rem 0.32rem;
      p:first-child {
        font-size: 0.3rem;
        font-weight: bold;
      }
      p {
        margin-bottom: 0.15rem;
      }
    }
    .separate {
      height: 0.28rem;
      background-color: #f1f0f6;
    }
    .number {
      /*padding: 0.2rem 0.32rem;*/
      .top {
        padding: 0.2rem 0.32rem;
        border-bottom: 0.01rem solid #e6e6e6;
        span {
          color: #ff6500;
          float: right;
        }
      }

    }
    .bottom1 {
      padding: 0.2rem 0.32rem;
      padding-top: 0.2rem;
      /*padding-bottom: 0.39rem;*/
      /*min-height: 3rem;*/
      overflow: auto;
      p:first-child {
        font-size: 0.3rem;
        font-weight: bold;
        margin-bottom: 0.2rem;
      }
      p:nth-child(3) {
        font-weight: bold;
        margin-top: 0.2rem;
      }
      div {
        color: grey;
      }
      p, div {
        /*padding: 0.1rem 0.2rem;*/
      }
    }
    .imgcenter {
      padding: 0.2rem 0.32rem;
      border-bottom: 0.01rem solid #e6e6e6;
      .left {
        height: 1.6rem;
      }
      .right {
        p:first-child {
          font-size: 0.3rem;
          font-weight: bold;
          color: #fc4211;
        }
        p {
          color: grey;
          margin-bottom: 0.18rem;
        }
      }
    }
    .detail {
      padding: 0.2rem 0.32rem;
      border-bottom: 0.01rem #e6e6e6 solid;
      p:first-child {
        font-size: 0.3rem;
        font-weight: bold;
        span {
          color: #ff6500;
        }
      }
      p {
        span {
          color: red;
        }
        margin-bottom: 0.2rem;
      }
    }
    .time {
      padding: 0.2rem 0.32rem;
      min-height: 0.3rem;
      overflow: auto;
      p {
        float: left;
        color: #959597;
        font-size: 0.23rem;
        &:nth-child(2) {
          color: #f89963;
          margin: 0 0.13rem;
        }
      }
    }
  }

  .blank {
    .jg()
  }
</style>
