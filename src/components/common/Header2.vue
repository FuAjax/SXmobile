<template>
  <header>
    <div class="header">
      <div :style="'position: relative;z-index: 999;' + ( color ? 'background: '+color+'; color: #fff' : 'background: #fff; color: #000' ) +''">
        <van-nav-bar
          :title="title"
          right-text=""
          left-arrow
          @click-left="onClickLeft"
          @click-right="showList"
          >
          <van-icon name="arrow-left"
                    slot="left"
                    :color='color?"#fff":"#000"'
                    size="0.3rem"
          />
          <van-icon name="contact"
                    slot="right"
                    :color='color?"#fff":"#000"'
                    size="0.35rem"
                    @click="mine"
                    v-if="type == 3"
          />
          <van-icon name="wap-nav"
                    slot="right"
                    :color='color?"#fff":"#000"'
                    size="0.35rem"
                    v-if="type == 3"
          />
        </van-nav-bar>
      </div>
    </div>
      <van-popup
        v-model="show"
        position="top">
        <van-collapse v-model="activeNames">
          <div data-v-1f234af1="" class="van-collapse-item van-hairline--top headerin" @click="home">
            <div class="van-cell van-cell--clickable van-hairline van-collapse-item__title">
              <div class="van-cell__title">
                <span>首页</span>
              </div>
              <i class="van-icon van-icon-arrow van-cell__right-icon"><!----></i>
            </div>
          </div>
          <van-collapse-item v-show="item == 1 || item == 2" v-for="(index,item) in List"
            :title="index.title"
            :name="index.name">
            <div class="link">
              <ul v-for="(img,i) in index.imgList">
                <router-link :to="{name: img.to}">
                <li>
                  <img :src="img.url" alt="">
                  <p>{{img.link}}</p>
                </li>
                </router-link>
              </ul>
            </div>
            <!-- <span>{{index.message}}</span> -->
          </van-collapse-item>
          <div data-v-1f234af1="" class="van-collapse-item van-hairline--top headerin" @click="toInformation">
            <div class="van-cell van-cell--clickable van-hairline van-collapse-item__title">
              <div class="van-cell__title">
                <span>三乡工程</span>
              </div>
              <i class="van-icon van-icon-arrow van-cell__right-icon"><!----></i>
            </div>
          </div>
          <div data-v-1f234af1="" class="van-collapse-item van-hairline--top headerin" @click="mine">
            <div class="van-cell van-cell--clickable van-hairline van-collapse-item__title">
              <div class="van-cell__title">
                <span>个人中心</span>
              </div>
              <i class="van-icon van-icon-arrow van-cell__right-icon"><!----></i>
            </div>
          </div>
        </van-collapse>
      </van-popup>
  </header>
</template>

<script>
  import index from '../../assets/imgs/logo2.png'
  import url from '../../assets/imgs/sy_01.png'
  import url2 from '../../assets/imgs/sy_02.png'
  import url3 from '../../assets/imgs/sy_03.png'
  import url4 from '../../assets/imgs/sy_04.png'
  import url5 from '../../assets/imgs/sy_05.png'
  import url6 from '../../assets/imgs/sy_06.png'
  import url7 from '../../assets/imgs/sy_07.png'
  import url8 from '../../assets/imgs/sy_08.png'
  import url9 from '../../assets/imgs/sy_09.png'
  import url10 from '../../assets/imgs/sy_10.png'

  export default {
    name: "Header2",
    props:{
      title: '', color: null, isback: false
    },
    data() {
      return {
        // title: "三乡工程网",
        type: 0,
        activeNames: [''],
        show: false,
        List: [
          {
            name: "1",
            title: "首页",
            disabled: true
          },
          {
            name: "2",
            title: "共享农庄",
            message: "发布农庄",
            disabled: false,
            imgList: [
              {
                url: url,
                link: "农庄",
                to: 'grangeindex'
              },
              {
                url: url4,
                link: "民宿",
                to: 'shareInn'
              },
              {
                url: url3,
                link: "农家乐",
                to: 'sharePlay'
              },
              {
                url: url2,
                link: "景点",
                to: 'scenic'
              },
              {
                url: url5,
                link: "美食",
                to: 'shareFood'
              },
            ]
          },
          {
            name: "3",
            title: "闲置农房",
            message: "发布农房",
            disabled: true,
            imgList: [
              {
                url: url6,
                link: "闲置农房",
                to: 'farmHouse'
              },
              {
                url: url7,
                link: "租农房",
                to: 'rentList'
              },
              {
                url: url8,
                link: "查成交",
                to: 'dealList'
              },
              {
                url: url9,
                link: "农房求租",
                to: 'wantedList'
              },
              {
                url: url10,
                link: "政策文件",
                to: 'Information'
              },
            ]
          },
          {
            name: "4",
            title: "三乡工程",
            disabled: true
          },
          {
            name: "5",
            title: "个人中心",
            disabled: true
          },
        ],
      }
    },
    methods: {
      mine(){
        if(localStorage.getItem('userInfo')){
          this.$router.push({name: 'personalCenter'})
        } else {
          this.$router.push({ name: 'login'})
        }
      },
      home(){
        if(this.type == 3){
          this.$router.push({ name: 'index'})
        } else {
          this.$router.push({ name: 'navbar', query: { type: 0 }})
        }
      },
      onClickLeft() {
        this.$router.back(-1)
      },
      onClickRight() {
        // Toast('按钮');
      },
      showList(){
        this.show = !this.show
      },
      toInformation(){
        this.$router.push({ name: 'Information'})
      }
    },
    created(){
      this.type = this.$proType
    }
  }
</script>

<style scoped lang="less" type="text/less">
  // @import "../../style/public.less";

  // .van-icon {
  //   &:nth-child(1) {
  //     margin-right: 0.3rem;

  //   }
  // }
  // .van-nav-bar {
  //   font-weight: 600;
  //   font-size: 0.32rem;
  // }
</style>

<style scoped lang="less" type="text/less">
  @import "../../style/public.less";

  @ft1: 0.23rem;
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: .92rem;
    line-height: .92rem;
    box-sizing: border-box;
    background: #fff;
    z-index: 999;
    .img {
      width: 1.84rem;
      height: .92rem;
      float: left;
      margin-right: 0.28rem;
      margin-left: 0.1rem;
      img {
        margin-top: .33rem;
        width: 100%;
        height: .3rem;
      }
    }
    .position {
      font-size: 0.22rem;
      float: left;
      .dizhi {
        margin-right: 0.11rem;
        float: left;
      }
      .po {
        float: left;
        margin-right: 0.11rem
      }
      .iconfont {
        float: left;
      }
    }
    .right {
      float: right;

    }

    .van-icon {
      &:nth-child(1) {
        margin-right: 0.3rem;

      }
    }
    .van-nav-bar {
      font-weight: 600;
      font-size: 0.32rem;
    }
    .van-hairline--bottom.van-nav-bar{
      z-index: 9999999;
    }
    .headerin .van-collapse-item__title .van-cell__right-icon::before{
        -webkit-transform: rotate(0);
        transform: rotate(0);
    }
}
</style>
<style>
header{
  z-index: 999999;
}
header .van-popup--top{
  top: .92rem;
  z-index: 90!important;
}
header .van-modal{
  z-index: 10!important;
}
header .van-collapse-item__wrapper ul{
  display: inline-block;
  width: 20%;
  padding: 0 .1rem;
  box-sizing: border-box;
}
header .van-collapse-item__wrapper ul p{
  padding: 0;
  margin: 0;
  line-height: 1.8;
  padding-top: .1rem;
  text-align: center
}
header .van-collapse-item__wrapper ul img{
  display: block;
}
</style>

<style>
.header{
  z-index: 999999;
}
header .van-popup--top{
  top: .92rem;
  z-index: 90!important;
}
header .van-modal{
  z-index: 10!important;
}
header .van-nav-bar{
  background: transparent;
}
header .van-nav-bar__title{
  text-align: center
}
</style>

<style>
.header{
  z-index: 999999;
}
header .van-popup--top{
  top: .92rem;
  z-index: 90!important;
}
header .van-modal{
  z-index: 10!important;
}
header .van-nav-bar{
  background: transparent;
}
header .van-nav-bar__title{
  text-align: center
}
</style>
