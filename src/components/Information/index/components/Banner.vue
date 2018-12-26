<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item,i) in banner" :key="i" class="swiper">
        <!--<router-link :to="{name:'textDetail',params:{goodsID:item.goodsID}}">-->
          <img :src="item.bannerImgurl" alt="" srcset=""/>
        <!--</router-link>-->
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
  export default {
    name: "Swiper",
    props: {
      banner:{
        type:Array,
        require:true
      }
    },
    data() {
      return {

      }
    },

    methods: {}
  }
</script>

<style scoped lang="less" type="text/less">
  .van-swipe {
    /*margin-top: 0.92rem;*/
    height: 4.02rem;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }

</style>
