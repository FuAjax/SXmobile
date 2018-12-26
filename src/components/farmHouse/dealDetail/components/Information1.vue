<template>
  <div>
    <div class="information">
      <div class="title">农房成交信息</div>
      <div class="top">
        <div class="message">
          <van-row type="flex" justify="space-around">
            <van-col span="20">
              <p>成交时间</p>
              <p>{{detail.turnoverTime}}</p>
            </van-col>
            <van-col span="20">
              <p>成交价格</p>
              <p>{{detail.turnoverPrice}}万元/年</p>
            </van-col>
          </van-row>

          <van-row type="flex" justify="space-around">
            <van-col span="20">
              <p>出租年限</p>
              <p>{{detail.frentingYears}}</p>
            </van-col>
            <van-col span="20">
              <p>租赁用途</p>
              <p>{{detail.leasehold}}</p>
            </van-col>
          </van-row>

          <van-row type="flex" justify="space-around">
            <van-col span="20">
              <p>成交渠道</p>
              <p>{{detail.transactionChannel}}</p>
            </van-col>
            <van-col span="20">
              <p>成交周期</p>
              <p>{{detail.turnoverTime}}</p>
            </van-col>
          </van-row>

          <van-row type="flex" justify="space-around">
            <van-col span="20">
              <p>出租方式</p>
              <p>{{detail.rentingStyle}}</p>
            </van-col>
            <van-col span="20">
              <p>带看</p>
              <p>{{detail.numberTimes}}次</p>
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
        type: String,
        required: true
      }
    },
    data() {
      return {
        houseList: [
          {name: "房屋类型", mation: "4居2厅2卫1阳"},
          {name: "建筑面积", mation: "160平方米"},
          {name: "宅基地面积", mation: "200平方米"},
          {name: "房屋朝向", mation: "朝南"},
          {name: "装修情况", mation: "精装"},
          {name: "楼层", mation: "共2层"},
          {name: "房屋类型", mation: "别墅"},
          {name: "建筑结构", mation: "砖混结构"},
          {name: "建筑年代", mation: "2008年"},
          {name: "土地性质", mation: "集体土地"}
        ],
        btnList: [
          {name: "院子100平方米"},
          {name: "池塘100平方米"}
        ]
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";

  .blank {
    .jg();
  }

  .information {
    min-height: 2.71rem;
    padding: 0.42rem 0.3rem 0.18rem 0.3rem;
    overflow: auto;
    .title{
      .tt();
      font-weight: 500;
      height: 0.2rem;
      float: inherit;
      margin-bottom: 0.44rem;
    }
    .top {
      min-height: 2rem;
      overflow: auto;
      //.bt();
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
            color: #b4b4b4;
          }
          &:nth-child(2n+2) {
            color: #030305;
            margin-right: 0.38rem;
          }
        }
      }
    }

    .btnbox {
      margin-top: 0.19rem;
      .btn {
        float: left;
        padding: 0.08rem 0.25rem;
        text-align: center;
        line-height: 0.23rem;
        font-size: 0.24rem;
        border-radius: 0.2rem;
        margin-right: 0.1rem;
        &:nth-child(1) {
          color: #00b02a;
          background-color: #ebf8ee;
        }
        &:nth-child(2) {
          color: #219cea;
          background-color: #e3f5ff;
        }
      }
    }
  }
</style>
