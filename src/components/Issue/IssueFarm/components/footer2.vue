<template>
  <div @click="next()">
    立即发布
  </div>
</template>

<script>
  export default {
    name: "footer",
    data() {
      return {}
    },
    methods: {
      next() {
        // this.$router.push({path: '/Issue/farm2'});
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";

  div {
    background-color: @mr;
    .jz();
    font-size: 0.35rem;
    color: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1rem;
  }
</style>
