<template>
  <div>
    <div class="specil">
      <div class="top">
        <div class="left">
          <p>{{scenic}}</p>
          <p>{{rank}}</p>
        </div>
        <div class="right">
          <router-link :to="{name:'rentList'}">
            <p>更多</p>
            <van-icon name="arrow" class="icon arrow"/>
          </router-link>

        </div>
      </div>
      <div class="scenic_bottom" style="overflow: hidden;">
        <scroll ref="scroll" class="recommend-content">
          <div :style="'width:' + characteristic.length * 2.2 + 'rem'">
            <router-link v-for="(item,index) in characteristic" :to="{name:'rentList'}" class="specil_list">
              <div style="width: 2rem; display: inline-block; padding-right: .2rem">
                <div style="font-size: 0.26rem; text-align: center" class="add">{{item.text}}</div>
                <div v-if='item.logoUrl'
                     :style="'background:url(' + item.logoUrl + ');width: 75%;border-radius: 50%;height: 1.56rem ;   margin-left: 10%;;background-size:cover;background-position: center center'"></div>
              </div>
            </router-link>
          </div>
        </scroll>
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
  import Scroll from '../../common/swiperX'

  export default {
    name: "specil",
    props: {
      characteristic: {
        type: Array,
        required: true
      },
    },
    data() {
      return {
        scenic: "特色",
        rank: "农房",
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../style/public.less";

  .bg1() {
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#fefaef+0,ffefc7+99,ffefc7+100,fff4e0+100,2989d8+100 */
    background: #fefaef; /* Old browsers */
    background: -moz-linear-gradient(left, #fefaef 0%, #ffefc7 99%, #ffefc7 100%, #fff4e0 100%, #2989d8 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, #fefaef 0%, #ffefc7 99%, #ffefc7 100%, #fff4e0 100%, #2989d8 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, #fefaef 0%, #ffefc7 99%, #ffefc7 100%, #fff4e0 100%, #2989d8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fefaef', endColorstr='#2989d8', GradientType=1); /* IE6-9 */
  }

  .bg2() {
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ecfbff+0,bbe4f6+100,ffefc7+100,fff4e0+100,2989d8+100 */
    background: #ecfbff; /* Old browsers */
    background: -moz-linear-gradient(left, #ecfbff 0%, #bbe4f6 100%, #ffefc7 100%, #fff4e0 100%, #2989d8 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, #ecfbff 0%, #bbe4f6 100%, #ffefc7 100%, #fff4e0 100%, #2989d8 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, #ecfbff 0%, #bbe4f6 100%, #ffefc7 100%, #fff4e0 100%, #2989d8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ecfbff', endColorstr='#2989d8', GradientType=1); /* IE6-9 */
  }

  .bg3() {
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#eefbea+0,d8f4cc+100,bbe4f6+100,ffefc7+100,fff4e0+100 */
    background: #eefbea; /* Old browsers */
    background: -moz-linear-gradient(left, #eefbea 0%, #d8f4cc 100%, #bbe4f6 100%, #ffefc7 100%, #fff4e0 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, #eefbea 0%, #d8f4cc 100%, #bbe4f6 100%, #ffefc7 100%, #fff4e0 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, #eefbea 0%, #d8f4cc 100%, #bbe4f6 100%, #ffefc7 100%, #fff4e0 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#eefbea', endColorstr='#fff4e0', GradientType=1); /* IE6-9 */
  }

  .specil {
    padding: 0.4rem 0.3rem 0rem 0.32rem;
    /*border-bottom: 0.01rem solid #e6e6e6;*/
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
    .content {
      .con_top {
        display: flex;
        .swiper {
          width: 2.21rem;
          height: 2.41rem;
          /*position: relative;*/
          overflow: hidden;
          margin-right: 0.16rem;
          .add {
            height: 0.66rem;
            text-align: center;
            line-height: 0.66rem;
            font-size: 0.26rem;
            top: 0;
            left: 0;
            color: #82742d;
            &:nth-child(1) {
              .bg1();
            }
            &:nth-child(2) {
              div {
                .bg2();
                color: #114f74;
              }
            }
            &:nth-child(3) {
              div {
                .bg3();
                color: #338300;
              }
            }
          }
          img {
            /*position: absolute;*/
            border-radius: 0.1rem;
          }

        }
      }
      .btnbox {
        display: flex;
        margin-top: 0.3rem;
        .btn {
          width: 1.22rem;
          height: 0.41rem;
          line-height: 0.41rem;
          text-align: center;
          font-size: 0.21rem;
          border-radius: 0.2rem;
          margin-right: 0.21rem;
          &:nth-child(1) {
            color: #02b442;
            background-color: #effcf2;
          }
          &:nth-child(2) {
            color: #0ea1d7;
            background-color: #e3f5ff;
          }
          &:nth-child(3) {
            color: #ff6308;
            background-color: #fff1e8;
          }
          &:nth-child(4) {
            color: #8b5c93;
            background-color: #fceeff;
          }
          &:nth-child(5) {
            color: #07a09e;
            background-color: #e3f7f6;
          }
        }
      }
    }
  }

  .blank {
    .jg();
  }

  .content /deep/ .van-swipe__indicators {
    display: none !important
  }

  .content /deep/ .swiper {
    width: 2.3rem !important;
    height: 3.01rem !important;
    /*position: relative;*/
    /*overflow: hidden;*/
    margin-right: 0.16rem;
    .add {
      height: 0.66rem;
      text-align: center;
      line-height: 0.66rem;
      font-size: 0.26rem;
      top: 0;
      left: 0;
      color: #82742d;
      width: 2.22rem;
      &:nth-child(1) {
        .bg1();
      }
    }
    img {
      /*position: absolute;*/
      border-radius: 0.1rem;
      width: 2.22rem;
      /*margin-left: 0.4rem;*/
      height: 1.77rem;
    }
    &:nth-child(2) {
      .add {
        .bg2();
        color: #114f74;
      }

    }
    &:nth-child(3) {
      .add {
        .bg3();
        color: #338300;
      }
    }
    &:nth-child(4) {
      .add {
        .bg3();
        color: #338300;
      }
    }
    &:nth-child(5) {
      .add {
        .bg3();
        color: #338300;
      }
    }
    &:nth-child(6) {
      .add {
        .bg3();
        color: #338300;
      }
    }
    &:nth-child(7) {
      .add {
        .bg2();
        color: #114f74;
      }

    }
    &:nth-child(8) {
      .add {
        .bg3();
        color: #338300;
      }
    }
    &:nth-child(9) {
      .add {
        .bg3();
        color: #338300;
      }
    }
    &:nth-child(10) {
      .add {
        .bg3();
        color: #338300;
      }
    }
    &:nth-child(11) {
      .add {
        .bg3();
        color: #338300;
      }
    }
  }

  .content /deep/ .van-swipe {
    min-height: 2.89rem !important;
  }

  .add {
    height: 0.66rem;
    text-align: center;
    line-height: 0.66rem;
    font-size: 0.26rem;
    top: 0;
    left: 0;
    color: #82742d;

  }

  .specil_list {
    .add {
      .bg1();
    }
    &:nth-child(1) {
      .add {
        .bg1();
      }
    }
    &:nth-child(2) {
      .add {
        .bg2();
        color: #114f74;
      }
    }
    &:nth-child(3) {
      .add {
        .bg3();
        color: #338300;
      }
    }
    &:nth-child(4) {
      .add {
        .bg1();
      }
    }
    &:nth-child(5) {
      .add {
        .bg2();
        color: #114f74;
      }
    }
    &:nth-child(6) {
      .add {
        .bg3();
        color: #338300;
      }
    }
    &:nth-child(7) {
      .add {
        .bg1();
      }
    }
    &:nth-child(8) {
      .add {
        .bg2();
        color: #114f74;
      }
    }
    &:nth-child(9) {
      .add {
        .bg3();
        color: #338300;
      }
    }
  }

  .recommend-content {
    padding-bottom: 0.2rem;
  }
</style>
