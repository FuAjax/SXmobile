<template>
  <div>
    <div class="blank"></div>
    <div class="picture">
      <div class="external">
        <div class="top">
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
      <div class="interior">
        <div class="top">
          <div class="iconfont icon-xingxing"></div>
          <p>内部图片</p>
        </div>
        <div class="imgbox">
          <div class="img">
            <div class="iconfont icon-iconjia"></div>
          </div>
        </div>
        <div class="bot">{{interiorbot}}</div>
      </div>
      <div class="rim">
        <div class="top">
          <div class="iconfont icon-xingxing"></div>
          <p>周边环境图片</p>
        </div>
        <div class="imgbox">
          <div class="img">
            <div class="iconfont icon-iconjia"></div>
          </div>
        </div>
        <div class="bot">{{rimexbot}}图片</div>
      </div>
      <div class="video">
        <div class="top">
          <div class="iconfont icon-xingxing"></div>
          <p>视频</p>
        </div>
        <div class="imgbox">
          <div class="img">
            <div class="iconfont icon-iconjia"></div>
          </div>
        </div>
        <div class="bot">{{videobot}}</div>
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
  export default {
    name: "pictures",
    data() {
      return {
        exbot: "外部图片最少一张，第一张为封面，拖动调整图片顺序",
        interiorbot: "外部图片最少一张，客厅、房间、卫生间、厨房1室1图",
        rimexbot: "周边环境图片最少一张",
        videobot: "横向拍摄房源视频效果更佳，最大可上传300M视频",

      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";
  .picture{
    padding: 0.43rem 0.3rem 0rem 0.3rem;
    .external,.interior,.rim,.video{
      .bt();
      margin-bottom: 0.27rem;
      padding-bottom: 0.29rem;
      .top{
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
        margin-top: 0.3rem;
      }
    }
    .video{
      margin-bottom: 0;
      border: none;
    }
  }
  .blank{
    .jg()
  }
</style>
