<template>
  <div>
    <footer>
      <div  class="left" @click="phone">
        <div class="iconfont icon-dianhua2"></div>
        <p>电话</p>
      </div>
      <div  class="right" @click="goTable">
        <div class="right">
          <div class="iconfont icon-shijian"></div>
          <p>预约看房</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    props:{
      detail:{
        type:String,
        required:true
      }
    },
    name: "Footer",

    data() {
      return {
        accountPhone:''
      }
    },
    methods:{
      phone(){
        this.accountPhone=this.detail.mobile
        window.location.href="tel:"+(this.accountPhone)
      },
      goTable(){
        console.log(this.detail);
        this.$router.push({
          name:"villageOrder",
          params:{id:this.detail.villageNumber}
        })
      },
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";

  footer {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    position: fixed;
    display: flex;
    font-size: 0.3rem;

    .iconfont {
      font-size: 0.37rem;
      margin-right: 0.08rem;
      color: #fff;

    }
    .left {
      width: 50%;
      background-color: #fea541;
      .jz();
      color: #fff;
    }
    .right {
      width: 50%;
      background-color: @mr;
      .jz();
      color: #fff;
    }
  }
</style>
