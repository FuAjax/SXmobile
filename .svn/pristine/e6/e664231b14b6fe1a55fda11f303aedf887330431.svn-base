<template>
  <div class="bottom">
    <van-tabs v-model="active">
      <van-tab v-for="(index,i) in houseList" :title="index.name">{{index.text}}</van-tab>
    </van-tabs>
  </div>
</template>

<script>
  export default {
    name: "Bootom",
    data() {
      return {
        active: 0,
        houseList: [
          {name: "同地区农房", text: "木兰山民宿农庄A"},
          {name: "周边街道农房", text: "木兰山民宿农庄B"},
          {name: "周边地区农房", text: "木兰山民宿农庄C"},
        ]
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .bottom {
    display: none;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    margin-bottom: 3rem;
  }

  .van-tabs /deep/ .van-tab--active {
    color: #ff6500;
  }

  .van-tabs /deep/ .van-tabs__line {
    background-color: #ff6500 !important;
  }
</style>
