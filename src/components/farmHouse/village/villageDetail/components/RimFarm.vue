<template>
  <div>
    <div class="farm">
      <div class="top">本村农房</div>
      <!--<div class="content">-->
        <!--<van-swipe :loop="false">-->
          <!--<van-swipe-item v-for="(item,i) in list" :key="i" class="swiper">-->
            <!--<router-link :to="{name:'dealDetail',params:{id:item.farmhouseRentalsNumber}}">-->
              <!--<img :src="item.url" alt="" srcset=""/>-->
              <!--<div class="add">{{item.farmhouseTitle}}</div>-->
              <!--<div class="bot">-->
                <!--<div class="price">{{item.rentingPrice}}万元</div>-->
                <!--<div class="year">{{item.rentingPrice}}年</div>-->
                <!--<div class="meters">{{item.floorSpace}}平</div>-->
              <!--</div>-->
            <!--</router-link>-->
          <!--</van-swipe-item>-->
        <!--</van-swipe>-->
      <!--</div>-->

      <scroll ref="scroll" class="content">
        <div :style="'width:' + list.length * 3.2 + 'rem'">
          <router-link v-for="(item,index) in list" :to="{name:'villageDetail',params:{id:item.villageNumber}}" >
            <!--<div class="swiper">-->
              <div style="width: 3rem; display: inline-block; padding-right: .2rem"  @click="goNext">
                <div v-if='item.fileUrl'
                     :style="'background:url(' + item.fileUrl + ');width: 100%;height: 2rem;background-size:cover;background-position: center center'"></div>
                <div class="add">{{item.villageName}}</div>
                <div class="bot">
                  <div class="price">{{item.rentFarmhouse}}万元</div>
                  <div class="year">{{item.rentingYears}}年</div>
                  <div class="meters">{{item.floorSpace}}平</div>
                </div>
              </div>
            <!--</div>-->

          </router-link>
        </div>
      </scroll>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
  import Scroll from '../../../../common/swiperX'
  export default {
    name: "RimFarm",
    props: {
      list: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
      }
    },
    components:{
      Scroll
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";

  .content {
    .swiper {
      display: inline-block;
      /*margin-right: 0.17rem;*/
    }
    .add {
      font-size: 0.26rem;
      color: #313133;
      margin-top: 0.08rem;
      width: 3rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  .content /deep/ .van-swipe__indicators {
    display: none !important
  }

  .content /deep/ .swiper {
    width: 3.02rem !important;
    height: 2.01rem !important;
  }

  .content /deep/ .van-swipe {
    min-height: 2.89rem !important;
  }

  .blank {
    .jg()
  }

  .farm {
    padding: 0.42rem 0.3rem;
    .top {
      .tt();
      float: none;
      height: 0.72rem;
    }
    .content {
      .bot {
        margin-top: 0.05rem;
        font-size: 0.23rem;
        .hc();
        .price {
          font-weight: 600;
          .rc();
          float: left;
        }
        .year {
          float: left;
          margin-left: 0.72rem;
          margin-right: 0.24rem;
        }
        .meters {
          float: right;
        }
      }
    }
  }
</style>
