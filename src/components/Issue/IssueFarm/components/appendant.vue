<template>
  <div>
    <div class="blank"></div>
    <div class="appendant">
      <div class="bot">
        <div class="left">
          <div class="iconfont icon-ricicle"></div>
          <p>院子</p>
        </div>
        <div class="middle">
          <p>请填写</p>
        </div>
        <div class="right">
          <p>平方米</p>
        </div>
      </div>
      <div class="bot">
        <div class="left">
          <div class="iconfont icon-ricicle"></div>
          <p>菜地</p>
        </div>
        <div class="middle">
          <p>勾选后填写</p>
        </div>
        <div class="right">
          <p>平方米</p>
        </div>
      </div>
      <div class="bot">
        <div class="left">
          <div class="iconfont icon-ricicle"></div>
          <p>池塘</p>
        </div>
        <div class="middle">
          <p>勾选后填写</p>
        </div>
        <div class="right">
          <p>平方米</p>
        </div>
      </div>
      <div class="bot">
        <div class="left">
          <div class="iconfont icon-ricicle"></div>
          <p>阳光房</p>
        </div>
        <div class="middle">
          <p>勾选后填写</p>
        </div>
        <div class="right">
          <p>平方米</p>
        </div>
      </div>
      <div class="bot">
        <div class="left">
          <div class="iconfont icon-ricicle"></div>
          <p>外挂厨卫</p>
        </div>
        <div class="middle">
          <p>勾选后填写</p>
        </div>
        <div class="right">
          <p>平方米</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "appendant",
    data() {
      return {}
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";

  .blank {
    .jg()
  }

  .appendant {
    padding: 0 0.3rem;
    .bot {
      height: 0.26rem;
      padding: 0.3rem 0;
      .bt();
      .left {
        float: left;
        width: 2rem;
        margin-right: 0.23rem;
        .iconfont {
          .xx();
          margin-right: 0.3rem;
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
  }
</style>
