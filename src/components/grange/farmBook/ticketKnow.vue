<template>
  <div class="ticketknow">
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
    <h3 class="trade">
      {{ticketbook.ticketType==1?"特价票":ticketbook.ticketType==2?"成人票":ticketbook.ticketType==3?"学生票":ticketbook.ticketType==4?"儿童票":ticketbook.ticketType==5?"老人票":ticketbook.ticketType==6?"套票":ticketbook.ticketType==7?"团体票":ticketbook.ticketType==8?'其他':""}}
    </h3>
    <div class="separate"></div>
    <h3 class="trade">
      购买须知
    </h3>
    <div class="feedetail">
      <h3>费用说明</h3>
      <van-row gutter="5">
        <van-col span="4" class="left">
          票面价
        </van-col>
        <van-col span="20">
          ￥{{ticketbook.facePrice}}
        </van-col>
      </van-row>
      <van-row gutter="5">
        <van-col span="4" class="left">
          费用包含
        </van-col>
        <van-col span="20">
          {{ticketbook.priceInclude}}
        </van-col>
      </van-row>
    </div>
    <div class="feedetail">
      <h3>预订说明</h3>
      <van-row gutter="5">
        <van-col span="4" class="left">
          预订时间
        </van-col>
        <van-col span="20">
          最晚需在出行前{{ticketbook.daysTime}}天{{ticketbook.specificPoints}}前购买
        </van-col>
      </van-row>
      <van-row gutter="5">
        <van-col span="4" class="left">
          有效期
        </van-col>
        <van-col span="20">
          {{ticketbook.validityPeriod}}
        </van-col>
      </van-row>
    </div>
    <div class="feedetail">
      <h3>使用说明</h3>
      <van-row gutter="5">
        <van-col span="4" class="left">
        使用方法
        </van-col>
        <van-col span="20">
          {{ticketbook.usageMethod}}
        </van-col>
      </van-row>
      <van-row gutter="5">
        <van-col span="4" class="left">
          换票时间
        </van-col>
        <van-col span="20">
          {{ticketbook.ticketTime}}
        </van-col>
      </van-row>
      <van-row gutter="5">
        <van-col span="4" class="left">
          换票地点
        </van-col>
        <van-col span="20">
          {{ticketbook.ticketPlace}}
        </van-col>
      </van-row>
      <van-row gutter="5">
        <van-col span="4" class="left">
          入园时间
        </van-col>
        <van-col span="20">
          1月-12月{{detail.time}}
        </van-col>
      </van-row>
    </div>
    <div class="separate"></div>
    <div class="condition">
      <h3>退改政策</h3>
      <p class='blue' v-if="ticketbook.abolitionRules==1">{{ticketbook.abolitionRules==1?'有条件退':ticketbook.abolitionRules==2?'随时退':ticketbook.abolitionRules==3?'不可退':''}}</p>
      <div v-if="ticketbook.abolitionRules==1">
        最晚{{ticketbook.abolitionDays}}天{{ticketbook.abolitionPoints}}前可免费取消和修改，过此时间变更/取消或者未消费，将扣除您全额预订费用。
      </div>
      <p class='green'  v-if="ticketbook.abolitionRules==2">{{ticketbook.abolitionRules==1?'有条件退':ticketbook.abolitionRules==2?'随时退':ticketbook.abolitionRules==3?'不可退':''}}</p>
      <div v-if="ticketbook.abolitionRules==2">
        该产品支持随时退。如需取消，请登录三乡工程网账户申请取消，经核实未使用，可免费取消。
      </div>
      <p class='orang' v-if="ticketbook.abolitionRules==3">{{ticketbook.abolitionRules==1?'有条件退':ticketbook.abolitionRules==2?'随时退':ticketbook.abolitionRules==3?'不可退':''}}</p>
      <div v-if="ticketbook.abolitionRules==3">
        订单一经确认，不可取消、修改。未消费或取消订单，全部或部分预付房费不予退还。
      </div>
    </div>
    <div class="separate"></div>
    <div class="time">
      <h3>其他说明</h3>
      <p>{{ticketbook.additionalRemarks || '暂无'}}</p>
    </div>
    <div class="bottom clear">
      <div>
        <span class="price">￥{{ticketbook.bookingPrice}}</span>
        <span >￥{{ticketbook.facePrice}}元</span>
      </div>
      <p>
          <span @click="tobook">
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
        name: "ticketKnow",
      components:{stars,Header},
        data() {
            return {
              array:[],
              title:'购买须知',
              detail:{},//传入的详情
              ticketbook:{},//门票信息
              imgurl:null,
            }
        },
        methods: {
          tobook(){//立即预订
            console.log(this.ticketbook.id);
            this.$router.push({
              name:'ticketBook',
              params:{
                id:this.ticketbook.id,
              },
            })
          },
        },
        computed: {},
        created: function () {
          this.ticketbook=JSON.parse(decodeURIComponent(this.$route.params.id));
          this.detail=JSON.parse(decodeURIComponent(this.$route.params.de));
        },
        mounted: function () {
        },

    }
</script>

<style scoped lang="less" type="text/less">
.ticketknow{
  .top{
    margin: 0 0.2rem;
    padding: 0.2rem 0;
    border-bottom: 0.01rem #e6e6e6 solid;
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
  }
  .separate{
    height: 0.28rem;
    background-color: #f1f0f6;
  }
  .feedetail{
    margin: 0 0.2rem;
    padding: 0.2rem 0;
    border-top: 0.01rem solid #e6e6e6;
    h3{
      font-size: 0.2rem;
      margin-bottom: 0.2rem;
    }
    .van-row{
      margin-bottom: 0.2rem;
    }
    .left{
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
  .time{
    margin: 0.15rem 0.2rem;
    h3{
      padding: 0.15rem 0;
    }
    p{
      color: grey;
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
