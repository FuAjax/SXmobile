<template>
  <div class="navigation">
    <div class="map">
      <div id="allmap"></div>
      <span @click="goback">
          <i class="iconfont icon-xiangzuo"></i>
      </span>
    </div>
    <div class="position clear">
      <div class="left">
        <p>{{detail.grangeName || detail.lanspacePlaceName}}</p>
        <p class="van-ellipsis">
          <i class="iconfont icon-dizhi"></i>
          {{detail.fcityName}}{{detail.fareaName}}{{detail.fvillageName}}{{detail.fstreetName}}
        </p>
      </div>
      <div class="right">
        <a target="_self" :href="'https://uri.amap.com/marker?position='+detail.longitude+','+detail.latitude+'&name='+(detail.grangeName ||detail.lanspacePlaceName)+''">
        <img src="../../../assets/navigation.png">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "navigation",
        data() {
            return {
              map:{},
              detail:null,
            }
        },
        methods: {
          goback(){
            this.$router.go(-1);
          },
          setmap(){
            var that =this;
            this.map= new BMap.Map("allmap");
            this.map.centerAndZoom('武汉', 9);
            function ComplexCustomOverlay(point,text,id,index) {
              this._point = point;
              this._text = text;
              this._id = id;
              this._index=index;
            }
            ComplexCustomOverlay.prototype = new BMap.Overlay();
            ComplexCustomOverlay.prototype.initialize = function(map) {
              this._map = map;
              //自定义控件容器
              let div = this._div = document.createElement("div");
              div.className='overlay';
              // div.id = "overlay"+this._index;
              div.style.position = "absolute";
              div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
              div.style.padding = "2px";
              div.style.MozUserSelect = "none";
              div.style.fontSize = "12px";
              //小尖角
              let arrow = this._arrow = document.createElement("div");
              arrow.className = "map-arrow";
              arrow.style.position = "absolute";
              arrow.style.width = "0px";
              arrow.style.height = "0px";
              arrow.style.top = "42px";
              arrow.style.left = "50%";
              arrow.style.transform='translateX(-50%)';
              arrow.style.border="10px transparent solid";
              arrow.style.borderTopColor="#ff9900"
              div.appendChild(arrow);
              //a标签名称
              let a = this._a = document.createElement("a");
              a.className = "map-content";
              a.style.backgroundColor = "#ff9900";
              a.style.borderRadius = "5px";
              a.style.padding = "5px";
              a.style.color="white";
              a.style.textDecoration="none";
              a.style.height="30px";
              a.style.whiteSpace='nowrap';
              a.style.display="inline-block";
              div.appendChild(a);
              div.onclick=function(){
                console.log(that)
                that.$router.go(-1);
              }
              a.appendChild(document.createTextNode(this._text));
              map.getPanes().labelPane.appendChild(div);
              return div;
            };
            ComplexCustomOverlay.prototype.draw = function() {
              let map = this._map;
              let pixel = map.pointToOverlayPixel(this._point);
              this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + "px";
              this._div.style.top = pixel.y - 30 + "px";
            }
            //let point = new BMap.Point(item.longitude, item.latitude); //添加坐标
            let point = new BMap.Point(this.detail.longitude,this.detail.latitude); //添加坐标
            let text=this.detail.grangeName || this.detail.lanspacePlaceName;
            let grangeid=this.detail.id;
            let myCompOverlay = new ComplexCustomOverlay(point,text,grangeid,0);
            this.map.addOverlay(myCompOverlay);
            this.map.addEventListener("touchmove", function (e) {
              that.map.enableDragging();
            });
            this.map.addEventListener('touchend',function(e){
              that.map.disableDragging();
            })
            this.map.disableDragging();
            this.map.enableScrollWheelZoom(true);
            // this.search();
          },
          // search(){
          //   let odiv =document.getElementsByClassName('overlay');
          //   console.log(odiv.item(0));
          //   odiv.item(0).addEventListener('click',function(){
          //     alert("aaa")
          //   })
          // },
        },
        computed: {},
        created: function () {
          this.detail=JSON.parse(this.$route.params.id);
          console.log(this.detail)
        },
        mounted: function () {
          this.setmap();
        },

    }
</script>

<style scoped lang="less" type="text/less">
  .navigation{
    .map{
      position: relative;
      #allmap{
        height: 10.57rem;
      }
      span{
        display: inline-block;
        width: 0.66rem;
        height: 0.66rem;
        text-align: center;
        line-height: 0.66rem;
        background: #939393;
        border-radius: 50%;
        position: absolute;
        top: 0.5rem;
        left: 50%;
        margin-left: -48%;
        i{
          color: white;
          font-size: 0.35rem;
        }
      }
    }
    .position{
      margin: 0.3rem;
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
  }
</style>
