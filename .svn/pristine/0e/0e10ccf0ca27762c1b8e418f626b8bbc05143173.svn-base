<template>
  <div>
    <div class="password">
      <div class="before">
        <input type="password" placeholder="请输入邮箱">
        <div class="warn">
          <div class="iconfont icon-jinggao"></div>
          <p>邮箱不能为空</p>
        </div>
      </div>
      <div class="before">
        <input type="password" placeholder="请输入邮箱验证码">
        <div class="warn  warn2">
          <p>获取验证码</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "phone1",
    data() {
      return {}
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";

  .password {
    padding: 0 0.3rem;
    .before {
      height: 1.08rem;
      .bt();
      position: relative;
      &:nth-child(3) {
        border: none;
      }
      input {
        height: 1.0rem;
        position: absolute;
      }
      input::-webkit-input-placeholder {
        .hc();
        font-size: 0.26rem;
        text-align: left;
      }
      .warn {
        position: absolute;
        right: 0;
        top: 30%;
        font-size: 0.27rem;
        .rc();
        div, p {
          float: left;
        }
        div {
          margin-top: 0.08rem;
          margin-right: 0.2rem;
        }
      }
    }
  }
  .warn2{
    p{
      float: right;
      margin-right: 0;
      background-color: @mr;
      color: #fff;
      font-size: 0.23rem;
      border-radius: 1.2rem;
      line-height: 0.56rem;
      width: 1.57rem;
      text-align: center;
      height: 0.56rem;
    }
  }
</style>
