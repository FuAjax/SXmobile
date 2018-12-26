<template>
    <div class="inntoRepay">
      <div class="top">
        <van-nav-bar title="我的订单"  left-arrow>
        </van-nav-bar>
      </div>
      <div class="state">
        订单状态：付款已超时，该订单已失效
        <p>
          <span>重新预订</span>
        </p>
      </div>
      <div class="order">
        <p>订单状态</p>
        <p>订单状态 支付超时，订单失效</p>
      </div>
      <div class="separate"></div>
      <div class="number">
        <p class="top clear">
          订单号：{{orderNo}}  【住宿】
          <span> {{outTime}}</span>
        </p>
        <div class="imgcenter">
          <van-row gutter="20">
            <van-col span="8" class="left">
              <img :src=imgSrc alt="">
            </van-col>
            <van-col span="16" class="right">
              <p>商务大床房</p>
              <p>入住：{{checkinTime}}</p>
              <p>离店：{{checkoutTime}}</p>
              <!--<p>房间数量：1间</p>-->
            </van-col>
          </van-row>
        </div>
      </div>
      <div class="detail">
        <p>黄陂区 米兰山 景区 酒店  一室40m 大床</p>
        <p>
          <van-row gutter="5">
            <van-col span="4">
              地址
            </van-col>
            <van-col span="20">
              地址：武汉市洪山区44号
            </van-col>
          </van-row>
        </p>
        <p>
          <van-row gutter="5">
            <van-col span="4">
              电话
            </van-col>
            <van-col span="20">
              027—3123213
            </van-col>
          </van-row>
        </p>
        <p>
          <van-row gutter="5">
            <van-col span="4">
              营业时间
            </van-col>
            <van-col span="20">9:00  -   24:00
            </van-col>
          </van-row>
        </p>
      </div>
      <div class="separate"></div>
      <div class="detail" style="border-bottom: 0.01rem solid #e6e6e6">
        <p>订单总额</p>
        <p>
          <van-row gutter="5">
            <van-col span="4">
              原价
            </van-col>
            <van-col span="20">
              <span>￥0</span>
            </van-col>
          </van-row>
        </p>
        <p>
          <van-row gutter="5">
            <van-col span="4">
              订单总价
            </van-col>
            <van-col span="20">
              <span>￥{{orderPrice}}</span>
            </van-col>
          </van-row>
        </p>
      </div>
      <div class="detail">
        <p>入住人信息
          <!--<span>共{{stayNumber}}人</span>-->
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
      <div class="separate"></div>
      <div class="bottom">
        <p>交易规则</p>
        <p>退改政策</p>
        <div>
          {{drawback}}
        </div>
        <p>
          如与商家产生争议，请致电客服电话：（027—31212313）
        </p>
      </div>
    </div>
</template>

<script>
  import methods from './m/repay'
    export default {
        name: "inntoRepay",
        data() {
            return {}
        },
        methods: methods,
        computed: {},
        created: function () {
          this.init()
        },
        mounted: function () {
        },

    }
</script>

<style scoped lang="less" type="text/less">
  .inntoRepay{
    .state{
      padding: 0.2rem;
      border-bottom: 0.01rem #e6e6e6 solid;
      position: relative;
      span{
        color: red;
      }
      p{
        vertical-align: top;
        text-align: center;
        line-height: 0.5rem;
        position: absolute;
        top: 50%;

        right: 0;

        margin-top: -0.25rem;
        margin-right: 0.2rem;
        span{
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
    .order{
      margin: 0 0.2rem;
      padding: 0.2rem 0;
      p:first-child{
        font-size: 0.24rem;
        font-weight: bold;
      }
      p{
        margin-bottom: 0.15rem;
      }
    }
    .separate{
      height: 0.28rem;
      background-color: #f1f0f6;
    }
    .number{
      margin: 0 0.2rem;
      padding: 0.2rem 0;
      .top{
        padding: 0.2rem 0;
        border-bottom: 0.01rem solid #e6e6e6;
        span{
          color: #ff6500;
          float: right;
        }
      }
      .imgcenter{
        padding: 0.2rem 0;
        border-bottom: 0.01rem solid #e6e6e6;
        .left{
          height: 1.6rem;
        }
        .right{
          p:first-child{
            font-size: 0.24rem;
            font-weight: bold;
            color: black;
          }
          p{
            color: grey;
            margin-bottom: 0.18rem;
          }
        }
      }
    }
    .bottom{
      p:first-child{
        font-size: 0.24rem;
        font-weight: bold;
      }
      p:nth-child(2){
        font-weight: bold;
      }
      div{
        color: grey;
      }
      p,div{
        padding: 0.1rem 0.2rem;
      }
    }
    .detail{
      margin: 0 0.2rem;
      padding: 0.2rem 0;
      border-bottom: 0.01rem #e6e6e6 solid;
      p:first-child{
        font-size: 0.24rem;
        font-weight: bold;
        span{
          color: #ff6500;
        }
      }
      p{
        span{
          color: red;
        }
        margin-bottom: 0.2rem;
      }
    }
  }
</style>
