<template>
  <header>
    <div class="header">
      <div :style="'position: relative;z-index: 999;' + ( color ? 'background: '+color+'; color: #fff' : 'background: #fff; color: #000' ) +''">
        <van-nav-bar
          :title="title"
          right-text="按钮"
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
          />
          <van-icon name="wap-nav"
                    slot="right"
                    :color='color?"#fff":"#000"'
                    size="0.35rem"
          />
        </van-nav-bar>
        <!-- {{ color ? 'background: '+color+'; color: #fff' : 'background: #fff; color: #000' }} -->
      </div>
    </div>
    <van-popup
      v-model="show"
      position="top">
      <van-collapse v-model="activeNames">
        <van-collapse-item v-for="(index,item) in List"
                          :title="index.title"
                          :name="index.name">
          <div class="link">
            <ul v-for="(img,i) in index.imgList">
              <li>
                <img :src="img.url" alt="">
                <p>{{img.link}}</p>
              </li>
            </ul>
          </div>
          <span>{{index.message}}</span>
        </van-collapse-item>
      </van-collapse>
    </van-popup>
  </header>
</template>

<script>
  import index from '../../../../assets/images/logo2.png'
  // import methods from './m/methods'
  import url from '../../../../assets/images/7.png'
  import url2 from '../../../../assets/images/6.png'
  import url3 from '../../../../assets/images/5.png'
  import url4 from '../../../../assets/images/9.png'
  import url5 from '../../../../assets/images/2 (10).png'
  import url6 from '../../../../assets/images/2 (1).png'
  import url7 from '../../../../assets/images/4.png'
  import url8 from '../../../../assets/images/8.png'
  import url9 from '../../../../assets/images/10.png'
  import url10 from '../../../../assets/images/6.png'

  export default {
    name: "Header2",
    props:{
      title: '', color: null
    },
    data() {
      return {
        // title: "三乡工程网",
        activeNames: ['1'],
        show: false,
        List: [
          {
            name: "1",
            title: "首页",
          },
          {
            name: "2",
            title: "共享农庄",
            message: "发布农庄",
            imgList: [
              {
                url: url6,
                link: "农庄",
              },
              {
                url: url7,
                link: "景点",
              },
              {
                url: url8,
                link: "游玩",
              },
              {
                url: url9,
                link: "住宿",
              },
              {
                url: url10,
                link: "美食",
              },
            ]
          },
          {
            name: "3",
            title: "共享农庄",
            message: "发布农庄",
            imgList: [
              {
                url: url,
                link: "租农房",
              },
              {
                url: url2,
                link: "地图找房",
              },
              {
                url: url3,
                link: "查公交",
              },
              {
                url: url4,
                link: "农房求租",
              },
              {
                url: url5,
                link: "美丽乡村",
              },
            ]
          },
          {
            name: "4",
            title: "三乡工程",
          },
          {
            name: "5",
            title: "个人中心",
          },
        ]
      }
    },
    methods: {
      onClickLeft() {
        this.$router.back(-1)
      },
      onClickRight() {
        // Toast('按钮');
      },
      showList(){
        this.show = !this.show
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";

  .van-icon {
    &:nth-child(1) {
      margin-right: 0.3rem;

    }
  }
  .van-nav-bar {
    font-weight: 600;
    font-size: 0.32rem;
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
.van-nav-bar{
  background: transparent;
}
</style>
