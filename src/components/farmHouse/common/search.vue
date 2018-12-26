<template>
  <div class="search">
    <router-link :to="{name:'search',query}" tag="div">
      <van-search placeholder="请输入区域/农房名称" />
    </router-link>

    <router-link :to="{name:'farmMap'}">
      <div class="btn">{{map}}</div>
    </router-link>

  </div>
</template>

<script>
  export default {
    name: "Search",
    data() {
      return {
        map: "地图找房"
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .search {
    margin-top: 1rem;
    background-color: #f6f5fb;
    height: 0.95rem;
    padding: 0.21rem 0.2rem 0.01rem;
    .van-search {
      width: 5.02rem;
      background-color: #f6f5fb !important;
      height: 0.56rem;
      float: left;
      input::placeholder {
        /* placeholder颜色  */
        color: #aab2bd;
        /* placeholder字体大小  */
        font-size: 12px;
        /* placeholder位置  */
        text-align: right;
      }
    }
    .van-search /deep/ .van-field__control {
      font-size: 0.23rem;
      color: #69696b;
    }
    .van-search /deep/ .van-field {
      box-shadow: 0.1rem 0.1rem 0.1rem #d4d3d8;
      border-radius: 1.1rem;
    }
    .btn {
      float: right;
      width: 1.77rem;
      height: 0.58rem;
      line-height: 0.58rem;
      text-align: center;
      color: #d4efce;
      background-color: #00b234;
      font-size: 0.24rem;
      border-radius: 1.1rem;
      margin-right: 0.2rem;
    }
  }
</style>
