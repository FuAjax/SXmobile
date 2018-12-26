<template>
  <div>
    <div class="farm">
      <div class="top">周边农房</div>
      <div class="content">
        <van-swipe :loop="false">
          <van-swipe-item v-for="(item,i) in list" :key="i" class="swiper">
            <router-link :to="{name:'rentDetail',params:{id:item.farmhouseNumber}}">
              <img :src="item.farmhouseLogourl" alt="" srcset=""/>
              <div class="add">{{item.farmhouseTitle}}</div>
              <div class="bot">
                <div class="price">{{item.farmhousePrice}}万元</div>
                <div class="year">{{item.farmhouseYears}}年</div>
                <div class="meters">{{item.farmhouseArea}}平</div>
              </div>
            </router-link>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
  export default {
    name: "RimFarm",
    props:{
      list:{
        type:Array,
        required:true
      }
    },
    data() {
      return {
        list: [
          {
            goodsID: 1,
            imgSrc: "http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg",
            add: "木兰天池风景区(5A)",
            price: "220",
            year: "8",
            meters: "100"
          },
          {
            goodsID: 2,
            imgSrc: "http://07.imgmini.eastday.com/mobile/20180302/b293c7af30c8a9eba71d44fe49d21cbc.jpeg",
            add: "木兰天池风景区(5A)",
            price: "220"
          },
          {
            goodsID: 3,
            imgSrc: "http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg",
            add: "木兰天池风景区(5A)",
            price: "220"
          },
          {
            goodsID: 4,
            imgSrc: "http://img.idol001.com/origin/2017/06/20/36a6298c214e4cb4784ef0c5494428801497949779.jpg",
            add: "木兰天池风景区(5A)",
            price: "220"
          },
          {
            goodsID: 4,
            imgSrc: "http://img.idol001.com/origin/2017/06/20/36a6298c214e4cb4784ef0c5494428801497949779.jpg",
            add: "木兰天池风景区(5A)sssssssssssss",
            price: "220"
          },
          {
            goodsID: 4,
            imgSrc: "http://img.idol001.com/origin/2017/06/20/36a6298c214e4cb4784ef0c5494428801497949779.jpg",
            add: "木兰天池风景区(5A)",
            price: "220"
          },
          {
            goodsID: 4,
            imgSrc: "http://img.idol001.com/origin/2017/06/20/36a6298c214e4cb4784ef0c5494428801497949779.jpg",
            add: "木兰天池风景区(5A)",
            price: "220"
          },
        ]
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../style/public.less";

  .content {
    .swiper {
      margin-right: 0.17rem;
    }
    .add {
      font-size: 0.26rem;
      color: #313133;
      margin-top: 0.08rem;
      width: 3rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
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

  .blank {
    .jg()
  }

  .farm {
    padding: 0.42rem 0.3rem;
    .top{
      .tt();
      float: none;
      height: 0.72rem;
    }
    .content{
      .bot{
        margin-top: 0.05rem;
        font-size: 0.23rem;
        .hc();
        .price{
          font-weight: 600;
          .rc();
          float: left;
        }
        .year{
          float: left;
          margin-left: 0.72rem;
          margin-right: 0.24rem;
        }
        .meters{
          float: right;
        }
      }
    }
  }
</style>
