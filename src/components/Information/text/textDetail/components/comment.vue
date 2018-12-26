<template>
  <div>
    <div class="comment">
      <div class="top">最新评论</div>
      <div class="message">
        <div class="zuo">
          <img :src="comment1.userHeadurl" alt="">
        </div>
        <div class="you">
          <div class="header">
            <div class="name" ref="name">{{comment1.userNickname}}</div>
            <div :class="{red:num}" class="iconfont icon-zan" @click="show"></div>
          </div>
          <div class="content">{{comment1.commentConnent}}</div>
          <div class="bot">
            <div class="time">{{comment1.commentTime}}</div>
            <p>回复</p>
          </div>
          <div class="require" v-for="(index,i) in messageList" v-if="i!==0">
              <div  class="iconfont icon-zan" @click="show2(i)" :class="{}"></div>
            <p>{{index.ruserNickname}}</p>
            <p>回复</p>
            <p>{{index.userNickname}}:</p>
            <p>{{index.commentConnent}}</p>
            <div class="bottom">
              <div class="left">
                <p>{{index.commentTime}}</p>
                <p>{{index.commentUserful}}个赞</p>
              </div>
              <div class="huifu">回复</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "comment",
    props: {
      comment1: {
        type: Object,
        required: true
      },
      messageList: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        num: true,
        classItem:''
      }
    },
    created() {
      // this.show = false
    },
    methods: {
      // 最新评论第一条
      show: function () {
        this.$http.post('/appServiceInformation/like', {
          commentId: this.comment1.commentId,
          userId: this.comment1.userId
        }).then(res => {
          console.log(res);
          if (res.msg == 'success') {
            this.num = !this.num;
          }
        })
      },
      // 最新评论下部分
      show2(i){
      this.$set(this.classItem,i,true)
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";

  .comment {
    margin-bottom: 1rem;
    padding: 0.4rem 0.3rem 0.55rem 0.3rem;
    .top {
      height: 0.72rem;
      font-size: 0.31rem;
      font-weight: 600;
      color: #000000;
    }
    .message {
      display: flex;
      .zuo {
        margin-right: 0.33rem;
        height: 0.89rem;
        width: 12.4%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .you {
        float: right;
        width: 87.6%;
        .header {
          height: 0.68rem;
          .name {
            font-size: 0.26rem;
            .hc();
            float: left;

          }
          .iconfont {
            float: right;
            font-size: 0.32rem;
          }

        }
        .content {
          font-size: 0.27rem;
          line-height: 0.46rem;
          color: #000;
        }
        .bot {
          height: 0.42rem;
          .time {
            float: left;
            line-height: 0.42rem;
            font-size: 0.21rem;
            .hc();
          }
          p {
            float: right;
            padding: 0.09rem 0.35rem;
            background-color: #06a3ea;
            color: #fff;
            font-size: 0.2rem;
            border-radius: 0.2rem;
          }
        }
        .require {
          margin-top: 0.3rem;
          min-height: 1.35rem;
          overflow: auto;
          border: 1px solid #dcdbe0;
          background-color: #faf9ff;
          border-radius: 0.15rem;
          padding: 0.3rem 0.36rem 0.1rem 0.36rem;
          position: relative;
          font-size: 0.26rem;
          margin-bottom: 0.2rem;
          p {
            float: left;

            margin-bottom: 0.21rem;
            color: #636268;
            &:nth-child(4) {
              line-height: 0.46rem;
            }
          }
          .bottom {
            .left {
              float: left;
              p:nth-child(1) {
                border-right: 1px solid #dcdbe0;
                padding-right: 0.19rem;
                margin-right: 0.19rem;
              }
              p {
                .hc()
              }
            }
            .huifu {
              float: right;
              color: #06a3ea;
            }
          }
        }
      }
    }
    .red {
      color: #ff6500;
    }

    .selected{
      color:#ff6500;
    }
  }
</style>
