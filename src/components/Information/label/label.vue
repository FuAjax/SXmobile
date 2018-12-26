<template>
  <div>
    <div class="topBar" v-if="(!isapp)">
      <Header :title='title' :isback='isback'/>
    </div>
    <List :newsList="info"/>
    <Link/>
  </div>
</template>

<script>
  import Header from "../../common/Header"
  import Link from "../../common/Link"
  import List from "./components/list"
  import methods from "./m/methods"
  export default {
    name: "label",
    data() {
      return {
        tagName:"",
        info:[],
        isback:true,
        title: '',
        // color: '#FF6400',
      }
    },
    components: {
      Header,
      Link,
      List,
    },
    created: function () {
      this.init();
      // console.log(this.$router);
    },


    methods: methods
  }
</script>

<style scoped lang="less" type="text/less">

</style>
