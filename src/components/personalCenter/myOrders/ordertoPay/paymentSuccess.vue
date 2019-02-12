<template>
    <div class="doit">
        <div class="topBar">
        <Header :title='title'/>
        </div>
        <div style="width:100%; height:.92rem;"></div>
        <div class="top">
            <img src="./../../../../assets/doit.png" alt="">
            <div class="imgRight">
                <p>恭喜, 您已经成功购买 "{{order.ticketName || order.voucherName}}"</p>
            </div>
        </div>
        <div class="contain">
            <p>您可以随时进入 " <span class="light_Green underline" @click="myOrder">我的订单</span> " 查看<span class="light_Orang">(消费券密码名称)</span></p>
            <p>到店出示<span class="light_Orang">(消费券密码名称)</span>即可消费</p>
            <p>订单确认短信会发送至您的手机: {{order.userMoblie || order.contactMobile}}</p>
        </div>
        <div class="contain noborder">
            <h4>消费券密码名称</h4>
            <p><span class="light_Orang">(消费券密码名称) : {{order.passwordName || order.passwordName}}</span> 未消费</p>
        </div>
        <div class="separate"></div>
        <div class="contain">
            <h4>购买须知</h4>
        </div>
        <div v-if="type == 1">
	        <div class="contain tab-con">
	            <p>费用说明</p>
	            <div class="con">
	                <div class="conleft">票面价</div>
	                <div class="conright">{{order.facePrice}}</div>
                   	<div class="conleft">费用包含</div>
	                <div class="conright">{{order.priceInclude}}</div>
	            </div>
	        </div>
	        <div class="contain tab-con">
	            <p>预定说明</p>
	            <div class="con">
	                <div class="conleft">预定时间</div>
	                <div class="conright">{{order.specificPoints}}</div>
	            </div>
	            <div class="con">
	                <div class="conleft">有效期</div>
	                <div class="conright">{{order.useTime}}</div>
	            </div>
	        </div>
	        <div class="contain tab-con noborder">
	            <p>使用说明</p>
	            <div class="con">
	                <div class="conleft">使用方法</div>
	                <div class="conright">{{order.usageMethod}}</div>
	            </div>
	            <div class="con">
	                <div class="conleft">换票时间</div>
	                <div class="conright">{{order.ticketTime}}</div>
	            </div>
	            <div class="con">
	                <div class="conleft">换票地点</div>
	                <div class="conright">{{order.ticketPlace}}</div>
	            </div>
	            <div class="con">
	                <div class="conleft">入园时间</div>
	                <div class="conright">{{order.openTime}}</div>
	            </div>
	        </div>
        </div>
        
        <div v-if="type == 2">
	        <div class="contain tab-con noborder">
	            <div class="con">
	                <div class="conleft">有效期</div>
	                <div class="conright">{{order.expiryTime}}</div>
	            </div>
	            <div class="con">
	                <div class="conleft">不可用日期</div>
	                <div class="conright">{{order.unuseTime}}</div>
	            </div>
	            <div class="con">
	                <div class="conleft">使用时间</div>
	                <div class="conright">{{order.useTime}}</div>
	            </div>
	            <div class="con">
	                <div class="conleft">使用范围</div>
	                <div class="conright">{{order.scopeTrial}}</div>
	            </div>
	        </div>
        </div>
        
        <div class="separate"></div>
        <div class="contain noborder" style="padding-bottom: .2rem">
            <h4>退改政策</h4>
        </div>
        <div class="contain noborder" style="padding-top: 0" v-if="type == 1">
            <p v-show="order.abolitionRules == 1" class="light_Green">有条件退</p>
            <p v-show="order.abolitionRules == 2" class="light_Blue">随时退</p>
            <p v-show="order.abolitionRules == 3" class="light_Orang">不可退</p>
            <p v-show="order.drawback">
                {{order.drawback || '暂无'}}
            </p>
        </div>
        <div class="contain noborder" style="padding-top: 0" v-if="type == 2">
            <p class="light_Green">{{order.abolitionRules}}</p>
        </div>
        <div class="separate"></div>
        <div class="contain noborder" style="padding-bottom: .2rem">
            <h4>补充说明</h4>
        </div>
        <div class="contain noborder" style="padding-top: 0">
            <p>
                {{order.additionalRemarks || '暂无'}}
            </p>
        </div>
        <div class="separate"></div>
        <div class="contain noborder" style="padding-bottom: .2rem">
            <h4>商家信息</h4>
        </div>
        <div class="contain noborder" style="padding-top: 0">
            <p>{{order.businessName}}</p>
            <p>地址: {{order.address}}</p>
            <p>营业时间: {{order.openTime}}</p>
            <p>电话: {{order.contactMobile}}</p>
        </div>
        <div class="back" @click="toMine">
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
              type: 1,
              order: {}
            }
        },
        mounted(){
            // console.log(this.$route.params)
            this.init()
        },
        methods:{
            init(){
                var id = this.$route.params.id
                this.id = id
                this.type = this.$route.params.type
	            if(this.$route.params.type == 1){					// 门票
	            	var path = '/appServiceOrder/ticket/complete'
	            } else {
	            	var path = '/appServiceOrder/voucher/complete'
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
                        if(localStorage.getItem('wxPay')){
                            localStorage.removeItem('wxPay');
                        }
                    } else {
                        this.$router.go(-1)
                        // this.$router.replace({name: 'payment', params: { id: this.id, type: this.type }, query: {userId: this.$route.query.userId}})
                    }
                })
            },
            toMine(){
                if(this.$proType == 3){
                    this.$router.push({name: 'personalCenter'})
                } else {
                    this.$router.push({ name: 'navbar', query: { type: 4 }})
                }
            },
            myOrder(){
                this.$router.push({name: 'tickettoUse', params: { id: this.id }})
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
            border-bottom: .01rem solid #E6E6E6;
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
                vertical-align: middle;
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
</style>