<template>
  <div>
    <div class="message">
      <div class="top">
        商户信息
      </div>
      <div class="bot bot1">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>联系人</p>
        </div>
        <div class="middle">
          <p>请填写</p>
        </div>
        <div class="right">
          <div class="btn">先生</div>
          <div class="btn">女士</div>
        </div>
      </div>
      <div class="bot">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>详细位置</p>
        </div>
        <div class="middle">
          <p>请精确到门牌号</p>
        </div>
        <!--<div class="right">-->
          <!--<div class="iconfont"></div>-->
        <!--</div>-->
      </div>
      <div class="bot bot3">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>验证码</p>
        </div>
        <div class="middle">
          <p>请填写</p>
        </div>
        <div class="right">
          <p>获取验证码</p>
        </div>
      </div>
      <div class="bot">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>位置标注</p>
        </div>
        <div class="middle">
          <p>请选择</p>
        </div>
      </div>
      <div class="bot">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>位置标注</p>
        </div>
        <div class="middle">
          <p>请选择</p>
        </div>
      </div>
      <div class="bot">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>位置标注</p>
        </div>
        <div class="middle">
          <p>请选择</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "message",
    data() {
      return {}
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";

  .message {
    padding: 0 0.3rem;
    min-height: 1rem;
    overflow: auto;
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
    .bot3 {
      .right {
        p {
          padding: 0.12rem 0.28rem;
          background-color: @mr;
          color: #fff;
          font-size: 0.26rem;
          border-radius: 0.3rem;
          margin-top: -0.15rem;
        }
      }
    }
    .bot1 {
      .right {
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
    .top {
      .tt();
      .bt();
      height: 1.02rem;
      float: inherit;
      line-height: 1.02rem;
    }
  }

</style>
