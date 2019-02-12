<template>
  <div class="banner">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item,i) in list" :key="i" class="swiper">
          <img :src="item" alt="" srcset=""/>
      </van-swipe-item>

    </van-swipe>
    <div class="share">
      <span @click="share"><i class="iconfont icon-fenxiang"></i></span>
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
  </div>
</template>
<script>
  export default {
    name: "Swiper",
    props:{
      list:{
        type:Array,
        required:true
      },
      detail:{
        type:String,
        required:true
      },
    },
    data() {
      return {
        show: false
      }
    },
    methods:{
      share: function () {
        this.show = true
      },
      // 微信
      weixin() {

        this.WXConfig.wxShowMenu()

      },
      // 新浪
      xinlang() {
        var name =this.detail.villageName+`—【武汉市三乡工程网农房求租】`
        console.log(name);
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
        var name =this.detail.villageName+`—【武汉市三乡工程网农房求租】`
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
  .van-swipe {
    height: 4.02rem;
    width: 100%;
    margin-top: 0.92rem;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
  .banner{
    position: relative;
  }
  .share{
    position: absolute;
    top: 0.2rem;
    right: 0.2rem;
    span{
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background-color: rgba(0, 0, 0, 0.6);
      text-align: center;
      line-height: 0.48rem;
      border-radius: 50%;
      i{
        color: white;
        font-size: 0.33rem;
      }
    }
  }
  .vr{
    position: absolute;
    top: 2.8rem;
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
