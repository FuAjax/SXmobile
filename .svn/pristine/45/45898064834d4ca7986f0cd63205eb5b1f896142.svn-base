<template>
  <span class="star">
    <i v-for="item in stars" class="iconfont" :class="item"></i>
  </span>
</template>

<script>
    export default {
      name: "rates",
      props:['rate'],
      data() {
          return {}
      },
      methods: {},
      computed: {
        stars:function(){
          let stars=[];
          let score=Math.floor(this.rate*2)/2;
          let halfscore= score%1 !==0;
          let solid=Math.floor(score);
          for(let i=0;i<solid;i++){
            stars.push('icon-pingfenshixing');
          }
          if(halfscore){
            stars.push('icon-pingfenbanxing')
          }
          while (stars.length<5){
            stars.push('icon-pingfenkongxing')
          }
          return stars
        }
      },
      created: function () {
      },
      mounted: function () {
      }
    }
</script>

<style scoped lang="less" type="text/less">
  .star{
    color: #ff6500!important;
    i{
      vertical-align: middle;
    }
  }
</style>
