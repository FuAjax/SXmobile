<template>
  <div>
    <div class="total">
      <div class="top">
        <div class="year">
          <div class="header">
            <p>{{detail.rentingPrice}}万</p>
            <p>元/年</p>
          </div>
          <div class="bot">
            期望租金
          </div>
        </div>
        <div class="room">
          <div class="header">
            <p>{{detail.bedroom==null?0:detail.bedroom}}</p>
            <p>室</p>
            <p>{{ting}}</p>
            <p>厅</p>
          </div>
          <div class="bot">
            期望户型
          </div>
        </div>
        <div class="nian">
          <div class="header">
            <p>{{detail.rentingYears}}</p>
            <p>年</p>
          </div>
          <div class="bot">
            租赁年限
          </div>
        </div>
      </div>
      <div class="btnbox">
        <div class="btn" v-for="(index,i) in detail.characteristics" :key="i">{{index}}</div>
      </div>
    </div>
    <div class="blank"></div>
  </div>

</template>

<script>
  export default {
    name: "Time",
    props:{
      detail:{
        type:String,
        required:true
      }
    },
    data() {
      return {
        year: "2",
        shi: "4",
        ting: "2",
        mi: "160",
        nian: "20",
        btnList: [
          {name: "有山"},
          {name: "独立院落"},
          {name: "近高速"},
          {name: "可种菜"},
          {name: "养宠物"}
        ]
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../../style/public.less";

  .total {
    height: 1.9rem;
    padding: 0.41rem 0.3rem 0rem 0.18rem;
    .top {
      height: 1.11rem;
      display: flex;
      .bt();
      .year, .room, .meters, .nian {
        height: 0.8rem;
        border-right: 1px solid @bc;
        width: 25%;
        flex: 1;
        .header {
          height: 0.3rem;
          font-size: 0.24rem;
          justify-content: center;
          display: flex;
          p {
            color: @mr;
            float: left;

            &:nth-child(1) {
              font-size: 0.3rem;
            }
            &:nth-child(2) {
              margin-top: 0.08rem;
            }
          }
        }
        .bot {
          margin-top: 0.21rem;
          font-size: 0.26rem;
          color: #979797;
          text-align: center;
        }
      }
      .year {
        width: 27%;
      }
      .room {
        width: 25%;
        .header {
          p:nth-child(3) {
            font-size: 0.3rem;
          }
          p:nth-child(4) {
            margin-top: 0.08rem;
          }
        }
      }
      .meters {
        width: 32%;
      }
      .nian {
        width: 21%;
      }
    }
    .btnbox {
      margin-top: 0.2rem;
      .btn {
        float: left;
        border: 1px solid #00ae39;
        color: #00ae39;
        padding: 0.06rem 0.11rem;
        font-size: 0.22rem;
        text-align: center;
        line-height: 0.22rem;
        border-radius: 0.1rem;
        margin-right: 0.11rem;
        &:nth-child(2) {
          border: 1px solid #02a2f0;
          color: #02a2f0;
        }
        &:nth-child(3) {
          border: 1px solid #ff6204;
          color: #ff6204;
        }
        &:nth-child(4) {
          border: 1px solid #8c5896;
          color: #8c5896;
        }
        &:nth-child(5) {
          border: 1px solid #00a597;
          color: #00a597;
        }
      }
    }
  }

  .blank {
    .jg()
  }
</style>
