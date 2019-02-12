<template>
  <div class="payment">
    <div class="topBar">
      <Header :title='title'/>
    </div>
    <div style="width:100%; height:.92rem;"></div>
    <div class="top">
      <img src="./../../../assets/payment-Bg.png" alt="">
    </div>
    <p class="time">请在{{order.outTime}}前完成支付</p>
    <p class="price">总价 <span>￥{{order.payPrice}}元</span></p>
    <p class="adult">{{order.businessName}}-{{order.voucherName}}</p>
    <div class="separate"></div>
    <p class="pay">支付方式</p>
    <van-radio-group v-model="radio">
      <van-cell-group class="payfor">
        <div class="payforin" @click="radio = '1'">
          <img src="./../../../assets/pay_wx.png" alt="">
          <span>微信支付</span>
          <div class="radioin">
            <van-radio name="1" />
          </div>
        </div>
        <div class="payforin" @click="radio = '2'">
          <img src="./../../../assets/pay_my.png" alt="">
          <span>支付宝支付</span>
          <div class="radioin">
            <van-radio name="2" />
          </div>
        </div>
      </van-cell-group>
    </van-radio-group>
    <div class="order" @click="payNow">
      确认支付 ￥{{order.payPrice}}元
    </div>
    
    <!--取消弹窗-->
    <van-dialog
        v-model="dialogShow"
        show-cancel-button
        confirmButtonText="已完成支付"
        cancelButtonText="遇到问题,重新支付"
        :before-close="beforeClose"
        className="foodDialog"
        >
        <p style="line-height: 3; border-bottom: .02rem #F9F9F9 solid; text-align: center;">支付结果确认</p>
        <p style="line-height: 3; border-bottom: .01rem #F9F9F9 solid; text-align: center;">请确认微信支付是否已完成</p>
    </van-dialog>
  </div>
</template>

<script>
    import Header from "../../common/header2"
     export default {
        name: "payment",
        components:{
          Header
        },
        data() {
          return {
            dialogShow:false,
            title: '支付',
            isback: true,
            radio: '1',
            order: {}
          }
        },
        methods: {
          beforeClose(action, done){
              if (action === 'confirm') {
                  setTimeout(done, 1000);
                  if(this.$route.params.type == 1){					// 门票
                    this.$router.push({name: 'paysuccess', params: { id: this.$route.params.id,type: 1 }})
                  } else if(this.$route.params.type == 2) {
                    this.$router.push({name: 'paysuccess', params: { id: this.$route.params.id,type: 2 }})
                  }
              } else {
                  this.init()
                  done(); 
              }
          },
          init(){
            var id = this.$route.params.id
            this.id = id
            if(this.$route.params.type == 1){					// 门票
            	var path = '/appServiceOrder/ticket/waittingpay'
            } else if(this.$route.params.type == 2) {
            	var path = '/appServiceOrder/voucher/waittingpay'
            } else if(this.$route.params.type == 3) {
            	var path = '/appServiceOrder/voucher/waittingpay'
            }
            var params = {
              orderId: id
            }
            if(this.$route.query.userId){
              params.userId = this.$route.query.userId
            }
            this.$http.post(path,params).then(res=>{
              if(res.msg == "success"){
                this.order = res.data
                localStorage.removeItem('wxPay');
              }
            })
          },
          payNow(){
            const params = {
              orderId: this.id
            }
            if(this.$route.query.userId){
              params.userId = this.$route.query.userId 
              var userInfo = {
                userId: this.$route.query.userId
              }
              localStorage.setItem('userInfo',JSON.stringify(userInfo));
            }
            if(this.radio == 1){
              var path = '/appServicePay/move/weixpay'
            } else {
              var path = '/appServicePay/move/alipay'
            }
            this.$http.post(path, params, null).then(res=>{
              //返回参数 
              if (this.radio == 2){
                var htmls = res
                let routerData = this.$router.resolve({path:'/apply',query:{htmls:res, type: 2}})
                //打开新页面
                window.open(routerData.href,'_self')
                const div = document.createElement('div');
                div.innerHTML = htmls;
                document.body.appendChild(div);
                document.forms[0].submit()
              }
              if (this.radio == 1){
                // var htmls = '<a href="'
                //   + res.data.mweb_url +
                // '" target="_self"><span id="sp"></span></a>'
                // let routerData = this.$router.resolve({path:'/apply',query:{htmls:htmls, type: 1}})
                // window.open(routerData.href,'_self')
                // const div = document.createElement('div');
                // div.innerHTML = htmls;
                // document.body.appendChild(div);
                window.open(res.data.mweb_url,'_self')
                localStorage.setItem('wxPay',JSON.stringify(this.$route.params.id));
              }
            })
          }
        },
        computed: {},
        created: function () {
          console.log(this.$route.query)
          if (((localStorage.getItem('wxPay') && (JSON.parse(localStorage.getItem('wxPay')) - 0) == (this.$route.params.id - 0))) || this.$route.query.out_trade_no) {
              // 弹窗
              this.dialogShow = true
              if(this.$route.query.total_amount){
                this.money = this.$route.query.total_amount
              }
              this.radio = '1'
          } else {
              this.init()
          }
        },
        mounted: function () {
        }

    }
</script>

<style scoped lang="less" type="text/less">
@import "../../../style/public.less";
.payment{
  .top{
    img{
      width: 2.55rem;
      height: 1.9rem;
      display: block;
      margin: .88rem auto .5rem
    }
  }
  .time{
    font-size: .26rem;
    color: grey;
    text-align: center;
    margin-top: 0.2rem;
  }
  .price{
    font-size: .26rem;
    span{
      color: red;
      font-size: .26rem;
    }
    text-align: center;
    margin-top: 0.2rem;
    color: grey;
  }
  .adult{
    margin-top: 0.2rem;
    text-align: center;
    font-weight: bold;
    margin-bottom: 0.7rem;
    font-size: .28rem;
  }
  .separate{
    height: 0.2rem;
    background-color: #f1f0f6;
  }
  .pay{
    font-weight: bold;
    margin: 0 0.2rem;
    font-size: .28rem;
    padding: 0.4rem 0 .2rem;
  }
  .order{
    height: 1rem;
    font-size: .36rem;
    background-color: #ff6500;
    text-align: center;
    color: white;
    line-height: 1rem;
    font-weight: bold;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .payfor{
    padding: 0 .3rem;
    box-sizing: border-box;
    height: .6rem;
    .payforin{
      padding: .2rem 0;
      border-bottom: .01rem solid #E6E6E6;
      img{
        width: .6rem;
        height: .6rem;
        vertical-align: middle;
      }
      span{
        vertical-align: middle;
        font-size: .28rem;
        padding-left: .3rem;
      }
      .radioin{
        float: right;
        height: .6rem;
        width: .6rem;
        line-height: .55rem;
        .van-radio{
          height: 100%;
          width: 100%;
          text-align: right;
          padding-right: .02rem;
        }
      }
    }
  }
}
</style>
<style>
.payment .van-hairline--top-bottom::after{
  border-width: 0
}
</style>
