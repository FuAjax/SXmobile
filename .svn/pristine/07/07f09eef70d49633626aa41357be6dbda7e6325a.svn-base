<template>
  <div>
    <div class="list">
      <div class="use">
        <div class="top">
          <div class="iconfont icon-xingxing"></div>
          <p>出租用途</p>
        </div>
        <div class="btn" v-for="(index,i) in btnList">{{index.name}}</div>
      </div>
      <div class="bot">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>所在地区</p>
        </div>
        <div class="middle">
          <p>请选择</p>
        </div>
        <div class="right">
          <div class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></div>
        </div>
      </div>
      <div class="bot">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>详细位置</p>
        </div>
        <div class="middle">
          <p>请精确到门牌号</p>
        </div>
        <div class="right">
          <div class="iconfont"></div>
        </div>
      </div>
      <div class="bot">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>位置标注</p>
        </div>
        <div class="middle">
          <p>请选择</p>
        </div>
        <div class="right">
          <div class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></div>
        </div>
      </div>
      <div class="bot bot4">
        <div class="left">
          <div class="iconofnt"></div>
          <p>周边景点</p>
        </div>
        <div class="middle">
          <p>请选择</p>
        </div>
        <div class="right">
          <div class="iconfont"></div>
        </div>
      </div>
      <div class="bot bot5">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>建筑面积</p>
        </div>
        <div class="middle">
          <p>请填写</p>
        </div>
        <div class="right">
          <!--<div class="iconfont"></div>-->
          <p>平方米</p>
        </div>
      </div>
      <div class="bot bot6">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>宅基地面积</p>
        </div>
        <div class="middle">
          <p>请填写</p>
        </div>
        <div class="right">
          <!--<div class="iconfont"></div>-->
          <p>平方米</p>
        </div>
      </div>
      <div class="bot">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>房屋户型</p>
        </div>
        <div class="middle">
          <p>请选择</p>
        </div>
        <div class="right">
          <div class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></div>
        </div>
      </div>
      <div class="bot">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>楼层</p>
        </div>
        <div class="middle">
          <p>请填写</p>
        </div>
        <div class="right">
          <div class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></div>
        </div>
      </div>
      <div class="bot bot9">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>出租年限</p>
        </div>
        <div class="middle">
          <p>请填写</p>
        </div>
        <div class="right">
          <!--<div class="iconfont"></div>-->
          <p>年</p>
        </div>
      </div>
      <div class="bot bot10">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>出租价格</p>
        </div>
        <div class="middle">
          <p>请填写</p>
        </div>
        <div class="right">
          <div class="btn">万元/年</div>
          <div class="btn">面议</div>
        </div>
      </div>
      <div class="bot bot11">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>出租情况</p>
        </div>
        <div class="middle">
          <div class="btn">万元/年</div>
          <div class="btn">面议</div>
        </div>
        <!--<div class="right">-->
        <!--<div class="iconfont"></div>-->
        <!--</div>-->
      </div>
      <div class="bot">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>部分出租</p>
        </div>
        <div class="middle">
          <p>请填写部分出租情况</p>
        </div>
        <div class="right">
          <div class="iconfont"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "list",
    data() {
      return {
        btnList: [
          {name: "民宿"},
          {name: "农家乐"},
          {name: "康养"},
          {name: "工作室"},
          {name: "仓储"},
          {name: "其他"},
        ]
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";

  .list {
    padding: 0 0.3rem;
    margin-top: 0.44rem;
    .use {
      min-height: 2.33rem;
      .bt();
      .top {
        height: 0.58rem;
        .iconfont {
          .xx()
        }
        p {
          font-size: 0.27rem;
          color: #2b2b2d;
          float: left;
        }
      }
      .btn {
        .button();
        float: left;
        margin-right: 0.19rem;
        background-color: @mr;
        color: #fff;
        padding: 0.15rem 0.57rem;
        border-radius: 0.3rem;
        margin-bottom: 0.3rem;
      }
    }
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
    .bot4{
      .left{
        p{
          margin-left: 0.26rem;
        }
      }
    }
    .bot5, .bot6 {
      .right {
        p {
          font-size: 0.26rem;
        }
      }
    }
    .bot9 {
      .right {
        font-size: 0.26rem;
      }
    }
    .bot10 {
      .right {
        margin-top: -0.1rem;
        .btn {
          float: left;
          border-radius: 1.2rem 0 0 1.2rem;
          width: 1.3rem;
          height: 0.48rem;
          line-height: 0.48rem;
          text-align: center;
          background-color: #ff6400;
          color: #fff;
          &:nth-child(2){
            border-radius:  0 1.2rem 1.2rem  0 ;
            background-color: #e7e6ec;
            .hc();
          }
        }
      }
    }
    .bot11{
      .middle{
        margin-top: -0.1rem;
        font-size: 0.2rem;
        .btn {
          float: left;
          border-radius: 1.2rem 0 0 1.2rem;
          width: 1.3rem;
          height: 0.48rem;
          line-height: 0.48rem;
          text-align: center;
          background-color: #ff6400;
          color: #fff;
          &:nth-child(2){
            border-radius:  0 1.2rem 1.2rem  0 ;
            background-color: #e7e6ec;
            .hc();
          }
        }
      }
    }
  }
</style>
