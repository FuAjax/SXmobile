<template>
  <div class="bottom">
    <van-tabs v-model="active">
      <van-tab title="热门类别">


        <p v-for="(item,k) in hotTag">
          <router-link :to="{name:'textList',params:{restful:item.restful}}">
            {{item.name}}
          </router-link>
        </p>

      </van-tab>
      <van-tab title="热门标签">
        <span v-for="(itel,k) in hotColumn">
          <router-link :to="{name:'label',params:{restful:itel.restful}}">
          {{itel.name}}
               </router-link>
        </span>
      </van-tab>
      <van-tab title="咨询分类">
        <span v-for="(itel,k) in consultType">
          <router-link :to="{name:'consultList',params:{restful:itel.restful}}">
          {{itel.name}}
               </router-link>
        </span>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  export default {
     name: "Bootom",
    props: {
      hotTag: {
        type: Array,
        require: true
      },
      hotColumn: {
        type: Array,
        require: true
      },
      consultType: {
        type: Array,
        require: true
      }
    },
    data() {
      return {
        active: 0,
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../style/public.less";

  .van-tabs /deep/ .van-tab--active {
    color: #ff6500;
  }

  .van-tabs /deep/ .van-tabs__line {
    background-color: #ff6500 !important;
  }

  .bottom {
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    margin-bottom: 0.21rem;

  }

  .van-tabs /deep/ .van-tabs__content {
    margin-top: 0.3rem;
    min-height: 0.2rem;
    overflow: auto;
    .van-tab__pane {
      display: flex;
      flex-wrap: wrap;
    }

    p {
      width: 30.73%;
      height: 0.85rem;
      border: 0.01rem solid #e6e6e6;
      line-height: 0.85rem;
      text-align: center;
      font-size: 0.26rem;
      color: #39383e;
      background-color: #faf9ff;
    }
    span {
      padding: 0 0.46rem;
      font-size: 0.27rem;
      color: #fff;
      background-color: @mr;
      border-radius: 0.1rem;
      float: left;
      margin-right: 0.2rem;
      height: 0.5rem;
      line-height: 0.5rem;
      margin-bottom: 0.31rem;
      a{
        color: #fff;
      }
      &:nth-child(2) {
        background-color: #31b9a1;
      }
      &:nth-child(3) {
        background-color: #06a3ea;
      }
      &:nth-child(4) {
        background-color: #53658b;
      }
      &:nth-child(5) {
        background-color: #53658b;
      }
      &:nth-child(6) {
        background-color: #ff9f1c;
      }
      &:nth-child(7) {
        background-color: #df5c9e;
      }
      &:nth-child(8) {
        background-color: #06a3ea;
      }
      &:nth-child(9) {
        background-color: #53658b;
      }
    }
  }
</style>
