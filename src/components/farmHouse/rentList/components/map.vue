<template>
  <div id="map">
    <!--搜索框-->
    <div class="mapList">
      <div class="search">
        <van-search placeholder="请输入区域/景点/关键字" value="" v-model="findMap"/>
        <div class="btn" @click="findMap2">地图找房</div>
      </div>
      <!--选项卡-->
      <!--地图-->
      <!--区域-->
      <div class="condition">
        <ul class="top_tab clear" style="padding-left: 0.6rem;">
          <li class="list" @click="village()" :class="{active:area1}">
            <p style="text-overflow: ellipsis;white-space: nowrap;float: left;overflow: hidden;width: 70%;">
              {{areatext}}</p>
            <i class="iconfont icon-xiala1" v-show="area1" style="float: left"></i>
            <i class="iconfont icon-xiala" v-show="!area1" style="float: left"></i>
          </li>
          <li class="list" @click="price" :class="{active:area2}">
            <p style="text-overflow: ellipsis;white-space: nowrap;float: left;overflow: hidden;width: 70%">
              {{pricetext}}</p>
            <i class="iconfont icon-xiala1" v-show="area2" style="float: left"></i>
            <i class="iconfont icon-xiala" v-show="!area2" style="float: left"></i>
          </li>
          <li class="list" @click="area" :class="{active:area3}">
            <p style="text-overflow: ellipsis;white-space: nowrap;float: left;overflow: hidden;width: 70%">
              {{speciltext}}</p>
            <i class="iconfont icon-xiala1" v-show="area3" style="float: left"></i>
            <i class="iconfont icon-xiala" v-show="!area3" style="float: left"></i>
          </li>
          <li class="list" @click="year" :class="{active:area4}">
            <p style="text-overflow: ellipsis;white-space: nowrap;float: left;overflow: hidden;width: 70%">
              {{yeartext}}</p>
            <i class="iconfont icon-xiala1" v-show="area4" style="float: left"></i>
            <i class="iconfont icon-xiala" v-show="!area4" style="float: left"></i>
          </li>
        </ul>
        <div>
          <div v-if="area1" class="regin area-select-block">
            <div class="van-tree-select">
              <div class="van-tree-select__nav">
                <div v-for="(item, index) in areaHasVillage"
                     :class=" (mainActiveIndex == index ? 'van-tree-select__nitem--active van-ellipsis van-tree-select__nitem' : 'van-ellipsis van-tree-select__nitem')"
                     @click="Villagecheck(item,index)">
                  {{item.text}}
                </div>
              </div>
              <div class="van-tree-select__nav">
                <div v-for="(item, index) in areaHasVillage[mainActiveIndex].children"
                     :class=" (mainActiveIndex1 == index ? 'van-tree-select__nitem--active van-ellipsis van-tree-select__nitem' : 'van-ellipsis van-tree-select__nitem')"
                     @click="onNavClick(item,index)">
                  {{item.text}}
                </div>
              </div>
              <div class="van-tree-select__nav">
                <div v-for="(item, index) in areaHasVillage[mainActiveIndex].children[mainActiveIndex1].children"
                     :class=" (activeId == index ? 'van-tree-select__nitem--active van-ellipsis van-tree-select__nitem' : 'van-ellipsis van-tree-select__nitem')"
                     @click="onItemClick(item)">
                  {{item.text}}
                </div>
              </div>


              <!--<div class="van-tree-select__content">-->
              <!--<van-tree-select-->
              <!--:items="areaHasVillage[mainActiveIndex].children"-->
              <!--:main-active-index="mainActiveIndex1"-->
              <!--:active-id="activeId"-->
              <!--@navclick="onNavClick(areaHasVillage[mainActiveIndex].children,mainActiveIndex1)"-->
              <!--@itemclick="onItemClick"-->

              <!--/>-->
              <!--</div>-->
            </div>
          </div>
          <div v-if="area2" class="rank price">
            <van-tree-select
              :items="farmhouseRentPrice"
              :active-id="activeId"
              @itemclick="priceClick"
            />
          </div>
          <div v-if="area3" class="rank area">
            <van-tree-select
              :items="farmhouseRentalArea"
              :active-id="activeId"
              @itemclick="AreaClick"
            />
          </div>
          <div v-if="area4" class="rank life">
            <van-tree-select
              :items="farmhouseRentalLife"
              :active-id="activeId"
              @itemclick="LifeClick"
            />
          </div>
        </div>
      </div>
    </div>
    <!--街道-->

    <div class="maparea">
      <div id="app">
        <div id="allmap" ref="allmap"></div>
        <router-view></router-view>
      </div>
    </div>

    <!--搜索列表-->
    <van-popup v-model="show" position="bottom" :overlay="false" class="nav"
               style="    border-radius: 0.55rem 0.5rem 0 0;">
      <div class="searchList" v-if="searchList">
        <div class="showList">
          <div class="list">
            <p class="left">{{farmhouseNum.streetName}}--{{farmhouseNum.villageName}}</p>
            <div class="right">
              <div class="iconfont icon-xiala1" @click="showListUp" v-if="shang"></div>
              <div class="iconfont icon-xiala" @click="showListDown" v-if="xia"></div>
            </div>
          </div>
          <div class="find">
            <p>{{farmhouseNum.villageName}}共找到</p>
            <p>{{farmhouseNum.count}}套</p>
            <p>在租农房</p>
          </div>
        </div>

        <div class="messageList" v-if="messageList">
          <van-row gutter="20" v-for="(item,index) in easyResult" style="margin-left: 0px;">
            <router-link :to="{name:'rentDetail',params:{id:item.number}}">
              <van-col span="8" style="padding-right: 0">
                <img :src="item.fileUrl" alt="">
              </van-col>
              <van-col span="16" style="padding-left: 0.1rem">
                <div class="title">
                  {{item.farmhouseTitle}}
                </div>
                <div class="area">
                  {{item.bedroom}}室{{item.drawingroom}}厅/{{item.coveredArea}}平/{{item.rentingYears}}年
                </div>
                <div class="price">
                  <p>{{item.rentingPrice}}万元</p>
                  <p>/年</p>
                </div>
              </van-col>
            </router-link>
          </van-row>
          <div class="last">
            已经是最后一条房源了！
          </div>
        </div>

      </div>
    </van-popup>
  </div>
</template>

<script>
  import methods from '../map'
  import BMap from 'BMap';

  export default {
    name: "maps",
    data() {
      return {
        value1: [],
        show: true,
        url: "http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg",
        area1: false,
        area2: false,
        area3: false,
        area4: false,
        // 区域街道村庄
        areaHasVillage: [],
        // 左侧高亮元素的index
        mainActiveIndex: 0,
        mainActiveIndex1: 0,
        // 被选中元素的id
        activeId: 1,
        // 价格
        farmhouseRentPrice: [],
        pricetext: '价格',
        areatext: '区域',
        // 面积
        farmhouseRentalArea: [],
        speciltext: '面积',
        // 年限
        farmhouseRentalLife: [],
        yeartext: '年限',
        // 数据
        // 地区
        farmhouseCount: [],
        // 等级
        grade: '',
        id: '',
        // 村庄信息
        easyResult: [],
        farmhouseNum: '',
        searchList: false,
        messageList: true,
        shang: true,
        xia: false,
        // 区id
        areaRestfulDictionary:'',
        // 街道
        restFul:'',
        // 村id
        restFul3id: '',
        // 价格id
        menuRestfulDictionaryPrice: '',
        // 面积id
        menuRestfulDictionaryArea: '',
        // 年限id
        menuRestfulDictionaryLife: '',
        findMap: '',
        conditionText: null,
        restful:''

      }
    },
    created: function () {
      this.init()
      this.condition()
    },
    methods: methods,
    components: {
      BMap
    },
    mounted() {
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";

  #map {
    .area-select-block{
      font-size: 0;
      .van-tree-select__nav {
        font-size: 0.24rem;
        height: 300px;
        width: 33.33333%;
        box-sizing: border-box;
        display: inline-block;
        position: relative;
      }
    }

    .search {
      margin-top: 1rem;
      background-color: #f6f5fb;
      height: 0.95rem;
      padding: 0.21rem 0.2rem 0.01rem;
      .van-search {
        width: 5.02rem;
        background-color: #f6f5fb !important;
        height: 0.56rem;
        float: left;
        input::placeholder {
          /* placeholder颜色  */
          color: #aab2bd;
          /* placeholder字体大小  */
          font-size: 12px;
          /* placeholder位置  */
          text-align: right;
        }
      }
      .van-search /deep/ .van-field__control {
        font-size: 0.23rem;
        color: #69696b;
      }
      .van-search /deep/ .van-field {
        box-shadow: 0.1rem 0.1rem 0.1rem #d4d3d8;
        border-radius: 1.1rem;
      }
      .btn {
        float: right;
        width: 1.77rem;
        height: 0.58rem;
        line-height: 0.58rem;
        text-align: center;
        color: #d4efce;
        background-color: #00b234;
        font-size: 0.24rem;
        border-radius: 1.1rem;
        margin-right: 0.2rem;
      }
    }
    .condition {
      position: relative;
      .top_tab {
        li {
          height: 0.85rem;
          float: left;
          width: 25%;
          font-size: 0.24rem;
          text-align: center;
          line-height: 0.85rem;
        }
      }
      .area {
        position: absolute;
        top: 0.85rem;
        width: 100%;
        background-color: white;
        border-top: 0.01rem solid #e6e6e6;
        .regin {
          .left {
            width: 25%;
            float: left;
            font-size: 0.2rem;
            margin-left: 0.2rem;
            box-sizing: border-box;
            div {
              border-bottom: 0.01rem solid #e6e6e6;
              height: 0.8rem;
              text-align: center;
              line-height: 0.8rem;
            }
          }
          .right {
            background-color: #faf9ff;
            border-left: 0.01rem solid #e6e6e6;
            width: 72%;
            float: left;
          }
        }
        .group {
          background-color: white;
        }
      }
      .season {
        position: relative;
        margin: 0 0.2rem;
        p {
          color: grey;
          margin: 0.2rem 0;
        }
        .content {
          border-bottom: 0.01rem solid #e5e5e5;
          padding-bottom: 0.2rem;
          margin-bottom: 0.2rem;
          span {
            display: inline-block;
            height: 0.55rem;
            padding: 0 0.2rem;
            border-radius: 0.55rem;
            background-color: #f1f0f6;
            text-align: center;
            line-height: 0.55rem;
            margin-right: 0.2rem;
            margin-top: 0.15rem;
          }
        }
        .bottom {
          width: 100%;
          margin-top: 1rem;
          span {
            display: inline-block;
            width: 49%;
            background-color: #fea541;
            color: white;
            height: 0.85rem;
            line-height: 0.85rem;
            vertical-align: middle;
            text-align: center;
          }
        }
      }

    }
    .maparea {
      height: 100%;
      width: 100%;
      background-color: #8e8e90;
    }
    .showList {

      /*bottom: ;*/
      height: 1.13rem;
      padding: 0.43rem 0.3rem;
      border-radius: 0.2rem 0.2rem 0 0;
      width: 93%;
      .list {
        .left {
          font-size: 0.3rem;
          color: #000;
          font-weight: 600;
          float: left;
        }
        .right {
          float: right;
          .iconfont {
            float: left;
            font-size: 0.6rem;
            .hc();
            &:nth-child(2) {
              float: right;
            }
          }
        }
        margin-bottom: 0.8rem;
      }
      .find {
        width: 100%;
        height: 0.52rem;
        border-radius: 0.15rem;
        background-color: #f5f5fa;
        color: #646469;
        text-align: center;
        line-height: 0.52rem;
        display: flex;
        justify-content: center;
        font-size: 0.21rem;
        p {
          float: left;
          &:nth-child(2) {
            color: #ff6400;
          }
        }
      }
    }
    .searchList {
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: #fff;
      .nav {
        //.bt();
        margin-bottom: 0.6rem;
      }
      .title {
        .over();
        font-size: 0.3rem;
        color: #000005;
        font-weight: 600;
        line-height: 0.46rem;
        margin-bottom: 0.1rem;
      }
      .area {
        color: #646469;
        font-size: 0.23rem;
        margin-bottom: 0.1rem;

      }
      .price {
        p:nth-child(1) {
          .rc();
          font-size: 0.26rem;
          font-weight: 600;
          float: left;
        }
        p:nth-child(2) {
          font-size: 0.23rem;
          .hc()
        }
      }
    }
  }

  .mapList {
    position: fixed;
    left: 0;
    width: 100%;
    top: 0;
    background-color: white;
  }

  #app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }

  #allmap {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 3rem;
    bottom: 0px;
    z-index: -1;
  }

  .regin /deep/ .van-tree-select__content {
    background-color: #fff;
  }

  .nav /deep/ .van-row {
    padding: 0.2rem 0.3rem;
    .bt();
    &:last-child {
      border: none;
    }
  }

  .last {
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    font-size: 0.26rem;
    .hc()
  }
</style>



