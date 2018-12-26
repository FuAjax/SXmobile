<template>
  <div>
    <div class="topBar" v-if="(!isapp)">
      <Header :title='title' :isback='isback'/>
    </div>
    <div :style="'height:'+ ( !isapp ?'0.92rem' : '0rem' ) + ';'"></div>
    <Banner :banner="banner"/>
    <Project :newsList="info"/>
    <Control :hotColumn="hotColumn" :hotTag="hotTag" :consultType="consultType"/>
    <Footer v-if="type==3"></Footer>
    <!--<GoTop />-->
  </div>
</template>

<script>
  import Header from "../../common/Header"
  import Banner from "./components/Banner"
  import Footer from "../../common/Footer"
  import Project from "./components/project"
  import Control from "../common/control"
  import GoTop from "../../common/goTop"
  import methods from './m/methods'

  export default {
    name: "index",
    props: {
      isapp: false
    },
    data() {
      return {
        // banne图
        banner:[],
        // 列表信息
        info:[],
        // 类别1
        hotTag:[],
        // 类别2
        hotColumn:[],
        // 资讯
        consultType:[],
        title: "三乡工程",
        isback: true,
        type: null,
      }
    },
    components: {
      Header,
      Banner,
      Footer,
      Project,
      Control,
      GoTop
    },
    methods: methods,
    created: function () {
      if (localStorage.getItem("infomationIndexData")) {
        var infomationIndexData = JSON.parse(localStorage.getItem("infomationIndexData"));
        this.banner=infomationIndexData.banner
        this.info=infomationIndexData.info
        this.hotColumn=infomationIndexData.hotTag
        this.hotTag=infomationIndexData.hotColumn
        this.consultType=infomationIndexData.consultType
      }
      this.init();
      this.type = this.$proType;
    }
  }
</script>

<style scoped lang="less" type="text/less">

</style>
