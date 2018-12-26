<template>
  <div>
    <div class="detail">
      <div class="top">房屋详情</div>
      <div class="list1">
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
      </div>
      <div class="specil">
        <div class="specil_top">
          <div class="iconfont icon-xingxing"></div>
          <p>房屋特色</p>
        </div>
        <div class="btn" v-for="(index,i) in btnList" :key="i">{{index.name}}</div>
      </div>
      <div class="chose">

      </div>
      <div class="bot bot10">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>出租价格</p>
        </div>
        <div class="middle">
          <div class="btn">万元/年</div>
          <div class="btn">面议</div>
        </div>
      </div>
      <div class="bot bot10">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>出租价格</p>
        </div>
        <div class="middle">
          <div class="btn">万元/年</div>
          <div class="btn">面议</div>
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
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "specil",
    data() {
      return {
        btnList: [
          {name: "冰箱"},
          {name: "冰箱222321"},
          {name: "冰箱"},
          {name: "冰箱333"},
          {name: "冰箱444"},
          {name: "冰箱7788787"},
        ]
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";
  .detail{
    padding: 0 0.3rem;
    min-height: 1rem;
    overflow: auto;
    .top{
      height: 1.06rem;
      .bt();
      .tt();
      width: 100%;
      float: inherit;
      line-height: 1.06rem;
    }
    .specil{
      min-height: 1rem;
      margin-top: 0.2rem;
      overflow: auto;
      .specil_top{
        height: 0.6rem;
        .iconfont {
          .xx();
          margin-right: 0.3rem;
          font-size: 0.35rem;
          color: @mr;
        }
        p {
          font-size: 0.27rem;
          color: #2b2b2d;
          float: left;
        }
      }
      .btn {
        float: left;
        margin-bottom: 0.3rem;
        overflow: auto;
        padding: 0.15rem 0.54rem;
        border-radius: 0.3rem;
        background-color: @mr;
        color: #fff;
        font-size: 0.27rem;
        margin-right: 0.21rem;
      }
    }
    .chose{
      width: 100%;
      min-height: 1.8rem;
      border: 1px solid #dddce2;
      overflow: auto;
      background-color: #faf9ff;
      border-radius: 0.1rem;
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
        margin-right: 0.3rem;
        font-size: 0.35rem;
        color: @mr;
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
  .bot10 {
    .middle {
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


</style>
