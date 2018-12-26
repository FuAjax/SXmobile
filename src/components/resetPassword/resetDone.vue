<template>
    <div class="resetDone">
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
          <van-field v-model="value" placeholder="请输入密码" />
        </van-cell-group>
      </div>
      <div class="enter" @click="finish">
        完成
      </div>
    <!--弹出框-->

    </div>
</template>

<script>
    export default {
        name: "resetDone",
        data() {
            return {}
        },
        methods: {
          finish(){
            this.$dialog.alert({
              message: `恭喜您，密码重置成功<p>555555</p>`,
              confirmButtonText:'进入首页',
            });
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
  .resetDone{
    .account{
      margin: 0.6rem 0.2rem;
      font-size: 0.5rem;
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
