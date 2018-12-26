<template>
  <div>
    <div class="blank"></div>
    <div class="picture">
      <div class="external">
        <div class="top">
          <div class="iconfont icon-xingxing"></div>
          <p>营业执照</p>
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
          <p>法人代表手持身份证照（正反面各一张）</p>
        </div>
        <div class="imgbox">
          <div class="img">
            <div class="iconfont icon-iconjia"></div>
          </div>
        </div>
        <div class="bot">{{interiorbot}}</div>
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
  export default {
    mname: "pictures",
    data() {
      return {
        exbot: "拍复印件需加盖印章，可用有效特许证件代替；不在前台展示，后台可见",
        interiorbot: "需清晰展示人物五官和身份证文字信息，上传正面手持及反面手持",

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
