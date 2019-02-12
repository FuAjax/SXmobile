<template>
  <div class="text" v-wechat-title="this.TITLE">
  <!--<div class="text">-->
    <div class="topBar" v-if="(!isapp)">
      <Header :title='title' :isback='isback'/>
    </div>
    <Top :info="info"/>
    <Content :info="info"/>
    <!--<Others :relatedInfo="relatedInfo"/>-->
    <RimFarm :list="farmhouse"/>
    <RimGrange :list="grange"/>
    <Comment
      :messageList="comment"
      :comment1="comment1"
      v-if="commentShow"/>
    <Footer :detail="info"/>
    <!--<Gotop/>-->
  </div>
</template>

<script>
  import Header from "../../../common/Header"
  import RimGrange from "./components/RimGrange"
  import RimFarm from "./components/RimFarm"
  import Footer from "./components/footer"
  import Others from "./components/others"
  import Top from "./components/top"
  import Content from "./components/content"
  import Comment from "./components/comment"
  import methods from './m/methods'
  import Gotop from '../../../common/goTop'

  export default {
    name: "textDetail",
    data() {
      return {
        // 信息
        info: [],
        // 村庄咨询
        relatedInfo: [],
        // 第一个回复
        comment1: '',
        // 回复信息
        comment: [],
        // 农房信息
        farmhouse: [],
        // 农庄信息
        grange: [],
        isback: true,
        title: '文章详情',
        // color:'#FF6400',
        commentShow: false,
        TITLE: '',
      }
    },
    components: {
      Header,
      Footer,
      Others,
      Top,
      Content,
      Comment,
      RimFarm,
      RimGrange,
      Gotop
    },
    methods: methods,
    created: function () {

      this.init();


    },
  }
</script>

<style scoped lang="less" type="text/less">
  .topBar {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
  }

  .text {
    overflow: hidden;
  }
</style>
