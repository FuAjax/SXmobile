<template>
  <div>
    <div class="amend">
      <p>下一步</p>
    </div>
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
  .amend{
    padding: 0.37rem 0.31rem 0 0.31rem ;
    border-top:1px solid @bc ;
    p{
      height: 0.89rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.34rem;
      border-radius: 0.1rem;
      color: #fff;
      background-color: @mr;
    }
  }
</style>
