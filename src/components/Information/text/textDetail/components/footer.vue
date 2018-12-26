<template>
  <footer>
    <div class="left">
      <div class="iconfont icon-xiepinglun"></div>
      <input type="text" placeholder="写评论..." @click="textClick" v-model="text">
    </div>
    <div class="right">
      <div class="iconfont icon-xinxi" @click="info"></div>
      <div class="iconfont icon-pingfenkongxing" @click="collect()"
           :style="'color:'+ (isCollection? '#FF6500' : '#69696b') + ';'"></div>
      <div class="iconfont icon-fenxiang" @click="shareShow()"></div>
    </div>
    <van-popup
      v-model="show"
      position="bottom">
      <ul @click="weixin">
        <div class="iconfont icon-weixin1"></div>
        <p>微信好友</p>
      </ul>
      <ul @click="xinlang">
        <div class="iconfont icon-weibo2 xinlang"></div>
        <p>新浪微博</p>
      </ul>
      <ul @click="zone">
        <div class="iconfont icon-QQ zone"></div>
        <p>QQ空间</p>
      </ul>


    </van-popup>
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
        />
      </van-cell-group>
    </van-popup>
  </footer>
</template>

<script>
  export default {
    name: "footer",
    props: {
      detail: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        isCollection: false,
        text: "",
        show: false,
        textShow: false,
      }
    },
    methods: {
      // 收藏
      collect() {
        if (localStorage.getItem("userInfo")) {
          var infoId = this.$route.params.id
          var id = JSON.parse(localStorage.getItem("userInfo")).userId
          this.$http.post('/appServiceInformation/collect', {userId: id, infoId: infoId}).then(res => {

            if (res.msg = 'success') {
              if (res.info == '请求成功') {
                this.$toast('收藏成功');
                this.isCollection = true;
              } else {
                this.$toast('重复收藏');
                this.isCollection = true;
              }
            } else if (res.msg = 'fail') {
              this.$toast('系统错误');
            }
          })
        } else {
          this.$toast("登录之后可收藏")
          setTimeout(() => {
            this.$router.push('/login')
          })
        }

      },
      // 评论
      info() {
        if (localStorage.getItem("userInfo")) {
          if (this.text != "") {
            let infoId = this.$route.params.id
            console.log(infoId);
            let userId = JSON.parse(localStorage.getItem('userInfo')).userId

            this.$http.post('/appServiceInformation/comment', {
              commentConnent: this.text,
              infoId,
              userId
            }).then(res => {
              this.$toast("评论成功")
            })
          } else {
            this.$toast("评论内容不能为空")
          }
        } else {
          this.$toast("登录之后可评论")
          setTimeout(() => {
            this.$router.push('/login')
          })
        }

      },

      // 分享
      shareShow: function () {
        if (localStorage.getItem("userInfo")) {
          this.show = true
        } else {
          this.$toast("登录之后可分享")
          setTimeout(() => {
            this.$router.push('/login')
          })
        }

      },
      // 微信
      weixin() {
        console.log(this.detail[0].infoFrom);
        console.log(this.detail[0].infoTime);
        console.log(this.detail[0].infoTitle);
        // this.WXConfig.wxShowMenu()

      },
      // 新浪
      xinlang() {
        var name = this.detail[0].infoTitle + this.detail[0].infoTime + `—【武汉市三乡工程网文章详情】`
        var top = window.screen.height / 2 - 250;
        var left = window.screen.width / 2 - 300;
        var height = window.screen.height;
        var width = window.screen.width;
        /*title是标题，rLink链接，summary内容，site分享来源，pic分享图片路径,分享到新浪微博*/
        var desc_ = name
        var title = desc_;
        var rLink = window.location.href;
        var backUrl = "http://wx.hengfu100.com/member/c_friend";
        var site = desc_;
        var pic = "";

        window.open("http://service.weibo.com/share/share.php?pic=" + encodeURIComponent(pic) + "&title=" +
          encodeURIComponent(title.toString().replace(/ /g, " ").replace(/<br \/>/g, " ")) + "&url=" + encodeURIComponent(rLink),
          "分享至新浪微博",
          "height=500,width=600,top=" + top + ",left=" + left + ",toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no");
      },
      // QQ空间
      zone() {
        // 输入信息
        var name = this.detail[0].infoTitle + this.detail[0].infoTime + `—【武汉市三乡工程网农房求租】`
        console.log(name);
        var desc_ = name;
        var _url = window.location.href;
        var _showcount = 0;
        var _desc = desc_;
        var _summary = "";
        var _title = name;
        var _site = "";
        var _width = "600px";
        var _height = "800px";
        var _summary = "";
        var _pic = "";
        var _shareUrl = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
        _shareUrl += 'url=' + encodeURIComponent(_url || document.location);   //参数url设置分享的内容链接|默认当前页location
        _shareUrl += '&showcount=' + _showcount || 0;      //参数showcount是否显示分享总数,显示：'1'，不显示：'0'，默认不显示
        _shareUrl += '&desc=' + encodeURIComponent(_desc);    //参数desc设置分享的描述，可选参数
        //_shareUrl += '&summary=' + encodeURIComponent(_summary||'分享摘要');    //参数summary设置分享摘要，可选参数
        _shareUrl += '&title=' + encodeURIComponent(_title);    //参数title设置分享标题，可选参数
        //_shareUrl += '&site=' + encodeURIComponent(_site||'');   //参数site设置分享来源，可选参数
        _shareUrl += '&pics=' + encodeURIComponent(_pic || '');   //参数pics设置分享图片的路径，多张图片以＂|＂隔开，可选参数
        window.open(_shareUrl, 'width=' + _width + ',height=' + _height + ',top=' + (screen.height - _height) / 2 + ',left=' + (screen.width - _width) / 2 + ',toolbar=no,menubar=no,scrollbars=no,resizable=1,location=no,status=0');
      },
      // 评论
      textClick() {
        this.textShow = true
      }
    },
    created: function () {
      // this.init()
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";

  footer {
    background-color: #fff;
    margin-top: 0.1rem;
    height: 0.56rem;
    position: fixed;
    left: 0;
    bottom: 0;
    box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem #dedde2;
    width: 100%;
    padding: 0.22rem 0.3rem;
    display: flex;
    .left {
      margin-right: 0.58rem;
      width: 52%;
      position: relative;
      border: 1px solid #908f94;
      border-radius: 1.4rem;
      .iconfont {
        float: left;
        font-size: 0.28rem;
        position: absolute;
        left: 0.31rem;
        top: 0.1rem;
      }
      input {
        float: left;
        border: none;
        position: absolute;
        left: 0.7rem;
        top: 0.09rem;
        font-size: 0.24rem;
        width: 74%;
      }
      input::-webkit-input-placeholder {
        /* placeholder颜色  */
        color: #aab2bd;
        /* placeholder字体大小  */
        font-size: 0.24rem;
        /* placeholder位置  */
        text-align: left;
      }
    }
    .right {
      flex: 1;
      display: flex;

      .iconfont {
        flex: 1;
        font-size: 0.35rem;
        color: #908f94;
        margin-top: 0.1rem;
      }
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
