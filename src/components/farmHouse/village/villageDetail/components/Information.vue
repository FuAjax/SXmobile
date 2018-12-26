<template>
  <div>
    <div class="information">
      <div class="header">{{message}}</div>
      <div class="top">
        <div class="message">
          <van-row type="flex" justify="space-around">
            <van-col span="20">
              <p>出租均价</p>
              <p class="price">{{detail.rentingAverage}}万元/年</p>
            </van-col>
            <van-col span="20"><p>编号</p>
              <p>{{detail.villageNumber}}</p>
            </van-col>
          </van-row>

          <van-row type="flex" justify="space-around">
            <van-col span="20">
              <p>户数</p>
              <p>{{detail.residence}}户</p>
            </van-col>
            <van-col span="20"><p>人口</p>
              <p>{{detail.peopleNumber}}人</p>
            </van-col>
          </van-row>


          <van-row type="flex" justify="space-around">
            <van-col span="20">
              <p>国土面积</p>
              <p>{{detail.landArea}}亩</p>
            </van-col>
            <van-col span="20"><p>耕地面积</p>
              <p>{{detail.agriculturalAcreage}}亩</p>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
    <div class="blank"></div>
  </div>

</template>

<script>
  export default {
    name: "Information",
    props: {
      detail: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        houseList: [
          {name: "出租均价", mation: "1.2万元/年"},
          {name: "编号", mation: "2000002"},
          {name: "户数", mation: "100户"},
          {name: "人口", mation: "1000人"},
          {name: "国土面积", mation: "1000亩"},
          {name: "耕地面积", mation: "1000亩"},
        ],
        message: "村庄信息"
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";

  .blank {
    .jg();
  }

  .information {
    min-height: 2rem;
    padding: 0.42rem 0.3rem 0.18rem 0.3rem;
    .top {
      min-height: 2.45rem;
      overflow: auto;
      margin-top: 0.46rem;
      .message {
        p {
          margin-bottom: 0.44rem;
          float: left;
          margin-right: 0.12rem;
          font-size: 0.25rem;
          width: 1.6rem;
          &:nth-child(2n+0) {
            margin-left: -0.3rem;
            /*margin-right: 0.7rem;*/
          }
          &:nth-child(4n+0) {
            margin-left: -0.3rem;
            margin-right: 0;
          }
          &:nth-child(2n+1) {
            color: #030305;
          }
          &:nth-child(2n+2) {
            color: #b4b4b4;
            /*margin-right: 0.38rem;*/
            font-weight: 600;
          }
        }
      }
    }
    .header {
      .tt();
      .bt();
      float: inherit;
      height: 0.6rem;
    }
    .price {
      color: red !important;
    }
  }
</style>

