<template>
  <div>
    <div class="wrap">
      <div class="container">
        <div class="tab">

          <div class="scenic_wrap">
            <van-row gutter="20">
              <!--图-->
              <van-col span="8">
                <div class="left">
                  <img :src='detail.banner[0]' alt="">
                </div>
              </van-col>
              <!--右边文字-->
              <van-col span="16">
                <div class="right">
                  <!--风景区-->
                  <router-link to="" tag="div" class="mulan">
                    <span class="lake">{{detail.villageName}}</span>
                  </router-link>
                  <!--评分-->
                  <div class="grade">
                    <div class="bot">
                      <p>可租{{detail.rentingYears}}年/</p>
                      <p> {{detail.floor}}层{{detail.bedroom}}室/</p>
                      <p>{{detail.floorSpace}}平</p>
                      <p class="much">
                        <span>￥{{detail.rentingAverage}}万元</span>/年
                      </p>
                    </div>

                  </div>
                  <!--定位-->
                  <div class="position">
                    <div class="name"><i class="iconfont icon-dizhi"></i>{{detail.villageName}}</div>
                    <div class="pirce">

                      <!--<p class="month">-->
                        <!--<span>1000元/月</span>-->
                      <!--</p>-->
                    </div>
                  </div>
                  <!--数据-->
                 <div class="specil">
                   <div class="data" v-for="(item,index) in detail.characteristics">
                     <span>{{item}}</span>
                   </div>
                 </div>
                </div>
              </van-col>
            </van-row>
          </div>
        </div>
      </div>
      <div class="test"></div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>

  export default {
    name: "grangeindex",
    data() {
      return {
        cityname: '上海',
        scenic_list: [
          {text: '木兰天池风景区(5A)', src: '../../../../static/images/slide_01.jpg', color: '#ff6500'},
          {text: '木兰天池风景区(5A)', src: '../../../../static/images/slide_01.jpg', color: '#8ab8d4'},
          {text: '木兰天池风景区(5A)', src: '../../../../static/images/slide_01.jpg', color: '#e38800'},
          {text: '木兰天池风景区(5A)', src: '../../../../static/images/slide_01.jpg', color: '#b4b4b9'},
          {text: '木兰天池风景区(5A)', src: '../../../../static/images/slide_01.jpg', color: '#b4b4b9'}
        ],//景点
        play_list: [
          {text: '木兰天池风景区(5A)', src: '../../../../static/images/slide_01.jpg', color: '#ff6500'},
          {text: '木兰天池风景区(5A)', src: '../../../../static/images/slide_01.jpg', color: '#8ab8d4'},
          {text: '木兰天池风景区(5A)', src: '../../../../static/images/slide_01.jpg', color: '#e38800'},
          {text: '木兰天池风景区(5A)', src: '../../../../static/images/slide_01.jpg', color: '#b4b4b9'},
          {text: '木兰天池风景区(5A)', src: '../../../../static/images/slide_01.jpg', color: '#b4b4b9'}
        ],//游玩
        food_list: [
          {text: '木兰天池风景区(5A)', src: '../../../../static/images/slide_01.jpg', color: '#ff6500'},
          {text: '木兰天池风景区(5A)', src: '../../../../static/images/slide_01.jpg', color: '#8ab8d4'},
          {text: '木兰天池风景区(5A)', src: '../../../../static/images/slide_01.jpg', color: '#e38800'},
          {text: '木兰天池风景区(5A)', src: '../../../../static/images/slide_01.jpg', color: '#b4b4b9'},
          {text: '木兰天池风景区(5A)', src: '../../../../static/images/slide_01.jpg', color: '#b4b4b9'}
        ],//美食
        //景点选项卡
        scenic: [
          {
            src: '../../../../static/images/slide_01.jpg',
            spot: '木兰天池',
            a: 'AAAAA级风景区',
            score: 4,
            yuan: 35,
          }
        ],
        detail: ''
      }
    },
    methods: {

      init(){
        var villageNumber = this.$route.params.id

        this.$http.post('appServiceFarmhouse/getVillageDetail', {villageNumber: villageNumber}).then(res => {
          console.log(res);
          this.detail=res.data.detail

          console.log(this.detail);
        })
      },
    },
    computed: {},
    created: function () {
      this.init()
    },

    mounted: function () {


      // 一个是滑动前事件  或者on tuhs move    transform: translateX(0px);
    },
    destroy: function () {

    }

  }
  const numbers = (...nums) => nums;

</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";

  .wrap {
    margin-top: 0.92rem;
    //隔开
    .separate {
      height: 0.28rem;
      background-color: #f1f0f6;
    }
    .tab {
      padding-bottom: 0.2rem;
      border-bottom: 1px rgba(192, 192, 192, .5) solid;
      //景点
      .scenic_wrap {
        padding: 0 0.3rem;
        & > div {
          padding: 0.2rem 0;
          border-top: 0.5px rgba(192, 192, 192, .5) solid;
        }
        .more {
          height: 0.7rem;
          background-color: #fff2ea;
          text-align: center;
          line-height: 0.7rem;
          color: #ff6500;
          font-size: 0.2rem;
        }
        .left {
          width: 2.15rem;
          height: 1.58rem;
        }
        .right {
          div {
            margin-bottom: 0.05rem;

          }
          .mulan {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 0.3rem;
            color: black;
            .lake {

              /*width: 100%;*/
            }
            .five {
              display: inline-block;
              width: 1.71rem;
              height: 0.3rem;
              font-size: 0.18rem;
              text-align: center;
              line-height: 0.3rem;
              vertical-align: middle;
              border-radius: 0.3rem;
              color: #00a62e;
              margin-left: 0.1rem;
              background-color: #ebf8ee;
            }
          }
          .grade {
              .bot{
                p{
                  float: left;
                }
                .much {
                  display: inline-block;
                  font-size: 0.2rem;
                  vertical-align: middle;
                  color: #a2a2a4;
                  float: right;
                  span {
                    color: #e90009;
                    font-size: 0.28rem;
                  }
                }
              }

          }
          .position {
            color: #a2a2a4;
            float: left;
            width: 100%;
            .name{
              float: left;
              i {
                font-size: 0.3rem;
                color: #c7c6cb;
                vertical-align: middle;
                margin-right: 0.05rem;
              }
            }
            .pirce{
              float: right;
              .month {
                display: inline-block;
                font-size: 0.2rem;
                vertical-align: middle;
                margin-left: 0.8rem;
                float: right;
                /*margin-right: 0.16rem;*/
                font-size: 0.2rem;
                color: #a2a2a4;
              }
            }
            font-size: 0.2rem;
          }
          .data {

            span {
              font-size: 0.18rem;
              padding: 0 0.1rem;
              border-radius: 0.05rem;
              float: left;
              margin-right: 0.1rem;
            }
            &:first-child {
              span{
                border: 0.01rem #099b4c solid;
                color: #099b4c;
              }
            }
            &:nth-child(2) {
              span{
                border: 0.01rem #00a0e9 solid;
                color: #00a0e9;
              }

            }
            &:nth-child(3) {
              span{
                border: 0.01rem #00a0e9 solid;
                color: #00a0e9;
              }
            }
            &:nth-child(4) {
              span{
                border: 0.01rem #e3007b solid;
                color: #e3007b;
              }
            }
          }
        }
        .van-row {
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
        .variety {
          font-size: 0.18rem;
          color: #ff6500;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }

  .blank {
    .jg();
  }
</style>

