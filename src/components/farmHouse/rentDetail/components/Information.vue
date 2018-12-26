<template>
  <div>
    <div class="information">
      <div class="top">
        <div class="message">
          <van-row type="flex" justify="space-around">
            <van-col span="20"><p>房屋户型</p>
              <p>{{detail.houseType}}</p></van-col>
            <van-col span="20"><p>楼层</p>
              <p>{{detail.floor}}层</p></van-col>
          </van-row>
          <van-row type="flex" justify="space-around">
            <van-col span="20"><p>建筑面积</p>
              <p>{{detail.coveredArea}}平</p></van-col>
            <van-col span="20"><p>房屋类型</p>
              <p>{{detail.houseType}}</p></van-col>
          </van-row>
          <van-row type="flex" justify="space-around">
            <van-col span="20"><p>宅基地面积</p>
              <p>{{detail.curtilageArea}}平</p></van-col>
            <van-col span="20"><p>建筑结构</p>
              <p>{{detail.buildingStructure}}</p></van-col>
          </van-row>
          <van-row type="flex" justify="space-around">
            <van-col span="20"><p>房屋朝向</p>
              <p>{{detail.houseOrientation}}</p></van-col>
            <van-col span="20"><p>建筑年代</p>
              <p>{{detail.buildingStructure}}年</p></van-col>
          </van-row>
          <van-row type="flex" justify="space-around">
            <van-col span="20"><p>装修情况</p>
              <p>{{detail.decorationSituation}}</p></van-col>
            <van-col span="20"><p>土地性质</p>
              <p>{{detail.landCharacteristic}}</p></van-col>
          </van-row>
        </div>
      </div>
      <!--<div class="btnbox">-->
      <!--<div class="btn" v-for="(item,k) in detail.characteristics" :key="k">{{item}}</div>-->
      <!--</div>-->
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
    min-height: 3rem;
    padding: 0.42rem 0.3rem 0.18rem 0.3rem;
    overflow: auto;
    .top {
      height: 3.9rem;
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
            color: #030305;
          }
          &:nth-child(2n+2) {
            color: #b4b4b4;
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
