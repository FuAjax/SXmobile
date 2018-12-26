<template>
  <div>
    <div class="password">
      <div class="before">
        <input type="password" placeholder="请输入原密码">
        <div class="warn">
          <div class="iconfont icon-jinggao"></div>
          <p>原密码不能为空</p>
        </div>
      </div>
      <div class="before">
        <input type="password" placeholder="请输入新密码">
      </div>
      <div class="before">
        <input type="password" placeholder="请输入新密码">
      </div>
    </div>
    <div class="amend">
      <p>修改密码</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "list",
    data() {
      return {}
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";

  .password {
    padding: 0 0.3rem;
    .before {
      height: 1.08rem;
      .bt();
      position: relative;
      &:nth-child(3){
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
  .amend{
    padding: 0.37rem 0.31rem 0 0.31rem ;
    border-top:1px solid @bc ;
    p{
      height: 0.89rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.34rem;
      border-radius: 0.1rem;
      color: #fff;
      background-color: @mr;
    }
  }
</style>
