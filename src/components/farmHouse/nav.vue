<template>
  <div>
    <ul>
      <router-link v-for="(nav,i) in list" :to="{name:nav.name}" tag="li" :key="i" class="imgbox">
        <img :src="nav.url" alt="">
        <p>{{nav.text}}</p>
      </router-link>
    </ul>
    <div class="blank"></div>
  </div>
</template>

<script>
  import url5 from '../../assets/images/new_index.png'
  import url6 from '../../assets/images/new_rent.png'
  import url8 from '../../assets/images/new_detail.png'
  import url9 from '../../assets/images/new_wanted.png'
  import url10 from '../../assets/images/zs_05.png'

  export default {
    name: "Nav",
    data() {
      return {
        list: [
          {text: "租农房", url: url5, name: "rentList"},
          {text: "地图找房", url: url6, name: "farmMap"},
          {text: "查成交", url: url8, name: "dealList"},
          {text: "农房求租", url: url9, name: "wantedList"},
          {text: "美丽乡村", url: url10, name: "villageList"},
        ]
      }
    }
  }
</script>

<style lang="less" scoped type="text/less">
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0.31rem 0.26rem 0.3rem 0.4rem;
    justify-content: space-between;
    .imgbox {
      flex: 1;
      margin-right: 0.31rem;
      text-align: center;
      margin-bottom: 0.2rem;
      img {
        width: 0.86rem;
        margin-left: 0.1rem;
        height: 0.89rem;
      }
      p {
        width: 100%;
        font-size: 0.26rem;
        margin-top: 0.13rem;
        color: #333;
        text-align: center;
      }
    }
  }

  .blank {
    height: 0.2rem;
    width: 100%;
    border-bottom: 0.01rem solid #e7e6ec;
    border-top: 0.01rem solid #e7e6ec;
    background-color: #f1f0f6
  }
</style>

