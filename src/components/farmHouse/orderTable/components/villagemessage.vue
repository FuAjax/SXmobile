<template>
  <div>
    <div class="message">
      <div class="top">预约信息</div>
      <div class="content">
        <van-cell-group>
          <van-field
            v-model="username"
            required
            clearable
            label="用户名"
            placeholder="请输入用户名"
          />

          <van-field
            v-model="phone"
            required
            clearable
            label="手机号"
            placeholder="请输入手机号"
          />
        </van-cell-group>
        <div class="date" @click="dateShow()">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>期望看房日期</p>
          </div>
          <div class="middle">{{date}}</div>
          <div class="right">
            <div class="iconfont icon-gengduo1"></div>
          </div>
        </div>
        <div class="time" @click="timeShow()">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>期望看房时间</p>
          </div>
          <div class="middle">{{time}}</div>
          <div class="right">
            <div class="iconfont icon-gengduo1"></div>
          </div>
        </div>
        <div class="require">
          <div class="left">
            <!--<div class="iconfont icon-xingxing"></div>-->
            <p style="padding-left: 0.35rem">看房要求</p>
          </div>
          <div class="middle">
            <textarea name="" id="" cols="30" rows="3" placeholder="请输入要求"
                      style="border: none;line-height: 0.6rem;resize:none" v-model="introduct"></textarea>
          </div>
        </div>


      </div>

    </div>
    <div class="blank"></div>
    <!--<div class="agent">-->
    <!--<div class="top">经纪人</div>-->
    <!--<div class="content" v-for="(item,index) in rows">-->
    <!--<div class="left">-->
    <!--<img :src="item.headUrl" alt="">-->
    <!--</div>-->
    <!--<div class="middle">-->
    <!--<div class="name">{{item.accountRealname}}</div>-->
    <!--<div class="phone">{{item.accountPhone}}</div>-->
    <!--</div>-->
    <!--<div class="right">-->
    <!--<div class="iconfont icon-dianhua2"></div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--期望看房日期-->
    <van-popup
      v-model="showDate"
      position="bottom"
      :overlay="true">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        @confirm="confirmDate"
      />
    </van-popup>
    <!--期望看房时间-->
    <van-popup
      v-model="showTime"
      position="bottom"
      :overlay="true">
      <van-picker
        show-toolbar
        title=" "
        :columns="columns"
        @confirm="onConfirm"
      />
    </van-popup>

    <footer @click="order">
      <p>{{confirm}}</p>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "message",
    data() {
      return {
        minHour: 10,
        maxHour: 20,
        minDate: new Date(),
        maxDate: new Date(2019, 10, 1),
        currentDate: new Date(),
        username: "",
        id: '',
        phone: "",
        date: null,
        time: "",
        showDate: false,
        showTime: false,
        columns: ['全天可看', '上午（08：00-12:00）', '下午（12：00-18:00）'],
        url: "http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg",
        confirm: "确定预约",
        rows: [],
        introduct: '',
        faccountId: '',
        timeIndex: '',
        detail: ''
      };
    },
    methods: {
      dateShow() {
        this.showDate = true
      },
      cancel() {
        this.showDate = false;
        this.showTime = false;
      },
      confirmDate(value) {
        this.date = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate();
        this.showDate = false;
        this.showTime = false;
      },
      onConfirm(index, value) {
        this.timeIndex = value
        console.log(this.timeIndex);
        this.time = index
        this.showDate = false;
        this.showTime = false;
      },
      timeShow() {
        this.showTime = true
      },

      // 获取经纪人
      // init(){
      //   this.$http.post('appServiceFarmhouse/getAccountInfo').then(res=>{
      //     this.rows=res.data.rows
      //     console.log(this.rows);
      //     this.faccountId=res.data.rows.map((item)=>{
      //       return item.id
      //     })
      //   })
      //
      // },


      // 确定预约
      order() {
        var villageNumber = this.$route.params.id
        if (localStorage.getItem('userInfo')) {
          this.$http.post('appServiceFarmhouse/getVillageDetail', {villageNumber: villageNumber}).then(res => {
            console.log(res);
            this.detail = res.data.detail
            this.id = res.data.detail.id
            var userID = JSON.parse(localStorage.getItem('userInfo')).userId
            const params = {
              userRealname: this.username,
              userMoblie: this.phone,
              bespeakTimes: this.date,
              detailTime: this.timeIndex,
              bespeakRequire: this.introduct,
              fuserId: userID,
              ffarmhouseRentalsId: this.id,
            }
            var Name = /^(([a-zA-Z+\.?\·?a-zA-Z+]{2,30}$)|([\u4e00-\u9fa5+\·?\u4e00-\u9fa5+]{2,30}$))/;
            var Phone = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
            if (Name.test(this.username)) {
              if (Phone.test(this.phone)) {
                if (this.date) {
                  console.log(this.date);
                  if (this.timeIndex || this.timeIndex === 0) {
                    console.log(this.timeIndex);
                    this.$http.post('appServiceFarmhouse/addBespeak', params).then(res => {
                      if (res.info == '添加成功') {
                        this.$toast('预约成功')
                        this.$router.push({
                          name: 'rentList'
                        })
                      }

                    })

                  } else {
                    this.$toast('请选择看房时间段')
                    console.log(this.timeIndex)
                  }
                } else {
                  this.$toast('请选择看房日期')
                }
              } else {
                this.$toast("请输入正确手机号")
              }
            } else {
              this.$toast("请输入正确用户名")
            }


          })
        } else {
          this.$toast("登录之后可预约看房")
          setTimeout(() => {
            this.$router.push('/login')
          })
        }


      }
    },
    created: function () {
      this.date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";

  .blank {
    .jg();
  }

  .message {
    padding: 0.4rem 0.3rem;
    .top {
      height: 0.71rem;
      .bt();
      width: 100%;
      .tt();
    }
    .content {
      margin-top: 0.7rem;
      .name, .phone, .date, .time, .require {
        font-size: 0.26rem;
        color: #646466;
        min-height: 0.88rem;
        line-height: 0.88rem;
        .bt();
        .left {
          min-width: 1.79rem;
          float: left;
          p {
            float: left;
            &:nth-child(1) {
            }
          }
          .iconfont {
            float: left;
            .rc();
            margin-left: 0.09rem;
            font-size: 0.28rem;
            color: #f44;
          }
        }
        .middle {
          margin-left: 0.3rem;
          float: left;
        }
        .right {
          float: right;
          .iconfont {
            font-size: 0.3rem;
          }
        }
      }
      .require {
        min-height: 2.55rem;
        border: none;
      }
    }
  }

  .agent {
    margin-bottom: 1rem;
    min-height: 1.57rem;
    overflow: auto;
    padding: 0.4rem 0.5rem;
    .top {
      .tt();
      float: inherit;
      height: 0.71rem;
      width: 100%;
    }
    .content {
      margin-bottom: 0.2rem;
      padding-bottom: 0.2rem;
      .bt();
      height: 0.89rem;
      .left {
        width: 0.89rem;
        height: 0.89rem;
        float: left;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .middle {
        float: left;
        margin-left: 0.3rem;
        .name {
          .tt();
          font-size: 0.3rem;
          color: #37363b;
        }
        .phone {
          .hc();
          margin-top: 0.6rem;
          font-size: 0.22rem;
        }
      }
      .right {
        float: right;
        width: 0.86rem;
        height: 0.89rem;
        border-radius: 50%;
        background-color: #ebf8ee;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
        .iconfont {
          font-size: 0.44rem;
          font-weight: 600;
          color: #00b034;
        }
      }
    }
  }

  footer {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 1rem;
    width: 100%;
    background-color: @mr;
    p {
      font-size: 0.36rem;
      margin: 0 auto;
      color: #fff;
      line-height: 1rem;
      text-align: center;
    }
  }

</style>
