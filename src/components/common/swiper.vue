<template>
  <div>
    <div class="total">
      <div class="left">
        <p>{{p1}}</p>
        <span>{{p2}}</span>
      </div>
      <van-swipe
        :autoplay="3000"
        vertical
        :show-indicators="false">
        <van-swipe-item v-for="(item,i) in detail.news" :key="i" class="swiper">
          <router-link :to="{name:'textDetail',params:{id:item.id}}">
            <p class="iconfont icon-dian"></p>
            <p>{{item.informationTitle}}</p>
          </router-link>
        </van-swipe-item>
      </van-swipe>

    </div>
    <div class="blank"></div>
  </div>


</template>

<script>
  export default {
    name: "Swiper",
    props: {
      detail: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        p1: "三乡",
        p2: "政策"
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../style/public.less";

  .blank {
    .jg()
  }

  .total {
    height: 1rem;
    padding: 0.3rem;
    .left {
      width: 15.4%;
      float: left;
      font-size: 0.28rem;
      font-style: oblique;
      p {
        color: @mr;
        margin-bottom: 0.13rem;
        font-weight: 600;
      }
    }
  }

  .van-swipe {
    height: 0.76rem;
    line-height: 0.44rem;
    .iconfont {
      float: left;
      height: 0.76rem;
    }
  }

  .van-swipe /deep/ .swiper van-swipe-item {
    height: 0.76rem;
  }

  .van-swipe /deep/ .router-link-active {
    font-size: 0.25rem !important;
  }
</style>
