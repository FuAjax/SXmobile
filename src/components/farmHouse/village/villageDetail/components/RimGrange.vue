<template>
  <div>
    <div class="scenicDetail">
      <div class="farm">
        <div class="scenic_top clear">
          <span >周边农庄</span>
          <van-tabs type="card" >
            <van-tab title="住宿" style="margin-top: 0.2rem">
              <div class="scenic_bottom" style="overflow: hidden;">
                <scroll ref="scroll" class="recommend-content" :data="stayList">
                  <div :style="'width:' + stayList.length * 3.2 + 'rem'">
                    <router-link v-for="(item,index) in stayList" :to="{name:'grangedetail',params:{id:item.grangeNumber}}">
                      <div style="width: 3rem; display: inline-block; padding-right: 0.2rem;position: relative">
                        <div v-if='item.fileURL' :style="'background:url(' + item.fileURL + ');width: 100%;height: 2rem;background-size:cover;background-position: center center'"></div>
                        <div style="font-size: 0.26rem;" class="van-ellipsis">{{item.grangeName}}</div>
                        <span style="position: absolute;bottom: 0.7rem;display: inline-block;width: 1.2rem;height: 0.3rem;left: 0.1rem;background: rgba(0, 0, 0, 0.5);text-align: center;color: white;border-radius: 0.3rem;line-height: 0.3rem;">￥{{item.personConsumption}}起</span>
                        <p>
                          <span style="color: #ff6500"><stars :rate="item.totalMark || 0"></stars> {{item.totalMark}}分</span>
                          &nbsp; &nbsp;
                          <span style="color: grey">{{item.fareaName}}</span>
                        </p>
                      </div>
                    </router-link>
                  </div>
                </scroll>
              </div>
            </van-tab>
            <van-tab title="美食"  style="margin-top: 0.2rem">
              <div class="scenic_bottom" style="overflow: hidden;">
                <scroll ref="scroll" class="recommend-content" :data="foodList">
                  <div :style="'width:' + foodList.length * 3.2 + 'rem'">
                    <router-link v-for="(item,index) in foodList" :to="{name:'grangedetail',params:{id:item.grangeNumber}}">
                      <div style="width: 3rem; display: inline-block; padding-right: 0.2rem;position: relative">
                        <div v-if='item.fileURL' :style="'background:url(' + item.fileURL + ');width: 100%;height: 2rem;background-size:cover;background-position: center center'"></div>
                        <div style="font-size: 0.26rem;" class="van-ellipsis">{{item.grangeName}}</div>
                        <span style="position: absolute;bottom: 0.7rem;display: inline-block;width: 1.2rem;height: 0.3rem;left: 0.1rem;background: rgba(0, 0, 0, 0.5);text-align: center;color: white;border-radius: 0.3rem;line-height: 0.3rem;">￥{{item.personConsumption}}起</span>
                        <p>
                          <span style="color: #ff6500"><stars :rate="item.totalMark || 0"></stars> {{item.totalMark}}分</span>
                          &nbsp; &nbsp;
                          <span style="color: grey">{{item.fareaName}}</span>
                        </p>
                      </div>
                    </router-link>
                  </div>
                </scroll>
              </div>
            </van-tab>
            <van-tab title="游玩"  style="margin-top: 0.2rem">
              <div class="scenic_bottom" style="overflow: hidden;">
                <scroll ref="scroll" class="recommend-content" :data="playList">
                  <div :style="'width:' + playList.length * 3.2 + 'rem'">
                    <router-link v-for="(item,index) in playList" :to="{name:'grangedetail',params:{id:item.grangeNumber}}">
                      <div style="width: 3rem; display: inline-block; padding-right: 0.2rem;position: relative">
                        <div v-if='item.fileURL' :style="'background:url(' + item.fileURL + ');width: 100%;height: 2rem;background-size:cover;background-position: center center'"></div>
                        <div style="font-size: 0.26rem;" class="van-ellipsis">{{item.grangeName}}</div>
                        <span style="position: absolute;bottom: 0.7rem;display: inline-block;width: 1.2rem;height: 0.3rem;left: 0.1rem;background: rgba(0, 0, 0, 0.5);text-align: center;color: white;border-radius: 0.3rem;line-height: 0.3rem;">￥{{item.personConsumption}}起</span>
                        <p>
                          <span style="color: #ff6500"><stars :rate="item.totalMark || 0"></stars> {{item.totalMark}}分</span>
                          &nbsp; &nbsp;
                          <span style="color: grey">{{item.fareaName}}</span>
                        </p>
                      </div>
                    </router-link>
                  </div>
                </scroll>
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
  import Scroll from '../../../../common/swiperX'
  export default {


    name: "RimGrange",
    props: {
      foodList: {
        type: Array,
      },
      playList: {
        type: Array,
      },
      stayList: {
        type: Array,
      },
    },
    data() {
      return {
        activeIndex: 0,
        changeRed: 0,
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
      stars,
      Scroll
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
    width: 3.2rem !important;
  }

</style>
