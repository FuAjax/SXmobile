<template>
<div>
  <div class="total">
    <div class="left">
      <p>{{p1}}</p>
      <span>{{p2}}</span>
    </div>
    <van-swipe
      :autoplay="3000"
      vertical
      :show-indicators="false">
      <van-swipe-item v-for="(item,i) in list" :key="i" class="swiper">
        <router-link :to="{name:'detail',params:{goods:item.goodsID}}">
          <p class="iconfont icon-dian"></p>
          <p>{{item.title}}</p>
        </router-link>
      </van-swipe-item>
    </van-swipe>

  </div>
  <div class="blank"></div>
</div>


</template>

<script>
    export default {
        name: "Swiper",
        data(){
          return{
            list:[
              {title:"黄陂区出台30条政策干货，支持“三乡工程” 主推全域旅游",goodsID:1},
              {title:"黄陂区出台29条政策干货，支持“三乡工程” 主推全域旅游",goodsID:2},
              {title:"黄陂区出台28条政策干货，支持“三乡工程” 主推全域旅游",goodsID:3},
              {title:"黄陂区出台27条政策干货，支持“三乡工程” 主推全域旅游",goodsID:4},
            ],
            p1:"三乡",
            p2:"政策"
          }
        }
    }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";
  .blank{
    .jg()
  }
  .total{
    height: 1rem;
    padding: 0.3rem;
    .left{
      width: 15.4%;
      float: left;
      font-size: 0.28rem;
      font-style: oblique;
      p{
        color: @mr;
        margin-bottom: 0.13rem;
      }
    }
  }
  .van-swipe {
    height: 0.76rem;
    line-height: 0.44rem;
    .iconfont{
      float: left;
      height: 0.76rem;
    }
  }

  .van-swipe /deep/ .swiper van-swipe-item{
    height:0.76rem;
  }
  .van-swipe /deep/ .router-link-active{
      font-size: 0.25rem!important;
  }
</style>
