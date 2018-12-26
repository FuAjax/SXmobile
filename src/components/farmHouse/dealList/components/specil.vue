<template>
  <div>
    <div class="search">

      <van-search placeholder="请输入区域/农房名称" v-model="value"/>

      <div class="btn" @click="farmMap">地图找房</div>
      <div class="btn" @click="search">搜索</div>

    </div>
    <div class="wrap">
      <div class="condition">
        <ul class="top_tab clear" style="    padding-left: 0.6rem;">
          <li class="list" @click="area" :class="{active:area1}">
            <p style="text-overflow: ellipsis;white-space: nowrap;float: left;overflow: hidden;width: 70%;">
              {{areatext}}</p>
            <i class="iconfont icon-xiala1" v-show="area1" style="float: left"></i>
            <i class="iconfont icon-xiala" v-show="!area1" style="float: left"></i>
          </li>
          <li class="list" @click="group" :class="{active:area2}">
            <p style="text-overflow: ellipsis;white-space: nowrap;float: left;overflow: hidden;width: 70%">
              {{pricetext}}</p>
            <i class="iconfont icon-xiala1" v-show="area2" style="float: left"></i>
            <i class="iconfont icon-xiala" v-show="!area2" style="float: left"></i>
          </li>
          <li class="list" @click="weather" :class="{active:area3}">
            <p style="text-overflow: ellipsis;white-space: nowrap;float: left;overflow: hidden;width: 70%">
              {{speciltext}}</p>
            <i class="iconfont icon-xiala1" v-show="area3" style="float: left"></i>
            <i class="iconfont icon-xiala" v-show="!area3" style="float: left"></i>
          </li>
          <li class="list" @click="sort" :class="{active:area4}">
            <p style="text-overflow: ellipsis;white-space: nowrap;float: left;overflow: hidden;width: 70%">
              {{moretext}}</p>
            <i class="iconfont icon-xiala1" v-show="area4" style="float: left"></i>
            <i class="iconfont icon-xiala" v-show="!area4" style="float: left"></i>
          </li>
        </ul>

        <div>
          <div class="area">
            <div v-if="area1" class="regin">
              <div class="left">
                <!--景区/区域-->
                <div v-for="(item,index) in two"
                     @click="twoSpot(index)"
                     :keys="index"
                     :class="{active:index==twoNum}"
                >{{item}}
                </div>
              </div>
              <div class="right">
                <div v-if="twoNum==0">
                  <!--区域-->
                  <van-tree-select
                    :items="item1"
                    :main-active-index="mainActiveIndex"
                    :active-id="activeId"
                    @navclick="onNavClick"
                    @itemclick="onAreaClick"
                  />
                </div>
                <div v-if="twoNum==1">
                  <!--景点-->
                  <van-tree-select
                    :items="landlist"
                    :main-active-index="mainActiveIndex"
                    :active-id="activeId"
                    @navclick="onNavClick"
                    @itemclick="onLandClick"
                  />
                </div>
              </div>
            </div>
            <!--价格-->
            <div v-if="area2" class="group">
              <van-tree-select
                :items="pricelist"
                :active-id="activeId"
                @itemclick="ontypeClick"
              />
            </div>
            <!--特色-->
            <div v-if="area3" class="season">
              <van-tree-select
                :items="characteristicArray"
                :active-id="activeId"
                @itemclick="specilClick"
              />
            </div>
            <!--排序-->
            <div v-if="area4" class="regin regin2">
              <div class="left">
                <!--景区/区域-->
                <div v-for="(item,index) in twos"
                     @click="twoSpot2(index)"
                     :keys="index"
                     :class="{active:index==twoNum2}"
                >{{item}}
                </div>
              </div>
              <div class="right">
                <div v-if="twoNum2==0">
                  <!--区域-->
                  <van-tree-select
                    :items="farmhouseRentalLife"
                    :active-id="activeId1"
                    @navclick="onNavClick"
                    @itemclick="RentalLifeOk"
                  />
                </div>
                <div v-if="twoNum2==1">
                  <!--用途-->
                  <van-tree-select
                    :items="rentingUse"
                    :active-id="activeId2"
                    @navclick="onNavClick"
                    @itemclick="rentingUseOk"
                  />
                </div>
                <div v-if="twoNum2==2">
                  <!--朝向-->
                  <van-tree-select
                    :items="houseOrientation"
                    :active-id="activeId3"
                    @navclick="onNavClick"
                    @itemclick="houseOrientationOk"
                  />
                </div>
                <div v-if="twoNum2==3">
                  <!--房屋类型-->
                  <van-tree-select
                    :items="houselist"
                    :active-id="activeId4"
                    @navclick="onNavClick"
                    @itemclick="houselistOk"
                  />
                </div>
                <div v-if="twoNum2==4">
                  <!--景点-->
                  <van-tree-select
                    :items="floor"
                    :active-id="activeId5"
                    @navclick="onNavClick"
                    @itemclick="floorOk"
                  />
                </div>
                <div v-if="twoNum2==5">
                  <!--景点-->
                  <van-tree-select
                    :items="rentingStyle"
                    :active-id="activeId6"
                    @navclick="onNavClick"
                    @itemclick="rentingStyleOk"
                  />
                </div>
                <div v-if="twoNum2==6">
                  <!--景点-->
                  <van-tree-select
                    :items="decorationSituation"
                    :active-id="activeId7"
                    @navclick="onNavClick"
                    @itemclick="decorationSituationOk"
                  />
                </div>
                <div v-if="twoNum2==7">
                  <!--景点-->
                  <van-tree-select
                    :items="farmhouseAge"
                    :active-id="activeId8"
                    @navclick="onNavClick"
                    @itemclick="farmhouseAgeOk"
                  />
                </div>
              </div>
              <div class="bottom">
                <!--<span style="background-color: #fff;"></span>-->
                <span @click="submit" :class="{orange:checknum==1}">确定</span>
                <span @click="reset" :class="{orange:checknum==2}">重置</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="tab">
          <!--住宿-->
          <div class="scenic_wrap">
            <van-list
              v-model="loading"
              :finished="finished"
              @load="init"
            >
              <div v-for="(item,index) in rows">
                <van-row gutter="20">
                  <!--图-->
                  <van-col span="8">
                    <router-link :to="{name:'dealDetail',params: {id:item.farmhouseNumber}}" tag="div" class="left">
                      <div
                        v-if="item.logo"
                        :style="'background:url(' + item.logo + ');width: 100%;height: 100%;background-size:cover;background-position: center center'"
                      ></div>
                      <img v-else src="../../../../assets/noimg.jpg" alt>
                    </router-link>
                  </van-col>
                  <!--右边文字-->
                  <van-col span="16">
                    <div class="right">
                      <!--风景区-->
                      <router-link :to="{name:'dealDetail',params: {id:item.farmhouseNumber}}" tag="div"
                                   class="mulan">
                        <span class="lake">{{item.farmhouseTitle}}</span>

                        <!--评分-->
                        <div class="grade">
                          <p style="margin-top: 0.15rem;color: #666668;font-size: 0.22rem">
                            <span>可租{{item.rentingYears}}年/{{item.floor}}层{{item.bedroom}}室/{{item.coveredArea}}平</span>
                          </p>
                          <p class="much">
                            <span>{{item.rentingYears}}万元</span>/年
                          </p>
                        </div>
                        <!--定位-->
                        <div class="position">
                          <i class="iconfont icon-dizhi"></i>{{item.fcityName}}{{item.fareaName}}{{item.fstreetName}}
                        </div>
                        <!--数据-->
                        <div class="data">
                          <p style="font-size: 0.23rem;">{{item.turnoverTime}}成交</p>
                        </div>
                      </router-link>
                    </div>
                  </van-col>
                </van-row>
              </div>
            </van-list>
          </div>
          <noFind v-if="nomessage" name1="农房" :name2='false'></noFind>
          <!--求租-->
        </div>
      </div>
      <div class="test"></div>
    </div>
  </div>
</template>

<script>
  import Sweep from 'com/common/swiper';
  import Five from 'com/common/five'
  import rates from '../../../common/rates'
  import noFind from 'com/common/notFind'

  export default {
    name: "grangeindex",
    data() {
      return {
        value: '',
        keyword: '',
        map: "地图找房",
        nomessage: false,
        areatext: "区域",
        pricetext: "价格",
        speciltext: "特色",
        moretext: "更多",
        isback: true,
        title: '',
        area1: false,
        area2: false,
        area3: false,
        area4: false,
        two: ['区域', '景点'],
        twos: ['租赁年限', '用途', '朝向', '房屋类型', '楼层', '出租方式', '装修', '房龄'],
        twoNum: 0,
        twoNum2: 0,
        fourSpan: ['漂流', '烧烤', '棋牌', '野菜'],
        items: [
          {
            // 导航名称
            text: '所有城市',
            // 该导航下所有的可选项
            children: [
              {
                text: '智能排序',
                id: 1002
              },
              {
                text: '离我最近',
                id: 1001
              },
              {
                text: '价格低到高',
                id: 1003
              },
              {
                text: '价格高到低',
                id: 1004
              },
              {
                text: '评论最高',
                id: 1005
              },
            ]
          },
        ],
        mainActiveIndex: 0,
        activeId: 1001,
        activeId1: 1001,
        activeId2: 1001,
        activeId3: 1001,
        activeId4: 1001,
        activeId5: 1001,
        activeId6: 1001,
        activeId7: 1001,
        activeId8: 1001,
        innlist: [],//住宿列表
        item1: [],//区域
        landlist: [],//景点
        type: [],//类型
        pricelist: [],//价格
        houselist: [],//房型
        facilitylist: [],//设施
        arearest: '',//区域rest
        landrest: '',//景点rest
        pricerest: '',//价格rest
        peoplerest: '',//房型rest
        typelist: '',//类型rest
        facility: '',//设施rest
        specilSpan: '',//特色rest
        RentalLifeClick: '',//租赁年限
        rentingUseClick: '',//用途
        farmhouseAgeClick: '',//房龄
        decorationSituationClick: '',//装修
        rentingStyleClick: '',//出租方式
        floorClick: '',//房层
        houselistClick: '',//房屋类型
        houseOrientationClick: '',//朝向
        checknum: 0,
        num: -1,//价格id
        pnum: -1,//房型id
        fnum: -1,//设施id
        farmhouseRentalLife: [],//年限
        rentingUse: [],//用途
        floor: [],//楼层
        rentingStyle: [],//出租方式
        decorationSituation: [],//装修
        farmhouseAge: [],//房龄
        characteristicArray: [],
        houseOrientation: [],//朝向
        houseType: [],//房屋类型
        page: 1,
        rows: 30,
        total: 1,
        loading: false,
        finished: false,
      }
    },
    methods: {
      // detail() {
      //   this.$route.push({name: 'rentDetail', params: {id: item.farmhouseNumber}})
      // },
      farmMap() {
        this.$router.push({name: 'farmMap'})
      },
      contion() {
        this.$http.post('appServiceFarmhouse/getRentTurnoverParam').then(res => {
          let areaArray = res.data.areaList
          // 区域
          areaArray.unshift({text: '不限', children: [], areaRestfulDictionary: ''})
          areaArray.map(item => {
            item.children.unshift({restFul: '', text: '不限', id: null})
          })
          this.item1 = areaArray
          // this.item1 = res.data.areaList;
          // 景点

          let letArray = res.data.areaLandList
          letArray.unshift({text: '不限', children: [], areaLandareaRestfulDictionaryList: ''})
          letArray.map(item => {
            item.children.unshift({restFul: '', text: '不限', id: null})
          })
          this.landlist = letArray;
          // 类型
          this.typelist = res.data.houseType;
          this.type = res.data.stayParam;
          // 价格

          let priceArry = res.data.farmhouseRentPrice;
          priceArry.map(item => {
            item.children.unshift({menuRestfulDictionary: '', text: '不限', id: 0})
          })
          this.pricelist = priceArry

          // 特色
          let characteristic = res.data.characteristic
          characteristic.map(item => {
            item.children.unshift({menuRestfulDictionary: '', text: '不限', id: 0})
          })

          this.characteristicArray = characteristic
          this.houselist = res.data.houseType;
          this.facilitylist = res.data.rentingUse;
          this.farmhouseRentalLife = res.data.farmhouseRentalLife;
          this.rentingUse = res.data.rentingUse;
          this.houseOrientation = res.data.houseOrientation;
          this.floor = res.data.floor;
          this.rentingStyle = res.data.rentingStyle;
          this.decorationSituation = res.data.decorationSituation;
          this.farmhouseAge = res.data.farmhouseAge;
        })
      },
      init() {

        setTimeout(() => {
          const params = {
            page: 1,
            rows: 30,
            keyword: this.keyword,
            rest: this.arearest
              + this.landrest
              + this.peoplerest
              + this.specilSpan
              + this.houseOrientationClick
              + this.houselistClick
              + this.floorClick
              + this.rentingStyleClick
              + this.decorationSituationClick
              + this.farmhouseAgeClick
              + this.rentingUseClick
              + this.RentalLifeClick
          };
          if (this.$route.query.searchWord) {
            params.keyword = this.$route.query.searchWord
          }
          this.$http.post('appServiceFarmhouse/getRentTurnoverData', params).then(res => {
            if (res.msg == "success") {
              if (this.page == 1) {
                this.rows = res.data.rows;
              } else {
                this.rows = this.rows.concat(res.data.rows)
              }
              if (this.rows.length == 0) {
                this.nomessage = true;
              }
              this.page++
              this.total = res.data.total
              this.loading = false
              if (this.rows.length >= this.total) {
                this.finished = true
              }
            } else {
              this.$toast(res.info)
            }
          })
        }, 500)


      },
      area() {
        this.area2 = false;
        this.area3 = false;
        this.area4 = false;
        this.area1 = !this.area1;
      },
      group() {
        this.area3 = false;
        this.area4 = false;
        this.area1 = false;
        this.area2 = !this.area2;
      },
      weather() {
        this.area4 = false;
        this.area1 = false;
        this.area2 = false;
        this.area3 = !this.area3;
      },
      sort() {
        this.area1 = false;
        this.area2 = false;
        this.area3 = false;
        this.area4 = !this.area4;
      },


// 请求参数
      onAreaClick(data) {//区域
        this.activeId = data.id;
        this.area1 = false;
        this.arearest = data.restFul;
        this.areatext = data.text
        this.page = 1
        this.init();
      },
      onLandClick(data) {//景点
        this.activeId = data.id;
        this.area1 = false;
        this.landrest = data.restFul;
        this.page = 1
        this.areatext = data.text

        this.init();
      },

      onNavClick(index) {
        this.area1 = false;
        // 区域
        this.arearest = this.item1[index].areaRestfulDictionary;
        this.areatext = this.item1[index].text
        // 景点
        this.landrest = this.item1[index].areaRestfulDictionary;
        this.mainActiveIndex = index;
        if (index == 0) {
          this.areatext = '区域'
        }
        this.page = 1;
        this.init()
      },


      ontypeClick(data) {//价格
        this.activeId = data.id;
        this.area2 = false;
        this.peoplerest = data.menuRestfulDictionary;
        this.pricetext = data.text
        if (data.text == "不限") {
          this.pricetext = "价格"
        }
        this.page = 1;
        this.init()
      },
      specilClick(data) {//特色
        this.activeId = data.id;
        this.area3 = false;
        this.specilSpan = data.menuRestfulDictionary;
        this.speciltext = data.text

        if (data.text == "不限") {
          this.speciltext = "特色"
        }

        this.page = 1;
        this.init()
      },

      // 年限 用途 朝向 房屋类型 房层 出租方式 装修 房龄
      RentalLifeOk(data) {//年限
        this.activeId1 = data.id;
        this.area3 = false;
        this.RentalLifeClick = data.menuRestfulDictionary;
        this.page = 1;
      },
      rentingUseOk(data) {//用途
        this.activeId2 = data.id;
        this.area3 = false;
        this.rentingUseClick = data.menuRestfulDictionary;
        this.page = 1;
      },
      houseOrientationOk(data) {//朝向
        this.activeId3 = data.id;
        this.area3 = false;
        this.houseOrientationClick = data.menuRestfulDictionary;
        this.page = 1;
      },
      houselistOk(data) {//房屋类型
        this.activeId4 = data.id;
        this.area3 = false;
        this.houselistClick = data.menuRestfulDictionary;
        this.page = 1;
      },
      floorOk(data) {//房层
        this.activeId5 = data.id;
        this.area3 = false;
        this.floorClick = data.menuRestfulDictionary;
        this.page = 1;
      },
      rentingStyleOk(data) {//出租方式
        this.activeId6 = data.id;
        this.area3 = false;
        this.rentingStyleClick = data.menuRestfulDictionary;
        this.page = 1;
      },
      decorationSituationOk(data) {//装修
        this.activeId7 = data.id;
        this.area3 = false;
        this.decorationSituationClick = data.menuRestfulDictionary;
        this.page = 1;
      },
      farmhouseAgeOk(data) {//房龄
        this.activeId8 = data.id;
        this.area3 = false;
        this.farmhouseAgeClick = data.menuRestfulDictionary;
        this.page = 1;
      },

      twoSpot(index) {
        this.twoNum = index;
      },
      twoSpot2(index) {
        this.twoNum2 = index;
      },

      // 重置
      reset() {//重置
        this.activeId1 = 0,
          this.activeId2 = 0,
          this.activeId3 = 0,
          this.activeId4 = 0,
          this.activeId5 = 0,
          this.activeId6 = 0,
          this.activeId7 = 0,
          this.activeId8 = 0,
          this.checknum = 1;
        this.RentalLifeClick = ""
        this.rentingUseClick = ""
        this.houseOrientationClick = ""
        this.houselistClick = ""
        this.floorClick = ""
        this.rentingStyleClick = ""
        this.decorationSituationClick = ""
        this.farmhouseAgeClick = ""
        this.init();
      },
      // 确定
      submit() {//确定
        this.checknum = 2;
        this.RentalLifeClick
        this.rentingUseClick
        this.houseOrientationClick
        this.houselistClick
        this.floorClick
        this.rentingStyleClick
        this.decorationSituationClick
        this.farmhouseAgeClick
        this.nomessage = false, this.page = 1;
        this.init();
        this.area4 = false;
      },
      // 搜索
      search() {
        this.keyword = this.value
        this.page = 1
        this.init();
      }
    },
    computed: {},
    created: function () {
      this.init()
      this.contion()
    },

    mounted: function () {


      // 一个是滑动前事件  或者on tuhs move    transform: translateX(0px);
    },
    destroy: function () {

    },
    components: {
      noFind
    }

  }
  const numbers = (...nums) => nums;

</script>

<style scoped lang="less" type="text/less">
  .wrap {
    //隔开
    .separate {
      height: 0.28rem;
      background-color: #f1f0f6;
    }
    //精彩推荐
    .wonder {
      padding: 0 0.3rem;
      .top {
        height: 1.15rem;
        line-height: 1.15rem;
        font-size: 0.24rem;
        font-weight: bold;
        .orange {
          color: #ff6500;
        }
        div {
          float: right;
          span {
            display: inline-block;
            width: 0.3rem;
            height: 0.3rem;
            border: 1Px #c6c6c8 solid;
            line-height: 0.25rem;
            text-align: center;
            background-color: #f6f5fb;
            i {
              color: #98979d;
            }
          }
        }
      }
      ul {
        li {
          padding: 0.3rem 0;
          border-top: 0.02rem #e4e4e4 solid;
          .left {
            font-size: 0.2rem;
            .text {
              line-height: 0.3rem;
              height: 0.9rem;
              overflow: hidden;
            }
            p {
              color: grey;
              font-size: 0.15rem;
              padding-top: 0.09rem;
            }
          }
          .right {
            height: 1.18rem;
          }
        }
      }
    }
    //景点排行榜
    .scenic {
      .scenic_top {
        padding: 0 0.3rem;
        height: 1.15rem;
        line-height: 1.15rem;
        a {
          font-size: 0.24rem;
          font-weight: bold;
        }
        .orange {
          color: #ff6500;
        }
        .right {
          height: 1rem;
          float: right;
        }
      }
      .scenic_bottom {
        border-bottom: 0.02rem #e4e4e4 solid;
        padding-bottom: 0.2rem;
        padding-left: 0.3rem;
        .rank {
          padding-right: 0.2rem;
          div {
            height: 2rem;
            position: relative;
            span {
              position: absolute;
              left: 0;
              top: 0;
              width: 0.9rem;
              height: 0.4rem;
              text-align: center;
              line-height: 0.3rem;
              i {
                font-size: 0.2rem;
                color: white;
              }
            }
          }
          p {
            font-size: 0.18rem;
            padding-top: 0.13rem;
          }
        }
        .last {
          div {
            i {
              font-size: 1rem;
            }
          }
          p {
            font-size: 0.18rem;
            padding-left: 0.12rem;
          }
        }
      }
    }
    //游玩排行榜
    .play {
      .play_top {
        padding: 0 0.3rem;
        height: 1.15rem;
        line-height: 1.15rem;
        a {
          font-size: 0.24rem;
          font-weight: bold;
        }
        .orange {
          color: #ff6500;
        }
        .right {
          height: 1rem;
          float: right;
        }
      }
      .play_bottom {
        border-bottom: 0.02rem #e4e4e4 solid;
        padding-bottom: 0.2rem;
        padding-left: 0.3rem;
        .rank {
          padding-right: 0.2rem;
          div {
            height: 2rem;
            position: relative;
            span {
              position: absolute;
              left: 0;
              top: 0;
              width: 0.9rem;
              height: 0.4rem;
              text-align: center;
              line-height: 0.3rem;
              i {
                font-size: 0.2rem;
                color: white;
              }
            }
          }
          p {
            font-size: 0.18rem;
            padding-top: 0.13rem;
          }
        }
        .last {
          div {
            i {
              font-size: 1rem;
            }
          }
          p {
            font-size: 0.18rem;
            padding-left: 0.12rem;
          }
        }
      }
    }
    //美食排行榜
    .food {
      .food_top {
        padding: 0 0.3rem;
        height: 1.15rem;
        line-height: 1.15rem;
        a {
          font-size: 0.24rem;
          font-weight: bold;
        }
        .orange {
          color: #ff6500;
        }
        .right {
          height: 1rem;
          float: right;
        }
      }
      .food_bottom {
        padding-bottom: 0.2rem;
        padding-left: 0.3rem;
        .rank {
          padding-right: 0.2rem;
          div {
            height: 2rem;
            position: relative;
            span {
              position: absolute;
              left: 0;
              top: 0;
              width: 0.9rem;
              height: 0.4rem;
              text-align: center;
              line-height: 0.3rem;
              i {
                font-size: 0.2rem;
                color: white;
              }
            }
          }
          p {
            font-size: 0.18rem;
            padding-top: 0.13rem;
          }
        }
        .last {
          div {
            i {
              font-size: 1rem;
            }
          }
          p {
            font-size: 0.18rem;
            padding-left: 0.12rem;
          }
        }
      }
    }
    //tab选项卡
    .tab {
      /*padding-bottom: 0.2rem;*/
      /*border-bottom: 1px rgba(192, 192, 192, .5) solid;*/
      //景点
      .scenic_wrap {
        padding: 0 0.3rem;
        & > div {
          /*padding: 0.2rem 0;*/
          /*border-top: 0.5px rgba(192, 192, 192, .5) solid;*/
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
            .score {
              font-size: 0.18rem;
              vertical-align: middle;
              color: #ff6500;
            }
            .much {
              display: inline-block;
              font-size: 0.2rem;
              vertical-align: middle;
              color: #a2a2a4;
              /*float: right;*/
              span {
                color: #e90009;
                font-size: 0.28rem;
                font-weight: 600;
              }
            }
            .month {
              display: inline-block;
              /* vertical-align: middle; */
              /* margin-left: 2.8rem; */
              float: right;
              font-size: 0.2rem;
              color: #a2a2a4;
              margin-top: 0.4rem;
              margin-right: -1.3rem;
            }
          }
          .position {
            float: right;
            color: #a2a2a4;
            font-size: 0.2rem;
            width: 2.3rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            i {
              font-size: 0.3rem;
              color: #c7c6cb;
              vertical-align: middle;
              margin-right: 0.05rem;
            }
            font-size: 0.2rem;
          }
          .data {
            span {
              font-size: 0.18rem;
              padding: 0 0.1rem;
              border-radius: 0.05rem;
            }
            span:first-child {
              border: 0.01rem #099b4c solid;
              color: #099b4c;
            }
            span:nth-child(2) {
              border: 0.01rem #00a0e9 solid;
              color: #00a0e9;
            }
            span:nth-child(3) {
              border: 0.01rem #eb3d00 solid;
              color: #eb3d00;
            }
            span:nth-child(4) {
              border: 0.01rem #e3007b solid;
              color: #e3007b;
            }
          }
        }
        .van-row {
          margin-left: 0 !important;
          margin-right: 0 !important;
          padding-bottom: 0.2rem;
          border-bottom: 0.01rem solid rgba(192, 192, 192, 0.5);
          padding-top: 0.2rem;
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

  .condition {
    position: relative;
    .top_tab {
      /*border-bottom: 0.01rem solid grey;*/
      margin-bottom: 0.2rem;
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
          height: 7rem;
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

  //样式的修改
  .van-tabs /deep/ .van-ellipsis {
    font-size: 0.2rem;
    font-weight: bold;
  }

  .van-tabs /deep/ .van-tabs__nav--line {
    padding: 0 0.3rem;
  }

  .van-tabs /deep/ .van-tabs__line {
    left: 0.12rem;
    height: 0.02rem;
    bottom: 0rem;
    width: 1.55rem !important;
    background-color: #ff6500;
  }

  .van-tabs /deep/ .van-col {
    padding-left: 0 !important;
  }

  .group /deep/ .van-tree-select__content {
    margin-left: 0;
  }

  .season /deep/ .van-tree-select__content {
    margin-left: 0;
  }

  .regin2 /deep/ .van-tree-select__content {
    margin-left: 0;
  }

  .regin2 /deep/ .van-tree-select__nav {
    margin-left: 0;
    background-color: transparent;
  }

  .van-tabs /deep/ .van-tab--active {
    color: #ff6500;
  }

  .van-tabs /deep/ .van-hairline--top-bottom::after {
    border-width: 0;
  }

  .bottom {
    width: 100%;
    span {
      display: inline-block;
      width: 46%;
      background-color: #fea541;
      color: white;
      height: 0.85rem;
      line-height: 0.85rem;
      vertical-align: middle;
      text-align: center;
      float: right;
      margin-top: 0.19rem;
      &:nth-child(1){
        float: left;
      }
    }
  }

  .search {
    margin-top: 1rem;
    background-color: #f6f5fb;
    height: 0.95rem;
    padding: 0.21rem 0.2rem 0.01rem;
    .van-search {
      width: 53%;
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
      padding: 0 0.3rem;
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
</style>

