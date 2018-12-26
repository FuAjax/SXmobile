<template>
  <div>
    <div class="information">
      <div class="list">
        <p>期望租金</p>
        <p>{{detail.rentingPrice}}万元/年</p>
        <!--<p>{{index.person}}</p>-->
      </div>
      <div class="list">
        <p>期望户型</p>
        <p>{{detail.bedroom}}居</p>
        <!--<p>{{index.person}}</p>-->
      </div>
      <div class="list">
        <p>租赁年限</p>
        <p>{{detail.rentingYears}}年</p>
        <!--<p>{{index.person}}</p>-->
      </div>
      <div class="list">
        <p>期望地区</p>
        <p>{{detail.fareaName}}-{{detail.fstreetName}}</p>
        <!--<p>{{index.person}}</p>-->
      </div>
      <!--<div class="list">-->
        <!--<p>期望景区</p>-->
        <!--<p>{{detail.期望景区}}</p>-->
        <!--<p>{{detail.flanspacePlaceName}}</p>-->
      <!--</div>-->
      <div class="list">
        <p>拟租赁用途</p>
        <p v-for="(item,index) in detail.uses">{{item}}</p>
        <!--<p>{{index.person}}</p>-->
      </div>
      <div class="list">
        <p>联系人</p>
        <p>{{detail.linkman}}</p>
        <p>{{detail.rentType==1?"官方发布":detail.rentType==2?"用户发布":""}}</p>
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
  export default {
    name: "Information",
    props:{
      detail:{
        type:String,
        required:true
      }
    },
    data() {
      return {
        List: [
          {
            title: "期望租金",
            message: "1-1.5万元/年"
          },
          {
            title: "期望户型",
            message: "3居"
          },
          {
            title: "租赁年限",
            message: "5年"
          },
          {
            title: "期望地区",
            message: "黄陂区-木兰山-张家冲"
          }, {
            title: "期望景区",
            message: "木兰封建区"
          }, {
            title: "拟租赁用途",
            message: "民宿"
          }, {
            title: "联系人",
            message: "万先生",
            person: "个人/企业"
          },

        ]
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";

  .blank {
    .jg();
  }

  .information {
    padding: 0.44rem 0.3rem 0.32rem 0.3rem;
    .list {
      font-size: 0.28rem;
      height: 0.28rem;
      margin-top: 0.45rem;
      color: #030303;
      &:nth-child(1) {
        margin-top: 0;
        p:nth-child(2) {
          .rc()
        }
      }
      &:last-child{
        p{
          &:nth-child(3) {
            .button();
            border-radius: 0;
            background-color: #ffeaef;
            color: #db355b;
            padding: 0.05rem 0.18rem;
          }
        }
      }
      &:nth-child(4){
        p:nth-child(2){
          color: @mr;
        }
      }
      p {
        float: left;
        &:nth-child(1) {
          width: 1.41rem;
          margin-right: 0.29rem;
          .hc();
        }
        &:nth-child(2){
          margin-right: 0.2rem;
          font-weight: 600;
        }
      }
    }
  }
</style>
