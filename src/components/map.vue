<template>
  <div id="app">
    <div id="allmap" ref="allmap"></div>
    <router-view></router-view>
  </div>
</template>

<script>
  import BMap from 'BMap';
  import mapIcon from '../assets/icon/map.png'
  export default {
    name: 'App',
    data() {
      return {
        // 纬度
        latitude: '',
        // 经度
        longitude: '',
        // 地址名称
        villageName: '',
        // 自定义标注图标
        mapIcon:'mapIcon'
      }
    },
    created: function () {
      this.init()
    },
    methods: {
      init() {
        this.$http.post('appServiceFarmhouse/getVillageDetail', {
          villageNumber: '027121722230000',
          userId: 1
        }).then(res => {
            console.log(res);
            this.latitude = res.data.detail.latitude
            this.longitude = res.data.detail.longitude
            this.villageName = res.data.detail.villageName
            var opts = {
              width: 10,
              height: 10,
              // title: "地址：",
            }
            // var myIcon = new BMap.Icon('location.ico', new BMap.Size(32, 32))
            var map = new BMap.Map('allmap');
            var point = new BMap.Point(this.longitude, this.latitude); // 经度纬度
            var infoWindow = new BMap.InfoWindow(this.villageName, opts);// 创建信息窗口对象
            map.openInfoWindow(infoWindow, point);//开启信息窗口
            map.centerAndZoom(point, 14);
            var marker = new BMap.Marker(point);
            map.addOverlay(marker);
          }
        )
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #allmap {
    height: 4rem;
    /*overflow: hidden;*/

  }
</style>
