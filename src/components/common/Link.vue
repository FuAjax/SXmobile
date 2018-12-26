<template>
  <div>
    <div class="link">
      <p>{{position}}</p>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
  export default {
    name: "Link",
    data() {
      return {
        position: "[武汉]>三乡工程网"
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../style/public.less";
  .blank{
    .jg();
  }
  .link{
    padding: 0.3rem;
    font-size: 0.24rem;
    .hc();
    line-height: 0.46rem;
  }
</style>
