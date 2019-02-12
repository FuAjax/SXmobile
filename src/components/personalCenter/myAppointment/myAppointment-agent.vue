<template>
    <div class="myOrdersAll">
      <div class="head">
        <van-nav-bar title="预约看房"
          @click-left="back"
          left-arrow>
        </van-nav-bar>
      </div>
      <div style="overflow: hidden;">
        <van-tabs @click="onClick" v-model="currentIndex">
          <van-list
              v-model="loading"
              :finished="finished"
              @load="init"
              >
            <van-tab title="全部">
              <ul class="list" v-if="list.length > 0">
                <li v-for="(item, index) in list">
                  <div class="center">
                    <van-row gutter="10">
                      <van-col span="8" class="left">
                        <div style="width: 100%; position: relative;">
                          <img :src=item.farmhouseLogo alt="">
                          <p>{{item.type == 1 ? '已带看' : '未带看'}}</p>
                        </div>
                      </van-col>
                      <van-col span="16" class="right">
                        <p class="van-ellipsis" style="font-size: .3rem">
                          {{item.farmhouseTitle}}
                        </p>
                        <p class="van-ellipsis">
                          {{item.userName}}　{{item.userMoblie}}
                        </p>
                        <p class="van-ellipsis">
                          {{item.day}}　{{item.time}}
                        </p>
                      </van-col>
                    </van-row>
                  </div>
                  <p class="bottom">
                    NO.{{item.farmhouseNumber}}
                    <span class="aspan">
                      <span @click="detail(item.id, index, 1)">预约详情</span>
                      <span @click="detail(item.id, index, 2)" v-if="item.type == 2">看房记录</span>
                      <span @click="detail(item.id, index, 3)" v-else>添加看房记录</span>
                    </span>
                  </p>
                  <div class="separate"></div>
                </li>
              </ul>
              <template v-if="list.length == 0 && finished">
                <noList :detail='details[currentIndex]'/>
              </template>
            </van-tab>
            <van-tab title="已带看">
              <ul class="list" v-if="list.length > 0">
                <li v-for="(item, index) in list">
                  <div class="center">
                    <van-row gutter="10">
                      <van-col span="8" class="left">
                        <div style="width: 100%; position: relative;">
                          <img :src=item.farmhouseLogo alt="">
                          <p>{{item.type == 1 ? '已带看' : '未带看'}}</p>
                        </div>
                      </van-col>
                      <van-col span="16" class="right">
                        <p class="van-ellipsis" style="font-size: .3rem">
                          {{item.farmhouseTitle}}
                        </p>
                        <p class="van-ellipsis">
                          {{item.userName}}　{{item.userMoblie}}
                        </p>
                        <p class="van-ellipsis">
                          {{item.day}}　{{item.time}}
                        </p>
                      </van-col>
                    </van-row>
                  </div>
                  <p class="bottom">
                    NO.{{item.farmhouseNumber}}
                    <span class="aspan">
                      <span @click="detail(item.id, index, 1)">预约详情</span>
                      <span @click="detail(item.id, index, 2)" v-if="item.type == 2">看房记录</span>
                      <span @click="detail(item.id, index, 3)" v-else>添加看房记录</span>
                    </span>
                  </p>
                  <div class="separate"></div>
                </li>
              </ul>
              <template v-if="list.length == 0 && finished">
                <noList :detail='details[currentIndex]'/>
              </template>
            </van-tab>
            <van-tab title="未带看">
              <ul class="list" v-if="list.length > 0">
                <li v-for="(item, index) in list">
                  <div class="center">
                    <van-row gutter="10">
                      <van-col span="8" class="left">
                        <div style="width: 100%; position: relative;">
                          <img :src=item.farmhouseLogo alt="">
                          <p>{{item.type == 1 ? '已带看' : '未带看'}}</p>
                        </div>
                      </van-col>
                      <van-col span="16" class="right">
                        <p class="van-ellipsis" style="font-size: .3rem">
                          {{item.farmhouseTitle}}
                        </p>
                        <p class="van-ellipsis">
                          {{item.userName}}　{{item.userMoblie}}
                        </p>
                        <p class="van-ellipsis">
                          {{item.day}}　{{item.time}}
                        </p>
                      </van-col>
                    </van-row>
                  </div>
                  <p class="bottom">
                    NO.{{item.farmhouseNumber}}
                    <span class="aspan">
                      <span @click="detail(item.id, index, 1)">预约详情</span>
                      <span @click="detail(item.id, index, 2)" v-if="item.type == 2">看房记录</span>
                      <span @click="detail(item.id, index, 3)" v-else>添加看房记录</span>
                    </span>
                  </p>
                  <div class="separate"></div>
                </li>
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
            details: ['', '已带看', '未带看', ''],
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
            this.$http.post('appServiceAccount/getBespeakList',parmas).then(res=>{
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
          },
          detail(id, index, type){
            if(type == 1){
              this.$router.push({name: 'myAppointmentDetail-agent', query: { id: id}})
            }
          }
        },
        computed: {},
        created: function () {
          // this.init(null)
          if(this.$route.query.tab){
            this.currentIndex = this.$route.query.tab - 1
            this.orderStatus = this.$route.query.tab - 1
          }
        },
        mounted: function () {},

    }
</script>
<style scoped lang="less" type="text/less">
    .list{
      li{
        padding: 0.2rem 0 0;
        .top{
          margin:0 0.2rem;
          border-bottom: 0.01rem solid #e6e6e6;
          padding: 0.2rem 0;
          span{
            float: right;
            color: red;
          }
        }
        .center{
          margin:0 0.2rem;
          border-bottom: 0.01rem solid #e6e6e6;
          padding: 0 0 0.2rem;
          .left{
            height: 1.6rem;
            p{
              position: absolute;
              width: 100%;
              height: 0.4rem;
              background-color: rgba(0, 0, 0, 0.5);
              bottom: 0;
              color: white;
              line-height: 0.4rem;
              text-indent: 0.2rem;
              text-align: center
            }
            img{
              display: block;
            }
          }
          .right{
            p:first-child{
              color: black;
              font-size: 0.24rem;
            }
            p{
              color: grey;
              margin-bottom: 0.15rem;
            }
            p:nth-child(4){
              span{
                font-size: 0.24rem;
                color: red;
              }
            }
          }
        }
        .people{
          margin:0 0.2rem;
          border-bottom: 0.01rem solid #e6e6e6;
          padding: 0.2rem 0;
          img{
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            vertical-align: middle;
          }
          span{
            width: 1.2rem;
            height: 0.4rem;
            background-color:#fff1e8;
            display: inline-block;
            border-radius: 0.4rem;
            text-align: center;
            line-height: 0.4rem;
            vertical-align: middle;
            color: #ff6c1a;
          }
          i{
            color: #01b436;
          }
        }
        .bottom{
          margin:0 0.2rem;
          padding: 0.2rem 0;
          position: relative;
          .aspan{
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -0.25rem;
            span{
              display: inline-block;
              padding: 0 .2rem;
              box-sizing: border-box;
              min-width: 1.25rem;
              height: 0.5rem;
              border: 0.01rem solid grey;
              text-align: center;
              line-height: 0.5rem;
              border-radius: 0.5rem;
            }
          }
        }
        .separate{
          height: 0.28rem;
          background-color: #f1f0f6;
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
  }
</style>

<style>
  .myOrdersAll .van-hairline--bottom.van-nav-bar .van-ellipsis.van-nav-bar__title{
      text-align: center
  }
</style>
