<template>
  <div class="Detail">
    <div class="topBar" v-if="(!isapp)">
      <Header :title='title' :isback='isback'/>
    </div>
    <Banner :detail="detail"/>
    <Title
      :farmhouseRentalsNumber="farmhouseRentalsNumber"
      :farmhouseTitle="farmhouseTitle"
      :updatetime="updatetime"/>
    <Time :rentingPrice="rentingPrice"
          :bedroom="bedroom"
          :drawingroom="drawingroom"
          :curtilageArea="curtilageArea"
          :rentingYears="rentingYears"
          :characteristics="characteristics"
          :detail="detail"/>
    <Swiper :detail="detail"/>
    <Information1 :detail="detail"/>
    <Information2 :detail="detail"/>
    <Recommend :detail="detail" v-if="farmhouseDescribe"/>
    <Fitment :detail="detail" v-if="matingList"/>
    <Specil :detail="detail"
            :landList="landList"/>
    <!--<Decorate :detail="detail"/>-->
    <Location :detail="detail"/>
    <MapGrange :village="village"/>
    <RimFarm :list="farmHouse"/>
    <RimGrange :foodList="foodList" :playList="playList" :stayList="stayList"/>
    <Link/>
    <!--<Bootom/>-->
    <!--<Footer :detail="detail"/>-->
  </div>
</template>

<script>
  import Header from '../../common/Header';
  import Footer from "../rentDetail/components/Footer"
  import Banner from './components/dealBanner'
  import Title from './components/Title'
  import Time from '../rentDetail/components/Time'
  import Swiper from '../../common/Swiper'
  import Information1 from './components/Information1'
  import Information2 from './components/Information2'
  import Recommend from '../rentDetail/components/Recommend'
  import Fitment from '../rentDetail/components/Fitment'
  import Specil from './components/Specil'
  import Decorate from '../rentDetail/components/Decorate'
  import Location from '../rentDetail/components/Location'
  import MapGrange from '../rentDetail/components/MapGrange'
  import RimFarm from '../rentDetail/components/RimFarm'
  import RimGrange from '../rentDetail/components/RimGrange'
  import Link from '../rentDetail/components/Link'
  import Bootom from '../rentDetail/components/Bootom'

  export default {
    name: "dealDetail",
    data() {
      return {
        title: '成交详情',
        isback: true,
        // color: '#FF6400',
        // 详情
        detail:'',
        // 周边美食
        foodList:[],
        // 周边游玩
        playList:[],
        // 周边住宿
        stayList:[],
        // 村庄
        village:'',
        // 周边情况
        landList:[],
        characteristics:[],
        farmhouseDescribe:false,
        matingList:false
      }
    },
    components: {
      Header,
      Footer,
      Banner,
      Title,
      Time,
      Swiper,
      Information1,
      Information2,
      Recommend,
      Fitment,
      Specil,
      Decorate,
      Location,
      MapGrange,
      RimFarm,
      RimGrange,
      Link,
      Bootom
    },
    methods:{
        init(){
          var id= this.$route.params.id
          this.$http.post('appServiceFarmhouse/getRentalTurnoverDetail',{farmhouseRentalsNumber:id,userId:1}).then(res=>{
            console.log(res);
            this.farmhouseTitle = res.data.detail.farmhouseTitle
            this.farmhouseRentalsNumber = res.data.detail.farmhouseRentalsNumber
            this.updatetime = res.data.detail.updatetime
            this.rentingPrice = res.data.detail.turnoverPrice
            this.bedroom = res.data.detail.bedroom
            this.drawingroom = res.data.detail.drawingroom
            this.curtilageArea = res.data.detail.curtilageArea
            this.rentingYears = res.data.detail.rentingYears
            this.banner = res.data.detail.banner
            this.detail=res.data.detail
            this.foodList=res.data.foodList
            this.playList=res.data.playList
            this.stayList=res.data.stayList
            this.village=res.data.village
            this.farmHouse = res.data.farmHouse
            this.landList=res.data.landList
            this.characteristics=res.data.characteristics
            var farmhouseDescribe=res.data.detail.farmhouseDescribe
            var matingList=res.data.detail.matingList
            console.log(matingList);
            if(farmhouseDescribe!=""){
              this.farmhouseDescribe=true
            }
            if(matingList.length>0){
              this.matingList=true
            }
          })
        }
    },
    created:function () {
      this.init()
    }



  }
</script>

<style scoped lang="less" type="text/less">
  .Detail {
    height: 100%;
    overflow: hidden;
  }
</style>
