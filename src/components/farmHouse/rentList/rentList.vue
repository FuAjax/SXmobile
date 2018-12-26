<template>
  <div>
    <div class="topBar">
      <Header :title='title' :isback='isback'/>
    </div>
    <!--<Search/>-->
    <Specil />
    <Footer/>
  </div>
</template>

<script>
  import Footer from '../../common/Footer';
  import Header from '../../common/Header';
  import Specil from './specil'
  import Search from '../common/search'

  export default {
    name: "rentList",
    data() {
      return {
        rows:[],
        isback:true,
        title: '出租列表',
        // color: '#FF6400',
      }
    },
    components: {
      Header,
      Specil,
      Footer,
      Search
    },
    methods: {
      // init() {
      //   // console.log(123);
      //   this.$http.post('appServiceFarmhouse/getRentalData').then(res => {
      //     this.rows=res.data.rows
      //     // console.log(res.data.rows);
      //   })
      //
      // }
    },
    created: function () {
      // this.init()
    }
  }
</script>

<style scoped lang="less" type="text/less">

</style>
