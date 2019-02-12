<template>
  <div id="farmhouseDetail">
    <div class="topBar">
      <Header :title='title' :isback='true'/>
    </div>
    <div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item,i) in farmhouse.bannerUrl" :key="i" class="swiper">
            <img :src="item" alt="" srcset=""/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="top">
      <div class="title">
        <p>{{farmhouse.title}}</p>
      </div>
      <div class="content">
        <div class="num">
          <p>编号: </p>
          <p>{{farmhouse.number}}</p>
        </div>
        <div class="time">
          <p>时间: </p>
          <p>{{farmhouse.updateTime}}</p>
        </div>
      </div>
    </div>
    <div class="blank"></div>
    <div class="total">
      <div>
        <div class="total-item">
          <div class="" style="padding-left: 0;text-align: center;color: #fb5900;" v-if="farmhouse.price == '面议'">
            <span>{{farmhouse.price}}</span>
          </div>
          <div class="" style="padding-left: 0;text-align: center;color: #fb5900;" v-else>
            <span>{{farmhouse.price}}</span>万元/年
          </div>
          <div class="">
            价格
          </div>
        </div>
        <div class="total-item">
          <div class="">
            <span>{{farmhouse.bedroom}}</span>室<span>{{farmhouse.drawingroom}}</span>厅
          </div>
          <div class="">
            房屋户型
          </div>
        </div>
        <div class="total-item">
          <div class="">
            <span>{{farmhouse.curtilageArea}}</span>平方米
          </div>
          <div class="">
            建筑面积
          </div>
        </div>
        <div class="total-item">
          <div class="">
            <span>{{farmhouse.rentingYears}}</span>年
          </div>
          <div class="">
            租赁年限
          </div>
        </div>
      </div>
      <div class="btnbox">
        <div class="btn" v-for="(item,k) in farmhouse.characteristics" :key="k">{{item}}</div>
      </div>
    </div>
    <div class="blank" v-if="type == 4"></div>
    <div class="farmhouseDetail" v-if="type == 4">
      <div class="farmhouseDetail-tit">农房成交信息</div>
      <div class="farmhouseDetail-tab">
        <div class="table">
          <div class="table-l">成交时间</div>
          <div class="table-r">{{turnover.turnoverTime}}</div>
        </div>
        <div class="table">
          <div class="table-l">成交价格</div>
          <div class="table-r">{{turnover.turnoverPrice || 0}}万元/年</div>
        </div>
        <div class="table">
          <div class="table-l">出租期限</div>
          <div class="table-r">{{turnover.rentingYears||0}}年</div>
        </div>
        <div class="table">
          <div class="table-l">租赁用途</div>
          <div class="table-r">{{turnover.leasehold}}</div>
        </div>
        <div class="table">
          <div class="table-l">成交渠道</div>
          <div class="table-r">{{turnover.transactionChannel}}</div>
        </div>
        <div class="table">
          <div class="table-l">成交周期</div>
          <div class="table-r">{{turnover.turnoverPeriod}}天</div>
        </div>
        <div class="table">
          <div class="table-l">出租方式</div>
          <div class="table-r">{{turnover.rentingStyle}}</div>
        </div>
        <div class="table">
          <div class="table-l">带看次数</div>
          <div class="table-r">{{turnover.numberTimes}}次</div>
        </div>
        <div class="table">
          <div class="table-l">客户姓名</div>
          <div class="table-r">{{turnover.userRealname}}</div>
        </div>
        <div class="table">
          <div class="table-l">联系方式</div>
          <div class="table-r">{{turnover.userMobile}}</div>
        </div>
      </div>
    </div>

    <div class="blank"></div>
    <div class="farmhouseDetail">
      <div class="farmhouseDetail-tit">农房信息</div>
      <div class="farmhouseDetail-tab">
        <div class="table">
          <div class="table-l">房屋户型</div>
          <div class="table-r">{{farmhouse.bedroom||0}}室{{farmhouse.drawingroom||0}}厅{{farmhouse.bathroom||0}}卫{{farmhouse.balcony||0}}阳{{farmhouse.kitchen||0}}厨</div>
        </div>
        <div class="table">
          <div class="table-l">楼层</div>
          <div class="table-r">共{{farmhouse.floor||0}}层</div>
        </div>
        <div class="table">
          <div class="table-l">建筑面积</div>
          <div class="table-r">{{farmhouse.coveredArea||0}}平方米</div>
        </div>
        <div class="table">
          <div class="table-l">房屋类型</div>
          <div class="table-r">{{farmhouse.houseType}}</div>
        </div>
        <div class="table">
          <div class="table-l">宅基地面积</div>
          <div class="table-r">{{farmhouse.curtilageArea||0}}平方米</div>
        </div>
        <div class="table">
          <div class="table-l">建筑结构</div>
          <div class="table-r">{{farmhouse.buildingStructure}}</div>
        </div>
        <div class="table">
          <div class="table-l">房屋朝向</div>
          <div class="table-r">{{farmhouse.houseOrientation}}</div>
        </div>
        <div class="table">
          <div class="table-l">建筑年代</div>
          <div class="table-r">{{farmhouse.builtYear}}年</div>
        </div>
        <div class="table">
          <div class="table-l">装修情况</div>
          <div class="table-r">{{farmhouse.decorationSituation}}</div>
        </div>
        <div class="table">
          <div class="table-l">土地性质</div>
          <div class="table-r">{{farmhouse.landCharacteristic}}</div>
        </div>
      </div>
    </div>
    <div class="blank"></div>
    <div class="farmhouseDetail">
      <div class="farmhouseDetail-tit">农房介绍</div>
      <div class="farmhouseDetail-des">
        {{farmhouse.describe || '暂无'}}
      </div>
    </div>
    <div class="blank"></div>
    <div class="farmhouseDetail">
      <div class="farmhouseDetail-tit">农房配套</div>
      <div class="farmhouseDetail-matings">
        <div class="farmhouseDetail-matings-item" v-for="item in farmhouse.matings">
          <img :src="item.logo" alt="">
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>
    <div class="blank"></div>
    <div class="farmhouseDetail">
      <div class="farmhouseDetail-tit">农房特色</div>
      <div class="farmhouseDetail-charp">
        <div class="table">
          <div class="table-l">装修情况</div>
          <div class="table-r">
            <div class="btnbox">
              <div class="btn" v-for="(item,k) in farmhouse.characteristics" :key="k">{{item}}</div>
            </div>
          </div>
        </div>
        <div class="table">
          <div class="table-l">周边景点</div>
          <div class="table-r">
            {{farmhouse.landSpace}}
          </div>
        </div>
        <div class="table-tit">区位情况</div>
        <div class="table table-50">
          <div class="table-l">自然条件</div>
          <div class="table-r">{{farmhouse.naturalCondition}}</div>
        </div>
        <div class="table table-50">
          <div class="table-l">污水处理情况</div>
          <div class="table-r">{{farmhouse.sewageCondition}}</div>
        </div>
        <div class="table table-50">
          <div class="table-l">绿化条件</div>
          <div class="table-r">{{farmhouse.greeningCondition}}</div>
        </div>
        <div style='width: 100%;height: .01rem; background: #E6E6E6; margin-top:.3rem; margin-bottom: .1rem'></div>
        <div class="table-tit">交通出行</div>
        <div class="table" style="border: none; padding-bottom: 0; margin-bottom: 0">
          <div class="table-l">交通说明</div>
          <div class="table-r">{{farmhouse.transitRoute}}</div>
        </div>
      </div>
    </div>
    <div class="blank"></div>
    <div class="farmhouseDetail">
      <div class="farmhouseDetail-tit" style="padding-bottom: 0">位置与配套</div>
    </div>
    <div class="map">
      <div id="container"></div>
      <div class="map-tit van-ellipsis">
        <span class="van-ellipsis">{{village.villageName}}　<span class="tag" v-if="village.beautifulCountry == 1">美丽乡村</span></span>
      </div>
      <div class="farmhouseDetail">
        <div class="table">
          <div class="table-l">本村年租均价</div>
          <div class="table-r">
            {{village.rentingAverage || 0 + '万元/年'}}
          </div>
          <div class="table-l">区域</div>
          <div class="table-r">
            {{(village.areaName + '-' + village.streetName) || ''}}
          </div>
          <div class="table-l">在租房源</div>
          <div class="table-r">
            {{village.rentFarmhouse || 0}}套
          </div>
        </div>
      </div>
    </div>
    <div class="blank"></div>
    <div class="farmhouseDetail">
      <div class="farmhouseDetail-tit">农房信息 <i :class="houseowner.sex == 1?'icon-nan iconfont':'icon-nv iconfont'"></i></div>
      <div class="farmhouseDetail-tab">
        <div class="table">
          <div class="table-l">联系人</div>
          <div class="table-r">{{houseowner.name}}</div>
        </div>
        <div class="table">
          <div class="table-l">电话</div>
          <div class="table-r">{{houseowner.mobile}}</div>
        </div>
        <div class="table">
          <div class="table-l">备用电话</div>
          <div class="table-r">{{houseowner.spareMobile}}</div>
        </div>
        <div class="table">
          <div class="table-l">身份证</div>
          <div class="table-r">{{houseowner.idCard}}</div>
        </div>
      </div>
    </div>
    <div class="blank"></div>
    <div class="farmhouseDetail">
      <div class="farmhouseDetail-tit">发布人</div>
      <div class="farmhouseDetail-tab">
        <div class="table">
          <div class="table-l">发布人</div>
          <div class="table-r">{{publish.name}}</div>
        </div>
        <div class="table">
          <div class="table-l">电话</div>
          <div class="table-r">{{publish.mobile}}</div>
        </div>
        <div class="table">
          <div class="table-l">团队</div>
          <div class="table-r"></div>
        </div>
        <div class="table">
          <div class="table-l">主管</div>
          <div class="table-r"></div>
        </div>
      </div>
    </div>
    <div class="blank"></div>
    <div class="farmhouseDetail" style="margin-bottom: 3rem">
      <div class="farmhouseDetail-tit">审核记录</div>
      <div class="farmhouseDetail-tab agentlist" v-if="auditingList.length > 0">
        <div class="table" v-for="item in auditingList">
          <div class="table-l">
            <img :src="item.head" alt=""><span>{{item.name}}  {{item.operation == 1 ? "审核通过":item.operation == 2 ? "发布":item.operation == 0 ? "审核不通过":""}}</span>
            <div class="other" v-if="item.other">{{item.other}}</div>
          </div>
          <div class="table-r">{{item.time}}</div>
        </div>
      </div>
      <div v-else class="nolist">暂无审核记录</div>
    </div>
    <div class="navbar">
      <div class="call" @click="call()"><i class="iconfont icon-dianhua1"></i><span>联系房主</span></div>
      <div class="edit" v-if="type == 1 || type == 2" @click="edit()">编辑</div>
      <div class="edit" v-if="type == 3" @click="deal()">成交</div>
      <div class="upload" :style="type == 4 ?'width: 50%;':''" @click="doit()">继续发布</div>
    </div>
    <!-- type == 1待审核 2未通过 3已通过 4已成交 -->
  </div>
</template>
<script>
  import Header from "../../common/header2"
  export default {
    name: "detail",
    components: {
      Header
    },
    data() {
      return {
        title: '农房详情',
        farmhouse: {}, village: {}, houseowner: {}, publish: {}, auditingList: [], type: 1
      }
    },
    methods: {
      doit(){
        this.$router.push({ name: 'issueFarm-agent' })
      },
      init(id){
        this.$http.post('appServiceAccount/getFarmhouse', {id}).then(res=>{
          if(res.msg=='success'){
            this.farmhouse = res.data.farmhouse
            this.farmhouse.bannerUrl = this.farmhouse.bannerUrl.split(',')
            this.farmhouse.characteristics = this.farmhouse.characteristics.split(',')
            this.longitude=res.data.farmhouse.longitude;//经度
            this.latitude=res.data.farmhouse.latitude;//维度
            this.houseowner = res.data.houseowner
            this.publish = res.data.publish
            this.turnover = res.data.turnover
            this.auditingList = res.data.auditingList
            this.village = res.data.village
            this.type = res.data.type
            this.setmap()
          }
        })
      },
      setmap(){
        let map = new BMap.Map('container');
        let point =new BMap.Point(this.longitude,this.latitude);
        map.centerAndZoom(point, 15);
        let marker = new BMap.Marker(point);
        map.addOverlay(marker);
        //设置一个标签
        let opts = {
          position : point,    // 指定文本标注所在的地理位置
          offset   : new BMap.Size(-55,-90)    //设置文本偏移量
        }
        var label = new BMap.Label(this.farmhouse.title, opts);
        label.setStyle({
          color : "black",
          fontSize : "0.2rem",
          height : "40px",
          lineHeight : "40px",
          fontFamily:"微软雅黑",
          padding:'5px',
          border:'none',
          textAlign:'center',
          width:'100px',
          overflow:'hidden',
          whiteSpace:'nowrap',
          textOverflow:'ellipsis',
        });
        map.addOverlay(label);
      },
      call(){
        if(this.houseowner.mobile){
          window.location.href="tel:"+(this.houseowner.mobile)
        } else {
          this.$toast("暂无房主联系方式")
        }
      },
      deal(){
        this.$router.push({name: 'farmhouseDeal-agent', query: { id: this.id}})
      },
      edit(){
        this.$router.push({name: 'issueFarm-agent', query: { id: this.id}})
      }
    }, 
    computed: {},
    created: function () {
      this.id = this.$route.query.id;
      this.init(this.id)
    },
    mounted: function () {}
  }
</script>
<style scoped lang="less" type="text/less">
  @import "../../../style/public.less";
  .banner {
    .van-swipe {
      height: 4.02rem;
      width: 100%;
      margin-top: 0.92rem;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
    }
    position: relative;
    .deal {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      border-top: 1.41rem solid #0ab33c;
      border-right: 1.41rem solid transparent;
      color: #fff;
      font-size: 0.34rem;
      span {
        position: absolute;
        top: -1.44rem;
        left: 0.36rem;
        text-align: center;
        font-size: 0.25rem;
        color: #fff;
        transform: rotate(-45deg);
        -webkit-transform: rotate(40deg);
        font-weight: 600;

      }
    }
    .share{
      position: absolute;
      top: 0.2rem;
      right: 0.2rem;
      span{
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        background-color: rgba(0, 0, 0, 0.6);
        text-align: center;
        line-height: 0.48rem;
        border-radius: 50%;
        i{
          color: white;
          font-size: 0.33rem;
        }
      }
    }
    .vr{
      position: absolute;
      top: 2.8rem;
    }
    .van-popup {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 0.6rem;
      padding-bottom: 0.6rem;
      ul {
        width: 33.3%;
        flex: 1;
      }
      .iconfont {
        font-size: 1.04rem;
        text-align: center;
        color: #0eb831;
      }
      .xinlang {
        color: #e6162c;
        font-size: 1.15rem;
      }
      .zone {
        color: #01a8ec;
      }
      p {
        text-align: center;
        font-size: 0.26rem;
        .hc();
        margin-top: 0.14rem;
      }
    }
  }
  .top {
    min-height: 1.28rem;
    overflow: auto;
    padding: 0.31rem ;
    .title {
      min-height: 0.8rem;
      .bt();
      overflow: auto;
      font-size: 0.33rem;
      color: #06050a;
      font-weight: 600;
      p {
        float: left;
        margin-right: 0.1rem;
      }
    }
    .content {
      padding-top: 0.32rem;
      font-size: 0.21rem;
      color: #6a6a6c;
      div {
        float: left;
        margin-right: 0.2rem;
        p {
          float: left;
          margin-right: 0.17rem;
          .iconfont {
            color: #ff682f;
          }
        }
        &:nth-child(3) {
          margin-right: 0rem;
        }
      }
    }
  }
  .total {
    overflow: hidden;
    padding: 0.4rem 3% 0.1rem;
    text-align: center;
    .total-item{
      width: 24%;
      display: inline-block;
      text-align: center;
      margin-bottom: .4rem;
      border-right: #E6E6E6 .01rem solid;
      &:last-of-type{
        border-right: 0
      }
      div{
        text-align: center;
        line-height: 1.6;
        font-size: .24rem;
        &:first-of-type{
          color: #FB5900;
        }
        &:last-of-type{
          color: #686868;
        }
        span{
          font-size: .3rem;
        }
      }
    }
  }
  .farmhouseDetail{
    padding: .3rem;
    box-sizing: border-box;
    .farmhouseDetail-tit{
      font-size: .32rem;
      padding: 0 0 .2rem;
    }
    .farmhouseDetail-tab{
      font-size: 0;
      .table{
        width: 50%;
        display: inline-block;
      }
      &.agentlist{
        .table{
          width: 100%;
          display: inline-block;
          .table-l{
            width: 70%;
            vertical-align: top;
            img{
              width: .6rem;
              height: .6rem;
              border-radius: 50%;
            }
            img, span{
              color: #300005;
              vertical-align: middle;
            }
            span{
              margin-left: .2rem;
            }
            .other{
              padding-left: .8rem;
              font-size: .24rem;
            }
          }
          .table-r{
            width: 30%;
            line-height: .6rem;
            padding: 0;
            color: #686868;
            vertical-align: top;
            text-align: right;
          }
        }
      }
    }
    .farmhouseDetail-des{
      font-size: .28rem;
    }
    .farmhouseDetail-charp{
      font-size: 0;
      .table{
        border-bottom: #E6E6E6 .01rem solid;
        margin-bottom: .14rem;
        padding-bottom: .24rem;
        width: 100%;
        .table-l{
          width: 20%
        }
        .table-r{
          width: 80%;
          .btnbox{
            border: 0;
            padding-top: 0
          }
        }
      }
      .table-tit{
        font-size: .3rem;
        padding: .1rem 0 .2rem;
      }
      .table-50.table{
        border-bottom: 0;
        margin-bottom: 0;
        padding-bottom: 0;
        display: inline-block;
        width: 50%;
        .table-l{
          width: 50%
        }
        .table-r{
          width: 50%;
        }
      }
    }
    .farmhouseDetail-matings{
      .farmhouseDetail-matings-item{
        display: inline-block;
        padding: .1rem .2rem;
        text-align: center;
        font-size: .22rem;
        color: #686868;
        box-sizing: border-box;
        img{
          width: .6rem;
          height: .6rem
        }
        p{
          text-align: center;
          line-height: 1.8;
        }
      }
    }
  }
  //地图
  .map{
    #container{
      height: 4rem;
    }
    .map-tit{
      line-height: 1;
      display: block;
      width: 100%;
      font-size: 0.3rem;
      padding: 0.3rem;
      box-sizing: border-box;
      border-bottom: #E6E6E6 .01rem solid;
      .tag{
        line-height: 1;
        font-size: .24rem;
        color: #5fc476;
        background: #ebf8ee;
        border-radius: .3rem;
        padding: .06rem .1rem;
      }
    }
    .farmhouseDetail{
      padding-top: .2rem;
      padding-bottom: .2rem;
      .table{
        width: 70%;
        padding: 0;
        .table-l,.table-r{
          padding: .1rem 0;
        }
      }
    }
  }
  .table{
    font-size: 0;
    padding: .1rem 0;
    .table-l{
      font-size: .26rem;
      width: 40%;
      display: inline-block;
      color: #686868;
      vertical-align: top;
    }
    .table-r{
      font-size: .26rem;
      width: 60%;
      display: inline-block;
      color: #300005;
      vertical-align: top;
      padding-right: .08rem;
      box-sizing: border-box;
    }
  }
  .btnbox {
    border-top: #E6E6E6 .01rem solid;
    padding-top: 0.2rem;
    overflow: hidden;
    .btn {
      float: left;
      border: 1px solid #00ae39;
      color: #00ae39;
      padding: 0.06rem 0.11rem;
      font-size: 0.22rem;
      text-align: center;
      line-height: 0.22rem;
      border-radius: 0.1rem;
      margin-right: 0.11rem;
      margin-bottom: 0.05rem;
      &:nth-child(5n) {
        border: 1px solid #02a2f0;
        color: #02a2f0;
      }
      &:nth-child(5n +1) {
        border: 1px solid #ff6204;
        color: #ff6204;
      }
      &:nth-child(5n + 2) {
        border: 1px solid #8c5896;
        color: #8c5896;
      }
      &:nth-child(5n + 3) {
        border: 1px solid #00a597;
        color: #00a597;
      }
      &:nth-child(5n + 4) {
        border: 1px solid #F2E02E;
        color: #F2E02E;
      }
    }
  }
  .navbar{
    width: 100%;
    height: .92rem;
    position: fixed;
    z-index: 99;
    bottom: 0;
    background: #fff;
    border-top: #E6E6E6 .01rem solid;
    font-size: 0;
    .call,.edit,.upload{
      height: 100%;
      font-size: .32rem;
      display: inline-block;
      line-height: .92rem;
      text-align: center
    }
    .call{
      width: 50%;
      i{
        font-size: .5rem;
        margin-right: .1rem;
      }
      i,span{
        line-height: 1;
        vertical-align: middle;
      }
      span{
        padding-bottom: .05rem;
      }
    }
    .edit,.upload{
      width: 25%;
      color: #fff
    }
    .edit{
      background: #00AF66;
    }
    .upload{
      background: #FF9900;
    }
  }
  .nolist{
    padding: .2rem 0;
    text-align: center;
    color: #CCCCCC;
  }
  .blank {
    .jg();
  }
</style>