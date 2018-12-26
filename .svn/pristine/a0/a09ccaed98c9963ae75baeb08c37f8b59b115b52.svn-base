<template>
  <div>
    <div class="top">
      <div class="header">{{consult.consultTitle}}</div>
      <div class="message">{{consult.consultQuestion}}</div>
      <div class="bot">
        <div class="name">{{consult.consultUser}}</div>
        <div class="time">{{consult.consultQuestionTime}}</div>
        <div class="right">{{consult.consultTypeName}}</div>
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
  export default {
    name: "top",
    props:{
      consult:{
        type:Array,
        required:true
      }
    },
    data() {
      return {
        header: "江苏启动特色田园农村建设试点 拉开全省乡村复兴大幕",
        message: "田园养老是中国今年兴起的一种新型养老模式。田园养老是中国今年兴起的一种新型养老模式。田园养老是中国今年兴起的一种新型养老模式。" +
          "田园养老是中国今年兴起的一种新型养老模式。田园养老是中国今年兴起的一种新型养老模式。田园养老是中国今年兴起的一种新型养老模式。",
        name: "小明",
        time: "2018-08-31 11:13:00",
        right: "项目咨询"
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";
  .blank{
    .jg();
  }
  .top{
    padding: 0.43rem 0.3rem 0.2rem 0.33rem;
    .header{
      font-size: 0.34rem;
      line-height: 0.55rem;
      color: black;
      font-weight: 600;
    }
    .message{
      margin-top: 0.15rem ;
      font-size: 0.28rem;
      line-height: 0.51rem;
      color: #676769;
      padding-bottom: 0.24rem;
      letter-spacing: 0.05rem;

    }
    .bot{
      height: 0.62rem;
      div{
        float: left;
      }
      .name{
        font-size: 0.21rem;
        color: #656469;
        margin-right: 0.14rem;
        margin-top: 0.15rem;
      }
      .time{
        font-size: 0.20rem;
        margin-top: 0.15rem;
        .hc()
      }
      .right{
        float: right;
        .button();
        background-color: #05a2e9;
        color: #fff;
        padding: 0.1rem  0.24rem;
      }
    }
  }
</style>
