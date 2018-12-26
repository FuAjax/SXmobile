<template>
  <div class="bottom">
    <div class="topBar">
    <Header :title='title' />
    </div>
    <div style="width:100%; height:.92rem;"></div>
    <van-tabs v-model="active" @click="onClick">
      <van-tab v-for="(index,i) in houseList" :title="index.title">
      </van-tab>
    </van-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "../common/header2"
export default {
    components:{
        Header
    },
    name: "Issue",
    data() {
      return {
        title: '发布',
        active: 0,
        houseList: [
          {
            title: "发布农房",
            name: "farm",
          },
          {
            title: "发布求租",
            name: "grange",
          },
          {
            title: "发布农庄",
            name: "wanted",
          }
        ]
      }
    },
    methods: {
      onClick(index, title) {
        if (index == 0) {
          this.$router.push({path: '/Issue/farm'});
        } else if (index == 1) {
          this.$router.push({path: "/Issue/grange"})
        } else if (index == 2) {
          this.$router.push({path: "/Issue/wanted"})
        }
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .bottom {
    /*padding-left: 0.3rem;*/
    /*padding-right: 0.3rem;*/
    margin-bottom: 0.5rem;
  }

  .van-tabs /deep/ .van-tab--active {
    color: #ff6500;
  }

  .van-tabs /deep/ .van-tabs__line {
    background-color: #ff6500 !important;
  }
</style>
