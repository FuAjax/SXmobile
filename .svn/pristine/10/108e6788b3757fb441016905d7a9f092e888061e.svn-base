<template>
  <div>
    <div class="agent">
      <div class="top">经纪人</div>
      <div class="content">
        <div class="left">
          <img :src="url" alt="">
        </div>
        <div class="middle">
          <div class="name">{{name}}</div>
          <div class="phone">{{phone}}</div>
        </div>
        <div class="right">
          <div class="iconfont icon-dianhua2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "agent",
    data() {
      return {
        url: "http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg",
        name: "王伟伟",
        phone: "186666666"
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";

  .agent {
    margin-bottom: 1rem;
    height: 1.57rem;
    padding: 0.4rem 0.3rem;
    .top {
      .tt();
      height: 0.71rem;
      width: 100%;
    }
    .content {
      height: 0.89rem;
      .left {
        width: 0.89rem;
        height: 0.89rem;
        float: left;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .middle {
        float: left;
        margin-left: 0.3rem;
        .name {
          .tt();
          font-size: 0.3rem;
          color: #37363b;
        }
        .phone {
          .hc();
          margin-top: 0.6rem;
          font-size: 0.22rem;
        }
      }
      .right {
        float: right;
        width: 0.86rem;
        height: 0.89rem;
        border-radius: 50%;
        background-color: #ebf8ee;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
        .iconfont {
          font-size: 0.44rem;
          font-weight: 600;
          color: #00b034;
        }
      }
    }
  }
</style>
