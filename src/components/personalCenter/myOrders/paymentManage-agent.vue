<template>
    <div class="myOrdersAll">
      <div class="head">
        <van-nav-bar title="在线买单查询"
          @click-left="back"
          left-arrow>
        </van-nav-bar>
      </div>
      <div style="padding-top: .91rem; overflow: hidden;">
        <van-tabs @click="onClick" v-model="currentIndex">
          <van-list
              v-model="loading"
              :finished="finished"
              @load="init"
              >
            <van-tab title="全部">
              <ul class="list" v-if="list.length > 0">
                <template v-for="(item, index) in list">
                  <li>
                    <p class="top clear" style="font-size: .3rem; color: #300004">
                      {{item.grangeName}}
                    </p>
                    <p class="top clear" style="padding: 0">{{item.time}}
                      <span style="color: #5f5f5f">{{item.payNumber}}</span>
                    </p>
                    <p class="top clear">
                      {{item.mobile}}　　{{item.payType == 1 ? '支付宝': '微信'}}　　{{item.payStatus == 0 ? '待支付':item.payStatus == 1 ? '已支付':item.payStatus == 0 ? '已取消':''}}
                      <span style="font-size: .3rem;">¥{{item.payPrice}}</span>
                    </p>
                  </li>
                  <div class="separate"></div>
                </template>
              </ul>
              <template v-if="list.length == 0 && finished">
                <noList :detail='details[currentIndex]'/>
              </template>
            </van-tab>
            <van-tab title="昨日">
              <ul class="list" v-if="list.length > 0">
                <template v-for="(item, index) in list">
                  <li>
                    <p class="top clear" style="font-size: .3rem; color: #300004">
                      {{item.grangeName}}
                    </p>
                    <p class="top clear" style="padding: 0">{{item.time}}
                      <span style="color: #5f5f5f">{{item.payNumber}}</span>
                    </p>
                    <p class="top clear">
                      {{item.mobile}}　　{{item.payType == 1 ? '支付宝': '微信'}}　　{{item.payStatus == 0 ? '待支付':item.payStatus == 1 ? '已支付':item.payStatus == 0 ? '已取消':''}}
                      <span style="font-size: .3rem;">¥{{item.payPrice}}</span>
                    </p>
                  </li>
                  <div class="separate"></div>
                </template>
              </ul>
              <template v-if="list.length == 0 && finished">
                <noList :detail='details[currentIndex]'/>
              </template>
            </van-tab>
            <van-tab title="今日">
              <ul class="list" v-if="list.length > 0">
                <template v-for="(item, index) in list">
                  <li>
                    <p class="top clear" style="font-size: .3rem; color: #300004">
                      {{item.grangeName}}
                    </p>
                    <p class="top clear" style="padding: 0">{{item.time}}
                      <span style="color: #5f5f5f">{{item.payNumber}}</span>
                    </p>
                    <p class="top clear">
                      {{item.mobile}}　　{{item.payType == 1 ? '支付宝': '微信'}}　　{{item.payStatus == 0 ? '待支付':item.payStatus == 1 ? '已支付':item.payStatus == 0 ? '已取消':''}}
                      <span style="font-size: .3rem;">¥{{item.payPrice}}</span>
                    </p>
                  </li>
                  <div class="separate"></div>
                </template>
              </ul>
              <template v-if="list.length == 0 && finished">
                <noList :detail='details[currentIndex]'/>
              </template>
            </van-tab>
            <!-- 待使用 -->
            <van-tab title="自定义时间">
              <div class="timeCoper">
                <button @click="timeshowClick(1)">{{startDate}}</button>　-　<button @click="timeshowClick(2)">{{endDate}}</button>　<button class='sub' @click="search"> 查询 </button>
              </div>
              <ul class="list" v-if="list.length > 0">
                <template v-for="(item, index) in list">
                  <li>
                    <p class="top clear" style="font-size: .3rem; color: #300004">
                      {{item.grangeName}}
                    </p>
                    <p class="top clear" style="padding: 0">{{item.time}}
                      <span style="color: #5f5f5f">{{item.payNumber}}</span>
                    </p>
                    <p class="top clear">
                      {{item.mobile}}　　{{item.payType == 1 ? '支付宝': '微信'}}　　{{item.payStatus == 0 ? '待支付':item.payStatus == 1 ? '已支付':item.payStatus == 0 ? '已取消':''}}
                      <span style="font-size: .3rem;">¥{{item.payPrice}}</span>
                    </p>
                  </li>
                  <div class="separate"></div>
                </template>
              </ul>
              <template v-if="list.length == 0 && finished">
                <noList :detail='details[currentIndex]'/>
              </template>
            </van-tab>
          </van-list>
        </van-tabs>
      </div>

      <van-actionsheet :overlay='overlay' v-model="timeshow" :title="timetitle" style="text-align: center">
        <van-datetime-picker
          v-show="timeType == 1"
          type="date"
          v-model="currentDatestart"
          @confirm='timeclose'
          @cancel='timeclose'
        />
        <van-datetime-picker
          v-show="timeType == 2"
          type="date"
          :min-date="currentDatestart"
          v-model="currentDate"
          @confirm='timeclose'
          @cancel='timeclose'
        />
      </van-actionsheet>
    </div>
</template>

<script>
import noList from "../../common/noList";
    export default {
        name: "myOrdersAll",
        components: {
          noList
        },
        data() {
          return {
            details: ['', '昨日', '今日', ''],
            currentIndex: 0,
            ticketValue:1,//门票计
            foodshow:false,//美食
            radio:"1",
            select: '',
            textarea: '',
            orderPrice:0,
            refundAmount:0,



	        	searchShow: false,
	        	rows: 20,
	        	page: 1,
	        	list: [],
	        	loading: false,
            finished: false,
            total: 1,
            orderStatus: 0,
            currentDate: new Date(),
            minDate: new Date(),
            searchData: {},

            timetitle: '选择时间',
            timeshow: false,
            overlay: true,
            value:'',

            timeType: 1,
            currentDatestart: new Date(),
            currentDate: new Date(),
            startDate: '开始时间',
            endDate: '结束时间',
          }
        },
        methods: {
          init(info, isclick, isSearch){
            let self = this;
            var parmas = {
              page: this.page,
              rows: this.rows
            }
            parmas.type = this.orderStatus
            if(this.startDate !== '开始时间' && this.endDate !== '结束时间'){
              parmas.beginDay = this.startDate
              parmas.endDay = this.endDate
            }
            this.$http.post('appServiceAccount/getPayList',parmas).then(res=>{
              if(res.msg == 'success'){
                if(isclick || isSearch){
                  this.list = res.data.rows
                } else {
                  this.list = this.list.concat(res.data.rows)
                }
                this.loading = false;
                this.total = res.data.total
                this.page = this.page + 1
                if(this.searchShow){
                  this.searchShow = false;
                }
                // 数据全部加载完成
                if (this.list.length == this.total || this.total == 0) {
                  this.finished = true;
                }
              }else {
                this.finished = true;
              }
            }).catch(error=>{
                this.finished = true;
            })
          },
          back(){
        	  this.$router.back(-1)
          },
          onClickLeft(){
             this.searchShow = false;
          },
          onClickRight(){
         	  this.searchShow=true;
          },
          cancel(orderId){//取消订单
            this.$http.post('appServiceOrder/readyCancelOrder',{orderId}).then(res=>{
              if(res.msg == 'success'){
                if(res.data.canCancel == 1){    // 可以取消
                  if(res.data.isDrawback == 1){
                    this.refundAmount = res.data.refundAmount
                    this.orderPrice = res.data.orderPrice
                    this.orderId = orderId
                  } else {
                    this.refundAmount = 0
                    this.orderPrice = 0
                  }
                } else {
                  this.$toast(res.data.reason);
                }
         	      this.foodshow=true;
              } else {
                this.$toast(res.info);
              }
            })
          },
          detail(type, id){
            if(type == 3){
              this.$router.push({name: 'tickettoUse', params: { id: id}})
            }
            if(type == 2){
              this.$router.push({name: 'inntoUse', params: { id: id}})
            }
            if(type == 1){
              this.$router.push({name: 'foodtoUse', params: { id: id}})
            }
          },
          onClick(index, title) {
            this.currentIndex = index
    		    this.page = 1
            this.loading = true
            this.finished = true
            this.list = []
            this.orderStatus = index
            if(index !== 3){
              this.init(index, true)
            } else {
              this.loading = false
            }
          },
          timeshowClick(o){
            this.timeshow = true
            this.timeType = o
            if(o==1){
              this.timetitle = '选择开始时间'
            } else {
              this.timetitle = '选择结束时间'
            }
          },
          timeclose(value){
            if(value){
              if(this.timeType == 1){
                this.startDate = this.formatDate(Date.parse(new Date(value))).split(' ')[0]
                this.endDate = '结束时间'
              } else {
                this.endDate = this.formatDate(Date.parse(new Date(value))).split(' ')[0]
              }
            }
            this.timeshow = false
          },
          formatDate(date){
              date = new Date(date);
              var y=date.getFullYear();
              var m=date.getMonth()+1;
              var d=date.getDate();
              var h=date.getHours();
              var m1=date.getMinutes();
              var s=date.getSeconds();
              h = h<10?("0"+h):h;
              m1 = m1<10?("0"+m1):m1;
              s = s<10?("0"+s):s;
              m = m<10?("0"+m):m;
              d = d<10?("0"+d):d;
              return y+"-"+m+"-"+d+" "+h+":"+m1
          },
        	search(){
            if(this.startDate !== '开始时间' && this.endDate !== '结束时间'){
              this.page = 1
              this.init()
            } else {
              this.$toast('请选择查询时间区间');
            }
          }
        },
        computed: {},
        created: function () {
          // this.init(null)
          if(this.$route.query.tab){
            this.currentIndex = this.$route.query.tab
          }
        },
        mounted: function () {},

    }
</script>
<style scoped lang="less" type="text/less">
  .myOrdersAll{
  	.head{
  		position: fixed;
  		left: 0;
  		top: 0;
  		width: 100%;
  		z-index: 999;
    }
    .allHead{
      padding: 0.2rem 0;
      li{
        width: 16%;
        float: left;
        text-align: center;
        position: relative;
        padding-bottom: 0.2rem;
        border-bottom: 0.01rem solid #ff6500;
        span{
          position: absolute;
          top: -0.15rem;
          width: 0.25rem;
          display: inline-block;
          height: 0.25rem;
          border-radius: 50%;
          border: 0.03rem solid red;
          color: red;
        }
      }

    }
    //列表
    .list{
      li{
      	box-sizing: border-box;
        padding: 0.2rem 0.3rem;
        .top{
          padding: 0.2rem 0;
        	font-size: .22rem;
          // border-bottom: 0.01rem solid #e6e6e6;
          color:#5f5f5f;
          span{
            color: #ff6500;
            float: right;
            font-size: .24rem;
          }
        }
        .imgcenter{
          padding: 0.2rem 0;
          border-bottom: 0.01rem solid #e6e6e6;
          .left{
            height: 1.6rem;
            div{
              background-size: cover!important;
              background-position: center center!important;
            }
          }
          .right{
            p:first-child{
              font-size: 0.32rem;
              font-weight: bold;
              color: black;
              span{
              	float: right;
              	color: #DC0000;
              	font-weight: 400;
              }
            }
            p{
              color: grey;
              font-size: .26rem;
              margin-bottom: 0.04rem;
            }
          }
        }
        .order{
          padding: 0.2rem 0;
          border-bottom: 0.01rem solid #e6e6e6;
          font-size: 0.26rem;
          p{
            float: right;
            color:#DC0000;
            span{
              color: grey;
            }
          }
        }
        .up{
          padding: 0.2rem 0;
          border-bottom: 0.01rem solid #e6e6e6;
          span{
            width: 1.7rem;
            height: 0.55rem;
            text-align: center;
            line-height: 0.55rem;
            border-radius:0.55rem;
            float: right;
            border: 0.01rem solid #e6e6e6;
            margin-right: 0.2rem;
          }
          .pay{
            background-color: #ff6500;
            color: white;
          }
          .fix{
            background-color: #06a3ea;
            color: white;
          }
          .evalute{
            background-color: #00b034;
            color: white;
          }
        }
      }
    }
    .timeCoper{
      width: 100%;
      text-align: center;
      padding: .2rem .3rem;
      box-sizing: border-box;
      button{
        min-width: 1.8rem;
        padding: .1rem .2rem;
        &.sub{
          width: 1.4rem;
          background: #FF6700;
          color: #fff;
          margin-left: .2rem;
        }
      }
    }
    .separate{
      height: 0.2rem;
      background-color: #f1f0f6;
    }



    .foodDialog{
      p{
        font-size: 0.28rem;
        margin-bottom: 0.2rem;
        &:nth-child(1){
          font-size: 0.32rem;
          text-align: center;
          margin-bottom: 0.1rem;
          line-height: 2;
          padding-top: .7rem;
        }
        &:nth-child(2){
          font-size: 0.32rem;
          text-align: center;
          margin-bottom: 0.1rem;
          line-height: 2;
          padding-bottom: 0.4rem;
        }
      }
      .wrap{
        margin: 0 0.6rem 0.6rem 0.6rem;
        .van-row{
          margin-bottom: 0.2rem;
          .left{
            color: grey;
          }
          .right{
            .num{
              color:red;
            }
            .choose{
              width: 100%;
              height: 0.6rem;
              border: 0.01rem solid #e5e5e5;
              select{
                border: none;
                width: 100%;
                height: 100%;
                outline: none;
                background-color: #f1f0f6;
              }
            }
          }
        }
        .textwrap{
          height: 1.85rem;
          border: 0.01rem solid #e5e5e5;
          border-radius: 0.12rem;
          overflow: hidden;
          textarea{
            width: 98%;
            height: 100%;
            border: none;
            background-color: #f1f0f6;
          }
        }

      }
    }
    .foodDialog /deep/ .van-radio{
      padding-bottom: 0.1rem;
    }
    .foodDialog /deep/ .van-dialog__cancel{
      background-color: #fea541;
      color: white;
    }
    .foodDialog /deep/ .van-dialog__confirm{
      background-color: #ff6400;
      color: white;
    }
  }
    .layer{
      .container{
        .common{
          margin: 0.2rem;
          .left{
            color: grey;
            font-size: 0.28rem;
            margin-top: 0.12rem;
          }
          .right{
            input{
              border: 0.01rem solid #e5e5e5;
              background-color: #f1f0f6;
              font-size: 0.28rem;
              width: 100%;
              vertical-align: middle;
              height: 0.7rem;
              padding-left: 0.3rem;
              box-sizing: border-box;
            }
            select{
              border: 0.01rem solid #e5e5e5;
              background-color: #f1f0f6;
              font-size: 0.28rem;
              width: 100%;
              vertical-align: middle;
              height: 0.7rem;
              padding-left: 0.3rem;
              box-sizing: border-box;
            }
          }
          .center{
            button{
              width: 100%;
              height: 0.7rem;
              font-size: 0.2rem;
              background-color: #f1f0f6;
            }
          }
        }
        .bottom{
          padding: 0.15rem;
          button{
            width: 100%;
            height: 0.8rem;
            line-height: 0.8rem;
            background-color: #ff6500;
            text-align: center;
            border-radius: 3px;
            color: white;
            font-size: 0.28rem;
          }
        }
      }
    }
</style>
<style>

  .myOrdersAll .van-nav-bar__title {
    text-align: center
  }
</style>
