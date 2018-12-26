<template>
  <div>
    <div class="top">
      <div class="title">
        <div class="left">
          <!--<p>{{p1}}</p>-->
          <p>{{detail.farmhouseTitle}}</p>

        </div>
        <div class="right">
          <div class="iconfont icon-fenxiang" @click="shareShow()"></div>
        </div>
      </div>
      <div class="content">
        <div class="num">
          <p>{{bian}}</p>
          <p>{{detail.farmhouseRentingNumber}}</p>
        </div>
        <div class="time">
          <p>{{shijian}}</p>
          <p>{{detail.updateTime}}</p>
        </div>
      </div>
    </div>

    <div class="blank"></div>
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
  </div>
</template>

<script>
  export default {
    name: "Title",
    props: {
      detail: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        p1: "个人求租",
        p2: "黄陂区",
        p3: "4房",
        p4: "木兰山",
        p5: "160平",
        p6: "独立小院",
        p7: "可种菜",
        bian: "编号:",
        numbers: "2000002",
        shijian: "更新时间:",
        time: "2017-08-09",
        range: "星级",
        show: false
      }
    },
    methods: {
      shareShow: function () {
        this.show = true
      },
      // 微信
      weixin() {

        this.WXConfig.wxShowMenu()

      },
      // 新浪
      xinlang() {
        var name =this.detail.fstreetName+this.detail.farmhouseTitle+`—【武汉市三乡工程网农房求租】`
        var top = window.screen.height / 2 - 250;
        var left = window.screen.width / 2 - 300;
        var height = window.screen.height;
        var width =  window.screen.width;
        /*title是标题，rLink链接，summary内容，site分享来源，pic分享图片路径,分享到新浪微博*/
          var desc_ =name
          var title = desc_;
          var   rLink =  window.location.href;
          var backUrl = "http://wx.hengfu100.com/member/c_friend";
          var site = desc_;
          var pic = "";
          window.open("http://service.weibo.com/share/share.php?pic=" +encodeURIComponent(pic) +"&title=" +
            encodeURIComponent(title.toString().replace(/ /g, " ").replace(/<br \/>/g, " "))+ "&url=" + encodeURIComponent(rLink),
            "分享至新浪微博",
            "height=500,width=600,top=" + top + ",left=" + left + ",toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no");
      },
      // QQ空间
      zone() {
        // 输入信息
        var name =this.detail.fstreetName+this.detail.farmhouseTitle+`—【武汉市三乡工程网农房求租】`
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
        _shareUrl += 'url=' + encodeURIComponent(_url||document.location);   //参数url设置分享的内容链接|默认当前页location
        _shareUrl += '&showcount=' + _showcount||0;      //参数showcount是否显示分享总数,显示：'1'，不显示：'0'，默认不显示
        _shareUrl += '&desc=' + encodeURIComponent(_desc||'分享的描述');    //参数desc设置分享的描述，可选参数
        //_shareUrl += '&summary=' + encodeURIComponent(_summary||'分享摘要');    //参数summary设置分享摘要，可选参数
        _shareUrl += '&title=' + encodeURIComponent(_title||document.title);    //参数title设置分享标题，可选参数
        //_shareUrl += '&site=' + encodeURIComponent(_site||'');   //参数site设置分享来源，可选参数
        _shareUrl += '&pics=' + encodeURIComponent(_pic||'');   //参数pics设置分享图片的路径，多张图片以＂|＂隔开，可选参数
        window.open(_shareUrl,'width='+_width+',height='+_height+',top='+(screen.height-_height)/2+',left='+(screen.width-_width)/2+',toolbar=no,menubar=no,scrollbars=no,resizable=1,location=no,status=0');
      },
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";

  .top {
    height: 1.7rem;
    padding: 0rem 0.31rem 0 0.31rem;
    margin-top: 1.2rem;
    .title {
      height: 0.8rem;
      .bt();
      font-size: 0.33rem;
      color: #06050a;
      font-weight: 600;
      .left {
        p {
          float: left;
          margin-right: 0.1rem;
          &:nth-child(1) {
            /*color: #03ae2c;*/
          }
        }
        float: left;
        width: 81%;
      }
      .right {
        float: right;
        width: 0.88rem;
        height: 0.88rem;
        background-color: #e3f5ff;
        border-radius: 50%;
        margin-top: -0.25rem;
        .jz();
        .iconfont {
          color: #00a4e6;
          font-size: 0.4rem;
        }

      }
    }
    .content {
      padding-top: 0.32rem;
      font-size: 0.21rem;
      color: #6a6a6c;
      div {
        float: left;
        margin-right: 0.2rem;
        p {
          float: left;
          margin-right: 0.17rem;
          .iconfont {
            color: #ff682f;
          }
        }
        &:nth-child(3) {
          margin-right: 0rem;
        }
      }
    }
  }

  .blank {
    .jg();
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
</style>
