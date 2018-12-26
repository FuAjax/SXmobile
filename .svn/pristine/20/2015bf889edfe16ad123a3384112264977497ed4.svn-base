<template>
    <div class="inntoPay">
      <div class="top">
        <van-nav-bar title="订单详情"  left-arrow>
        </van-nav-bar>
      </div>
      <div class="state">
        订单状态：<span>待商家确认</span>
        <p>
          <span @click="cancel">取消订单</span>
          <span>立即支付</span>
        </p>
      </div>
      <div class="order">
        <p>订单状态</p>
        <p>订单状态 等待您的支付</p>
        <p>请在23：59内完成支付，超时订单会自动取消</p>
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
          <van-row gutter="5">
            <van-col span="4">
              入住人
            </van-col>
            <van-col span="20">
              入住人： 李元坤  李晓霞
            </van-col>
          </van-row>
        </p>
        <p>
          <van-row gutter="5">
            <van-col span="4">
              证件号
            </van-col>
            <van-col span="20">
              423123123123123213
              423123123123123213
            </van-col>
          </van-row>
        </p>
        <p>
          <van-row gutter="5">
            <van-col span="4">
              手机号
            </van-col>
            <van-col span="20">
              135423213633
              135423213633
            </van-col>
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
      <!--取消的弹窗-->
      <van-dialog
        v-model="show"
        show-cancel-button
        confirmButtonText="申请退款"
        :before-close="beforeClose"
        className="dialog"
      >
        <p class="top">您确认要取消订单吗?</p>
        <p class="second">取消后，订单不可恢复</p>
        <p class="common">
          <van-row gutter="10">
            <van-col span="6" class="left">
              取消原因
            </van-col>
            <van-col span="18" class="right">
              <select name="" >
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
            </van-col>
          </van-row>
        </p>
        <p class="common">
          <van-row gutter="10">
            <van-col span="6" class="left">
              消费费用
            </van-col>
            <van-col span="18" class="right">
             <span>
               ￥233.00
             </span>
            </van-col>
          </van-row>
        </p>
        <p class="common">
          <van-row gutter="10">
            <van-col span="6" class="left">
              退换费用
            </van-col>
            <van-col span="18" class="right">
              <span>
                 ￥233.00
              </span>
            </van-col>
          </van-row>
        </p>
        <p class="common">
          <van-row gutter="10">
            <van-col span="6" class="left">
              退换方式
            </van-col>
            <van-col span="18" class="right">
              <div>退还原支付方式</div>
              <div class="red">
                预计1-7个工作日到账
              </div>
            </van-col>
          </van-row>
        </p>
        <div class="textarear">
          <van-cell-group>
            <van-field
              v-model="message"
              type="textarea"
              placeholder="更多原因"
              :autosize="autosize"
            />
          </van-cell-group>
        </div>
      </van-dialog>
    </div>
</template>

<script>
    export default {
        name: "inntoPay",
        data() {
            return {
              show:false,
              imgSrc:'../../../../static/images/slide_01.jpg',
              message:'',
              autosize:{
                maxHeight: 100,
                minHeight: 50,
              },
            }
        },
        methods: {
          cancel(){
            this.show=true;
          },
          beforeClose(action, done){
            if (action === 'confirm') {
              setTimeout(done, 1000);
            } else {
              done();
            }
          },
        },
        computed: {},
        created: function () {
        },
        mounted: function () {
        },

    }
</script>

<style scoped lang="less" type="text/less">
  .inntoPay{
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
          color: black;
          width: 1.7rem;
          height: 0.5rem;
          border: 0.01rem solid #e6e6e6;
          border-radius: 0.5rem;
        }
        span:nth-child(2){
          background-color: #ff6500;
          color: white;
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
    .dialog{
      .top{
          margin-top: 0.2rem;
          padding: 0.2rem;
          text-align: center;
        }
      .second{
        padding-bottom: 0.2rem;
        text-align: center;
      }
      .common{
        font-size: 0.2rem;
        margin: 0.2rem;
        .left{
          color: grey;
          text-align: right;
        }
        .right{
          span{
            color: red;
          }
          .red{
            color: red;
          }
        }
      }
      .textarear{
        margin: 0.2rem;
        border: 0.01rem solid #e6e6e6;
      }
    }
  }
</style>
