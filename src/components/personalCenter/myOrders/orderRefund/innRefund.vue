<template>
    <div class="innRefund">
      <div class="top">
        <van-nav-bar title="订单详情"  left-arrow>
        </van-nav-bar>
      </div>
      <div class="state">
      <span>订单状态：</span> 已取消/已退款
      </div>
      <div class="detail">
        <p>退款详情</p>
        <p>
          <van-row gutter="5">
            <van-col span="4">
              取消原因
            </van-col>
            <van-col span="20">
              行程改变
            </van-col>
          </van-row>
        </p>
        <p>
          <van-row gutter="5">
            <van-col span="4">
              消费金额
            </van-col>
            <van-col span="20">
             <span>￥0</span>
            </van-col>
          </van-row>
        </p>
        <p>
          <van-row gutter="5">
            <van-col span="4">
              退款金额
            </van-col>
            <van-col span="20">
              <span>￥328</span>
            </van-col>
          </van-row>
        </p>
      </div>
      <div class="date">
        您是在2018-7-29 14:22:33 取消本订单，将退还全部定金，
        退款到账时间由你付订金方式，支付宝为1个工作日到账，网银，
        信用卡为1-7工作日到账
      </div>
      <div class="separate"></div>
      <div class="number">
        <p class="top clear">
          订单号：123456  【住宿】
          <span> 2018-06-27 15:11:24</span>
        </p>
        <div class="imgcenter">
          <van-row gutter="20">
            <van-col span="8" class="left">
              <img :src=imgSrc alt="">
            </van-col>
            <van-col span="16" class="right">
              <p>商务大床房</p>
              <p>入住：2018-9-26(周六)</p>
              <p>离店：2018-9-26(周六)</p>
              <p>房间数量：1间</p>
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
             <span>￥328</span>
            </van-col>
          </van-row>
        </p>
      </div>
      <div class="detail">
        <p>入住人信息
          <span>共2人</span>
        </p>
        <p>
          <van-row gutter="10">
            <van-col span="8">入住人</van-col>
            <van-col span="8">证件</van-col>
            <van-col span="8">手机号</van-col>
          </van-row>
        </p>
        <p>
          <van-row gutter="10">
            <van-col span="8">1111</van-col>
            <van-col span="8">222222222</van-col>
            <van-col span="8">888888888888888</van-col>
          </van-row>
        </p>
      </div>
      <div class="separate"></div>
      <div class="bottom">
        <p>交易规则</p>
        <p>退改政策</p>
        <div>
       入住前一天 （9月29日） 12：00前退订，可获得100%退款，预期不可取消/变更，如未入住，将扣除全额房费（取当前产品退款规则，并获取实际日期）
        </div>
        <p>
          如与商家产生争议，请致电客服电话：（027—31212313）
        </p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "innRefund",
        data() {
            return {
              imgSrc:'../../../../static/images/slide_01.jpg',
            }
        },
        methods: {},
        computed: {},
        created: function () {
        },
        mounted: function () {
        },

    }
</script>

<style scoped lang="less" type="text/less">
  .innRefund{
    .state{
      padding: 0.2rem;
      border-bottom: 0.01rem #e6e6e6 solid;
      span{
        color: grey;
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
    .date{
      padding: 0.2rem;
      color:grey;
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
  }
</style>
