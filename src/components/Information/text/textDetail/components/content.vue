<template>
  <div>
    <div class="content" v-for="(index,i) in info">
      <!--{{p1}}-->
      <!--<img :src="url" alt="">-->
      <!--{{p2}}-->
      <p v-html="index.infoConcent"></p>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
  export default {
    name: "content",
    props: {
      info: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        url: "http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg",
        p1: "少时诵诗书所所所所撒飒飒飒飒哒哒哒哒哒哒多多多多多多多多多多多阿诗丹顿多多多多多多多多多多多",
        p2: " 阿诗丹顿多多多多多多按时大声说所所所所所所所所所所撒的萨顶顶多多多多多多多多多多多按时收到啊啊啊啊啊啊啊啊啊啊啊啊啊啊按时到啊萨顶顶多多多多多多三大是大大大大大"
      }
    },

  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";

  .content {
    padding: 0.44rem 0.3rem;
    font-size: 0.29rem;
    line-height: 0.56rem;
    color: #030305;
    img {
      width: 6.91rem;
      height: 4.02rem;
    }
  }

  .blank {
    .jg();
  }
</style>
