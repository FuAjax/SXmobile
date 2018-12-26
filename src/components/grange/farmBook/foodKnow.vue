<template>
  <div class="foodKnow">
    <div class="topBar">
      <Header :title='title' />
    </div>
    <div style="width:100%; height:.92rem;"></div>
    <div class="top">
      <van-row gutter="10">
        <van-col span="7" class="left">
          <img :src="detail.url" alt="">
        </van-col>
        <van-col span="17" class="right">
          <h3>{{detail.name}}</h3>
          <stars :rate="detail.score"></stars> <span>{{detail.score}}分</span>
        </van-col>
      </van-row>
    </div>
    <!--代金券-->
    <h3 class="trade">
      {{voucher.voucherPrice}}元代金券
    </h3>
    <div class="two">
      <span>{{voucher.abolitionRules==1?'有条件退' :voucher.abolitionRules==2?'随时退' :voucher.abolitionRules==3?'不可退':'' }}</span>
      {{voucher.isBespoke==0?'免预约' :voucher.isBespoke==1?'需要预约':''}}
      <i v-if="voucher.limitNumber =='undefine'">
        | 单次最多可用{{voucher.limitNumber}}张
      </i>
    </div>
    <div class="separate"></div>
    <div class="notice">
      <h3>购买须知</h3>
      <van-row gutter="5">
        <van-col span="4" class="left">
          有效期
        </van-col>
        <van-col span="20">
          {{voucher.validityPeriod}}
        </van-col>
      </van-row>
      <van-row gutter="5">
        <van-col span="4" class="left">
          是否预约
        </van-col>
        <van-col span="20">
          {{voucher.isBespoke==0?'免预约' :voucher.isBespoke==1?'需要预约':'无'}}
        </van-col>
      </van-row>
      <van-row gutter="5">
        <van-col span="4" class="left">
          不可用日期
        </van-col>
        <van-col span="20">
          {{voucher.unuseTime}}
        </van-col>
      </van-row>
      <van-row gutter="5">
        <van-col span="4" class="left">
          使用时间
        </van-col>
        <van-col span="20">
          {{voucher.useTimeQuantum}}
        </van-col>
      </van-row>
      <van-row gutter="5">
        <van-col span="4" class="left">
          适用范围
        </van-col>
        <van-col span="20">
          {{voucher.scopeTrial}}
        </van-col>
      </van-row>
      <van-row gutter="5">
        <van-col span="4" class="left">
          叠加使用
        </van-col>
        <van-col span="20">
          {{voucher.isNumberLimit==0?'不限制' :voucher.isNumberLimit==1?'限制':'无'}}
        </van-col>
      </van-row>
      <!--<van-row gutter="5">-->
        <!--<van-col span="4" class="left">-->
          <!--使用规则-->
        <!--</van-col>-->
        <!--<van-col span="20">-->
          <!--222222-->
        <!--</van-col>-->
      <!--</van-row>-->
    </div>
    <div class="separate"></div>
    <div class="condition">
      <h3>退改政策</h3>
      <p class='blue' v-if="voucher.abolitionRules==1">{{voucher.abolitionRules==1?'有条件退':voucher.abolitionRules==2?'随时退':voucher.abolitionRules==3?'不可退':''}}</p>
      <div v-if="voucher.abolitionRules==1">
        最晚{{voucher.abolitionDays}}天{{voucher.abolitionPoints}}以前可免费取消和修改，过此时间变更/取消或者未消费，将扣除您全额或部分费用。
      </div>
      <p class='green' v-if="voucher.abolitionRules==2">{{voucher.abolitionRules==1?'有条件退':voucher.abolitionRules==2?'随时退':voucher.abolitionRules==3?'不可退':''}}</p>
      <div v-if="voucher.abolitionRules==2">
        该产品支持随时退。如需取消，请登录三乡工程网账户申请取消，经核实未使用，可免费取消。
      </div>
      <p class='orang' v-if="voucher.abolitionRules==3">{{voucher.abolitionRules==1?'有条件退':voucher.abolitionRules==2?'随时退':voucher.abolitionRules==3?'不可退':''}}</p>
      <div v-if="voucher.abolitionRules==3">
        订单预订/支付成功后，不可取消修改，若未按时入住，我们将扣除您全额或部分费用。
      </div>
    </div>
    <div class="separate"></div>
    <div class="time">
      <h3>补充说明</h3>
      <p>{{voucher.additionalRemarks}}</p>
    </div>
    <div class="bottom clear">
      <div>
        <span class="price">￥{{voucher.voucherPrice}}</span>
        <span >￥{{voucher.costPrice}}元</span>
      </div>
      <p>
          <span @click="buy">
            立即抢购
        </span>
      </p>
    </div>
  </div>
</template>

<script>
  import Header from "com/common/Header2"
  import stars from 'com/common/rates'
    export default {
        name: "foodKnow",
        components:{stars,Header},
        data() {
            return {
              array:[
                {
                  title:'有效期',
                  text:'2018.3.15 至 2018.9.7',
                },
                {
                  title:'是否预约',
                  text:'无须预约',
                },
                {
                  title:'不可用日期',
                  text:'周六至周日',
                },
                {
                  title:'适用范围',
                  text:'取后台当前产品定义内容',
                },
                {
                  title:'叠加使用',
                  text:'取后台当前产品定义内容',
                },
                {
                  title:'使用规则',
                  text:'取后台当前产品定义内容',
                }
              ],
              title:'购买须知',
              voucher:{},
              detail:{},
              imgurl:'',
            }
        },
        methods: {
          buy(){//立即抢购
            console.log(this.voucher.id)
            this.$router.push({
              name:'foodBook',
              params:{
                id:this.voucher.id,
              },
            })

          },
        },
        computed: {},
        created: function () {
          this.voucher=JSON.parse(decodeURIComponent(this.$route.params.id));
          this.detail=JSON.parse(decodeURIComponent(this.$route.params.de));
        },
        mounted: function () {
        },

    }
</script>

<style scoped lang="less" type="text/less">
  .foodKnow{
    .top{
      margin: 0 0.2rem;
      padding: 0.2rem 0;
      .left{
        height: 1rem;
      }
      .right{
        margin-top: 0.2rem;
      }
    }
    .trade{
      height: 1rem;
      margin: 0 0.2rem;
      line-height: 1rem;
      border-top: 0.01rem solid #e5e5e5;
    }
    .two{
      height: 1rem;
      margin: 0 0.2rem;
      line-height: 1rem;
      border-top: 0.01rem solid #e5e5e5;
      span{
        color: #07a836;
        border: 0.01rem solid #07a836;
        padding: 0 0.2rem;
      }
    }
    .separate{
      height: 0.28rem;
      background-color: #f1f0f6;
    }
    .notice{
      margin: 0 0.2rem;
      padding: 0.2rem 0;
      h3{
        margin-bottom: 0.2rem;
      }
      .van-row{
        margin-bottom: 0.2rem;
      }
      .left{
        color: grey;
      }
    }
    .time{
      padding: 0.2rem;
      h3{
        margin-bottom: 0.2rem;
      }
      p{
        color: grey;
      }
    }
    .condition{
      padding: 0.2rem;
      .blue{
        color: #23a1dc;
        font-weight: bold;
      }
      .green{
        color: #00bb3b;
        font-weight: bold;
      }
      .orang{
        color: #ff6500;
        font-weight: bold;
      }
      div{
        color: grey;
      }
      h3,p,div{
        margin-bottom: 0.2rem;
      }
    }
    .bottom{
      border-top: 0.01rem solid #e5e5e5;
      div{
        float: left;
        height: 1rem;
        line-height: 1rem;
        padding-left: 0.2rem;
        .price{
          color: red;
        }
        span:nth-child(2){
          text-decoration: line-through;
          color: grey;
        }
      }
      p{
        float: right;
        span{
          display: inline-block;
          width: 3.04rem;
          height:1rem;
          background-color: #ff6500;
          text-align: center;
          line-height: 1rem;
          color: white;
          font-size: 0.24rem;
        }
        button{
          background-color: white;
        }
      }
    }
  }
</style>
