<template>
  <div>
    <div class="nav">
      <div class="top">
        <div class="left">{{detail.villageName}}</div>
        <div class="right">{{detail.beautifulCountry==1?"美丽乡村":detail.beautifulCountry==0?"":''}}</div>
      </div>
      <div class="btn">
        <div class="btnbox" v-for="(index,i) in detail.characteristics">{{index}}</div>
      </div>
      <div class="list">
        <div class="houseList" v-for="(index,i) in houseList">
          <router-link :to="{name:index.name}">
            <img :src="index.url" alt="">
            <div class="house">{{index.text}}</div>
            <div class="border-right" ></div>
          </router-link>

        </div>
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
  import url2 from '../../../../../assets/images/detail.png'
  import url1 from '../../../../../assets/images/position.png'
  import url3 from '../../../../../assets/images/now.png'
  export default {
    name: "Nav",
    props:{
      detail:{
        type:String,
        required:true
      }
    },
    data() {
      return {

        p1: "杜塘村",
        p2: "最美乡村",
        btnList: [
          {name: "有山"},
          {name: "独立院落"},
          {name: "近高速"},
          {name: "有山手术室"},
          {name: "有山w(ﾟДﾟ)w"},
          {name: "近高速"},
          {name: "有山手术室"},
          {name: "有山w(ﾟДﾟ)w"},

        ],
        houseList: [
          {url: url1,text:"正在出租",name:'rentList'},
          {url: url2,text:"租房成交",name:'dealList'},
          {url: url3,text:"位置周边",name:'mapVillage'},
        ]
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";

  .nav {
    padding: 0.32rem 0.3rem 0.2rem 0.3rem;
    .top {
      height: 0.64rem;
      .bt();
      .left {
        .tt()
      }
      .right {
        .button();
        margin-left: 0.21rem;
        float: left;
      }
    }
    .btn {
      min-height: 0.61rem;
      overflow: auto;
      .btnbox {
        margin-top: 0.2rem;
        float: left;
        .br();
        margin-right: 0.11rem;
      }
    }
    .list {
      display: flex;
      margin-top: 0.32rem;
      .houseList {
        width: 33.3%;
        text-align: center;
        position: relative;

        img {
          width: 0.86rem;
          height: 0.86rem;
          border-radius: 50%;
          /*margin-left: 30%;*/
        }
        .house {
          font-size: 0.26rem;
          margin-top: 0.2rem;
          text-align: center;
          .hc()
        }
        &:nth-child(3) {
          .border-right:after{
            width: 0;
          }
        }
      }
      .border-right:after {
        content: '';
        position: absolute;
        left: auto;
        top: 0.14rem;
        bottom: 5px;
        right: 0;
        height: 52%;
        width: 1px;
        background-color: #908f94;
        &:nth-child(2) {
          width: 0;
        }
      }

    }
  }

  .blank {
    .jg();
  }
</style>
