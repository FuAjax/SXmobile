<template>
  <transition name="fade">
    <div class="goTop" v-show="goTopShow">
      <!-- <div class="home">
        <div class="iconfont icon-zhuye"></div>
      </div> -->
      <div class="backtop" @click="goTop">
        <div class="iconfont icon-huidaodingbu"></div>
      </div>
    </div>
  </transition>
</template>

<script>
  import methods from './m/goTop'

  export default {
    name: "goTop",
    data() {
      return {
        goTopShow: true,
        scrollTop: 0
      }
    },
    methods: methods,
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    }

  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../style/public.less";

  .goTop {
    position: fixed;
    right: 0.28rem;
    bottom: 2.02rem;
    z-index: 99;
    .home {
      width: 0.88rem;
      height: 0.88rem;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
      .jz();
      .iconfont {
        font-size: 0.39rem;
        color: #fff;
      }
    }
    .backtop {
      width: 0.88rem;
      height: 0.88rem;
      border-radius: 50%;
      background-color: @mr;
      margin-top: 0.2rem;
      .jz();
      .iconfont {
        color: #fff;
        font-size: 0.35rem;
      }
    }
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
