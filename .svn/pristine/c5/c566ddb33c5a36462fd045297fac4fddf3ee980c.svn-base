<template>
  <div>
    <div class="blank"></div>
    <div v-if="villageList.length>0">
      <!--周边农房-->
      <div class="scenic">
        <div class="top">
          <div class="left">
            <p>{{scenic}}</p>
            <p>{{rank}}</p>
          </div>
          <div class="right">
            <router-link :to="{name:'villageList'}">
              <p>更多</p>
              <van-icon name="arrow" class="icon arrow"/>
            </router-link>

          </div>
        </div>
        <div class="scenic_bottom" style="overflow: hidden;">
          <scroll ref="scroll" class="recommend-content">
            <div :style="'width:' + villageList.length * 3.2 + 'rem'">
              <router-link v-for="(item,index) in villageList" :to="{name:'villageDetail',params:{id:item.villageNumber}}">
                <div style="width: 3rem; display: inline-block; padding-right: .2rem">
                  <div v-if='item.urls' :style="'background:url(' + item.urls + ');width: 100%;height: 2rem;background-size:cover;background-position: center center'"></div>
                  <div style="font-size: 0.26rem;">{{item.villageName}}</div>
                </div>
              </router-link>
            </div>
          </scroll>
        </div>
      </div>
    </div>
    <div class="blank"></div>
  </div>

</template>

<script>
  import Scroll from '../../common/swiperX'
  export default {
    name: 'Beautiful',
    props:{
      villageList:{
        type:Array,
        required:true
      }
    },
    data() {
      return {
        scenic: "美丽",
        rank: "乡村",
      }
    },
    components:{
      Scroll
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .scenic {
    padding: 0.4rem 0.3rem 0.3rem 0.32rem;
    border-bottom: 0.01rem solid #e6e6e6;

    .top {
      height: 0.75rem;
      width: 100%;

      .left {
        float: left;

        p {
          float: left;
          font-size: 0.35rem;
          font-weight: 600;
          letter-spacing: 0.04rem;

          &:nth-child(1) {
            color: #fd5c02
          }

          &:nth-child(2) {
            color: #000005
          }

        }
      }
      .right {
        float: right;
        margin-top: 0.05rem;
        .van-icon {
          font-size: 0.28rem;
          color: #3a3a3c
        }
        p{
          float: left;
        }
      }
    }
    .scenic_bottom {
      img{
        width: 100%;
        height: 2rem;
      }
      .rank{
        padding-right: .2rem
      }
      .swiper {
        margin-right: 0.17rem;
      }

      .add {
        font-size: 0.23rem;
        color: #313133;
        margin-top: 0.21rem;
        margin-left: 0.1rem;
        font-weight: 600;
      }

    }
  }

  .scenic_bottom /deep/ .van-swipe__indicators {
    display: none !important
  }

  .scenic_bottom /deep/ .swiper {
    height: 2.01rem !important;
  }

  .scenic_bottom /deep/ .van-swipe {
    min-height: 2.89rem !important;
  }

  .blank {
    height: 0.2rem;
    width: 100%;
    border-bottom: 0.01rem solid #e7e6ec;
    border-top: 0.01rem solid #e7e6ec;
    background-color: #f1f0f6;
  }
</style>
