<template>
  <div class="banner">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item,i) in list.banner" :key="i" class="swiper">
          <img :src="item" alt="" srcset=""/>
      </van-swipe-item>

    </van-swipe>
    <div class="deal">
      <span>
        {{deal}}
      </span>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Swiper",
    props:{
      list:{
        type:String,
        required:true
      }
    },
    data() {
      return {
        deal: "已成交"
      }
    },

  }
</script>

<style scoped lang="less" type="text/less">
  .banner {

    .van-swipe {
      height: 4.02rem;
      width: 100%;
      margin-top: 0.92rem;
      img {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
    }
    position: relative;
    .deal {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      border-top: 1.41rem solid #0ab33c;
      border-right: 1.41rem solid transparent;
      color: #fff;
      font-size: 0.34rem;
      span {
        position: absolute;
        top: -1.44rem;
        left: 0.36rem;
        text-align: center;
        font-size: 0.25rem;
        color: #fff;
        transform: rotate(-45deg);
        -webkit-transform: rotate(40deg);
        font-weight: 600;

      }
    }
  }


</style>
