<template>
  <footer>
    <p>{{confirm}}</p>
  </footer>
</template>

<script>
  export default {
    name: "footer",
    data() {
      return {
        confirm: "确定预约"
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";

  footer {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 1rem;
    width: 100%;
    background-color: @mr;
    p {
      font-size: 0.36rem;
      margin: 0 auto;
      color: #fff;
      line-height: 1rem;
      text-align: center;
    }
  }
</style>
