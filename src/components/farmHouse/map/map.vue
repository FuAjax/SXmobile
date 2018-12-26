<template>
    <div>
      <div class="topBar">
        <Header :title='title' :color='color'/>
      </div>
    </div>
</template>

<script>
  import Header from "../../common/Header"
    export default {
        name: "map",
        data() {
            return {
              title: "地图找房",
              isback: true,
              type: null,
              color: '#FF6400',
            }
        },
      components:{
          Header
      }
    }
</script>

<style scoped lang="less" type="text/less">

</style>
