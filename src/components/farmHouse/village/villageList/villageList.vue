<template>
  <div>
    <div class="topBar">
      <Header :title='title' :isback='isback'/>
    </div>
    <!--<Search />-->
    <List  />
    <Link/>
    <Footer/>
  </div>
</template>

<script>
  import Header from '../../../common/Header';
  import Footer from "../../../common/Footer"
  import List from "./components/List"
  import Search from "../../common/search"
  import Link from "../../rentDetail/components/Link"

  export default {
    name: "villagelist",
    data() {
      return {
        rows:[],
        isback:true,
        title: '村庄列表',
        // color: '#FF6400',
      }
    },
    components: {
      Header,
      Footer,
      List,
      Search,
      Link
    },
    created:function () {
      // this.init()
    },
    methods: {

    }
  }
</script>

<style scoped lang="less" type="text/less">

</style>
