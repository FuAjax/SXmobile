<template>
  <div>
    <div class="wonder">
      <div class="top">
        <span class="orang">精彩</span>推荐
        <div>
          <span @click="tabone"><i class="iconfont icon-xiangzuo"></i></span>
          <span @click="tabtwo"><i class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i></span>
        </div>
      </div>
      <ul v-show="tabnum==0">
        <li v-for="item in newsList.slice(0,3)">
          <router-link :to="{name:'textDetail',params:{id:item.id}}">

          <van-row gutter="20">
            <van-col span="17">
              <div class="left">
                <div class="text">
                  {{item.informationTitle}}
                </div>
                <p>{{item.createTime}}</p>
              </div>
            </van-col>
            <van-col span="7">
              <div class="right">
                <img :src="item.informationLogourl" alt="">
              </div>
            </van-col>
          </van-row>

          </router-link>

        </li>
      </ul>
      <ul v-show="tabnum==1">
        <li v-for="item in newsList.slice(3)" >
          <router-link :to="{name:'textDetail',params:{id:item.id}}">
            <van-row gutter="20">
              <van-col span="17">
                <div class="left">
                  <div class="text">
                    {{item.informationTitle}}
                  </div>
                  <p>{{item.createTime}}</p>
                </div>
              </van-col>
              <van-col span="7">
                <div class="right">
                  <img :src="item.informationLogourl" alt="">
                </div>
              </van-col>
            </van-row>
          </router-link>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Project",
    props:{
      newsList:{
        type:Array,
        required:true
      }
    },
    data() {
      return {
        scenic: "村庄",
        rank: "动态",
        newList1:[],
        newList2:[],
        tabnum:0,//tab选项卡
      }
    },
    methods :{
      // init(){
      //   this.$http.post('appServiceFarmhouse/getFarmhouseIndexParam').then(res=>{
      //     this.newList1=res.data.news.slice(0,3)
      //     this.newList2=res.data.news.slice(3)
      //   })
      // },
      tabone(){
        this.tabnum=0;
      },
      tabtwo(){
        this.tabnum=1;
      },
    },
    created:function () {
      // this.init()
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../style/public.less";

  .blank {
    height: 0.2rem;
    width: 100%;
    border-bottom: 0.01rem solid #e7e6ec;
    border-top: 0.01rem solid #e7e6ec;
    background-color: #f1f0f6;
  }

  //精彩推荐
  .wonder{
    padding: 0 0.3rem;
    .top{
      height: 1.15rem;
      line-height: 1.15rem;
      font-size: 0.32rem;
      font-weight: bold;
      .orang{
        color: #ff6500;
      }
      div{
        float: right;
        span{
          display: inline-block;
          width: 0.3rem;
          height: 0.3rem;
          border:1Px #c6c6c8 solid;
          line-height: 0.2rem;
          text-align: center;
          background-color: #f6f5fb;
          i{
            color: #98979d;
          }
        }
      }
    }
    ul{
      li{
        padding: 0.3rem 0;
        border-top: 0.02rem #e4e4e4 solid;
        .left{
          font-size: 0.2rem;
          .text{
            line-height: 0.3rem;
            height: 0.9rem;
            overflow: hidden;
            font-size: 0.3rem;
          }
          p{
            color: grey;
            font-size: 0.2rem;
            padding-top: 0.09rem;
          }
        }
        .right{
          height: 1.18rem;
        }
      }
    }
  }
</style>
