<template>
  <div>
    <div class="message">
      <div class="top">
        商户信息
      </div>
      <div class="bot">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>所在地区</p>
        </div>
        <div class="middle">
          <p>请选择</p>
        </div>
        <div class="right">
          <div class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></div>
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
        <div class="right">
          <div class="iconfont"></div>
        </div>
      </div>
      <div class="bot">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>所在地区</p>
        </div>
        <div class="middle">
          <p>请选择</p>
        </div>
        <div class="right">
          <div class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></div>
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
        <div class="right">
          <div class="iconfont"></div>
        </div>
      </div>
      <div class="external">
        <div class="external_top">
          <div class="iconfont icon-xingxing"></div>
          <p>外部图片</p>
        </div>
        <div class="imgbox">
          <div class="img">
            <div class="iconfont icon-iconjia"></div>
          </div>
        </div>
        <div class="bot">{{exbot}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "message",
    data() {
      return {
        exbot: "外部图片最少一张，第一张为封面，拖动调整图片顺序",
      }
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
    .external{
      margin-bottom: 0.27rem;
      padding-bottom: 0.29rem;
      .external_top{
        height: 0.46rem;
        .iconfont{
          float: left;
          .rc();
          font-size: 0.12rem;
          margin-top: 0.05rem;
        }
        p{
          font-size: 0.27rem;
          color: #343436;
        }
      }
      .imgbox{
        margin-top: 0.1rem;
        .img{
          .jz();
          width: 1.56rem;
          height: 1.6rem;
          border: 1px solid #dddce2;
          background-color: #faf9ff;
          border-radius: 0.1rem;
          .iconfont{
            font-size: 0.88rem;
            color: #b6b5bb;
          }
        }
      }
      .bot{
        font-size: 0.21rem;
        .fc();
        letter-spacing: 0.03rem;
      }
    }
  }

</style>
