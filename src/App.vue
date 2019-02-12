<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  (function (doc, win) {
    let docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if(clientWidth>=750){
          docEl.style.fontSize = '50px';
        }else{
          docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        }
      };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);

    doc.addEventListener('plusready', function() {
        var webview = plus.webview.currentWebview();
        plus.key.addEventListener('backbutton', function() {
            webview.canBack(function(e) {
                if(e.canBack) {
                  webview.back();
                } else {
                  //webview.close(); //hide,quit
                  //plus.runtime.quit();
                  //首页返回键处理
                  //处理逻辑：1秒内，连续两次按返回键，则退出应用；
                  var first = null;
                  plus.key.addEventListener('backbutton', function() {
                    //首次按键，提示‘再按一次退出应用’
                    if (!first) {
                      first = new Date().getTime();
                      this.$toast('再按一次退出应用');
                      setTimeout(function() {
                        first = null;
                      }, 1000);
                    } else {
                      if (new Date().getTime() - first < 1500) {
                        plus.runtime.quit();
                      }
                    }
                  }, false);
                }
            })
        });
    });

  })(document, window);
  export default {
    name: 'App'
  }
</script>


<style lang="less" type="text/less">
  @import "./style/ba.less";
  @media screen and (min-width:540px) {
    #app{
      width: 540px;
    }
  }
  #app{
    width: 100%;
    margin: 0 auto!important;
  }
</style>
