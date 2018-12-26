<template>
    <div class="innknow">
      <div class="topBar">
        <Header :title='title' />
      </div>
      <div style="width:100%; height:.92rem;"></div>
      <router-link to="" tag="div" class="top">
        <img :src="detail.url" alt="">
      </router-link>
     <div class="bed">
       <router-link to="" >
         {{stay.bedType}}
       </router-link>
       <div>
         <span>￥{{stay.bookingPrice}}</span>
         <span>￥{{stay.listingPrice}}</span> |
         <span>{{stay.abolitionRules==1?'有条件退':stay.abolitionRules==2?'随时退':stay.abolitionRules==3?'不可退':''}}</span>
       </div>
     </div>
      <!--中间分割块-->
      <div class="separate"></div>
      <!--清单-->
      <div class="list">
        <span class="van-ellipsis">
          <span>床型</span>{{stay.bedType}}{{stay.bedStandard}}米
        </span>
        <span class="van-ellipsis">
          <span>面积</span>{{stay.roomArea}}平米
        </span>
        <span class="van-ellipsis">
          <span>早餐</span>{{stay.breakfastNumber}}份
        </span>
        <p class="van-ellipsis">
          <span style="color: grey;margin-right: 0.2rem">其他:</span>{{stay.roomFacilities}}
        </p>
        <!--<span class="van-ellipsis">-->
          <!--<span>上网</span>{{facilityArray[0]}}-->
        <!--</span>-->
        <!--<span class="van-ellipsis">-->
          <!--<span>卫浴</span>{{facilityArray[5]}}-->
        <!--</span>-->
        <!---->
        <!--<span class="van-ellipsis">-->
          <!--<span>窗户</span>有-->
        <!--</span>-->
      </div>
      <!--中间分割块-->
      <div class="separate"></div>
      <div class="time">
        <h3>预订时间</h3>
        <p>提前{{stay.abolitionDays}}天{{stay.specificPoints}}前预订</p>
      </div>
      <!--中间分割块-->
      <div class="separate"></div>
      <div class="condition">
        <h3>退改政策</h3>
        <p class='blue' v-if="stay.abolitionRules==1">{{stay.abolitionRules==1?'有条件退':stay.abolitionRules==2?'随时退':stay.abolitionRules==3?'不可退':''}}</p>
        <div v-if="stay.abolitionRules==1">
          最晚{{stay.abolitionDays}}天{{stay.specificPoints}}以前可免费取消和修改，过此时间变更/取消或者未消费，将扣除您全额或部分费用.
        </div>
        <p class='green' v-if="stay.abolitionRules==2">{{stay.abolitionRules==1?'有条件退':stay.abolitionRules==2?'随时退':stay.abolitionRules==3?'不可退':''}}</p>
        <div v-if="stay.abolitionRules==2">
          该产品支持随时退。如需取消，请登录三乡工程网账户申请取消，经核实未使用，可免费取消。
        </div>
        <p class='orang' v-if="stay.abolitionRules==3">{{stay.abolitionRules==1?'有条件退':stay.abolitionRules==2?'随时退':stay.abolitionRules==3?'不可退':''}}</p>
        <div v-if="stay.abolitionRules==3">
          订单预订/支付成功后，不可取消修改，若未按时入住，我们将扣除您全额或部分费用。
        </div>
      </div>
      <div class="separate"></div>
      <div class="time">
        <h3>使用规则</h3>
        <p>{{stay.serviceRegulations || '暂无'}}</p>
      </div>
      <div class="bottom clear">
        <div>
          <span class="price">￥{{stay.bookingPrice}}</span>
          <span >￥{{stay.listingPrice}}元</span>
        </div>
        <p>
          <span @click="submit">
          立即预定
        </span>
        </p>
      </div>
    </div>
</template>

<script>
  import Header from "com/common/Header2"
    export default {
        name: "innknow",
        data() {
            return {
              title:'购买须知',
              stay:{},
              detail:{},
              imgurl:'',
              facilityArray:[],
            }
        },
        components:{Header},
        methods: {
          submit(){//立即预定
            this.$router.push({
              name:'innBook',
              params:{
                id:this.stay.id,
              },
            })
          },
        },
        computed: {},
        created: function () {
          this.stay=JSON.parse(decodeURIComponent(this.$route.params.id));
          this.facilityArray=this.stay.roomFacilities.split(',');

          this.detail=JSON.parse(decodeURIComponent(this.$route.params.de));

        },
        mounted: function () {
        },

    }
</script>

<style scoped lang="less" type="text/less">
  .innknow{
    .top{
      height: 4.5rem;
    }
    .bed{
      margin: 0 0.2rem;
      a{
      display: block;
        font-size: 0.28rem;
        font-weight: bold;
      border-bottom: 0.01rem solid #e5e5e5;
        padding: 0.2rem 0;
    }
      div{
        padding: 0.2rem 0;
        span:first-child{
          color: red;
        }
        span:nth-child(2){
          text-decoration: line-through;
          color: grey;
        }
        span:nth-child(3){
          color: #ff6500;
          border: 0.01rem solid #ff6500;
          padding: 0 0.2rem;
        }
      }
    }
    //隔开
    .separate{
      height: 0.28rem;
      background-color: #f1f0f6;
    }
    //清单
    .list{
      margin: 0 0.2rem;
      padding: 0.2rem 0;
      &>span{
        display: inline-block;
        margin-bottom: 0.2rem;
        width: 3.5rem;
        span{
          width: 0.5rem;
          color: grey;
          margin-right: 0.2rem;
        }
      }
    }
    .time{
      padding: 0.2rem;
      h3{
        margin-bottom: 0.2rem;
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
