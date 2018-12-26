<template>
  <div>
    <div class="topBar" v-if="(!isapp)">
      <Header :title='title' :isback='isback'/>
    </div>
      <!--<Search />-->
      <List />
      <Link />
  </div>
</template>

<script>
  import Search from "../../common/search"
  import Header from "../../../common/Header"
  import Link from "../../../common/Link"
  import List from "./components/list"
  import methods from './m/methods'

  export default {
    name: "consultList",
    data() {
      return {
        isback:true,
        title: '咨询列表',
        // color: '#FF6400',
      }
    },
    components: {
      Header,
      Search,
      Link,
      List
    },
    created:function () {
      this.init()
    },
    methods:methods
  }
</script>

<style scoped lang="less" type="text/less">

</style>
