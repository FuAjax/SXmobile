<template>
  <div>
    添加联系人
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
  div{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.27rem;
    height: 1rem;
    color: #fff;
    background-color: @mr;
    position: fixed;
    left: 0;
    bottom: 0%;
  }
</style>
