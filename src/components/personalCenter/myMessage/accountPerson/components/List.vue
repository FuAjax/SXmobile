<template>
  <div>
    <div class="list" v-for="(index,i) in List">
      <div class="left">
        <div class="name">
          <p>姓名：</p>
          <p>{{index.name}}</p>
        </div>
        <div class="phone">
          <p>手机号码：</p>
          <p>{{index.phone}}</p>
        </div>
        <div class="num">
          <p>身份证号：</p>
          <p>{{index.num}}</p>
        </div>
      </div>
      <div class="right">
        <p>修改</p>
        <span>删除</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "List",
    data() {
      return {
        List: [
          {
            name: "李丽丽",
            phone: "13265498713231",
            num: "231321654546132654654"
          },
          {
            name: "李丽丽",
            phone: "13265498713231",
            num: "231321654546132654654"
          },
          {
            name: "李丽丽",
            phone: "13265498713231",
            num: "231321654546132654654"
          },
          {
            name: "李丽丽",
            phone: "13265498713231",
            num: "231321654546132654654"
          },
          {
            name: "李丽丽",
            phone: "13265498713231",
            num: "231321654546132654654"
          },
          {
            name: "李丽丽",
            phone: "13265498713231",
            num: "231321654546132654654"
          },
        ]
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";

  .list {
    padding: 0.42rem 0.31rem;
    &:last-child{
      margin-bottom: 1rem;
    }
    .bt();
    min-height: 1rem;
    overflow: auto;
    padding-bottom: 0;
    .left {
      float: left;
      .name, .phone, .num {
        height: 0.68rem;

        p {
          float: left;
          font-size: 0.28rem;
          &:nth-child(1) {
            color: #6f6e73;
            width: 1.5rem;
            margin-right: 0.23rem;
          }
          &:nth-child(2) {
            color: #010103;
          }
        }
      }
    }
    .right {
      float: right;
      p {

        .button();
        background-color: #00b034;
        color: #fff;
        padding: 0.1rem 0.34rem;
        border-radius: 0.3rem;
        margin-bottom: 0.5rem;
      }
      span {
        .button();
        padding: 0.1rem 0.34rem;
        background-color: #e7e6ec;
        color: #65646a;
        border-radius: 0.3rem;
      }
    }
  }
</style>
