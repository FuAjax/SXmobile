<template>
  <div>
    <div class="top">
      <div class="title">
        <div class="iconfont icon-xingxing"></div>
        <p>{{title}}</p>
        <p>{{amend}}</p>
      </div>
      <div class="position">{{position}}</div>
    </div>
    <div class="blank"></div>
    <div class="others">
      <van-cell-group>
        <van-field
          v-model="message"
          label="补充说明"
          type="textarea"
          placeholder="请输入留言"
          rows="1"
          autosize
        />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
  export default {
    name: "headline",
    data() {
      return {
        title: "信息标题",
        amend: "[可修改]",
        position: "黄陂区 王家河 胜天村 3室100平 2层楼房 独立院落 木兰山",
        others: "补充说明",
        message: "啊啊啊啊222万嗯嗯问问额区位区位是的是的都是第三方反倒是 和你就和你回家经过 简介"
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";
  .blank{
    .jg();
    width: 100%;
  }
  .top{
    padding: 0.46rem 0.3rem 0 0.3rem;
    .title{
      height: 0.55rem;
      .bt();
      div{
        float: left;
        .rc();
        font-size: 0.12rem;
        margin-top: 0.1rem;
      }
      p{
        float: left;
        font-size: 0.27rem;
        &:nth-child(2){
          color: #000000;
          margin-right: 0.12rem;
        }
        &:nth-child(3){
          color: #97969b;
        }
      }

    }
    .position{
      min-height: 1rem;
      overflow: auto;
      font-size: 0.22rem;
      line-height: 0.48rem;
      color: #343436;
    }
  }
  .others{
    min-height: 2.48rem;

  }
</style>
