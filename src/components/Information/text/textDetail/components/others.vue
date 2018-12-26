<template>
  <div>
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

      <router-link class="content" v-for="(index,i) in newsList" :key="i"  :to="{name:'textDetail',params:{id:index.infoId}}">
        <!--<router-link >-->
          <div class="conLeft"  @click="onLoad">
            <div class="news">{{index.infoTitle}}</div>
            <div>
              <div class="column">{{index.infoColumn}}</div>
              <div class="time">{{index.infoTime}}</div>
            </div>
          </div>
          <div class="conRight">
            <img :src="index.infoLogourl" alt="" class="newsImg">
          </div>
        <!--</router-link>-->
      </router-link>
      <!--<router-link tag="p" to="" class="more">更多景点</router-link>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "Project",
    props:{
      newsList:{
        type:Array,
        required:true
      }
    },
    data() {
      return {
        scenic: "",
        rank: "相关资讯",

      }
    },
    methods:{
      onLoad(){
        console.log(123);
        // this.$router.go(-1);
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";

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
      a{
        width: 100%;
      }
      & :last-child {
        border: none;
      }


      padding: 0.3rem 0 0.24rem 0;
      display: flex;
      .bt();
      &:last-child{
        border: none;
      }
      .conLeft {
        float: right;
        width: 69%;
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
        float: left;
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
