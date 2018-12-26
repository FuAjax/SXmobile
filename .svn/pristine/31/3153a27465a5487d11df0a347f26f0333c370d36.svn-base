<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item,i) in list" :key="i" class="swiper">
          <img :src="item" alt="" srcset=""/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
  export default {
    name: "Swiper",
    props:{
      list:{
        type:Array,
        required:true
      }
    },
    data() {
      return {
        // list: [
        //   {goodsID: 1, imgSrc: "http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg"},
        //   {goodsID: 2, imgSrc: "http://07.imgmini.eastday.com/mobile/20180302/b293c7af30c8a9eba71d44fe49d21cbc.jpeg"},
        //   {goodsID: 3, imgSrc: "http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg"},
        //   {
        //     goodsID: 4,
        //     imgSrc: "http://img.idol001.com/origin/2017/06/20/36a6298c214e4cb4784ef0c5494428801497949779.jpg"
        //   },
        // ]
      }
    },

    // methods:{
    //   autoplay:5000
    // }
  }
</script>

<style scoped lang="less" type="text/less">
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

</style>
