<template>
  <div class="villageDetail">
    <div class="topBar" v-if="(!isapp)">
      <Header :title='title' :isback='isback'/>
    </div>
    <Banner :list="banner" :detail="detail"/>
    <Nav :detail="detail"/>
    <Swiper :news="detail" v-if="swiper"/>
    <Information :detail="detail"/>
    <Recommend :detail="detail"/>
    <Location/>
    <!--<RimFarm :list="getNearByVillage" />-->
    <RimGrange :stayList="getStayList" :playList="getPlayList" :foodList="getFoodsList"/>
    <Link/>
    <!--<List :villageList="getNearByVillage"/>-->
    <!--<Bottom/>-->
    <Footer :detail="detail"/>
  </div>
</template>

<script>
  import Header from '../../../common/Header';
  import Footer from "./components/Footer"
  import Banner from "./components/Banner"
  import Nav from "./components/Nav"
  import Swiper from "./components/Swiper"
  import Information from "./components/Information"
  import Recommend from "./components/Recommend"
  import Location from '../../../common/Location'
  import RimFarm from './components/RimFarm'
  import RimGrange from './components/RimGrange'
  import Link from '../../../common/Link'
  import Bottom from '../../../common/Bootom'
  import List from '../villageList/components/List'
  export default {
    name: "villageDetail",
    data() {
      return {
        // banner
        banner:[],
        // detial详情
        detail:'',
        // 本村信息
        rentalHouse:[],
        // 周边住宿
        getStayList:[],
        // 周边游玩
        getPlayList:[],
        // 周边美食
        getFoodsList:[],
        // 周边村庄
        getNearByVillage:[],
        isback:true,
        title: '村庄详情',
        // color: '#FF6400',
        swiper:true,
        news:[],
        // rental:false
      }
    },
    components: {
      Footer,
      Header,
      Banner,
      Nav,
      Swiper,
      Information,
      Recommend,
      Location,
      RimFarm,
      RimGrange,
      Link,
      Bottom,
      List,
    },
    methods:{
      init(){
        var id=this.$route.params.id
        this.$http.post('appServiceFarmhouse/getVillageDetail',{villageNumber:id,userId:1}).then(res=>{
          console.log(res);
          this.banner=res.data.detail.banner
          this.detail=res.data.detail
          this.news=res.data.detail.news
          this.rentalHouse=res.data.rentalHouse
          this.getStayList=res.data.getStayList
          this.getPlayList=res.data.getPlayList
          this.getFoodsList=res.data.getFoodsList
          this.getNearByVillage=res.data.getNearByVillage
          console.log(this.getNearByVillage);
          if(this.news){
            this.swiper=true
          }
          // if (this.rentalHouse.length>0){
          //   console.log(this.rentalHouse);
          //   this.rental=true
          // }
        })
      }
    },
    created:function () {
      this.init()
    }
  }
</script>

<style scoped lang="less" type="text/less">
.villageDetail{
  overflow: hidden;
}
</style>
