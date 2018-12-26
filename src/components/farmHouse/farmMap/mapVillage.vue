<template>
  <div id="mapDetail">
    <div class="topBar" v-if="(!isapp)">
      <Header :title='title' :isback='isback'/>
    </div>
    <div class="top">
      <div v-for="(item,index) in icon" class="icon" :class="{orage:changeRed==index}" @click="change(index)">
        <div :class="item.iconfont"></div>
        <p>{{item.name}}</p>
      </div>
    </div>
    <div class="maparea">
      <div id="app">
        <div id="allmap" ref="allmap"></div>
        <router-view></router-view>
      </div>
    </div>
    <div class="position clear">
      <div class="left">
        <p>{{detail.villageName}}</p>
        <p class="van-ellipsis">
          <i class="iconfont icon-dizhi"></i>
          {{detail.villageName}}
        </p>
      </div>
      <div class="right">
        <a target="_self" :href="'https://uri.amap.com/marker?position='+detail.longitude+','+detail.latitude+'&name='+(detail.villageName)+''">

          <img src="../../../assets/navigation.png">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../common/Header'
  import methods from './methods/mapVillage'
  import BMap from 'BMap';

  export default {
    name: "mapDetail",
    props: {
      isapp: null
    },
    data() {
      return {
        title: '地图详情',
        isback: true,
        changeRed: '0',
        icon: [
          // {iconfont: 'iconfont icon-jingdian', name: '景点'},
          {iconfont: 'iconfont icon-meishi', name: '美食'},
          {iconfont: 'iconfont icon-zhusu', name: '住宿'},
          {iconfont: 'iconfont icon-jingdian1', name: '游玩'},
          {iconfont: 'iconfont icon-yiliao', name: '医疗'},
          {iconfont: 'iconfont icon-jiaotong', name: '交通'},
        ],
        // 景点
        landList: [],
        // 美食
        foodList: [],
        // 住宿
        stayList: [],
        // 游玩,
        playList: [],
        // 纬度
        latitude: '',
        // 经度
        longitude: '',
        detail:''
      }
    },
    components: {
      Header,
      BMap
    },
    methods: methods,

    created: function () {
      this.init()
    }
  }
</script>

<style scoped lang="less" type="text/less">
  #mapDetail {

    .top {
      position: fixed;
      top:1.1rem;
      left: 0;
      width: 100%;
      display: flex;
      background: #fff;
      .icon {
        font-size: 0.28rem;
        color: #96969b;
        flex: 1;
        .iconfont {
          font-size: 0.4rem;
          text-align: center;
          color: #96969b;
        }
        p {
          text-align: center;
          border-bottom: 1px solid #fff;
          padding-bottom: 0.1rem;
        }
        &:nth-child(1){
          margin-left: 0.2rem;
        }
        &:last-child{
          margin-right: 0.2rem;
        }
      }
      .orage {
        .iconfont, p {
          color: #ff6400;
        }
        p {
          border-bottom: 1px solid #ff6400;
        }
      }
    }
    #allmap {
      /*height: 100%;*/
      width: 100%;
      position: absolute;
      top: 1.6rem;
      bottom: 0px;
      z-index: -1;
      height: 13rem;
    }
  }
  .position{
    position: fixed;
    left: 0;
    bottom: 0;
    background: #fff;
    width: 95%;
    padding: 0 0.2rem;
    div{
      float: left;
    }
    .left{
      width: 80%;
      p{
        height: 1rem;
        line-height: 1rem;
      }
      p:first-child{
        border-bottom: 0.01rem solid #e5e5e5;
        font-size: 0.32rem;
        font-weight: bold;
      }
      p:nth-child(2){
        font-size: 0.26rem;
        color: grey;
      }
    }
    .right{
      height: 2rem;
      text-align: center;
      width: 20%;
      img{
        width:100%;
        height: auto;
        margin-left: 0.2rem;
        margin-top: 0.5rem;
      }
    }
  }
</style>
