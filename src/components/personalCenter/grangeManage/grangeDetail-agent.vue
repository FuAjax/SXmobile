<template>
  <div id="grangedetail" class="grangedetail">
    <div class="topBar">
      <Header :title='title' :isback='true'/>
    </div>
    <div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item,i) in grange.bannerUrl" :key="i" class="swiper">
            <img :src="item" alt="" srcset=""/>
        </van-swipe-item>
      </van-swipe>
      <div class="detail">
        <div class="top">
          {{grange.title || ''}}
        </div>
        <div class="bottom">
          <span  v-if='grange.plays'  v-for="item in (grange.plays ? grange.plays.slice(0,4):null)">{{item}}</span>
          <div>
            星级
            <stars :rate="grange.totalMark"></stars>
            <span>{{grange.totalMark}}分</span>
          </div>
        </div>
      </div>
    </div>
      <div class="separate"></div>
      <ul class="scenicList">
        <li>
          <i class="iconfont icon-dizhi"></i>
          <a class="van-ellipsis gaga">
            {{grange.cityName + '-'}}{{grange.areaName + '-'}}{{grange.streetName + '-'}}{{grange.villageName + '-'}}{{grange.addressDetail}}
          </a>
        </li>
        <li>
          <i class="iconfont icon-dianhua2"></i>
          {{business.mobile1}} {{business.mobile2 ? ' - ' + business.mobile2 : ''}}
        </li>
        <li>
          <i class="iconfont icon-shijian"></i>
          {{grange.businessHours}}
        </li>
        <li class="check clear">
          <div v-for="item in (grange.matingList)">
            <img :src="item.logo" alt="">
            <p>{{item.name}}</p>
          </div>
        </li>
      </ul>
      <div class="separate"></div>
      <!--门票-->
      <div v-if="ticketList.length > 0">
        <div class="tickets" v-if="ticketList.length && ticketList.length>0">
          门票( {{ticketList.length}} )
        </div>
        <ul class="ticketList" v-if="ticketList.length && ticketList.length>0">
          <li v-for="item in ticketlist">
            <div>
              <router-link to="">
                {{item.ticketName}}
                ( {{item.ticketType == 1?"特价票":item.ticketType == 2?"成人票":item.ticketType == 3?"学生票":item.ticketType == 4?"儿童票":item.ticketType == 5?"老人票":item.ticketType == 6?"套票":item.ticketType == 7?"团体票":item.ticketType == 8?"其他":""}} )
              </router-link>
            </div>
            <div class="clear">
              <span>{{item.abolitionRules ==1?"有条件退":item.abolitionRules ==2?"随时退":item.abolitionRules ==3?"不可退":""}}</span>
              需游玩当天{{item.specificPoints}}前预订
              <!-- <router-link :to="{name:'ticketBook',params:{ type: 1, id: item.id}}" class="book">在线预订</router-link> -->
              <!-- <div v-else class="book" @click="TiBook(item.id)">在线预订</div> -->
            </div>
            <div>
              <span>￥{{item.bookingPrice}}元</span> <span class="line">￥{{item.facePrice}}元</span> &nbsp;|&nbsp;
              <!-- <a @click.stop="ticketKnow(item.id)" class="know">购买须知></a> -->
            </div>
          </li>
        </ul>
        <div class="separate" v-if="ticketList.length!=0"></div>
      </div>
      <!--住宿-->
      <div v-if="stayroomList.length > 0">
        <div class="tickets" v-if="stayroomList.length && stayroomList.length>0">
          住宿( {{stayroomList.length}} )
        </div>
        <ul class="innList ticketList" v-if="stayroomList.length && stayroomList.length>0">
          <li v-for="item in stayroomList">
            <div>
              <router-link to="">
                {{item.roomName}}
              </router-link>
            </div>
            <div>
              {{item.bedType+' | '}} {{item.breakfastNumber>0?'含早餐('+item.breakfastNumber+ '份' :'' + ''}}
              <!-- <router-link :to="{name:'innBook',params: {id:item.id}}" class="book">在线预订</router-link> -->
              <!-- <p v-else class="book" @click="inBook(item.id)">在线预订</p> -->
            </div>
            <div>
              <span>{{item.abolitionRules==1?'最晚'+item.abolitionDays+'天'+ item.abolitionPoints +'以前可免费取消':item.abolitionRules==2?'随时退':item.abolitionRules==3?'不可退':''}}</span>
            </div>
            <div>
              <span>￥{{item.bookingPrice}}元</span> <span class="line">￥{{item.listingPrice}}元</span> &nbsp;|&nbsp;
              <!-- <a class="know" @click.stop="innknow(item.id)">购买须知></a> -->
            </div>
          </li>
        </ul>
        <div class="separate" v-if="stayroomList!=0"></div>
      </div>
      <!-- 美食代金券 -->
      <div v-if="voucherList.length > 0">
        <div class="tickets" v-if='voucherList.length&&voucherList.length>0'>
          美食代金券( {{voucherList.length}} )
        </div>
        <ul class="ticketList" v-if='voucherList.length&&voucherList.length>0'>
          <li v-for="item in voucher.voucherList">
            <div>
              <router-link to="">
                {{item.voucherName}}
              </router-link>
            </div>
            <div class="clear">
              <span>{{item.abolitionRules == 1? '有条件退':item.abolitionRules == 2? '随时退':item.abolitionRules == 3? '不可退':''}}</span>
              {{item.usePeriod}} | {{item.isBespoke == 0?'免预约':'需要预约'}}
              <!-- <router-link v-if="login" :to="{name:'foodBook',params:{ type: 1, id: item.id}}" class="book">抢购</router-link> -->
              <!-- <div v-else class="book" @click="FooBook(item.id)">抢购</div> -->
            </div>
            <div><span>￥{{item.voucherPrice}}元</span> <span class="line">￥{{item.costPrice}}元</span> &nbsp;|&nbsp;
            <!-- <a @click='voucherknow(item.id)' class="know">购买须知></a> --></div>
          </li>
        </ul>
        <div class="separate" v-if="voucher.count!=0"></div>
      </div>
      <!-- detail -->
      <div>
        <!--景点介绍-->
        <div class="introduce">
          <span>简介</span>
          <div style="padding-top: .1rem" v-html="grange.grangeSynopsis || '暂无'">
          </div>
          <!--<button>查看全部&nbsp;&nbsp;<i class="iconfont icon-xia"></i></button>-->
        </div>
        <div class="separate"></div>
        <!--交通指引-->
        <div class="traffic" id="anchorr">
          <span>交通指引</span>
          <div>
            <span>开车路线</span>
            <span>
            {{grange.drivingRoute || '暂无'}}
          </span>
          </div>
          <div>
            <span>乘车路线</span>
            <span>
            {{grange.busRoutes || '暂无'}}
          </span>
          </div>
        </div>
      </div>
      <!--地图显示-->
      <div class="map">
        <div id="container"></div>
        <a class="van-ellipsis">
          <i class="iconfont icon-dizhi"></i>
          <span class="van-ellipsis">
            {{grange.cityName + '-'}}{{grange.areaName + '-'}}{{grange.streetName + '-'}}{{grange.villageName + '-'}}{{grange.addressDetail}}
          </span>
          <i class="iconfont icon-gengduo1"></i>
        </a>
      </div>
    <div class="blank"></div>
      <div class="farmhouseDetail">
        <div class="farmhouseDetail-tit">商户信息</div>
        <div class="farmhouseDetail-tab">
          <div class="table">
            <div class="table-l">联系人</div>
            <div class="table-r">{{business.name}}</div>
          </div>
          <div class="table">
            <div class="table-l">电话</div>
            <div class="table-r">{{business.mobile1}}</div>
          </div>
          <div class="table">
            <div class="table-l">备用电话</div>
            <div class="table-r">{{business.mobile2}}</div>
          </div>
          <div class="table">
            <div class="table-l">身份证</div>
            <div class="table-r">{{business.idCard}}</div>
          </div>
          <div class="table">
            <div class="table-l">营业执照</div>
            <div class="table-r">{{business.businessLicence}}</div>
          </div>
          <div class="table">
            <div class="table-l">食品经营许可证</div>
            <div class="table-r">{{business.foodBusinessLicense}}</div>
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
        {{grange.type == 1 ? '待审核' : grange.type == 2 ? '未通过' : grange.type == 3 ? '已通过' : ''}}
      </div>
    <!-- type == 1待审核 2未通过 3已通过 4已成交 -->
  </div>
</template>
<script>
  import stars from '../../common/rates'
  import Header from "../../common/header2"
  export default {
    name: "detail",
    components: {
      Header,stars
    },
    data() {
      return {
        title: '农庄详情',
        grange: {}, ticketList: [], voucherList: [], stayroomList: [], business: {}, publish: {}, auditingList: [], type: 1
      }
    },
    methods: {
      init(id){
        this.$http.post('appServiceAccount/getGrange', {id}).then(res=>{
          if(res.msg=='success'){
            this.grange = res.data.grange
            this.grange.bannerUrl = this.grange.bannerUrl.split(',')
            this.grange.plays = this.grange.plays.split(',')
            this.longitude=res.data.grange.longitude;//经度
            this.latitude=res.data.grange.latitude;//维度

            this.auditingList = res.data.auditingList
            this.business = res.data.business
            this.publish = res.data.publish
            this.ticketList = res.data.ticketList
            this.stayroomList = res.data.stayroomList
            this.voucherList = res.data.voucherList
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
        var label = new BMap.Label(this.grange.title, opts);
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
      this.init(this.$route.query.id)
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
      word-wrap:break-word;
      font-size: .26rem;
      width: 60%;
      display: inline-block;
      color: #300005;
      vertical-align: top;
      padding-right: .08rem;
      box-sizing: border-box;
    }
  }
  .blank {
    .jg();
  }
</style>
<style scoped lang="less" type="text/less">
  .grangedetail{
    .payment-online{
      line-height: .6rem;
      padding: .2rem .3rem;
      text-align: right
    }
    .payment-online span{
      float: left;
      font-weight: bold;
      font-size: 0.3rem;
    }
    width: 100%;
    overflow: hidden;
    .swiper_wrap{
		height: 4.48rem;
      	position: relative;
	      .van-swipe{
	        height: 100%;
	        img{
	          height: 100%;
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
	          background-color:rgba(0, 0, 0, 0.4);
	          text-align: center;
	          line-height: 0.5rem;
	          border-radius: 50%;
	          text-align: center;
	          i{
	            color: white;
	            font-size: 0.25rem;
	          }
	        }
	      }
    }
    .detail{
      .top{
        height: 1rem;
        font-size: .32rem;
        line-height: 1rem;
        margin: 0 0.3rem;
        border-bottom: 0.01rem solid #f1f0f6;
      }
      .bottom{
        height: 0.85rem;
        line-height: 0.85rem;
        margin: 0 0.3rem;
        &>span{
          font-size: 0.24rem;
          padding: .05rem .1rem;
          border-radius: 0.05rem;
          margin-right: 0.05rem;
        }
        &>span:first-child{
          border: 0.01rem solid #00a0e9;
          color:#00a0e9 ;
        }
        &>span:nth-child(2){
          border: 0.01rem solid #099b4c;
          color:#099b4c ;
        }
        &>span:nth-child(3){
          border: 0.01rem solid #eb3d00;
          color:#eb3d00 ;
        }
        &>span:nth-child(4){
          border: 0.01rem solid #e3007b;
          color:#e3007b ;
        }
        div{
          float: right;
          font-size: 0.22rem;
          display: inline-block;
          span:last-child{
            color: #ff6500;
          }
        }
      }
    }
    //隔开
    .separate{
      height: 0.2rem;
      background-color: #f1f0f6;
    }
    .scenicList{
      margin:0 0.2rem 0.5rem 0.2rem;
      color: #28282B;
      li{
        height: 0.85rem;
        border-top: 0.01rem solid #f1f0f6;
        line-height: 0.85rem;
        font-size: 0.26rem;
        &>i{
          font-size: 0.3rem;
          color: #c7c6cb;
          vertical-align: middle;
        }
        .ditu{
          float: right;
          margin-right: 0.5rem;
          color: #78a5ff;
        }
        .gaga{
          width: 4rem;
          display: inline-block;
          vertical-align: middle;
        }
      }
      .check{
        line-height: normal;
        padding-top: 0.2rem;
        div{
          text-align: center;
          img{
            width: 0.5rem;
            height: 0.5rem;
          }
          p{
            text-align: center;
            font-size: 0.20rem!important;
            color: #919096
          }
          float: left;
          margin-right: 0.3rem;
          &:last-of-type{
            margin-right: 0;
          }
        }
      }

    }
    .tickets{
      height: 1rem;
      margin: 0 0.3rem;
      line-height: 1rem;
      font-weight: bold;
      font-size: 0.3rem;
      border-bottom: 0.01rem solid #f1f0f6;
    }
    .ticketList{
      margin: 0 0.3rem;
      li{
        border-bottom: 0.01rem solid #f1f0f6;
        div:first-child{
          a{
            height: 0.7rem;
            font-size: 0.28rem;
            line-height: 0.7rem;
          }
        }
        div:nth-child(2){
          font-size: 0.24rem;
          color:grey;
          span{
            margin-right: .05rem;
            border: 0.01rem solid #099b4c;
            font-size: 0.22rem;
            color: #099b4c;
            border-radius: 0.02rem;
            padding: .05rem 0.1rem;
          }
          .book{
            vertical-align: middle;
            display: inline-block;
            width: 1.48rem;
            height: 0.55rem;
            float: right;
            font-size: 0.22rem;
            background-color: #ff6200;
            color: white;
            text-align: center;
            line-height: 0.55rem;
            border-radius: 0.55rem;
          }
        }
        div:last-child{
          font-size: 0.22rem;
          color:grey ;
          margin-bottom: 0.2rem;
          span{
            color: #e21909;
          }
          .line{
            color: grey;
            text-decoration: line-through;
          }
          .know{
            color: #099b4c;
            font-size: 0.22rem;
          }
        }
      };
      .more{    padding: 0;
        height: 0.85rem;
        text-align: center;
        line-height: 0.85rem;
        color: #ff6400;
        font-size: 0.22rem;
      }
    }
    .innList{
      margin: 0 0.3rem;
      li{
        border-bottom: 0.01rem solid #f1f0f6;
        div:first-child{
          height: 0.6rem;
          overflow: hidden;
          a{
            font-size: 0.28rem;
            line-height: 0.7rem;
          }
        }
        div:nth-child(2){
          font-size: 0.24rem;
          color:grey;
          span{
            border: 0.01rem solid #099b4c;
            font-size: 0.22rem;
            color: #099b4c;
            border-radius: 0.02rem;
            padding: .05rem 0.1rem;
          }
          .book{
            vertical-align: middle;
            display: inline-block;
            width: 1.48rem;
            height: 0.55rem;
            float: right;
            font-size: 0.22rem;
            background-color: #ff6200;
            color: white;
            text-align: center;
            line-height: 0.55rem;
            border-radius: 0.55rem;
          }
        }
        div:nth-child(3){
          font-size: 0.24rem;
          padding: 0.05rem 0;
          color: #099BD1
        }
        div:last-child{
          // font-size: 0.26rem;
          color: #e90b08;
          line-height: 1.6;
          padding-bottom: .16rem;
        }
      }
      .more{    padding: 0;
        height: 0.85rem;
        text-align: center;
        line-height: 0.85rem;
        color: #ff6400;
        font-size: 0.22rem;
      }
    }
    //景点介绍
    .introduce{
      margin: 0.2rem 0.3rem;
      span{
        font-weight: bold;
        font-size: 0.3rem;
      }
      div{
        font-size: 0.26rem;
        color: grey;
        padding: 0.2rem 0;
      }
      button{
        width: 100%;
        border: none;
        height: 0.3rem;
        font-size: 0.22rem;
        background-color: white;
        color:#ff6500;
        margin-bottom: 0.1rem;
      }
    }
    //交通线路
    .traffic{
      margin: 0.2rem 0.3rem;
      &>span{
        font-weight: bold;
        font-size: 0.3rem;
      }
      div{
        margin-top: 0.1rem;
        &>span:first-child{
          color: grey;
          font-size: .26rem;
          vertical-align: top;
          padding-right: .06rem;
        }
        &>span:last-child{
          display: inline-block;
          width: 83%;
          font-size: .26rem;
        }
      }
    }
    //地图
    .map{
      #container{
        height: 4rem;
      }
      a{
        display: inline-block;
        width: 100%;
        font-size: 0.22rem;
        padding: 0.4rem 0.2rem;
        box-sizing: border-box;
        span{
          width: 6.16rem;
          display: inline-block;
          vertical-align: middle;
        }
        .icon-dizhi{
          color:grey;
          vertical-align: middle;
        }
        .icon-gengduo1{
          float: right;
          margin-top: 0.1rem;
        }
      }
    }
    //点评
    .remark{
      padding: 0.3rem 0.3rem .1rem;
      p:first-child{
        font-size: 0.3rem;
        font-weight: bold;
        padding-bottom: .1rem;
        .comment{
          float: right;
          font-size: 0.22rem;
          width: 1.5rem;
          height: 0.5rem;
          border-radius: 0.5rem;
          display: inline-block;
          color: #fff;
          background-color: #00b034;
          font-weight: normal;
          text-align: center;
          line-height: 0.5rem;
        }
      }
      p:last-child{
        font-size: 0.22rem;
        padding-bottom: 0.2rem;
        border-bottom: 0.01rem solid #E6E6E6;
        color: #5F5F5F
      }
    }
    .commentlist{
      li{
        margin: 0 0.3rem;
        padding: 0.2rem 0;
        border-bottom: 0.01rem solid #E6E6E6;
        .left{
          img{
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            margin-right: .1rem;
          }
        }
        .right{
          p:first-child{
            font-size: 0.26rem;
            color: grey;
            line-height: .26rem;
            span:last-child{
              font-size: 0.22rem;
            line-height: .26rem;
              float: right;
            }
            padding: .1rem 0;
          }
          p:nth-child(3){
            font-size: 0.26rem;
            line-height: 1.6;
          }
          &>span{
            margin-top: 0.09rem;
            width: 1.5rem;
            height: 0.4rem;
            text-align: center;
            line-height: 0.4rem;
            float: right;
            background-color: #06a3ea;
            border-radius: 0.4rem;
            font-size: 0.18rem;
            color: white;
          }
          .imgdiv{
            div{
              width: 1.8rem;
              height: 1.8rem;
              display: inline-block;
            }
          }
        }
      }
      .more{
        height: 0.85rem;    padding: 0;
        text-align: center;
        line-height: 0.85rem;
        color: #ff6400;
        font-size: 0.22rem;
        border: none;
      }
    }
    //周边农房
    .scenic{
      .scenic_top{
        padding: 0 0.3rem;
        height: 1.1rem;
        line-height: 1.1rem;
        font-size: 0.3rem;
        font-weight: bold;
      }
      .scenic_bottom{
        border-bottom: 0.02rem #e4e4e4 solid;
        padding-bottom: 0.2rem;
        padding-left:0.3rem;
        .rank{
          padding-right:0.2rem;
          div{
            height: 2.87rem;
            img{
              height: 2rem;
            }
            a{
              display: block;
              line-height: 1.8;
              font-size: 0.26rem;
            }
            p{
              font-size: 0.22rem;
              color: #979798;
              span{
                color: #FA6300;
              }
              span:nth-child(3){
                color: #979798;
                float: right;
              }
            }
          }
        }
      }
    }
    //周边农庄
    .farm{
      .scenic_top{
        padding: 0.2rem 0 0.2rem  0.3rem;
        font-size: 0.22rem;
        font-weight: bold;
        position: relative;
        &>span{
          font-size: 0.3rem;
          position: absolute;
          line-height: .7rem;
        }
      }
      .scenic_bottom{
        // border-bottom: 0.02rem #e4e4e4 solid;
        // padding-bottom: 0.2rem;
        .rank{
          padding-right:0.2rem;
          div{
            position: relative;
            height: 2.87rem;
            .price{
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
            img{
              height: 2rem;
            }
            a{
              display: block;
              font-size: 0.26rem;
              line-height: 1.8;
              font-weight: normal;
            }
            p{
              font-size: 0.22rem;
              font-weight: normal;
              span:nth-child(2){
                color: #ff6500;
              }
              span:nth-child(3){
                color: #979798;
                float: right;
              }
            }
          }
        }
      }
    }
    //上拉菜单
    .pullmenu{
      div{
        text-align: center;
      }
      .banner{
        margin:0.2rem 0;
       &>div{
         float: left;
         width: 33%;
         text-align: center;
         img{
           width: 40%;
         }
         p{
           margin-top: 0.3rem;
           text-align: center;
           font-size: 0.32rem;
         }
       }
      }
    }
    .pullmenu /deep/.van-actionsheet__header div{
      text-align: center;
    }
  }
  .currentVCity{
    padding: .3rem;
    font-size: .24rem;
    line-height: 1.8;
    color: #626263
  }
</style>
<style lang="less" type="text/less">
  #grangedetail{
    .navBar .van-tab{
        color: #28282B
    }
    .navBar .van-tab--active{
      color: #FF6500
    }
    .navBar .van-tabs__line{
      background: #FF6500;
    }
    .scenicDetail .van-tabs--card .van-tabs__wrap,
    &.grangedetail .van-tabs--card .van-tabs__wrap{
      margin-top: .15rem;
    }
    .scenicDetail .van-tabs__nav--card,
    &.grangedetail .van-tabs__nav--card{
      background: #F6F5FB;
    }
    .scenicDetail .van-tabs__nav--card,
    &.grangedetail .van-tabs__nav--card,
    .scenic_top .van-tabs__nav--card{
      border: 0;
      border-radius: .28rem;
      box-shadow: 0 0 .002rem #CECBCE
    }
    .scenic_top .van-tab{
      background: transparent;
      border: none
    }
    .scenic_top .van-tabs__nav--card .van-tab{
      border: none
    }
    .scenicDetail .van-tabs__nav--card .van-tab.van-tab--active,
    .van-tabs__nav--card .van-tab.van-tab--active{
      background: #FF6500!important;
      border-radius: .2rem
    }
    .scenicDetail .van-tabs--card,
    &.grangedetail .van-tabs--card{
      padding-top: .9rem;
    }
    &.grangedetail .traffic > span[data-v-270c5266],
    &.grangedetail .introduce span[data-v-270c5266]{
        line-height: 0.6rem;
        padding-bottom: .3rem;
        /* font-size: .24rem; */
    }
    .scenic_bottom .van-swipe-item{
    }
  }
</style>
