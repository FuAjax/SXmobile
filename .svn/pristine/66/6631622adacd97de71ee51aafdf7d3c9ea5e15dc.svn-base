<template>
  <div>
    <Header v-if="!isapp" :title='title'/>
    <Map />
  </div>
</template>

<script>
  import Header from '../../common/Header2'
  import Map from './map'

  export default {
    name: "listMap",
    props:{
      isapp: true
    },
    data() {
      return {
        title:'地图找房',
        isback:true,
      }
    },
    components: {
      Header,
      Map
    }
  }
</script>

<style scoped lang="less" type="text/less">

</style>
