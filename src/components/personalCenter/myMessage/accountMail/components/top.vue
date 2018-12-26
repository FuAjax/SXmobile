<template>
  <div>
    <div class="top">
      <p>解绑邮箱</p>
      <div class="iconfont icon-jiantou"></div>
      <p>绑定邮箱</p>
      <div class="iconfont icon-jiantou"></div>
      <p>完成</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "top",
    data() {
      return {}
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";
  .top{
    height: 0.98rem;
    width: 100%;
    border-bottom: 0.01rem solid #e7e6ec;
    border-top: 0.01rem solid #e7e6ec;
    background-color: #f1f0f6;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.27rem;
    .hc();
    p,div{
      margin-right: 0.25rem;
    }
    p:nth-child(1){
      color: #04b437;
    }
    .iconfont:nth-child(2){
      color: #04b437;

    }
  }
</style>
