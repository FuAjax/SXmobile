<template>
  <div>
    <div class="farm">
      <div class="top">周边农庄</div>
      <!--<div class="content">-->
      <!--<van-swipe :loop="false">-->
      <!--<van-swipe-item v-for="(item,i) in list" :key="i" class="swiper">-->
      <!--<router-link :to="{name:'dealDetail',params:{id:item.farmhouseRentalsNumber}}">-->
      <!--<img :src="item.fileURL" alt="" srcset=""/>-->
      <!--<div class="add">{{item.farmhouseTitle}}</div>-->
      <!--<div class="bot">-->
      <!--<div class="price">{{item.rentingPrice}}万元</div>-->
      <!--<div class="year">{{item.rentingYears}}年</div>-->
      <!--<div class="meters">{{item.coveredArea}}平</div>-->
      <!--</div>-->
      <!--</router-link>-->
      <!--</van-swipe-item>-->
      <!--</van-swipe>-->
      <!--</div>-->
      <div class="grange" style="overflow: hidden">
        <scroll ref="scroll" class="content">
          <div :style="'width:' + list.length * 3.9 + 'rem'">
            <router-link v-for="(item,index) in list" :to="{name:'grangedetail',params:{id:item.grangeNumber}}" class="swiper">
              <div style="width: 3rem; display: inline-block; padding-right: .2rem"  @click="goNext">
                <div v-if='item.grangeLogourl'
                     :style="'background:url(' + item.grangeLogourl + ');width: 100%;height: 2rem;background-size:cover;background-position: center center'"></div>
                <div class="add">{{item.grangeTitle}}</div>
                <div class="bot">
                  <rates :rate="item.grangeMark"></rates>
                  <div class="meters">{{item.grangeMark}}分</div>
                  <div class="position">{{item.grangeArea}}</div>
                </div>
                <div class="price">￥{{item.grangePrice}}起</div>
              </div>
            </router-link>
          </div>
        </scroll>
      </div>

    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
  import Scroll from '../../../../common/swiperX'
  import rates from '../../../../common/rates'

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
      Scroll,
      rates
    },
    methods:{
      goNext(){
        // this.$router.go(0)
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";

  .content {
    .swiper {
      margin-right: 0.17rem;
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
    position: relative;
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

      .price {
        position: absolute;
        left: 0.11rem;
        bottom: 0.6rem;
        padding: 0.05rem 0.2rem;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        font-size: 0.18rem;
        border-radius: 0.3rem;
      }
      .bot {
        font-size: 0.22rem;
        .star {
          float: left;
        }
        .meters {
          color: @mr;
          float: left;
          margin-left: 0.12rem;
          margin-top: 0.03rem;
        }
        .position {
          margin-top: 0.03rem;
          float: right;
          .hc()
        }
      }
    }
  }
</style>

