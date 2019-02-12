<template>
  <div class="foodtoUse">
    <div class="top">
      <van-nav-bar title="订单详情"  left-arrow @click-left="back">
      </van-nav-bar>
    </div>
    <div class="state">
      订单状态：<span>{{info.stateName}}</span>
      <p v-if='info.orderStatus == 0 || info.orderStatus == 1 || info.orderStatus == 3' @click='cancel'>取消订单</p>
      <!-- paymentFailureTime -->
    </div>
    <div class="reason">
      <p style="color: grey">
        小提示：记下或凭短信{调用消费券密码名称，后台配置}向商家出示即可消费
        <!-- info.passwordName -->
      </p>
      <!-- <p style="color: #ff6500">
        0978 1611 已退款
      </p> -->
      <p style="color: #ff6500" v-if="info.orderStatus == 2">
       待使用　　消费券名称: {{info.passwordName}}　　消费券密码: {{info.consumerVoucher}}
      </p>
    </div>
    <div class="separate"></div>
    <div class="number">
      <p class="top clear">
        订单号：{{info.orderNo}}  【美食】
        <span> {{info.orderTime}}</span>
      </p>
      <div class="imgcenter">
        <van-row gutter="20">
          <van-col span="8" class="left">
            <img :src='info.businessLogoUrl' alt="">
          </van-col>
          <van-col span="16" class="right">
            <p>{{info.voucherName}}</p>
            <p>数量：{{info.buyNumber}}张</p>
            <!-- <p>有效期：{{info.buyNumber}}</p> -->
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="detail">
      <p>{{info.businessName}}</p>
      <p>
        <van-row gutter="5">
          <van-col span="4">
            地址
          </van-col>
          <van-col span="20">
            {{info.businessAddress}}
          </van-col>
        </van-row>
      </p>
      <p>
        <van-row gutter="5">
          <van-col span="4">
            电话
          </van-col>
          <van-col span="20">
            {{info.businessMobile}}
          </van-col>
        </van-row>
      </p>
      <p>
        <van-row gutter="5">
          <van-col span="4">
            营业时间
          </van-col>
          <van-col span="20">{{info.useTime}}
          </van-col>
        </van-row>
      </p>
    </div>
    <div class="detail" style="border-bottom: 0.01rem solid #e6e6e6">
      <p>订单总额</p>
      <p>
        <van-row gutter="5">
          <van-col span="4">
            原价
          </van-col>
          <van-col span="20">
            <span>￥{{info.costPrice}}</span>
          </van-col>
        </van-row>
      </p>
      <p>
        <van-row gutter="5">
          <van-col span="4">
            订单总价
          </van-col>
          <van-col span="20">
            <span>￥{{info.orderPrice}}</span>
          </van-col>
        </van-row>
      </p>
    </div>
    <!-- <div class="detail">
      <p>订餐人信息</p>
      <p>
        <van-row gutter="5">
          <van-col span="4">
            订餐人
          </van-col>
          <van-col span="20">
          </van-col>
        </van-row>
      </p>
      <p>
        <van-row gutter="5">
          <van-col span="4">
            手机号码
          </van-col>
          <van-col span="20">
            12222222222
          </van-col>
        </van-row>
      </p>
    </div> -->
    <div class="separate"></div>
    <div class="detail">
      <p>注意事项</p>
      <!-- <p>
        <van-row gutter="5">
          <van-col span="4">
            有效期
          </van-col>
          <van-col span="20">
            2018.3.15-
          </van-col>
        </van-row>
      </p>
      <p>
        <van-row gutter="5">
          <van-col span="4">
            是否预约
          </van-col>
          <van-col span="20">
            027—3123213
          </van-col>
        </van-row>
      </p> -->
      <p>
        <van-row gutter="5">
          <van-col span="4">
            不可用时间
          </van-col>
          <van-col span="20">{{info.unuseTime}}
          </van-col>
        </van-row>
      </p>
      <p>
        <van-row gutter="5">
          <van-col span="4">
            使用时间
          </van-col>
          <van-col span="20">{{info.useTime}}
          </van-col>
        </van-row>
      </p>
      <p>
        <van-row gutter="5">
          <van-col span="4">
            适用范围
          </van-col>
          <van-col span="20">{{info.scopeTrial}}
          </van-col>
        </van-row>
      </p>
      <!-- <p>
        <van-row gutter="5">
          <van-col span="4">
            叠加使用
          </van-col>
          <van-col span="20">9:00  -   24:00
          </van-col>
        </van-row>
      </p>
      <p>
        <van-row gutter="5">
          <van-col span="4">
            使用规则
          </van-col>
          <van-col span="20">9:00  -   24:00
          </van-col>
        </van-row>
      </p> -->
    </div>
    <!-- <div class="separate"></div>
    <div class="attention">退改政策</div>
    <div class="condition">
      <p style="color: #23aae4">有条件退</p>
      <div>
        最晚
      </div>
      <p style="color: #06ad43">随时退</p>
      <div>
        最晚
      </div>
      <p style="color: #f89669">
        不可退
      </p>
      <div>
        最晚
      </div>
    </div> -->
    <div class="separate"></div>
    <div class="bottom" v-if="info.additionalRemarks">
      <p>其他说明</p>
      <p>{{info.additionalRemarks}}</p>
    </div>


      <!--取消订单的弹框-->
    <van-dialog
      v-model="foodshow"
      show-cancel-button
      confirmButtonText="申请退款"
      :before-close="beforeClose"
      className="foodDialog"
    >
      <p>您确认要取消订单吗？</p>
      <p>取消后，订单不可恢复</p>
      <div class="wrap">
        <van-row gutter="5">
          <van-col span="8" class="left">可退数量</van-col>
          <van-col span="16" class="right">
            <span class="num">1张</span>
            <van-stepper v-model="ticketValue" style="float: right"></van-stepper>
          </van-col>
        </van-row>
        <van-row gutter="5">
          <van-col span="8" class="left">订单消费密码</van-col>
          <van-col span="16" class="right">
            <div class="code">
              <van-radio-group v-model="radio">
                <van-radio name="1">123456</van-radio>
                <van-radio name="2">123456</van-radio>
                <van-radio name="3">123456</van-radio>
              </van-radio-group>
            </div>
          </van-col>
        </van-row>
        <van-row gutter="5">
          <van-col span="8" class="left">取消原因</van-col>
          <van-col span="16" class="right">
            <div class="choose">
              <select name="">
                <option value="" disabled selected>请选择取消原因</option>
                <option value="">行程有变</option>
                <option value="">房间实际描述和照片不符</option>
                <option value="">无法联系商家</option>
                <option value="">涨价了</option>
                <option value="">商家服务态度差</option>
                <option value="">没房了</option>
                <option value="">设施故障无法继续入住</option>
                <option value="">重新预订</option>
                <option value="">其他原因</option>
              </select>
            </div>
          </van-col>
        </van-row>
        <van-row gutter="5">
          <van-col span="8" class="left">消费费用</van-col>
          <van-col span="16" class="right">
            <span class="num">￥233.00</span>
          </van-col>
        </van-row>
        <van-row gutter="5">
          <van-col span="8" class="left">退还金额</van-col>
          <van-col span="16" class="right">
            <span class="num">￥233.00</span>
          </van-col>
        </van-row>


        <van-row gutter="5">
          <van-col span="8" class="left">退换方式</van-col>
          <van-col span="16" class="right">
            <div>退换原支付方式</div>
            <div class="num">预计1-7个工作日到账</div>
          </van-col>
        </van-row>
        <div class="textwrap">
          <textarea name="" placeholder="更多原因(最多200字)"></textarea>
        </div>
      </div>
    </van-dialog>

  </div>
</template>

<script>
    export default {
        name: "foodtoUse",
        data() {
            return {
            	info: {},id: null,foodshow:false,
            }
        },
        methods: {
        	init(orderId){
        		var params = {
        			orderId
        		}
        		this.$http.post('appServiceOrder/detail', params).then(res=>{
        			this.info = res.data
	        	})
        	},
          back(){
            this.$router.back(-1)
          },
          cancel(o){//取消订单
         		this.show=true;
          },
          beforeClose1(action, done){
            if (action === 'confirm') {
              this.$http.post('appServiceOrder/readyCancelOrder',{orderId: this.id}).then(res=>{
                if(res.msg == 'success'){
                  if(res.data.canCancel == 1){    // 可以取消
                    if(res.data.isDrawback == 1){
                      this.refundAmount = res.data.refundAmount
                      this.orderPrice = res.data.orderPrice
                      this.orderId = this.id
                    } else {
                      this.refundAmount = 0
                      this.orderPrice = 0
                    }
                  } else {
                    this.$toast(res.data.reason);
                  }
                  this.foodshow=true;
            	    done();
                } else {
                  this.$toast(res.info);
                }
              })
              this.$toast('删除订单操作');
            } else {
            	done();
            }
          },
        },
        computed: {},
        created: function () {
        	var id = this.$route.params.id;
        	this.id = id
        	this.init(id)
        },
        mounted: function () {
        }
    }
</script>

<style scoped lang="less" type="text/less">

  .foodDialog{
    p{
      font-size: 0.28rem;
      margin-bottom: 0.2rem;
      &:nth-child(1){
        font-size: 0.32rem;
        text-align: center;
        margin-bottom: 0.1rem;
        line-height: 2;
        padding-top: .7rem;
      }
      &:nth-child(2){
        font-size: 0.32rem;
        text-align: center;
        margin-bottom: 0.1rem;
        line-height: 2;
        padding-bottom: 0.4rem;
      }
    }
    .wrap{
      margin: 0 0.6rem 0.6rem 0.6rem;
      .van-row{
        margin-bottom: 0.2rem;
        .left{
          color: grey;
        }
        .right{
          .num{
            color:red;
          }
          .choose{
            width: 100%;
            height: 0.6rem;
            border: 0.01rem solid #e5e5e5;
            select{
              border: none;
              width: 100%;
              height: 100%;
              outline: none;
              background-color: #f1f0f6;
            }
          }
        }
      }
      .textwrap{
        height: 1.85rem;
        border: 0.01rem solid #e5e5e5;
        border-radius: 0.12rem;
        overflow: hidden;
        textarea{
          width: 98%;
          height: 100%;
          border: none;
          background-color: #f1f0f6;
        }
      }

    }
  }
  .foodDialog /deep/ .van-radio{
    padding-bottom: 0.1rem;
  }
  .foodDialog /deep/ .van-dialog__cancel{
    background-color: #fea541;
    color: white;
  }
  .foodDialog /deep/ .van-dialog__confirm{
    background-color: #ff6400;
    color: white;
  }
  .foodtoUse{
    .state{
      padding: 0.29rem 0.2rem;
      border-bottom: 0.01rem #e6e6e6 solid;
      position: relative;
      span{
        color: red;
      }
      p{
        display: inline-block;
        vertical-align: top;
        text-align: center;
        line-height: 0.5rem;
        position: absolute;
        top: 50%;
        width: 1.7rem;
        right: 0;
        height: 0.5rem;
        border: 0.01rem solid #e6e6e6;
        border-radius: 0.5rem;
        margin-top: -0.25rem;
        margin-right: 0.2rem;
      }
    }
    .reason{
      padding: 0.2rem;
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
    .attention{
      font-size: 0.24rem;
      font-weight: bold;
      padding: 0 0.2rem;
      padding-top: 0.2rem;
    }
    .condition{
      padding: 0.2rem;
      p{
        font-weight: bold;
        margin-bottom: 0.15rem;
      }
      div{
        color: grey;
        margin-bottom: 0.15rem;
      }
    }
    .bottom{
      p:first-child{
        font-size: 0.24rem;
        font-weight: bold;
      }
      p:last-child{
        color: grey;
      }
      p{
        padding: 0 0.15rem;
        padding-bottom: 0.15rem;
      }
    }
  }
</style>
<style>
  .foodtoUse .van-hairline--bottom.van-nav-bar .van-ellipsis.van-nav-bar__title{
      text-align: center
  }
</style>
