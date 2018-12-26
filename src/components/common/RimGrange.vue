<template>
  <div>
    <div class="grange">
      <div class="top">
        <div class="left">周边农庄</div>
        <div class="right">
          <div class="btn" v-for="(index,i) in btnList" :key="i">{{index.name}}</div>
        </div>
      </div>
      <div class="content">
        <van-swipe :loop="false">
          <van-swipe-item v-for="(item,i) in list" :key="i" class="swiper">
            <router-link :to="{name:'grangedetail',params:{id:item.grangeNumber}}">
              <img :src="item.grangeLogourl" alt="" srcset=""/>
              <div class="add">{{item.grangeTitle}}</div>
              <div class="bot">
                <rates :rate="item.grangeMark"></rates>
                <div class="meters">{{item.grangeMark}}分</div>
                <div class="position">{{item.grangeArea}}</div>
              </div>
              <div class="price">￥{{item.grangePrice}}起</div>
            </router-link>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
  import rates from '../common/rates'
  import Scroll from '../common/swiperX'
  export default {
    name: "RimGrange",
    props: {
      list: {
        type: Array,
        required: true
      },
    },
    data() {
      return {
      }
    },
    components: {
      rates,
      Scroll
    },

  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../style/public.less";

  .blank {
    .jg();
  }

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
  }

  .content /deep/ .van-swipe {
    min-height: 2.89rem !important;
  }

  .grange {
    padding: 0.42rem 0.3rem;
    .top {
      .tt();
      float: none;
      height: 0.72rem;
      .left {
        float: left;
      }
      .right {
        float: right;
        .btn {
          float: left;
          padding: 0.08rem 0.32rem;
          background-color: @mr;
          border-radius: 0.2rem;
          font-size: 0.23rem;
          color: #fff;
          &:nth-child(2), &:nth-child(3) {
            background-color: @bc;
            color: #636268;
          }
        }
      }
    }
    .content {
      .swiper {
        position: relative;
        .price {
          position: absolute;
          left: 0.11rem;
          bottom: 0.1rem;
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
  }

  .star {
    color: #ff6500 !important;
    i {
      vertical-align: middle;
    }
  }
</style>
