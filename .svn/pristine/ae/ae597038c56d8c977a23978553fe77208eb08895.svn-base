<template>
  <div>
    <div class="scenicDetail">
      <div class="farm">
        <div class="scenic_top clear">
          <span>周边农庄</span>
          <van-tabs type="card">
            <van-tab title="住宿">
              <div class="scenic_bottom">
                <van-swipe :width="320"
                           :loop=false
                           :show-indicators=false>
                  <van-swipe-item v-for="(item,index) in stayList">
                    <router-link to="" tag="div" class="rank">
                      <div class="total">
                        <div class="img">
                          <img :src="item.fileUrl" alt="">
                          <p class="qi">￥{{item.personConsumption}}起</p>
                        </div>
                        <router-link to="" class="van-ellipsis">
                          {{item.grangeName}}
                        </router-link>
                        <p>
                          <span><stars :rate="item.totalMark || 0"></stars> {{item.totalMark}}分</span>
                          <span></span>
                          <span>{{item.fareaName}}</span>
                        </p>

                      </div>
                    </router-link>
                  </van-swipe-item>
                </van-swipe>
              </div>
            </van-tab>
            <van-tab title="美食">
              <div class="scenic_bottom">
                <van-swipe :width="320"
                           :loop=false
                           :show-indicators=false>
                  <van-swipe-item v-for="(item,index) in foodList">
                    <router-link to="" tag="div" class="rank">
                      <div class="total">
                        <div class="img">
                          <img :src="item.fileUrl" alt="">
                          <p class="qi">￥{{item.personConsumption}}起</p>
                        </div>
                        <router-link to="" class="van-ellipsis">
                          {{item.grangeName}}
                        </router-link>
                        <p>
                          <span><stars :rate="item.totalMark || 0"></stars> {{item.totalMark}}分</span>
                          <span></span>
                          <span>{{item.fareaName}}</span>
                        </p>

                      </div>
                    </router-link>
                  </van-swipe-item>
                </van-swipe>
              </div>
            </van-tab>
            <van-tab title="游玩">
              <div class="scenic_bottom">
                <van-swipe :width="320"
                           :loop=false
                           :show-indicators=false>
                  <van-swipe-item v-for="(item,index) in playList">
                    <router-link to="" tag="div" class="rank">
                      <div class="total">
                        <div class="img">
                          <img :src="item.fileUrl" alt="">
                          <p class="qi">￥{{item.personConsumption}}起</p>
                        </div>
                        <router-link to="" class="van-ellipsis">
                          {{item.grangeName}}
                        </router-link>
                        <p>
                          <span><stars :rate="item.totalMark || 0"></stars> {{item.totalMark}}分</span>
                          <span></span>
                          <span>{{item.fareaName}}</span>
                        </p>

                      </div>
                    </router-link>
                  </van-swipe-item>
                </van-swipe>
              </div>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
  import stars from '../../../../common/rates'
  export default {
    name: "RimGrange",
    props: {
      foodList: {
        type: Array,
        required: true
      },
      playList: {
        type: Array,
        required: true
      },
      stayList: {
        type: Array,
        required: true
      },
    },
    data() {
      return {
        activeIndex: 0,
        changeRed: 0,
        list: [
          {
            goodsID: 1,
            position: "黄陂区",
            imgSrc: "http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg",
            add: "木兰天池风景区(5A)",
            price: "220",
            year: "8",
            meters: "100"
          },
          {
            goodsID: 2,
            position: "黄陂区",
            imgSrc: "http://07.imgmini.eastday.com/mobile/20180302/b293c7af30c8a9eba71d44fe49d21cbc.jpeg",
            add: "木兰天池风景区(5A)",
            price: "220"
          },
          {
            goodsID: 3,
            position: "黄陂区",
            imgSrc: "http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg",
            add: "木兰天池风景区(5A)",
            price: "220"
          },
          {
            goodsID: 4,
            position: "黄陂区",
            imgSrc: "http://img.idol001.com/origin/2017/06/20/36a6298c214e4cb4784ef0c5494428801497949779.jpg",
            add: "木兰天池风景区(5A)",
            price: "220"
          },
          {
            goodsID: 4,
            position: "黄陂区",
            imgSrc: "http://img.idol001.com/origin/2017/06/20/36a6298c214e4cb4784ef0c5494428801497949779.jpg",
            add: "木兰天池风景区(5A)sssssssssssss",
            price: "220"
          },
          {
            goodsID: 4,
            position: "黄陂区",
            imgSrc: "http://img.idol001.com/origin/2017/06/20/36a6298c214e4cb4784ef0c5494428801497949779.jpg",
            add: "木兰天池风景区(5A)",
            price: "220"
          },
          {
            goodsID: 4,
            position: "黄陂区",
            imgSrc: "http://img.idol001.com/origin/2017/06/20/36a6298c214e4cb4784ef0c5494428801497949779.jpg",
            add: "木兰天池风景区(5A)",
            price: "220"
          },
        ],
        btnList: [
          {name: "住宿"},
          {name: "美食"},
          {name: "游玩"},
        ]
      }
    },
    methods: {
      toActive(index) {
        this.activeIndex = index;
        this.changeRed = index;
        console.log(this.changeRed);
      },
    },
    components:{
      stars
    }
  }

</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";

  .blank {
    .jg();
  }

  //周边农庄
  .farm {
    .scenic_top {
      padding: 0.2rem 0 0.2rem 0.3rem;
      font-size: 0.22rem;
      font-weight: bold;
      position: relative;
      & > span {
        font-size: 0.3rem;
        position: absolute;
        line-height: .7rem;
      }
    }
    .scenic_bottom {
      // border-bottom: 0.02rem #e4e4e4 solid;
      // padding-bottom: 0.2rem;
      .rank {
        padding-right: 0.2rem;
        .total{
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .img {
          position: relative;
          height: 1.97rem;
          .qi{
            padding: 0.12rem 0.3rem;
            border-radius: 0.3rem;
            position: absolute;
            left: 0.2rem;
            bottom: 0.1rem;
            background-color: rgba(0,0,0,0.5);
            color: #fff;
          }
          .price {
            width: 1rem;
            height: 0.4rem;
            background-color: rgba(0, 0, 0, 0.4);
            position: absolute;
            top: 1.5rem;
            text-align: center;
            line-height: 0.4rem;
            color: #fff;
            font-weight: normal;
            border-radius: 0.4rem;
            left: 0.2rem;
          }
          img {
            height: 2rem;
          }
          a {
            display: block;
            font-size: 0.26rem;
            line-height: 1.8;
            font-weight: normal;
          }
          p {
            font-size: 0.22rem;
            font-weight: normal;
            span:nth-child(2) {
              color: #ff6500;
            }
            span:nth-child(3) {
              color: #979798;
              float: right;
            }
          }
        }
      }
    }
  }
</style>
<style>

  .navBar .van-tab {
    color: #28282B
  }

  .navBar .van-tab--active {
    color: #FF6500
  }

  .navBar .van-tabs__line {
    background: #FF6500;
  }

  .scenicDetail .van-tabs--card .van-tabs__wrap, .grangedetail .van-tabs--card .van-tabs__wrap {
    margin-top: .15rem;
  }

  .scenicDetail .van-tabs__nav--card, .grangedetail .van-tabs__nav--card {
    background: #F6F5FB;
  }

  .scenicDetail .van-tabs__nav--card, .grangedetail .van-tabs__nav--card,
  .scenic_top .van-tabs__nav--card {
    border: 0;
    border-radius: .28rem;
    box-shadow: 0 0 .002rem #CECBCE
  }

  .scenic_top .van-tab {
    background: transparent;
    border: none
  }

  .scenic_top .van-tabs__nav--card .van-tab {
    border: none
  }

  .scenicDetail .van-tabs__nav--card .van-tab.van-tab--active, .grangedetail .van-tabs__nav--card .van-tab.van-tab--active {
    border-radius: .2rem
  }

  .van-tabs--card, .grangedetail .van-tabs--card {
    padding-top: .9rem;
  }

  .traffic > span[data-v-270c5266], .grangedetail .introduce span[data-v-270c5266] {
    line-height: 0.6rem;
    padding-bottom: .3rem;
    /* font-size: .24rem; */
  }

  .scenic_bottom .van-swipe-item {
    /* width: 3.2rem !important; */
  }

</style>
