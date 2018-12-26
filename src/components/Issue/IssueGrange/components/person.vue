<template>
  <div>
    <div class="blank"></div>
    <div class="person">
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
      <div class="bot bot2">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>联系电话</p>
        </div>
        <div class="middle">
          <p>请填写</p>
        </div>
      </div>
      <div class="bot bot3">
        <div class="left">
          <!--<div class="iconfont icon-xingxing"></div>-->
          <p>验证码</p>
        </div>
        <div class="middle">
          <p>请填写</p>
        </div>
        <div class="right">
          <p>获取验证码</p>
        </div>
      </div>
      <div class="bot bot4">
        <div class="left">
          <!--<div class="iconfont icon-xingxing"></div>-->
          <p>身份证号码</p>
        </div>
        <div class="middle">
          <p>请填写</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "person",
    data() {
      return {}
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";

  .person {
    padding: 0 0.3rem;
    margin-top: 0.44rem;
    margin-bottom: 1rem;
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
    .bot3,.bot4{
      .left{
        p{
          margin-left: 0.26rem;
        }
      }
    }
    .bot3{
      .right{
        p{
          padding: 0.12rem 0.28rem;
          background-color: @mr;
          color: #fff;
          font-size: 0.26rem;
          border-radius: 0.3rem;
          margin-top: -0.15rem;
        }
      }
    }
  }
  .blank{
    .jg();
    height: 0.45rem;
  }
</style>
