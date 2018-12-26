<template>
    <div id="online">
        <Header :title='title'></Header>
        <div class="pay">
            <van-cell-group>
                <van-field
                    v-model="money"
                    type="number"
                    required
                    label="消费金额"
                    icon="question-o"
                    placeholder="请询问服务后输入"
                    @click-icon="$toast('question')"
                />
            </van-cell-group>
            <div class="pay-fun" v-if='money.length > 0 && money > 0'>
                <p class="pay-tit">支付方式</p>
                <van-radio-group v-model="radio">
                    <van-cell-group class="payfor">
                        <div class="payforin" @click="radio = '1'">
                        <img src="./../../assets/pay_wx.png" alt="">
                        <span>微信支付</span>
                        <div class="radioin">
                            <van-radio name="1" />
                        </div>
                        </div>
                        <div class="payforin" @click="radio = '2'">
                        <img src="./../../assets/pay_my.png" alt="">
                        <span>支付宝支付</span>
                        <div class="radioin">
                            <van-radio name="2" />
                        </div>
                        </div>
                    </van-cell-group>
                </van-radio-group>
            </div>
            <!-- <div class="tag">确认无误后点击买单</div> -->
            <van-button @click="payment" class="payment-btn" :disabled="!(money.length > 0 && money > 0 && radio)" :style="'' + ((money.length > 0 && money > 0 && radio) ? 'background:#FF6400; color: #fff;' : 'background:#FFD6B9; color: #999;') + 'outline: none; border-radius: 0; border: 0'" type='primary' plain size="large">{{(money.length > 0 && radio) ? '¥' + money : ''}}确认买单</van-button>
        </div>
    </div>
</template>

<script>
  import Header from "../common/header2"

  export default {
    name: "issueFarm",
    data() {
      return {
        title: '',
        money: '',
        radio: null
      }
    },
    components: {
      Header
    },
    methods: {
        payment(){      // 生成订单 并 支付/payment/:type/:id
            // this.$router.push({ name:'payment', params:{ type: 3, id: 1 }})
            /**
             * @RequestParam(required=true) Long userId,
             * @RequestParam(required=true) Long grangeId,
             * @RequestParam(required=true) BigDecimal costPrice,
             * @RequestParam(required=true) BigDecimal payPrice
             **/
            if(this.$route.query.userId){
              params.userId = this.$route.query.userId 
              var userInfo = {
                userId: this.$route.query.userId
              }
              localStorage.setItem('userInfo',JSON.stringify(userInfo));
            }

            const params = {
                grangeId: this.grangeId,
                costPrice: this.money,
                payPrice: this.money
            }
            if(this.radio == 1){
            var path = '/appServicePay/online/weixpay'
            } else {
            var path = '/appServicePay/online/alipay'
            }
            this.$http.post(path, params).then(res=>{
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
                var htmls = '<a href="'
                    + res.data.mweb_url +
                '" target="_self"><span id="sp"></span></a>'
                let routerData = this.$router.resolve({path:'/apply',query:{htmls:htmls, type: 1}})
                window.open(routerData.href,'_self')
                const div = document.createElement('div');
                div.innerHTML = htmls;
                document.body.appendChild(div);
                }
            })
        }
    },
    created(){
        if(this.$route.query.id){
            this.grangeId = this.$route.query.id;
            this.title = this.$route.query.name;
        }
    }
  }
</script>

<style lang="less" scoped>
.pay{
    padding-top: .90rem;
    font-size: .3rem;
}
.payment-btn{
    position: fixed;
    bottom: 0;
    left: 0;
}
.tag{
    color: #808080;
    font-size: .24rem;
    padding: .2rem
}
.pay-fun{
    .pay-tit{
        font-size: .28rem;
        color: #333;
        padding: .2rem 0
    }
    padding: 0 .3rem;
    .payfor{
        padding: 0 .3rem;
        box-sizing: border-box;
        overflow: hidden;
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
#online .pay input{
    font-size: .3rem;
    color: #f00;
    text-align: right;
}
</style>