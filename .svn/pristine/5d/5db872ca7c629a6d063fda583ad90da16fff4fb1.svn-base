<template>
  <div class="scenic">
    <div class="top">
      <div class="left">
        <p>{{scenic}}</p>
        <p>{{rank}}</p>
      </div>
      <div class="right">
        <van-icon name="arrow" class="icon arrow"/>
      </div>
    </div>
    <div class="content">
      <van-swipe :loop="false">
        <van-swipe-item v-for="(item,i) in list" :key="i" class="swiper">
          <router-link :to="{name:'detail',params:{goods:item.goodsID}}">
            <img :src="item.imgSrc" alt="" srcset=""/>
            <div class="add">{{item.add}}</div>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Scenic',
    data() {
      return {
        scenic: "欢乐",
        rank: "排行榜",
        list: [
          {goodsID: 1, imgSrc: "http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg", add: "木兰天池风景区(5A)"},
          {
            goodsID: 2,
            imgSrc: "http://07.imgmini.eastday.com/mobile/20180302/b293c7af30c8a9eba71d44fe49d21cbc.jpeg",
            add: "木兰天池风景区(5A)"
          },
          {goodsID: 3, imgSrc: "http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg", add: "木兰天池风景区(5A)"},
          {
            goodsID: 4,
            imgSrc: "http://img.idol001.com/origin/2017/06/20/36a6298c214e4cb4784ef0c5494428801497949779.jpg",
            add: "木兰天池风景区(5A)"
          },
          {
            goodsID: 4,
            imgSrc: "http://img.idol001.com/origin/2017/06/20/36a6298c214e4cb4784ef0c5494428801497949779.jpg",
            add: "木兰天池风景区(5A)"
          },
          {
            goodsID: 4,
            imgSrc: "http://img.idol001.com/origin/2017/06/20/36a6298c214e4cb4784ef0c5494428801497949779.jpg",
            add: "木兰天池风景区(5A)"
          },
          {
            goodsID: 4,
            imgSrc: "http://img.idol001.com/origin/2017/06/20/36a6298c214e4cb4784ef0c5494428801497949779.jpg",
            add: "木兰天池风景区(5A)"
          },
        ]
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .scenic {
    padding: 0.4rem 0.3rem 0.5rem 0.32rem;
    border-bottom: 0.01rem solid #e6e6e6;
    .top {
      height: 0.75rem;
      width: 100%;
      padding-left: 0.3rem;
      margin-top: 0.3rem;
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
      }
    }
    .content {
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

  .content /deep/ .van-swipe__indicators {
    display: none !important
  }

  .content /deep/ .swiper {
    width: 3.02rem !important;
    height: 2.01rem !important;
  }

  .content /deep/ .van-swipe {
    min-height: 2.89rem !important;
  }
</style>
