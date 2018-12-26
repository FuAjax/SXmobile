<template>
  <div>
    <div class="require">
      <div class="top">{{top}}</div>
      <div class="message">{{consult.consultAnswer}}</div>
      <div class="bot">{{consult.consultAnswerTime}}</div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
  export default {
    name: "require",
    props:{
      consult:{
        type:Array,
        required:true
      }
    },
    data() {
      return {
        top: "问题答复",
        message: "田园养老是中国今年兴起田园养老是中国今年兴起田园养老是中国今年兴起田园养老是" +
          "中国今年兴起田园养老是中国今年兴起田园养老是中国今年兴起田园养老是中国今年兴起田园养老是中国今年兴起田园养老是中" +
          "国今年兴起田园养老是中国今年兴起田园养老是中国今年兴起田园养老是中国今年兴起田园养老是中国今年兴起田园养老是中国今年兴起",
        time: "2018-08-31 11:31:00"
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";
  .blank{
    .jg()
  }
  .require {

    padding: 0.42rem 0.32rem 0.2rem 0.32rem;
    .top {
      height: 0.61rem;
      font-size: 0.31rem;
      font-weight: 600;
      letter-spacing: 0.05rem;
      .bt();
      margin-bottom: 0.31rem;
    }
    .message {
      font-size: 0.28rem;
      line-height: 0.48rem;
      color: #676769;
      letter-spacing: 0.05rem;
    }
    .bot {
      margin-top: 0.2rem;
      font-size: 0.19rem;
      .hc()
    }

  }
</style>
