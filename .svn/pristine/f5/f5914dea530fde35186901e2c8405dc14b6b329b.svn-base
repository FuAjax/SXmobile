<template>
  <div>
    <div class="header">
      <van-nav-bar
        :title="title"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <van-icon name="arrow-left"
                  slot="left"
                  color="#000"
                  size="0.4rem"
        />

      </van-nav-bar>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        title: "添加联系人",
      }
    },
    methods: {
      onClickLeft() {
        Toast('返回');
      },
      onClickRight() {
        Toast('按钮');
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";

  .van-icon {
    &:nth-child(1) {
      margin-right: 0.3rem;

    }
  }

  .van-nav-bar {
    font-weight: 600;
    font-size: 0.32rem;
  }
</style>
