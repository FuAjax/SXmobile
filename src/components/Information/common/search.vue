<template>
  <div class="search">
    <van-search placeholder="请输入搜索关键字" v-model="value"/>
    <div class="btnbox">
      <div class="btn" @click="search">{{map1}}</div>
      <div class="btn">{{map2}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "search",
    data() {
      return {
        map1: "搜索",
        map2: "我要咨询",
        value:'',

      }
    },
    methods: {
      search:function () {
        if (this.value) {
          var value=this.value
          var array=[]
          this.$http.post('/appServiceInformation/consultList',{type:2,info:value}).then(res=>{
            console.log(res.data);
            array.push(res.data)
          })
          this.$emit('datachage',array)
        }else {
          this.$toast("搜索关键字不能为空")
        }

      }
    },
    computed: {},
    created: function () {
    },
    mounted: function () {
    },
  }
</script>

<style scoped lang="less" type="text/less">
  .search {
    margin-top: 0.92rem;
    background-color: #f6f5fb;
    height: 0.95rem;
    padding: 0.21rem 0.2rem 0.01rem;
    .van-search {
      width: 4.02rem;
      background-color: #f6f5fb !important;
      height: 0.56rem;
      float: left;
      input::placeholder {
        /* placeholder颜色  */
        color: #aab2bd;
        /* placeholder字体大小  */
        font-size: 12px;
        /* placeholder位置  */
        text-align: right;
      }
    }
    .van-search /deep/ .van-field__control {
      font-size: 0.23rem;
      color: #69696b;
    }
    .van-search /deep/ .van-field {
      box-shadow: 0.1rem 0.1rem 0.1rem #d4d3d8;
      border-radius: 1.1rem;
    }
    .btnbox{
      float: right;
    }
    .btn {
      float: left;
      width: 1.77rem;
      height: 0.58rem;
      line-height: 0.58rem;
      text-align: center;
      color: #d4efce;
      background-color: #00b234;
      font-size: 0.24rem;
      border-radius: 1.1rem;
      margin-right: 0.2rem;
      &:nth-child(1){
        width: 0.9rem;
      }
    }
  }

</style>
