<template>
  <div>
    <div class="blank"></div>
    <div class="supporting">
      <div class="top">
        <div class="iconfont icon-xingxing"></div>
        <p>房屋配套</p>
      </div>
      <div class="btn" v-for="(index,i) in btnList" :key="i">{{index.name}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "supporting",
    data() {
      return {
        btnList: [
          {name: "冰箱"},
          {name: "冰箱222321"},
          {name: "冰箱"},
          {name: "冰箱333"},
          {name: "冰箱444"},
          {name: "冰箱7788787"},
        ]
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";

  .blank {
    .jg()
  }

  .supporting {
    min-height: 1rem;
    overflow: auto;
    .bt();
    padding: 0 0.3rem;
    .top {
      height: 1rem;
      line-height: 1rem;
      .iconfont {
        .xx();
      }
      p {
        float: left;
        font-size: 0.28rem;
      }
    }
    .btn {
      float: left;
      margin-bottom: 0.3rem;
      overflow: auto;
      padding: 0.15rem 0.54rem;
      border-radius: 0.3rem;
      background-color: @mr;
      color: #fff;
      font-size: 0.27rem;
      margin-right: 0.21rem;
    }
  }
</style>
