<template>
  <div>
    <Header />
    <List />
  </div>
</template>

<script>
  import List from "./list"
  import Header from "../common/header"

  export default {
    name: "accountSetting",
    data() {
      return {}
    },
    components: {
      Header,
      List
    }
  }
</script>

<style scoped lang="less" type="text/less">

</style>
