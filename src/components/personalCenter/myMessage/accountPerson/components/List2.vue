<template>
  <div class="list">
    <div class="bot">
      <div class="left">
        <div class="iconfont icon-xingxing"></div>
        <p>真实姓名</p>
      </div>
      <div class="middle">
        <p>请输入真实姓名</p>
      </div>
      <div class="right">
        <div class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></div>
      </div>
    </div>
    <div class="bot">
      <div class="left">
        <div class="iconfont icon-xingxing"></div>
        <p>身份证号</p>
      </div>
      <div class="middle">
        <p>请输入真实身份证号</p>
      </div>
      <div class="right">
        <div class="iconfont"></div>
      </div>
    </div>
    <div class="bot">
      <div class="left">
        <div class="iconfont icon-xingxing"></div>
        <p>手机号码</p>
      </div>
      <div class="middle">
        <p>请输入真实手机号码</p>
      </div>
      <div class="right">
        <div class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "List2",
    data() {
      return {}
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";
 .list{
   padding: 0.3rem;
   padding-top: 0;
   .bot {
     height: 0.26rem;
     padding: 0.3rem 0;
     .bt();
     .left {
       float: left;
       width: 2rem;
       margin-right: 0.23rem;
       .iconfont {
         .xx();
       }
       p {
         font-size: 0.27rem;
         color: #2b2b2d;
         float: left;
       }
     }
     .middle {
       float: left;
       font-size: 0.27rem;
       .hc();
     }
     .right {
       float: right;
       .iconfont {
         font-size: 0.29rem;
         color: #bababc;
       }
     }
   }
 }
</style>
