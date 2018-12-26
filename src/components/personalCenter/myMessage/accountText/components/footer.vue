<template>
  <div class="footer">
    <div class="iconfont icon-ricicle"></div>
    <p>全选</p>
    <p>全部删除</p>
  </div>
</template>

<script>
  export default {
    name: "footer",
    data() {
      return {}
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";

  .footer {
    width: 100%;
    height: 0.52rem;
    position: fixed;
    left: 0;
    bottom: 0;
    font-size: 0.3rem;
    padding: 0.24rem 0.31rem;
    .iconfont {
      font-size: 0.35rem;
      color: #b5b4ba;
      float: left;
      margin-right: 0.22rem;
      margin-top: 0.06rem;

    }
    p {
      float: left;
      color: #606060;
      &:nth-child(3) {
        .button();
        background-color: #ff6400;
        color: #fff;
        padding: 0.17rem 0.32rem;
        border-radius: 0.3rem;
      }
      &:nth-child(2) {
        margin-top: 0.06rem;
        margin-right: 0.41rem;
      }
    }
  }
</style>
