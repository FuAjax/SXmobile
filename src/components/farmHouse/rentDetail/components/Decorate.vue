<template>
  <div>
    <div class="decorate">
      <div class="top">{{decorate}}</div>
      <!--<div class="content">-->
        <!--<van-swipe :loop="false">-->
        <!--<van-swipe-item v-for="(item,i) in list" :key="i" class="swiper">-->
        <!--<img :src="item.decorationLogo" alt="" srcset=""/>-->
        <!--<div class="add">当前农房装修价格</div>-->
        <!--<div class="bot">-->
        <!--<div class="price">约{{item.decorationPrice}}万</div>-->
        <!--<div class="mi">{{item.meters}}元/每平方米</div>-->
        <!--</div>-->
        <!--<div class="num">装修套餐{{item.id}}</div>-->
        <!--</van-swipe-item>-->
        <!--</van-swipe>-->
          <scroll ref="scroll" class="recommend-content">
            <div :style="'width:' + list.length * 3.2 + 'rem'">
              <router-link v-for="(item,index) in list" :to="{name:'rentList'}" class="specil_list">
                <div style="width: 3rem; display: inline-block; padding-right: .2rem">
                  <div style="font-size: 0.26rem; text-align: center" class="add">{{item.text}}</div>
                  <div v-if='item.decorationLogo'
                       :style="'background:url(' + item.decorationLogo + ');width: 100%;height: 2rem;background-size:cover;background-position: center center'"></div>
                  <div class="add">当前农房装修价格</div>
                  <div class="bot">
                  <div class="price">约{{item.decorationPrice}}万</div>
                  <div class="mi">{{item.meters}}元/每平方米</div>
                  </div>
                  <div class="num">装修套餐{{item.id}}</div>
                </div>
              </router-link>
            </div>
          </scroll>
      <!--</div>-->
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
  import Scroll from '../../../common/swiperX'

  export default {
    name: "Decorate",
    props: {
      list: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        decorate: "装修套餐",
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";

  .blank {
    .jg()
  }

  .decorate {
    padding: 0.43rem 0.3rem 0.39rem 0.3rem;
    min-height: 4rem;
    overflow: auto;

    .top {
      font-size: 0.32rem;
      color: black;
      font-weight: 600;
    }
    .recommend-content{
      margin-top: 0.4rem;
      width: 3.02rem !important;
      height: 2.01rem !important;
      margin-right: 0.21rem;
      .specil_list{
        position: relative;
      }
      .num {
        position: absolute;
        bottom: 0.6rem;
        left: 0.1rem;
        padding: 0.08rem 0.2rem;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        font-size: 0.21rem;
        line-height: 0.21rem;
        text-align: center;
        border-radius: 0.2rem;

      }
      .add {
        font-size: 0.26rem;
        color: #000;
        margin-top: 0.2rem;
      }
      .bot {
        /*margin-top: 0.2rem;*/
        .price {
          float: left;
          font-size: 0.21rem;
          color: #e10005;
          font-weight: 600;
        }
        .mi {
          float: right;
          font-size: 0.21rem;
          color: #b5b5b7;
        }
      }
    }

    .content /deep/ .van-swipe {
      min-height: 3.3rem !important;

    }
  }
  .recommend-content {
    padding-bottom: 0.2rem;
  }
</style>
