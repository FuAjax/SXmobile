<template>
  <div>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="详细需求" name="1">
        <div slot="title" class="title">
          <p>详细需求</p>
          <!--<span>{{detail.farmhouseDescribe}}</span>-->
        </div>
        {{detail.farmhouseDescribe}}
      </van-collapse-item>
    </van-collapse>
    <div class="blank"></div>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    props: {
      detail: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        activeNames: ['1'],
        title: "农房介绍",
        text: "啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
        first: "不不不不不不不不不不不不不不"
      };
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";

  .blank {
    .jg();
  }

  .van-collapse-item /deep/ .title {
    p {
      color: #020204;
      font-weight: 600;
      line-height: 0.31rem;
      font-size: 0.31rem;
    }
    span {
      font-size: 0.26rem;
      line-height: 0.47rem;
      color: #666;
      margin-top: 0.41rem;
    }

  }

  .van-collapse-item /deep/ .van-collapse-item__content {
    font-size: 0.26rem;
    /*line-height: 0.47rem;*/
    color: #666;
  }

  .van-collapse-item /deep/ .van-cell {
    padding: 0.2rem 0.3rem 0;
  }
</style>
