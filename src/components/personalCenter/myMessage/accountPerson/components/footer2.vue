<template>
  <div>
    <p> 添加</p>
  </div>
</template>

<script>
  export default {
    name: "footer2",
    data() {
      return {}
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";

  div {
    padding: 0.3rem;
    p {
      width: 100%;
      height: 0.88rem;
      .jz();
      font-size: 0.35rem;
      color: #fff;
      background-color: @mr;
      border-radius: 0.15rem;
    }
  }
</style>
