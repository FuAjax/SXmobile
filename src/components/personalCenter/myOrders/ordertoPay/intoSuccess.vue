<template>
  <div class="doit">
    <div class="topBar">
      <Header :title='title'/>
    </div>
    <div style="width:100%; height:.92rem;"></div>
    <div class="top">
      <img src="./../../../../assets/doit.png" alt="">
      <div class="imgRight">
        <p>恭喜, 预定成功！</p>
      </div>
    </div>
    <div class="blank"></div>
    <div class="number">
      <p class="top2">
        订单号：{{order.orderNo}}【住宿】
        <span> {{order.orderTime}}</span>
      </p>
    </div>
    <div class="intoAffirm">
      <div class="imgcenter">
        <van-row gutter="20">
          <van-col span="8" class="left">
            <img v-if="" :src="order.businessLogoUrl" alt="">
          </van-col>
          <van-col span="16" class="right">
            <p>{{order.porductName}}</p>
            <p>{{order.userTime}}</p>
            <p>房间数量：{{order.orderNumber}}间</p>
            <p>订单金额：￥{{order.orderPrice}}</p>
          </van-col>
        </van-row>
      </div>


      <div class="detail">
        <p>
          <span></span>
        </p>
        <p>
          <van-row gutter="5">
            <van-col span="4">
              地址
            </van-col>
            <van-col span="20">
              <div>{{order.address}}</div>
            </van-col>
          </van-row>
        </p>
        <p>
          <van-row gutter="5">
            <van-col span="4">
              电话
            </van-col>
            <van-col span="20">
              {{order.contactMobile}}
            </van-col>
          </van-row>
        </p>
        <p>
          <van-row gutter="5">
            <van-col span="4">
              营业时间
            </van-col>
            <van-col span="20">
              {{order.openTime}}
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
              {{order.occupantsName}}
            </van-col>
          </van-row>
        </p>
        <p>
          <van-row gutter="5">
            <van-col span="4">
              证件号
            </van-col>
            <van-col span="20">
              {{order.occupantsIdcard}}
            </van-col>
          </van-row>
        </p>
        <p>
          <van-row gutter="5">
            <van-col span="4">
              手机号
            </van-col>
            <van-col span="20">
            {{order.occupantsMobile}}
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
              <span>￥{{order.orderPrice}}</span>
            </van-col>
          </van-row>
        </p>
      </div>

      <div class="bottom1">
        <p>退改政策</p>
        <van-row gutter="3">
          <van-col span="5">
            退改政策：
          </van-col>
          <van-col span="15">
            <span>{{order.drawback}}</span>
          </van-col>
        </van-row>
        <p>
          如与商家产生争议，请致电客服电话：（027—31212313）
        </p>
      </div>

    </div>
    <div class="back" @click="goPerson">
      返回个人中心
    </div>
  </div>
</template>
<script>
  import Header from "./../../../common/header2"
  export default {
    name:"paysuccess",
    components:{
      Header
    },
    data() {
      return {
        title: '支付结果',
        isback: true,
        order: {}
      }
    },
    created(){
      this.init()
    },
    methods:{
      init(){
        var id = this.$route.params.id
        var userID = JSON.parse(localStorage.getItem('userInfo')).userId
        
        // this.id = id
        this.$http.post('appServiceOrder/stay/complete',{orderId:id,userId:userID}).then(res=>{
          if(res.msg == "success"){
            this.order = res.data

            if(localStorage.getItem('wxPay')){
                localStorage.removeItem('wxPay');
            }
          } else {
            this.$router.go(-1)
            // this.$router.replace({name: 'intoPayment', params: { id: this.$route.params.id }, query: {userId: this.$route.query.userId}})
          }
        })
      },
      goPerson(){
        this.$router.push({
          name:"personalCenter"
        })
      }
    }
  }
</script>
<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";
  .doit{
    padding-bottom: 1rem;
    .top{
      height: 2.5rem;
      margin: 0 .3rem;
      /*border-bottom: .01rem solid #E6E6E6;*/
      text-align: center;
      padding-top: .6rem;
      box-sizing: border-box;
      img{
        width: 1.4rem;
        height: 1.2rem;
        vertical-align: middle;
      }
      .imgRight{
        padding: .1rem;
        font-size: .3rem;
        height: 1.2rem;
        line-height: .48rem;
        max-width: 3.2rem;
        text-align: center;
        box-sizing: border-box;
        vertical-align: baseline;
        display: inline-block
      }
    }
    .contain{
      margin: 0 .3rem;
      padding: .3rem 0;
      border-bottom: .01rem solid #E6E6E6;
      line-height: 1.6;
      font-size: .24rem;
      color: #5D5D5E;
      p{
        line-height: 1.8;
      }
      h4{
        font-size: .30rem;
        line-height: 1.5;
        color: #000003
      }
      &.tab-con{
        padding: .18rem 0;
        p{
          color: #2A2A2B;
          font-size: .24rem;
          line-height: 2;
        }
        .con{
          line-height: 2;
          font-size: 0;
          color: #5E5E5F;
          .conleft{
            font-size: .24rem;
            display: inline-block;
            width: 1.5rem;
          }
          .conright{
            font-size: .24rem;
            display: inline-block;
            width: 5.4rem;
          }
        }
      }
    }
    .back{
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      color: #fff;
      background: #FF6500;
      font-size: .32rem;
      position: fixed;
      bottom: 0;
      left: 0;
    }
    .noborder{
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: none;
      border: none
    }
    .light_Blue{
      color: #109ADD
    }
    .light_Orang{
      color: #FF6500
    }
    .light_Green{
      color: #008639;
    }
    .underline{
      text-decoration: underline
    }
  }
  .intoAffirm {
    margin: 0 0.3rem;
    min-height: 6rem;
    overflow: auto;
    .state {
      padding: 0.32rem;
      border-bottom: 0.01rem #e6e6e6 solid;
      position: relative;
      span {
        /*color: red;*/
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
      /*p:first-child {*/
        /*font-size: 0.3rem;*/
        /*font-weight: bold;*/
      /*}*/
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
          /*color: #fc4211;*/
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
          /*color: #ff6500;*/
        }
      }
      p {
        span {
          /*color: red;*/
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
  .top2{
    margin: 0 0.3rem;
    padding: 0 0.32rem;
    height: 0.82rem;
    line-height: 0.82rem;
    font-size: 0.16rem;
    color: #706f74;
    .bt();
    span{
      float: right;
    }
  }
  .blank{
    .jg();
  }
</style>
