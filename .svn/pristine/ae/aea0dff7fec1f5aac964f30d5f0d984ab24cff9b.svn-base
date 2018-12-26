<template>
  <div class="text">
    <div class="list" v-for="(index,i) in list">
      <div class="left">
        <div class="top">
          <div class="iconfont icon-dian"></div>
          {{index.title}}
        </div>
        <div class="time">
          <p>{{index.time}}</p>
          <p>{{index.date}}</p>
        </div>
      </div>
      <div class="right">删除</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "List",
    data() {
      return {
        list: [
          {
            title: "你发布的大数据库里的即可拉伸机离开大健康sss坚实的",
            time: "2017-11-13",
            date: "11:10"
          },
          {
            title: "你发布的大数据库里的即可拉伸机离开大健康sss坚实的",
            time: "2017-11-13",
            date: "11:10"
          },
          {
            title: "你发布的大数据库里的即可拉伸机离开大健康sss坚实的",
            time: "2017-11-13",
            date: "11:10"
          },
        ]
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";
  .text{
    padding: 0.43rem 0.3rem;
    padding-top: 0;
    .list {
      padding-top: 0.4rem;
      min-height: 1.7rem;
      overflow: auto;
      .bt();
      .left {
        float: left;
        width: 78.2%;
        .top {
          font-size: 0.3rem;
          min-height: 0.81rem;
          overflow: auto;
          line-height: 0.42rem;
          letter-spacing: 0.03rem;
          .iconfont {
            float: left;
            color: #00a62e;
            font-size: 0.4rem;
          }
        }
        .time {
          margin-top: 0.3rem;
          font-size: 0.2rem;
          .hc();
          p {
            float: left;
            margin-right: 0.2rem;
          }
        }
      }
      .right {
        float: right;
        .button();
        padding: 0.15rem 0.34rem;
        background-color: #e7e6ec;
        color: #646369;
        font-size: 0.22rem;
        border-radius: 0.3rem;
      }
    }
  }

</style>
