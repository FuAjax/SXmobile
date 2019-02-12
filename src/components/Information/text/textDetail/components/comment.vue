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
            <!--<div :class="{red:num}" class="iconfont icon-zan" @click="show"></div>-->
          </div>
          <div class="content">{{comment1.commentConnent}}</div>
          <div class="bot">
            <div class="time">{{comment1.commentTime}}</div>
            <p @click="textClick">回复</p>
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
              <div class="huifu" >回复</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-popup
      v-model="textShow"
      position="bottom">
      <van-cell-group>
        <van-field
          v-model="text"
          label="评论"
          type="textarea"
          placeholder="请输入评论"
          rows="1"
          autosize
        >
          <van-button slot="button" size="small" type="primary" @click="info">回复信息</van-button>
        </van-field>
      </van-cell-group>
    </van-popup>
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
        classItem:'',
        textShow: false,
        text: "",

      }
    },
    created() {
      // this.show = false
    },
    methods: {
      // 最新评论第一条
      // show: function () {
      //   this.$http.post('/appServiceInformation/like', {
      //     commentId: this.comment1.commentId,
      //     userId: this.comment1.userId
      //   }).then(res => {
      //     console.log(res);
      //     if (res.msg == 'success') {
      //       this.num = !this.num;
      //     }
      //   })
      // },
      // 最新评论下部分点赞
      show2(i){
      // this.$set(this.classItem,i,true)
        console.log(213);
        this.$http.post('/appServiceInformation/like', {
        }).then(res => {
          console.log(res);
          if (res.msg == 'success') {
            this.num = !this.num;
          }
        })
      },
      //回复
      textClick() {
        console.log(12);
        this.textShow = true
      },
      // 回复信息
      // 评论
      info() {
        if (localStorage.getItem("userInfo")) {
          if (this.text != "") {
            let infoId = this.$route.params.id
            console.log(this.comment1.commentId);
            let userId = JSON.parse(localStorage.getItem('userInfo')).userId
            this.$http.post('/appServiceInformation/comment', {
              commentConnent: this.text,
              infoId,
              userId,
              commentId:this.comment1.commentId
            }).then(res => {
              this.$toast("回复成功")
              this.textShow = false
              setTimeout(() => {
                window.location.reload()
              },800)
            })
          } else {
            this.$toast("回复内容不能为空")
          }
        } else {
          this.$toast("登录之后可回复")
          setTimeout(() => {
            this.$router.push('/login')
          })
        }

      },
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

  .van-popup {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    ul {
      width: 33.3%;
      flex: 1;
    }
    .iconfont {
      font-size: 1.04rem;
      text-align: center;
      color: #0eb831;
    }
    .xinlang {
      color: #e6162c;
      font-size: 1.15rem;
    }
    .zone {
      color: #01a8ec;
    }
    p {
      text-align: center;
      font-size: 0.26rem;
      .hc();
      margin-top: 0.14rem;
    }
  }

  .van-hairline--top-bottom {
    width: 100%;
  }
</style>
