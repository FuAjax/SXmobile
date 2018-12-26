<template>
  <div>
    <div class="map">
      <div class="top">
        <div class="left">位置与配套</div>
        <div class="iconfont icon-gengduo1" @click="farmMap"></div>
      </div>
      <div id="app">
        <div id="allmap" ref="allmap"></div>
        <router-view></router-view>
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
  import BMap from 'BMap';

  export default {
    name: "Location",
    data() {
      return {
        // 纬度
        latitude: '',
        // 经度
        longitude: '',
        // 地址名称
        villageName: '',
        // 自定义标注图标
        mapIcon: 'mapIcon'
      }
    },
    created: function () {
      this.init()
    },
    methods: {
      init() {
        var id = this.$route.params.id
        this.$http.post('appServiceFarmhouse/getVillageDetail', {
          villageNumber: id,
          userId: 1
        }).then(res => {
            console.log(res);
            this.latitude = res.data.detail.latitude
            this.longitude = res.data.detail.longitude
            this.villageName = res.data.detail.villageName
            var map = new BMap.Map('allmap');
            let point = new BMap.Point(this.longitude, this.latitude);
            map.centerAndZoom(point, 15);
            let marker = new BMap.Marker(point);
            map.addOverlay(marker);

            let opts = {
              position: point,    // 指定文本标注所在的地理位置
              offset: new BMap.Size(-55, -90)    //设置文本偏移量
            }
            var label = new BMap.Label(this.villageName, opts);
            label.setStyle({
              color: "black",
              fontSize: "0.2rem",
              height: "40px",
              lineHeight: "40px",
              fontFamily: "微软雅黑",
              padding: '5px',
              border: 'none',
              textAlign: 'center',
              width: '100px',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            });
            map.addOverlay(label);
          }
        )
      },
      farmMap() {
        var id = this.$route.params.id
        this.$router.push({
          name: "mapVillage",
          params: {id: id}
        })
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../style/public.less";

  .blank {
    .jg()
  }

  .map {
    .top {
      padding: 0.4rem 0.3rem;
      height: 0.32rem;
      .left {
        font-size: 0.32rem;
        color: black;
        font-weight: 600;
        float: left;
        margin-top: -0.1rem;
      }
      .iconfont {
        float: right;
        font-size: 0.32rem;
      }
    }
    .mapLocation {
      width: 100%;
      height: 3.98rem;
      background-color: rgba(0, 0, 0, 0.5);
    }
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
    height: 4rem;
    /*overflow: hidden;*/

  }
</style>
