<template>
  <div class="details">
    <player :videoUrl="details.videoUrl" :coverUrl="details.coverUrl" :videoId="details.videoId"/>
    <div class="description">
      <span class="label" :style="{backgroundColor: details.videoLabelColor}">{{details.videoLabel}}</span>
      <p class="title">{{details.videoTitle}}</p>
      <p class="info">
        <span>{{details.mtime}}</span>
        <i class="iconfont icon--"></i>
        {{details.videoPlayTimes}}
      </p>
      <p class="summary">简介</p>
      <p class="article ql-editor" v-html="details.videoDescription"></p>
    </div>
  </div>
</template>
<script>
  import player from '@/components/player'
  import { videoDtails, getApp } from '@/config/api'

  /* eslint-disable no-undef */
  export default {
    components: {
      player
    },
    data () {
      return {
        details: {},
        appId: '',
        signature: '',
        timestamp: '',
        nonceStr: ''
      }
    },
    beforeDestroy () {
      document.querySelector('.htmlTitle').text = 'title'
    },
    mounted () {
      // 获取详情数据let url = window.location.href.split("#")[0]
      this.$http.get(this, videoDtails, {videoId: this.$route.query.id}, res => {
        this.details = res
        document.querySelector('.htmlTitle').text = this.details.videoTitle
        this.$http.get(this, getApp, {url: url, refresh: true}, res => {
          this.appId = res.appId
          this.signature = res.signature
          this.timestamp = res.timestamp
          this.nonceStr = res.nonceStr
          this.shard(url)
        })
      })
    },
    methods: {
      shard (url) {
        wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: this.appId, // 必填，公众号的唯一标识
          timestamp: this.timestamp, // 必填，生成签名的时间戳
          nonceStr: this.nonceStr, // 必填，生成签名的随机串
          signature: this.signature, // 必填，签名，见附录1
          jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        })
        wx.onMenuShareTimeline({
          title: this.details.videoTitle, // 分享标题
          link: url+'#/...', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: this.details.coverUrl, // 分享图标
          success () {
            alert('分享朋友圈成功')
            // 用户确认分享后执行的回调函数
          },
          cancel () {
            // 用户取消分享后执行的回调函数
          }
        })

        wx.onMenuShareAppMessage({
          title: this.details.videoTitle, // 分享标题
          desc: this.details.videoTitle, // 分享描述
          link: url+'#/...', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: this.details.coverUrl, // 分享图标
          type: 'video', // 分享类型,music、video或link，不填默认为link
          dataUrl: this.details.videoUrl, // 如果type是music或video，则要提供数据链接，默认为空
          success: function () {
            alert('分享给朋友成功')
            // 用户确认分享后执行的回调函数
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
          }
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  .details {
    overflow: hidden;
    .description {
      padding: 10px;
      .label {
        display: inline-block;
        padding:0 10px;
        height: 22px;
        line-height: 22px;
        color: #fff;
        font-size: 12px;
        text-align: center;
      }
      .title {
        line-height: 30px;
        font-size: 18px;
      }
      .info {
        line-height: 26px;
        color: #949494;
        span {
          margin-right: 15px;
        }
        .iconfont {
          font-size: 12px;
        }
      }
      .summary {
        margin-top: 20px;
        color: #4b4b4b;
        font-size: 16px;
      }
      .article {
        margin-top: 10px;
      }
    }
  }
</style>
