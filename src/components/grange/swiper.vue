<template>
  <div class="swiper_wrap">
    <!--轮播图--->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(img,index) in img" :keys="index">
         <router-link :to="{path:img.bannerSkipurl}">
           <img :src="img.bannerImgurl">
         </router-link>
      </van-swipe-item>
    </van-swipe>
    <!--输入框-->
    <!--v-if="type==3"-->
    <div class="field clear" v-if="areapp==undefined">
      <div class="inputt" @click="tosearch">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="请输入区域/农庄/景区">
      </div>
      <router-link tag="div" :to="{name:'mapFindGrange'}" class="room">地图找房</router-link>
      <router-link tag="div" :to="{name:'issueGrange'}" class="issue">发布农庄</router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "swiper",
          props:{
            img:Array,
            areapp:null,
          },
        data() {
            return {
              type:null,
            }
        },
        methods: {
          tosearch(){
            this.$router.push({
              path:'/search',
              query:{name:'农庄',to:'sharePlay'}
            })
          }
        },
        computed: {},
        created: function () {
          this.type = this.$proType;
        },
        mounted: function () {
        console.log(this.areapp)
        },

    }
</script>

<style scoped lang="less" type="text/less">
.swiper_wrap{
  position: relative;
  .van-swipe{
    height: 100%;
    img{
      height: 100%;
    }
  }
  height: 4.02rem;
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
}
</style>
