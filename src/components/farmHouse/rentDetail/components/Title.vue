<template>
  <div>
    <div class="top">
      <div class="title">
        <p>{{farmhouseTitle}}</p>
      </div>
      <div class="content">
        <div class="num">
          <p>{{bian}}</p>
          <p>{{farmhouseRentalsNumber}}</p>
        </div>
        <div class="time">
          <p>{{shijian}}</p>
          <p>{{updatetime}}</p>
        </div>
        <!--<div class="range">-->
          <!--<p>{{range}}</p>-->
          <!--<p><i class="iconfont icon-pingfenshixing"></i>-->
            <!--<i class="iconfont icon-pingfenkongxing"></i>-->
            <!--<i class="iconfont icon-pingfenbanxing"></i>-->
            <!--<i class="iconfont icon-pingfenshixing"></i>-->
            <!--<i class="iconfont icon-pingfenbanxing"></i></p>-->
        <!--</div>-->
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
  export default {
    name: "Title",
    props:{
      farmhouseRentalsNumber:{
        type:String,
        required:true
      },
      farmhouseTitle:{
        type:String,
        required:true
      },
      updatetime:{
        type:String,
        required:true
      },
    },

    data() {
      return {
        p1: "【整租】",
        p2: "黄陂区",
        p3: "4房",
        p4: "木兰山",
        p5: "160平",
        p6: "独立小院",
        p7: "可种菜",
        bian: "编号:",
        numbers: "2000002",
        shijian: "更新时间:",
        time: "2017-08-09",
        range: "星级",

      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";

  .top {
    min-height: 1.28rem;
    overflow: auto;
    padding: 0.31rem ;
    .title {
      min-height: 0.8rem;
      .bt();
      overflow: auto;
      font-size: 0.33rem;
      color: #06050a;
      font-weight: 600;
      p {
        float: left;
        margin-right: 0.1rem;
      }
    }
    .content {
      padding-top: 0.32rem;
      font-size: 0.21rem;
      color: #6a6a6c;
      div {
        float: left;
        margin-right: 0.2rem;
        p {
          float: left;
          margin-right: 0.17rem;
          .iconfont {
            color: #ff682f;
          }
        }
        &:nth-child(3) {
          margin-right: 0rem;
        }
      }
    }
  }

  .blank {
    .jg();
  }
</style>
