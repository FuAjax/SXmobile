<template>
  <div>
    <div class="blank"></div>
    <div class="supporting">
      <div class="top">
        <div class="iconfont icon-xingxing"></div>
        <p>出租用途</p>
      </div>
      <div class="btn" v-for="(index,i) in btnList" :key="i">{{index.name}}</div>

    </div>
    <div class="bot bot10">
      <div class="left">
        <div class="iconfont icon-xingxing"></div>
        <p>出租价格</p>
      </div>
      <div class="middle">
        <div class="btn">万元/年</div>
        <div class="btn">面议</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "supporting",
    data() {
      return {
        btnList: [
          {name: "冰箱"},
          {name: "冰箱222321"},
          {name: "冰箱"},
          {name: "冰箱333"},
          {name: "冰箱444"},
          {name: "冰箱7788787"},
        ]
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";

  .blank {
    .jg()
  }

  .supporting {
    min-height: 1rem;
    overflow: auto;
    .bt();
    padding: 0 0.3rem;
    .top {
      height: 1rem;
      line-height: 1rem;
      .iconfont {
        .xx();
      }
      p {
        float: left;
        font-size: 0.28rem;
      }
    }
    .btn {
      float: left;
      margin-bottom: 0.3rem;
      overflow: auto;
      padding: 0.15rem 0.54rem;
      border-radius: 0.3rem;
      background-color: @mr;
      color: #fff;
      font-size: 0.27rem;
      margin-right: 0.21rem;
    }

  }
  .bot {
    height: 0.26rem;
    padding: 0.3rem 0.3rem;
    .bt();
    .left {
      float: left;
      width: 2rem;
      margin-right: 0.23rem;
      .iconfont {
        .xx();
        font-size: 0.35rem;
        color: @mr;
      }
      p {
        font-size: 0.27rem;
        color: #2b2b2d;
        float: left;
      }
    }
    .middle {
      float: left;
      font-size: 0.27rem;
      .hc();
    }
    .right {
      float: right;
      .iconfont {
        font-size: 0.29rem;
        color: #bababc;
      }
    }
  }
  .bot10 {
    .middle {
      margin-top: -0.1rem;
      .btn {
        float: left;
        border-radius: 1.2rem 0 0 1.2rem;
        width: 1.3rem;
        height: 0.48rem;
        line-height: 0.48rem;
        text-align: center;
        background-color: #ff6400;
        color: #fff;
        &:nth-child(2){
          border-radius:  0 1.2rem 1.2rem  0 ;
          background-color: #e7e6ec;
          .hc();
        }
      }
    }
  }
</style>
