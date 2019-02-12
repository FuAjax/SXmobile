<template>
  <div>
    <div class="content">
      <div class="header">{{specil}}</div>
      <div class="use">
        <div class="left">{{use}}</div>
        <div class="right">
          <div class="btnbox" v-for="(index,i) in detail.uses" :key="i">{{index}}</div>
        </div>
      </div>
      <div class="others">
        <div class="left">周边情况</div>
        <div class="right">
          <div class="others_text" v-for="(item,k) in landList" :key="k">
            <div class="distance">
              {{item.lanspacePlaceName}}
              {{(item.distance).toFixed(2)}}公里
            </div>
          </div>
        </div>
      </div>
      <div class="position">
        <div class="left">区位情况</div>
        <div class="right">
          <p>自然条件</p>
          <p> {{detail.naturalCondition}}</p>

          <p>绿化条件</p>
          <p>{{detail.greeningCondition}}</p>
          <p>污水处理情况</p>
          <p>{{detail.sewageCondition}}</p>
        </div>
      </div>
      <div class="transition">
        <div class="left">{{transition}}</div>
        <div class="right">
          <p>交通说明</p>
          <p>{{detail.transitRoute}}</p>
        </div>
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
  export default {
    name: "Specil",
    props: {
      detail: {
        type: String,
        required: true
      },
      landList:{
        type:Array,
        required: true
      }
    },
    data() {
      return {
        specil: "房屋特色",
        use: "出租用途",
        others: "周边情况",
        position: "区位情况",
        transition: "交通出行",
        btnList: [
          {name: "民宿"},
          {name: "农家乐农家乐"},
          {name: "民宿"},
          {name: "民宿"},
          {name: "民宿"},
        ],
        othersList: [
          {name: "竹博园"},
          {name: "“千年故杀”,灵异术2-3公里"},
          {name: "黄山10公里"},
        ],
        p1: "良好",
        p2: "良好",
        p3: "良好",
        trantext: "距离南京30公里，自驾50分钟。"
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";

  .blank {
    .jg();
  }

  .content {
    padding: 0.4rem 0.3rem 0rem 0.3rem;
    .header {
      height: 0.7rem;
      .bt();
      font-size: 0.32rem;
      color: black;
      font-weight: 600;
    }
    .use {
      min-height: 0.5rem;
      overflow: auto;
      padding-top: 0.26rem;
      .bt();
      .left {
        font-size: 0.27rem;
        .hc();
        float: left;
        height: 1.2rem;
        text-align: center;
        margin-right: 0.28rem;
      }
      .right {
        .btnbox {
          float: left;
          padding: 0.1rem 0.38rem;
          background-color: #ebf8ee;
          color: #15b14c;
          margin-right: 0.2rem;
          border-radius: 0.2rem;
          font-size: 0.22rem;
          margin-bottom: 0.2rem;
        }
      }
    }
    .others {
      min-height: 1.35rem;
      .bt();
      font-size: 0.27rem;
      .left {
        margin-top: 0.26rem;
        margin-right: 0.28rem;
        .hc();
        float: left;
        /*height: 1.2rem;*/
      }
      .right {
        .others_text {
          float: left;
          margin-top: 0.26rem;
        }
      }
    }
    .position {
      min-height: 2.45rem;
      .bt();
      .left {
        margin-top: 0.39rem;
        font-size: 0.25rem;
        font-weight: 600;
        color: #000;
        margin-right: 0.28rem;
      }
      .right {
        margin-top: 0.4rem;
        font-size: 0.25rem;
        float: left;
        p {
          float: left;
          margin-right: 0.3rem;
          margin-bottom: 0.45rem;
          &:nth-child(2n+1) {
            min-width:1.5rem;
            color: #9a9a9c;
          }
        }
      }
    }
    .transition {
      min-height: 1.35rem;
      .bt();
      .left {
        margin-top: 0.39rem;
        font-size: 0.25rem;
        font-weight: 600;
        color: #000;
      }
      .right {
        margin-top: 0.4rem;
        font-size: 0.25rem;
        float: left;
        p {
          float: left;
          &:nth-child(1) {
            margin-right: 0.3rem;
            color: #9a9a9c;
          }
        }
      }
    }
  }
  .others{
    min-height: 1.35rem;
    border-bottom: 0.02rem solid #e6e6e6;
    font-size: 0.27rem;
    overflow: auto;
    padding-bottom: 0.2rem;
    .distance{
      min-height: 0.2rem;
      overflow: auto;
      float: left;
    }
    .right{
      /*float: left;*/
      margin-left: 1.3rem;
    }
  }
</style>
