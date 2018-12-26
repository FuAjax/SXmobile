<template>
  <div id="farmhouseManage" class="farmhouseManage">
    <div class="head">
      <van-nav-bar :title='title'
        @click-left="back"
        @click-right="onClickRight"
        right-text="筛选"
        style="text-align: center"
        left-arrow>
      </van-nav-bar>
    </div>
	<div style="padding-top: .91rem;">
    <van-list
      v-model="loading"
      @load="init"
      :finished="finished"
      >
      <ul class="list" v-if="list.length > 0">
        <li v-for="(item,index) in list">
            <p class="top">
              {{item.updateTime}}
              <span>
                {{item.statusName}}
              </span>
            </p>
            <div class="center">
              <router-link :to="{name: 'rentDetail', params: {id: item.farmhouseRentalsNumber}}">
                <van-row gutter="10">
                  <van-col span="8" class="left">
                    <div style="position: relative">
                      <img :src="item.logoUrl" alt="">
                      <p class="van-ellipsis">编号{{item.farmhouseRentalsNumber}}</p>
                    </div>
                  </van-col>
                  <van-col span="16" class="right">
                    <p class="van-ellipsis">
                      {{item.farmhouseTitle}}
                    </p>
                    <p class="van-ellipsis">
                      {{item.detail}}
                    </p>
                    <p class="van-ellipsis">
                      <i class="iconfont icon-dizhi"></i>
                      {{item.address}}
                    </p>
                    <p v-if="item.rentingPrice === '面谈'">
                      {{item.rentingPrice}}
                    </p>
                    <p v-else>
                      <span>
                        ￥{{item.rentingPrice}}万元
                      </span>
                      /年
                    </p>
                  </van-col>
                </van-row>
              </router-link>
            </div>
            <!-- -1 审核未通过
                  0 待审核
                  1 待交易
                  2 已交易
                  -2 下架 -->
            <p class="bottom">
              <span class="edit" v-show="item.status == 1">编辑</span>
              <span v-show="item.status == 0 || item.status == 1 || item.status == -2" @click="delSellmyhouse(item.id, 1, index)">删除</span>
              <!-- <span class="setting" v-show="item.status == 1 || item.status == -2">交易设置</span> -->
              <span v-show="item.status == 1" @click="delSellmyhouse(item.id, 2, index)">下架</span>
              <!-- <span v-show="item.status == -2">上架</span> -->
            </p>
            <div class="separate"></div>
        </li>
      </ul>
      <template v-if="list.length == 0 && finished">
        <noList :detail='details'/>
      </template>
    </van-list>
	</div>

    <!--免费发布农房-->
    <!-- <div class="post">
      免费
      <p>
        发布农房
      </p>
    </div> -->

  
    <!--右侧弹出层-->
    <van-popup v-model="show"
      class="layer"
      :close-on-click-overlay=false
      position="right">
       <div class="container">
         <van-nav-bar
           title="筛选"
           left-arrow
           @click-left="onClickLeft"
         />
        <div class="common">
          <van-row gutter="10">
            <van-col span="8" class="left">标题搜索</van-col>
            <van-col span="16" class="right">
              <input type="text" v-model="value" placeholder="请输入标题搜索">
            </van-col>
          </van-row>
        </div>
         <div class="common">
           <van-row gutter="10">
            <van-col span="8" class="left">
              面积
            </van-col>
            <van-col span="16" class="right">
                <select v-model="areaNumber">
                  <template v-for="item in area">
                    <option :value="item.id">{{item.name}}</option>
                  </template>
                </select>
             </van-col>
           </van-row>
         </div>
         <div class="common">
           <van-row gutter="10">
             <van-col span="8" class="left">状态</van-col>
             <van-col span="16" class="right">
                <select v-model="statusType">
                  <template v-for="item in status">
                    <option :value="item.id">{{item.name}}</option>
                  </template>
                </select>
             </van-col>
           </van-row>
         </div>
         <div class="common">
           <van-row gutter="10">
             <van-col span="8" class="left">室数量</van-col>
             <van-col span="16" class="right">
                <select v-model="bedroomNumber">
                  <template v-for="(item, index) in bedroom">
                    <option :value="item.id">　{{item.name}} {{index!==0 ? '间':''}}</option>
                  </template>
                </select>
             </van-col> 
           </van-row>
         </div>
         <div class="common">
           <van-row gutter="6">
             <van-col span="8" class="left">更新时间</van-col>
             <van-col span="8" class="center"><button @click="timeshowClick(1)">{{startDate}}</button></van-col>
             <van-col span="8" class="center"><button @click="timeshowClick(2)">{{endDate}}</button></van-col>
           </van-row>
         </div>

         <div class="bottom">
            <button @click="init(value, 1)">搜索</button>
            <button style="background-color: #C4C4C6; margin-top: .2rem" @click="init(null,2)">清空筛选条件</button>
         </div>
       </div>
    </van-popup>


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
import { Dialog } from 'vant';
import noList from "../../common/noList";
    export default {
        name: "farmhouseManage",
        components: {
          noList
        },
        data() {
            return {
              details: '农房',
              show:false,
              timeshow: false,
              overlay: true,
              value:'',
              title: '我的农房',
              timetitle: '选择时间',
              list: [],
              status: [
                { id:	null, name: '全部' },
                { id:	1, name: '待交易' },
                { id:	2, name: '待审核' },
                { id:	3, name: '审核未通过' },
                { id:	4, name: '已下架' },
                { id:	5, name: '已交易' },
              ],
              bedroom: [
                { id:	null, name: '全部' },
                { id:	1, name: '1' },
                { id:	2, name: '2' },
                { id:	3, name: '3' },
                { id:	4, name: '4' },
                { id:	5, name: '5' },
                { id:	6, name: '6' },
              ],
              area: [
                { id:	null, name: '全部' },
                { id:	'0,100', name: '0-100平' },
                { id:	'100,300', name: '100-300平' },
                { id:	'300,500', name: '300-500平' },
                { id:	'500', name: '500平以上' },
              ],
              statusType: null,

              bedroomNumber: null,

              areaNumber: null,

              currentDatestart: new Date(),
              currentDate: new Date(),
              startDate: '选择开始时间',
              endDate: '选择结束时间',

              loading: false,
              finished: false,

              rows: 20,
              page: 1,

              timeType: 1
            }
        },
        methods: {
          back(){
            this.$router.back(-1)
          },
          onClickLeft(){
            this.show=false;
          },
          onClickRight(){
            this.show=true;
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
                this.endDate = '选择结束时间'
              } else {
                this.endDate = this.formatDate(Date.parse(new Date(value))).split(' ')[0]
              }
            }
            this.timeshow = false
          },
          init(info, clear){
            setTimeout(() => {
              var parmas = {  page:this.page,rows:this.rows }
              this.show=false

              // if(clear) {
                if(clear == 1){
                  this.page = 1
                  parmas.page = 1
                } else {
                  this.title = '我的农房'
                  this.statusType = null
                  this.bedroomNumber = null
                  this.areaNumber = null
                  this.startDate = '选择开始时间'
                  this.endDate = '选择结束时间'
                }
                if(this.statusType){
                  parmas.status = this.statusType
                }
                if(info && info !== ''){
                  this.page = 1
                  parmas.page = 1
                  parmas.farmInfo = info
                }
                if(this.bedroomNumber){
                  parmas.bedroomNumber = this.bedroomNumber
                }
                if(this.startDate !== '选择开始时间' && this.endDate !== '选择结束时间'){
                  parmas.startTime = this.startDate
                  parmas.endTime = this.endDate
                }
                if(this.areaNumber){
                  parmas.areaNumber = this.areaNumber
                }
                if(this.statusType || this.areaNumber || (this.startDate !== '选择开始时间' && this.endDate !== '选择结束时间') || this.bedroomNumber || (info && info !== '')){
                  this.title = '我的农房-查询结果'
                  this.page = 1
                  parmas.page = 1
                }
              // }
              if(clear == 2){
                parmas = {  page:this.page,rows:this.rows }
                this.value = ''
              }

              this.$http.post('appServiceUser/myfarmhouse',parmas).then(res=>{
                if(res.msg == 'success'){
                  this.loading = false;
                  if(this.page == 1){
                    this.list = res.data.rows
                  } else {
                    this.list = this.list.concat(res.data.rows)
                  }
                  this.total = res.data.total
                  this.page = this.page + 1
                  // 数据全部加载完成
                  if (this.list.length >= this.total || this.total == 0) {
                    this.finished = true;
                  }
                } else {
                  this.finished = true;
                }
			        }).catch(error=>{
				          this.finished = true;
              })
            }, 500);
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
          delSellmyhouse(id, type, index){
            var title = ''
            if(type == 1){
              title = '删除'
            } 
            if(type == 2){
              title = '下架'
            } 
            Dialog.confirm({
              title: title + '操作',
              message: '是否确认' + title + '选中的农房'
            }).then(() => {
              this.$http.post('appServiceUser/delSellmyhouse',{id,type}).then(res=>{
                if(res.msg == 'success'){
                  if(type == 1){
                    this.list.splice(index,1) 
                  }
                  if(type == 2){
                    this.list[index].status = 2
                  }
                }
              })
            }).catch(() => {
              // on cancel
            });
          }
        },
        computed: {},
        created: function () {
            
        },
        mounted: function () {

        },

    }
</script>
<style scoped lang="less" type="text/less">
  	.head{
  		position: fixed;
  		left: 0;
  		top: 0;
  		width: 100%;
  		z-index: 999;
    }
.van-ellipsis.van-nav-bar__title,.van-hairline--top-bottom.van-actionsheet__header{
  text-align: center
}
  .farmhouseManage{
    .list{
      li{
        padding: 0.2rem 0;
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
          // border-bottom: 0.01rem solid #e6e6e6;
          padding: 0.2rem 0;
          .left{
            img{
              display: block
            }
            height: 1.6rem;
            position: relative;
            p{
              position: absolute;
              width: 100%;
              height: 0.3rem;
              background-color: rgba(0, 0, 0, 0.5);
              bottom: 0;
              color: white;
              line-height: 0.3rem;
              text-indent: 0.2rem;
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
        .bottom{text-align: right;
          margin:0 0.2rem;
          padding: 0.2rem 0;
          span{
            display: inline-block;
            width: 1.25rem;
            height: 0.5rem;
            border: 0.01rem solid grey;
            text-align: center;
            line-height: 0.5rem;
            border-radius: 0.5rem;
          }
          .edit{
            border-color: #00a0e9;
            color:#00a0e9 ;
          }
          .setting{
            border-color: #00b230;
            color: #00b230 ;
          }
          .orang{
            border-color: #ff6500;
            color: #ff6500 ;
          }
        }
        .separate{
          height: 0.2rem;
          background-color: #f1f0f6;
        }
      }
    }

    .post{
      position: fixed;
      width: 1.13rem;
      height: 1.13rem;
      border-radius: 50%;
      background-color: #00b034;
      text-align: center;
      color: white;
      font-size: 0.24rem;
      padding-top: 0.2rem;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-box-shadow: 0 0 0.1rem #00b034;
      box-shadow: 0 0 0.1rem #00b034;
      bottom: 2rem;
      right: 0.3rem;
      p{
        font-size: 0.2rem;
      }
    }
  //弹出层
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
  }
</style>
<style>

  #farmhouseManage .van-hairline--bottom.van-nav-bar .van-ellipsis.van-nav-bar__title{
      text-align: center
  }
</style>
