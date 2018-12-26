<template>
    <div class="resetPasswordfirst">
      <div class="navv">
        <van-nav-bar
          left-arrow
          @click-right="onClickRight"
        />
      </div>
      <p class="account">验证身份</p>
      <div class="formfield">
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入用户名" />
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入手机验证码" >
            <span slot="button" class="code">
              获取验证码
            </span>
          </van-field>
        </van-cell-group>
      </div>
      <div class="enter">
        下一步
      </div>


    </div>
</template>

<script>
    export default {
        name: "resetPasswordfirst",
        data() {
            return {}
        },
        methods: {
          onClickRight(){

          },
        },
        computed: {},
        created: function () {
        },
        mounted: function () {
        },

    }
</script>

<style scoped lang="less" type="text/less">
  .resetPasswordfirst{
    .account{
      margin: 0.6rem 0.2rem;
      font-size: 0.5rem;
    }
    .code{
      display: inline-block;
      width: 1.5rem;
      background: #ff6500;
      border-radius: 0.3rem;
      text-align: center;
      font-size: 0.2rem;
      color: white;
    }
    .enter{
      margin: 0.35rem 0.2rem;
      background-color: #ff6500;
      height: 0.8rem;
      border-radius: 0.2rem;
      text-align: center;
      line-height: 0.8rem;
      font-size: 0.24rem;
      color: white;
    }
  }
</style>
