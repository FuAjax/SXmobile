<template>
  <div>
    <!--<div class="blank"></div>-->
    <div class="fitment">
      <div class="top">{{fitment}}</div>
      <div class="content">
        <div class="imgbox" v-for="(index,i) in detail.matingList" :key="i">
          <img :src="index.logoUrl" alt="">
          <p style="text-align: center">{{index.menuName}}</p>
        </div>
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
  export default {
    name: "Fitment",
    props: {
      detail: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        fitment: "房屋配套",
        imgList: [
          {text: "电视", icon: "icon-gengduo2"},
          {text: "电视", icon: "icon-gengduo2"},
          {text: "电视", icon: "icon-gengduo2"},
          {text: "电视", icon: "icon-gengduo2"},
          {text: "电视", icon: "icon-gengduo2"},
          {text: "电视", icon: "icon-gengduo2"},
          {text: "电视", icon: "icon-gengduo2"},
          {text: "电视", icon: "icon-gengduo2"},
          {text: "电视", icon: "icon-gengduo2"},
          {text: "电视", icon: "icon-gengduo2"},
          {text: "电视", icon: "icon-gengduo2"},
          {text: "电视", icon: "icon-gengduo2"},
          {text: "电视", icon: "icon-gengduo2"},
          {text: "电视", icon: "icon-gengduo2"},
          {text: "电视", icon: "icon-gengduo2"},
          {text: "电视", icon: "icon-gengduo2"},
        ]
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";

  .blank {
    .jg()
  }

  .fitment {
    min-height: 1rem;
    padding: 0.4rem 0.3rem 0rem 0.3rem;
    .top {
      font-size: 0.34rem;
      line-height: 0.34rem;
      color: #000004;
      font-weight: 600;
    }
    .content {
      display: flex;
      flex-wrap: wrap;
      margin-top: 0.49rem;
      .imgbox {
        text-align: center;
        width: 16.5%;
        margin-bottom: 0.45rem;
        img {
          width: 0.51rem;
          height: 0.45rem;
        }
        p {
          font-size: 0.2rem;
          color: #646466;
        }

      }
    }
  }
</style>
