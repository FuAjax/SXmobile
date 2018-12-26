<template>
  <div>
    <div class="blank"></div>
    <div class="project">
      <div class="top">
        <div class="left">
          <p>{{scenic}}</p>
          <p>{{rank}}</p>
        </div>
        <div class="right">
          <van-icon name="arrow" class="icon arrow"/>
        </div>
      </div>
      <van-tabs v-model="active">
        <van-tab class="content" v-for="(index,i) in newsList" :key="i"  :title="index.title">
          <div class="conLeft">
            <div class="news">{{index.news}}</div>
            <div>
              <div class="column">{{index.column}}</div>
              <div class="time">{{index.time}}</div>
            </div>
          </div>
          <div class="conRight">
            <img :src="index.imgSrc" alt="" class="newsImg">
          </div>
        </van-tab>
      </van-tabs>

      <router-link tag="p" to="" class="more">更多景点</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Project",
    data() {
      return {
        scenic: "三乡",
        rank: "工程",
        newsList: [
          {
            newsID: 1,
            imgSrc: "http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg",
            column: "所在栏目",
            time: '2018-08-31',
            title:"政府动态",
            news: "黄陂出台30条政策干货，支持'三乡工程',主推全域旅游黄陂出台30条政策干货，支持'三乡工程',主推全域旅游黄陂出台30条政策干货，支持'三乡工程',主推全域旅游黄陂出台30条政策干货，支持'三乡工程',主推全域旅游"
          },
          {
            newsID: 2,
            imgSrc: "http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg",
            column: "所在栏目",
            time: '2018-08-31',
            title:"政府动态",
            news: "黄陂出台30条政策干货，支持'三乡工程',主推全域旅游"
          },
          {
            newsID: 3,
            imgSrc: "http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg",
            column: "所在栏目",
            time: '2018-08-31',
            title:"政府动态",
            news: "黄陂出台30条政策干货，支持'三乡工程',主推全域旅游"
          },
          {
            newsID: 4,
            imgSrc: "http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg",
            column: "所在栏目",
            time: '2018-08-31',
            title:"政府动态",
            news: "黄陂出台30条政策干货，支持'三乡工程',主推全域旅游"
          },
        ]
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../style/public.less";

  .blank {
    height: 0.2rem;
    width: 100%;
    border-bottom: 0.01rem solid #e7e6ec;
    border-top: 0.01rem solid #e7e6ec;
    background-color: #f1f0f6;
  }

  .project {
    padding: 0.4rem 0.3rem 0.5rem 0.32rem;
    border-bottom: 0.01rem solid #e6e6e6;

    .top {
      height: 0.75rem;
      width: 100%;
      border-bottom: 0.01rem solid #e7e6ec;

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
      &:last-child {
        border: none;
      }
    ;
      padding: 0.3rem 0 0.24rem 0;
      display: flex;
      .bt();

      .conLeft {
        float: left;
        width: 63%;
        .news {
          width: 100%;
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-size: 0.28rem;
          line-height: 0.49rem;
          color: #040406;
        }
        .column {
          margin-top: 0.15rem;
          background-color: #ffeaef;
          color: #dd3c6e;
          font-size: 0.2rem;
          width: 30%;
          line-height: 0.3rem;
          text-align: center;
          height: 0.3rem;
          border-radius: 0.2rem;
          float: left;
        }
        .time {
          margin-top: 0.13rem;
          float: left;
          margin-left: 0.21rem;
          font-size: 0.15rem;
          color: #878787;
        }
      }
      .conRight {
        float: right;
        width: 1.85rem;
        height: 1.21rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .more {
      height: 0.7rem;
      background-color: #fff2ea;
      text-align: center;
      line-height: 0.7rem;
      color: #ff6500;
      font-size: 0.2rem;
    }
  }
</style>
