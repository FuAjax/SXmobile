<template>
  <div>
    <div class="topBar">
      <Header :title='title' :isback='isback'/>
    </div>
    <!--<Search/>-->
    <List :List="rows" />
    <Link/>
    <Footer/>
  </div>
</template>

<script>
  import Header from '../../../common/Header';
  import Footer from "../../../common/Footer"
  import Search from "../../common/search"
  import Link from "../../../common/Link"
  import List from "./components/List"

  export default {
    name: "wantedList",
    data() {
      return {
        rows:[],
        isback:true,
        title: '求租列表',
        // color: '#FF6400',
      }
    },
    components: {
      Header,
      Footer,
      Search,
      Link,
      List
    },
    methods: {
      // init() {
      //   this.$http.post('appServiceFarmhouse/getRentingHouseData').then(res=>{
      //     console.log(res);
      //     this.rows=res.data.rows
      //     console.log(this.rows);
      //   })
      // }
    },
    created: function () {
      // this.init()
    }
  }
</script>

<style scoped lang="less" type="text/less">

</style>
