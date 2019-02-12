<template>
  <div class="banner">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item,i) in list" :key="i" class="swiper">
        <!--<router-link :to="{name:'item.bannerSkipurl'}">-->
          <img :src="item.bannerImgurl" alt="" srcset=""/>
        <!--</router-link>-->
      </van-swipe-item>
    </van-swipe>
    <div class="field clear"  v-if="areapp==undefined">
      <div class="inputt" @click="tosearch">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="请输入区域/农房/景区">
      </div>
      <router-link tag="div" :to="{name:'farmMap'}" class="room">地图找房</router-link>
      <router-link tag="div" :to="{name:'issueFarm'}" class="issue">发布农房</router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Swiper",

    props:{
      list:{
        type:Array,
        required:true
      },
      areapp:null,
    },
    data() {
      return {
        type: null
      }
    },
    created:function(){

      this.type = this.$proType;
    },
    methods: {

      tosearch(){
        this.$router.push({
          path:'/search',
          query:{name:'农房',to:'rentList'}
        })
      }
    },

  }
</script>

<style scoped lang="less" type="text/less">
  .banner{
    position: relative;
  }
  .van-swipe {
    height: 4.02rem;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
  .field{
    position: absolute;
    top: 0.2rem;
    width: 7rem;
    left: 50%;
    transform: translateX(-50%);
    &>div{
      float: left;
      margin-left: 0.1rem;
    }
    .inputt{
      margin-left: 0;
      padding-top: 0.1rem;
      width: 3.71rem;
      height: 0.53rem;
      border-radius: 0.54rem;
      background-color: white;
      text-align: center;
      box-sizing: border-box;
      i{
        font-size: 0.3rem;
        vertical-align: middle;
      }
      input{
        outline: none;
        vertical-align: middle;
        height: 56%;
        width: 2.8rem;
        border: none;
        font-size: 0.2rem;
      }
    }
    .room{
      height: 0.53rem;
      width: 1.53rem;
      background-color: #00b034;
      border-radius: 0.53rem;
      font-size: 0.2rem;
      text-align: center;
      line-height: 0.53rem;
      color: #d5eed1;
    }
    .issue{
      height: 0.53rem;
      width: 1.53rem;
      background-color:#ff6400;
      border-radius: 0.53rem;
      font-size: 0.2rem;
      text-align: center;
      line-height: 0.53rem;
      color: #d5eed1;
    }
  }
</style>
