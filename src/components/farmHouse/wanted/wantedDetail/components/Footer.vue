<template>
  <div>
    <footer>
      <div class="left">
        <div v-if="detail.logo" class="img"
             :style="'background:url(' + tab.logoUrl + ');width: 100%;height: 100%;background-size:cover;background-position: center center'"></div>
        <img v-else src="../../../../../assets/noimg.jpg" alt="">
        <p>{{detail.linkman}}</p>
        <div class="border-right"></div>

      </div>
      <!--<div class="middle" @click="collect">-->
        <!--<div class="iconfont icon-pingfenkongxing" :style="'color:'+ (isCollection? '#FF6500' : '#69696b') + ';'"></div>-->
        <!--<p>收藏</p>-->
      <!--</div>-->
      <div class="right" @click="call" >
        <div class="iconfont icon-dianhua2"></div>
        <p>电话</p>
      </div>
    </footer>
    <!--<van-popup v-model="show" position="bottom" :overlay="false">-->

    <!--</van-popup>-->



  </div>
</template>

<script>
  export default {
    name: "Footer",
    props: {
      detail: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        name: "王先生",
        url: 'http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg',
        isCollection: false,
        // showNum: false,
      }
    },
    methods: {
      call() {
        window.location.href="tel:"+(this.detail.linkmanMobile)
      },
      collect(){
        var _this=this
        console.log(_this.detail);
        var farmhouseRentalsId=_this.detail.id
        if(localStorage.getItem('userInfo')){
          var id=JSON.parse(localStorage.getItem('userInfo')).userId
          console.log(id);

          this.$http.post('appServiceFarmhouse/farmhouseCollection',{farmhouseRentalsId:farmhouseRentalsId,userId:68}).then(res=>{
            console.log(res);
            if(res.msg=='success'){
              this.$toast(res.info);
              this.isCollection=true;
            }else if(res.msg='已经收藏啦!'){
              this.isCollection=true;
              this.$toast(res.info);
            }
          })
        }else{
          this.$toast("登录之后可评论")
          setTimeout(()=>{
            this.$router.push('/login')
          })
        }
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";

  footer {

    display: flex;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    margin-top: 2rem;
    background-color: #fff;
    height: 1rem;
    box-shadow: 0.02rem 0.02rem 0.2rem 0.02rem #a7a4a4;
    .left {
      width: 33%;
      flex: 1;
      .jz();
      position: relative;
      .img, img {
        height: 0.68rem;
        width: 0.68rem;
        border-radius: 50%;
        float: left;
        margin-right: 0.21rem;
      }
      p {
        font-size: 0.36rem;
      }
      .border-right:after {
        content: '';
        position: absolute;
        left: auto;
        top: 0.25rem;
        bottom: 0.1rem;
        right: 0;
        height: 50%;
        width: 0.03rem;
        background-color: #e6e6e6;
        &:nth-child(3) {
          width: 0;
        }
      }
    }
    .middle {
      width: 26.7%;
      flex: 1;
      .jz();
      font-size: 0.34rem;
      .hc();
      .iconfont {
        margin-right: 0.1rem;
        font-size: 0.36rem;

      }
    }
    .right {
      width: 41%;
      flex: 1;
      .jz();
      color: #fff;
      background-color: @mr;
      font-size: 0.34rem;
      .iconfont {
        margin-right: 0.1rem;
        font-size: 0.36rem;
      }
    }
  }
</style>
