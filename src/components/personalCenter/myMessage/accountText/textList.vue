<template>
  <div>
    <div class="header" style="text-align: center">
      <van-nav-bar
        :title="title"
        left-arrow
        fixed
        @click-left="onClickLeft"
      >
      </van-nav-bar>
    </div>
    
    <div class="text" >
      <div class="list" v-for="(item,i) in list">
        <div class="left">
          <div class="top">
            <i class="iconfont icon-dian"></i>
            <span>{{item.title}}</span>
          </div>
          <div class='contain'>{{item.content}}</div>
          <div class="time">
            <p>{{item.createTime}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "textList",
    data() {
      return {
        title: '消息管理',
        list: []
      }
    },
    methods: {
      init(){
        var params = {
          page: this.page
        }
        this.$http.post('appServiceUser/listMessage', params).then(res=>{
          if (res.msg == "success") {
            this.list = res.data.rows
          }
        })
      },
      onClickLeft(){
          this.$router.back(-1)
      }
    },
    created(){
      this.init()
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";
  .text{
      padding: 0.45rem 0.3rem;
      padding-top: 0.92rem;
      .list {
        padding: 0.3rem 0;
        min-height: 1.7rem;
        overflow: auto;
        .bt();
        .left {
          display: block;
          width: 100%;
          .top {
            font-size: 0.3rem;
            min-height: 0.6rem;
            overflow: auto;
            line-height: 0.6rem;
            letter-spacing: 0.03rem;
            .iconfont {
              float: left;
              color: #00a62e;
              font-size: 0.4rem;
            }
          }
          .contain{
            line-height: 1.6;
            font-size: .28rem;
            padding: .1rem 0;
          }
          .time {
            padding-top: .1rem;
            font-size: 0.2rem;
            .hc();
          }
        }
        .right {
          float: right;
          .button();
          padding: 0.15rem 0.34rem;
          background-color: #e7e6ec;
          color: #646369;
          font-size: 0.22rem;
          border-radius: 0.3rem;
        }
      }
    }

</style>
<style>
    .header .van-hairline--bottom.van-nav-bar.van-nav-bar--fixed .van-ellipsis.van-nav-bar__title{
      text-align: center
    }
</style>