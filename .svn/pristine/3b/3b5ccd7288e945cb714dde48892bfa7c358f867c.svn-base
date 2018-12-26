<template>
  <div>
    <div class="blank"></div>
    <div class="supporting">
      <div class="top">
        <div class="iconfont icon-xingxing"></div>
        <p>房屋配套</p>
      </div>
      <div class="btnbox">
        <div class="btn" v-for="(index,i) in btnList" :key="i">{{index.name}}</div>
      </div>
      <div class="external">
        <div class="external_top">
          <div class="iconfont icon-xingxing"></div>
          <p>外部图片</p>
        </div>
        <div class="imgbox">
          <div class="img">
            <div class="iconfont icon-iconjia"></div>
          </div>
        </div>
        <div class="bot">{{exbot}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "supporting",
    data() {
      return {
        btnList: [
          {name: "冰箱"},
          {name: "冰箱21"},
          {name: "冰箱"},
          {name: "冰箱333"},
          {name: "冰箱444"},
          {name: "冰箱7"},
          {name: "冰箱"},
          {name: "冰箱21"},
          {name: "冰箱"},
          {name: "冰箱333"},
          {name: "冰箱444"},
          {name: "冰箱7"},
          {name: "冰箱"},
          {name: "冰箱21"},
          {name: "冰箱"},
          {name: "冰箱333"},
          {name: "冰箱444"},
          {name: "冰箱7"},
        ],
        exbot: "外部图片最少一张，第一张为封面，拖动调整图片顺序",
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";

  .blank {
    .jg()
  }

  .supporting {
    min-height: 1rem;
    overflow: auto;
    .bt();
    padding: 0 0.3rem;
    .top {
      height: 1rem;
      line-height: 1rem;
      .iconfont {
        .xx();
      }
      p {
        float: left;
        font-size: 0.28rem;
      }
    }
    .btnbox{
      min-height: 1rem;
      overflow: auto;
      .bt();
      padding-bottom: 0.1rem;
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

    .external{
      margin-bottom: 0.27rem;
      margin-top: 0.26rem;
      padding-bottom: 0.29rem;
      .external_top{
        height: 0.46rem;
        .iconfont{
          float: left;
          .rc();
          font-size: 0.12rem;
          margin-top: 0.05rem;
        }
        p{
          font-size: 0.27rem;
          color: #343436;
        }
      }
      .imgbox{
        margin-top: 0.1rem;
        .img{
          .jz();
          width: 1.56rem;
          height: 1.6rem;
          border: 1px solid #dddce2;
          background-color: #faf9ff;
          border-radius: 0.1rem;
          .iconfont{
            font-size: 0.88rem;
            color: #b6b5bb;
          }
        }
      }
      .bot{
        font-size: 0.21rem;
        .fc();
        letter-spacing: 0.03rem;
      }
    }
  }
</style>
