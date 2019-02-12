<template>
    <div id="online">
        <Header :title='title'></Header>
        <div class="pay">
            <div class="top">
                <img src="./../../assets/doit.png" alt=""/>
                <div class="imgRight">
                    <p>恭喜, 买单成功</p>
                </div>
            </div>
            <div class="pay-detail">
                <van-collapse v-model="activeNames">
                    <van-collapse-item name="1">
                        <div slot="title" style="font-weight: 600; font-size: .3rem">{{info.grangeName}}<van-icon name="question-o" /></div>
                        <div>
                            <!-- <van-cell-group> -->
                            <van-cell title="买单金额：" :value="info.payPrice" />
                            <van-cell title="订单编号：" :value="info.payNumber" />
                            <van-cell title="买单时间：" :value="info.time" />
                            <!-- </van-cell-group> -->
                        </div>
                    </van-collapse-item>
                </van-collapse>
            </div>
            <van-button @click="back" class="payment-btn" type='primary' plain size="large">确认买单</van-button>
        </div>
    </div>
</template>

<script>
  import Header from "../common/header2"

  export default {
    name: "issueFarm",
    data() {
      return {
        dialogShow:false,
        title: '支付订单',
        money: '',
        name: '',
        activeNames: ['1'],
        info: {},
        times: 0
      }
    },
    components: {
      Header
    },
    methods: {
        init(payId){
            this.$http.post('/appServicePay/queryPayonline', { number: payId }).then(res=>{
                //返回参数 
                if(res.msg == "success"){
                    this.info = res.data
                    if(localStorage.getItem('wxPay')){
                        localStorage.removeItem('wxPay');
                    }
                } else {
                    this.$router.go(-1)
                }
            })
        },
        again(){
            this.times++
            this.init(this.id)
        },
        back(){
            if(this.$proType == 3){
                this.$router.push({name: 'personalCenter'})
            } else {
                this.$router.push({ name: 'navbar', query: { type: 4 }})
            }
        }
    },
    created(){
        if(this.$route.params.id){
            this.id = this.$route.params.id;
            if(this.$route.query.userId){
                params.userId = this.$route.query.userId 
                var userInfo = {
                    userId: this.$route.query.userId
                }
                localStorage.setItem('userInfo',JSON.stringify(userInfo));
            }
            this.init(this.id)
        }
    }
  }
</script>

<style lang="less" scoped>
.pay{
    padding-top: .90rem;
    font-size: .28rem;
    padding-bottom: 1rem;
    .pay-detail{
        padding: .2rem .3rem;
        box-sizing: border-box;
    }
}
.payment-btn{
    background:#FF6400; color: #fff; outline: none; border: none;
    position: fixed;
    bottom: 0;
    left: 0;
}
.top{  
    height: 2.5rem;
    margin: 0 .3rem;
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
        line-height: 1rem;
        max-width: 3.2rem;
        text-align: center;
        box-sizing: border-box;
        vertical-align: middle;
        display: inline-block
    }
}
</style>
<style>
#online .pay input{
    font-size: .3rem;
    color: #f00;
    text-align: right;
}
#online .van-collapse-item__content{
    padding: 0
}
</style>