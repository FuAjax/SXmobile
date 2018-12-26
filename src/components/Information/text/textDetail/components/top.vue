<template>
  <div>
    <div class="top" v-for="(index,i) in info" >
      <div class="title">{{index.infoTitle}}</div>
      <div class="bot">
        <div class="name">{{index.infoFrom}}</div>
        <div class="time">{{index.infoTime}}</div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "top",
    props:{
      info:{
        type:Array,
        required:true
      }
    },
    data() {
      return {
        title:"江苏启动特色田园乡村建设试点 拉开全省乡村复兴大幕",
        name:"新华社",
        time:"2018-08-31 11:13:00"
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";
  .top{
    margin-top: 0.92rem;
    padding: 0.43rem 0.3rem 0.37rem 0.3rem;
    .bt();
    .title{
      font-size: 0.35rem;
      line-height: 0.55rem;
      color: #000;
      font-weight: 600;
    }
    .bot{
      margin-top: 0.31rem;
      div{
        float: left;
        &:nth-child(1){
          color: #656469;
          margin-right: 0.14rem;
        }
        &:nth-child(2){
          .hc()
        }
      }
    }
  }
</style>
