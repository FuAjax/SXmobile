<template>
  <div>
    <div class="question">
      <div class="header">{{question}}</div>
      <div tag="div" class="content" v-for="(item,index) in newConsult" @click="goNext" >

        <router-view></router-view>
        <div class="left">
          {{item.consultTitle}}
        </div>
        <div class="iconfont icon-gengduo1"></div>
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
  import RouterLink from "vant/es/mixins/router-link";
  export default {
    name: "Recommend",
    components: {RouterLink},
    props: {
      newConsult:{
        type:Array,
        required:true
      }
    },
    data() {
      return {
        activeNames: ['1'],
        question: "最新问题",
        m1:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊少时诵诗书所所噗噗噗噗噗萨顶顶多多多多多多多"
      };
    },
    methods:{
      goNext:function () {
        console.log(333);
        this.$router.push({path: '/Information/consultDetail/' + this.$route.params.consultId});
      }
    },
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";

  .blank {
    .jg()
  }

  .question {
    padding: 0.4rem 0.32rem;
    .header {
      height: 0.6rem;
      font-size: 0.3rem;
      font-weight: 600;
    }
    .content{
      padding-bottom: 0.1rem;
      min-height: 0.6rem;
      overflow: auto;
      .bt();
      .iconfont{
        float: right;
        font-size: 0.34rem;
        margin-top: 0.12rem;
      }
      .left{
        float: left;
        width: 90%;
        line-height:0.6rem ;
      }
    }
  }

  /*.van-collapse-item /deep/ .title {*/
    /*p {*/
      /*color: #020204;*/
      /*font-size: 0.25rem;*/
    /*}*/
    /*span {*/
      /*font-size: 0.26rem;*/
      /*line-height: 0.47rem;*/
      /*color: #666;*/
      /*margin-top: 0.41rem;*/
    /*}*/

  /*}*/

  /*.van-collapse-item /deep/ .van-collapse-item__content {*/
    /*font-size: 0.26rem;*/
    /*!*line-height: 0.47rem;*!*/
    /*color: #666;*/
  /*}*/

  /*.van-collapse-item /deep/ .van-cell {*/
    /*padding: 0.2rem 0;*/
    /*padding-left: 0.3rem;*/
  /*}*/

  /*.van-collapse-item /deep/ .van-cell:not(:last-child)::after {*/
    /*left: 0;*/
  /*}*/
</style>
