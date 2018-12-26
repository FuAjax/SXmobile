<template>
  <div>
  <Header />
  <List />
  <Footer />
  </div>
</template>

<script>
  import Header from "./components/header2"
  import Footer from "./components/footer2"
  import List from "./components/List2"

  export default {
    name: "addPerson",
    data() {
      return {}
    },
    components: {
      Header,
      Footer,
      List
    }
  }
</script>

<style scoped lang="less" type="text/less">

</style>
