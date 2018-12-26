<template>
  <!--未找到搜索结果组件-->
  <div>
    <div class="notfind">
      <div class="imgbox">
        <img :src="url" alt="">
      </div>
      <div class="content">
        <p>{{p1}}</p>
        <p>{{p2}}</p>
        <p>相关{{name1}}</p>
        <p v-if=name2>您可以浏览我们为您推荐的农房房源</p>
      </div>
    </div>
    <!--<div class="blank"></div>-->
    <!--<div class="tuijian">-->
      <!--<p>{{wei}}</p>-->
      <!--<p>{{you}}</p>-->
    <!--</div>-->
  </div>
</template>

<script>
  import url from '../../assets/imgs/notFind_03.png'

  export default {
    name: "notFind",
    props:{name1:String,name2:Boolean},
    data() {
      return {
        url: url,
        p1: "没有找到与",
        p2: "“用户搜索词”",
        wei:"为您",
        you:"推荐"
      }
    },
    created:function () {
      console.log('1111',this.name1,this.name2)
    }
    }

</script>

<style scoped lang="less" type="text/less">
  @import "../../style/public.less";
  .notfind {
    height: 3.04rem;
    width: 100%;
    padding-top: 1.53rem;
    padding-bottom: 1.93rem;
    .imgbox {
      margin: 0 auto;
      width: 1.94rem;
      height: 1.73rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .content {
      margin-top: 0.6rem;
      padding-left: 1.45rem;
      p {
        font-size: 0.27rem;
        color: #0a0a0c;
        letter-spacing: 0.04rem;
        float: left;
        &:nth-child(2) {
          color: #e50000;
        }
        &:nth-child(4) {
          margin-top: 0.2rem;
        }
      }
    }
  }
  .blank{
    .jg()
  }
  .tuijian{
    padding-left: 0.6rem;
    height: 0.75rem;
    padding-top: 0.2rem;
    width: 100%;
    p {
      float: left;
      font-size: 0.35rem;
      font-weight: 600;
      letter-spacing: 0.04rem;
      &:nth-child(1) {
        color: #fd5c02
      }
      &:nth-child(2) {
        color: #000005
      }
    }
  }
</style>
