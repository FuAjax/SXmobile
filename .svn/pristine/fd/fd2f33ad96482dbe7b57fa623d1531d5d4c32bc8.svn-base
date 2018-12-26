<template>
  <div>
    <div class="headline">
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
      <div class="left">
        <div class="iconfont icon-yuyin-copy"></div>
        <p>语音输入</p>
      </div>
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
    <div class="blank"></div>
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
  .headline{
    padding: 0 0.3rem;
    .others{
      /*.van-field{*/
        /*min-height: 2.61rem;*/
      /*}*/
      .van-field/deep/.van-cell__value{
        .hc();
        font-size: 0.27rem;
      }
    }

  }
  .others:nth-child(1){
    .van-hairline--top-bottom:nth-child(1)::after{
      border: none!important;
    }

  }
  .left{
    padding: 0.16rem 0.3rem;
    background-color: #e7f7f4;
    color: #00ae3d;
    font-size: 0.25rem;
    width: 1.28rem;
    border-radius: 1.2rem;
    height: 0.3rem;
    margin-bottom: 0.31rem;
    div{
      float: left;
      margin-top: 0.05rem
    }
    p{
      float: left;
    }
  }

</style>
