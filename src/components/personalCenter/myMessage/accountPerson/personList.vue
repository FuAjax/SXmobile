<template>
  <div>
    <Header/>
    <List/>
    <Footer/>
  </div>
</template>

<script>
  import List from "./components/List"
  import Header from "./components/header"
  import Footer from "./components/footer"

  export default {
    name: "personList",
    data() {
      return {}
    },
    components: {
      List,
      Header,
      Footer
    }
  }
</script>

<style scoped lang="less" type="text/less">

</style>
