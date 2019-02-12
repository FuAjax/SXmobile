<template>
  <div id="farmhouseManage" class="farmhouseManage">
    <div class="head">
      <van-nav-bar :title='title'
        @click-left="back"
        style="text-align: center" left-arrow>
        <div slot="right">
        </div>
      </van-nav-bar>
    </div>
    <div style="padding-top: .91rem">
        <van-tabs sticky v-model="active" animated @click="onClick">
            <van-list
            v-model="loading"
            :finished="finished"
            @load="init"
            >
                <div class="all">
                    <van-button :type="type == 1?'warning':'default'" @click="updateList(1)">上架中</van-button>
                    <van-button :type="type == 2?'warning':'default'" @click="updateList(2)">下架中</van-button>
                    <van-button style="float:right; margin-right: .3rem" type="primary" @click="add(active)">添加{{active == 0 ? '住宿' : active == 1 ? '美食' : '门票'}}</van-button>
                </div>
                <van-tab v-for="item in tabList" :title="item.name" @click="onClick">
                    <ul class="list" v-if="list.length > 0">
                    <li v-for="(item,index) in list">
                        <div class="center">
                            <van-row gutter="10">
                                <van-col span="24" class="right">
                                    <p class="van-ellipsis">
                                    {{item.roomName || item.voucherName || item.ticketName}} {{item.ticketType == 1 ? '[特价票]':item.ticketType == 2 ? '[成人票]':item.ticketType == 3 ? '[学生票]':item.ticketType == 4 ? '[儿童票]':item.ticketType == 5 ? '[老人票]':item.ticketType == 6 ? '[套票]':item.ticketType == 7 ? '[团体票]':item.ticketType == 8 ? '[其他]' : ''}}
                                    </p>
                                    <p class="van-ellipsis" v-if='active == 0'> 
                                        <span>
                                            {{item.bedType}} | {{item.breakfastNumber + '份早餐'}} | {{item.roomArea + 'm²'}}
                                        </span>
                                        <span style="float: right; color: #f00; font-size: .30rem">¥{{item.bookingPrice || item.voucherPrice}}元</span>
                                    </p>
                                    <p class="van-ellipsis" v-if='active == 1'> 
                                        <span>
                                            {{item.validityPeriod}}
                                        </span>
                                    <span style="float: right; color: #f00; font-size: .30rem">¥{{item.bookingPrice || item.voucherPrice}}元</span>
                                    </p>
                                    <p class="van-ellipsis" v-if='active == 2'> 
                                        <span>
                                            需{{(item.daysTime == 0 ? '游玩当' : '提前' + item.daysTime) + '天' + item.specificPoints + '前预订'}}
                                        </span>
                                    <span style="float: right; color: #f00; font-size: .30rem">¥{{item.bookingPrice}}元</span>
                                    </p>
                                    <p style="margin-bottom: 0">
                                        <span style="border: .01rem solid #44BB00; color: #44BB00; border-radius: .06rem; padding: .05rem .10rem">
                                            {{item.abolitionRules == 1 ? '有条件退' : item.abolitionRules == 2 ? '随时退' : item.abolitionRules == 3 ? '不可退' : ''}}
                                        </span>　
                                    </p>
                                </van-col>
                            </van-row>
                        </div>
                        <p class="bottom" v-if="type == 1">
                            <span class="edit" @click="update(item.id, index, 1)">下架</span>
                            <!-- <span>价格日历管理</span> -->
                            <!-- <span>编辑</span> -->
                        </p>
                        <p class="bottom" v-if="type == 2">
                            <span class="edit" @click="update(item.id, index, 2)">上架</span>
                            <!-- <span>价格日历管理</span> -->
                            <!-- <span>编辑</span> -->
                        </p>
                        <div class="separate"></div>
                    </li>
                    </ul>
                    <template v-if="list.length == 0 && finished">
                    <noList/>
                    </template>
                </van-tab>
            </van-list>
        </van-tabs>
        
    </div>
  </div>
</template>

<script>
import { Dialog, Search } from 'vant';
import noList from "../../common/noList";
  export default {
    name: "farmhouseManage",
    components: {
      noList
    },
    data() {
        return {
          title: '产品管理',
          finished: false,
          loading: false,
          page: 1,
          rows: 30,
          tabList: [
            {name: '住宿', index: 0, path: 'appServiceAccount/getStayroomProduct', type: 0},
            {name: '美食', index: 0, path: 'appServiceAccount/getVoucherProduct', type: 1},
            {name: '门票', index: 1, path: 'appServiceAccount/getTicketProduct', type: 2}
          ],
          actions: [
            {
              name: '产品管理'
            },
            {
              name: '添加产品',
            }
          ],
          active: 0,
          list: [],
          
          proShow: false,
          type: 1
        }
    },
    methods: {
        add(active){
            if(active == 0){
                this.$router.push({ name: 'goods-issue-stay', query: { id: this.id } })
            }
            if(active == 1){
                this.$router.push({ name: 'goods-issue-food', query: { id: this.id } })
            }
            if(active == 2){
                this.$router.push({ name: 'goods-issue-ticket', query: { id: this.id } })
            }
        },
        updateList(type){
            this.type = type
            this.page = 1
            this.init()
        },
        update(id, index, type){
          this.$http.post('appServiceAccount/updateProductIsSell', {productId: id, productType: this.active + 1, isSell: type == 1 ? 0 : 1}).then(res=>{
            if(res.msg=='success'){
              this.$toast(res.info);
              this.page = 1
              this.init()
            }
          })
        },
      del(id, index){
        Dialog.confirm({
          title: '删除操作',
          message: '是否确定从我的农庄列表删除该条数据'
        }).then(() => {
          this.$http.post('appServiceAccount/deleteFarmhouse', {id}).then(res=>{
            if(res.msg=='success'){
              this.list.splice(index, 1)
              this.$toast('删除成功');
            }
          })
        })
      },
      edit(id, index){
        this.$router.push({ name: 'IssueGrange-agent', query: { id } })
      },
      onConfirm(picker, values){
        this.cityName = values.name
        this.cityId = values.id
        this.page = 1
        this.init()
        this.onCancel()
      },
      onCancel(){
        this.cityShow = false
      },
      back(){
        this.$router.back(-1)
      },
      onClickLeft(){
        this.cityShow = true
      },
      onClickRight(){
        this.searchShow = true
      },
      onClick(index, title){
        this.page = 1
        this.loading = false
        this.finished = false
        this.show=false;
        this.list = []
      },
      beforeClose(action, done) {
        if (action === 'confirm') {
          if(this.info != ''){
            this.page = 1
            this.searchData.inputStr = this.info
            this.init()
          } else {
            this.$toast('搜索词不能为空');
          }
          setTimeout(done, 1000);
        } else {
          this.info = ''
          done();
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
            this.endDate = '选择结束时间'
          } else {
            this.endDate = this.formatDate(Date.parse(new Date(value))).split(' ')[0]
          }
        }
        this.timeshow = false
      },
      init(info, clear){
        var defaultParmas = { page: this.page, rows: this.rows, type: this.type, id: this.id }
        var parmas = Object.assign(defaultParmas)
        var path = this.tabList[this.active].path

        this.$http.post(path, parmas).then(res=>{
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
            this.activeIndex = null
          } else {
            this.finished = true;
          }
        }).catch(error=>{
            this.finished = true;
        })
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
    },
    computed: {},
    created: function () {
      if(this.$route.query.id){
        this.id = this.$route.query.id
      }
    },
    mounted: function () {}
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
  .all{
      width: 100%;
      padding: .2rem 0;
      text-align: center;
      button{
          line-height: 1.6;
          height: .6rem;
      }
  }
  .farmhouseManage{
    .list{
      li{
        padding: 0;
        .top{
          font-size: .26rem;
          margin:0 .3rem;
          border-bottom: 0.01rem solid #e6e6e6;
          padding: .2rem 0;
          span{
            float: right;
            color: red;
          }
        }
        .center{
          margin:0 .2rem;
          border-bottom: 0.01rem solid #e6e6e6;
          padding: .2rem 0;
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
              font-size: 0.3rem;
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
            padding: 0 .2rem;
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

  //条件
  .condition{
    position: relative;
    .top_tab{
      margin: 0 0.3rem;
      li{
        height: 0.85rem;
        float: left;
        width: 25%;
        font-size: 0.24rem;
        text-align: center;
        line-height: 0.85rem;
      }
    }
    .area{
      position: absolute;
      z-index: 999;
      top: 0.85rem;
      width: 100%;
      background-color: white;
      border-top:  0.01rem solid #e6e6e6;
      .regin{
        .left{
          width: 25%;
          float: left;
          font-size: 0.2rem;
          margin-left: 0.2rem;
          box-sizing: border-box;
          div{
            border-bottom: 0.01rem solid #e6e6e6;
            height: 0.8rem;
            text-align: center;
            line-height: 0.8rem;
          }
        }
        .right{
          background-color: #faf9ff;
          border-left: 0.01rem solid #e6e6e6;
          width: 72%;
          float: left;
        }
      }
      .group{
        background-color: white;
      }
      .season{
        position: relative;
        margin: 0 0.2rem;
        p{
          color: grey;
          margin: 0.2rem 0;
        }
        .content{
          border-bottom: 0.01rem solid #e5e5e5;
          padding-bottom: 0.2rem;
          margin-bottom: 0.2rem;
          span{
            display: inline-block;
            height: 0.55rem;
            padding: 0 0.2rem;
            border-radius: 0.55rem;
            background-color: #f1f0f6;
            text-align: center;
            line-height: 0.55rem;
            margin-right: 0.2rem;
            margin-top: 0.15rem;
          }
        }
        .bottom{
          width: 100%;
          margin-top: 1rem;
          span{
            display: inline-block;
            width: 49%;
            background-color: #fea541;
            color: white;
            height: 0.85rem;
            line-height: 0.85rem;
            vertical-align: middle;
            text-align: center;
          }
        }
      }
    }
    .van-tree-select__nitem--active{
      color: #ff6500;
    }
  }
    .condition-box{
      position: absolute;
      z-index: 999;
      background: #fff;
      top: 100%;
      border-top: #F4F4F4 .01rem solid;
      width: 100%;
      height: 4.5rem;
      font-size: 0;
      .van-tree-select__nav{
        height: 100%;
        width: 28%;
        display: inline-block;
        border-right: #F4F4F4 .01rem solid;
        box-sizing: border-box;
        position: relative;
        .van-tree-select__nitem{
          line-height: 1.6;
          padding: .2rem .1rem;
          font-size: .26rem;
          border-right: #F4F4F4 .01rem solid;
          box-sizing: border-box;
        }
      }
      .van-tree-select__nav-top .van-tree-select__nitem--active, .van-tree-select__nav-top .van-tree-select__nitem:active{
        color: #ff6500;
      }
      .btn-box{
        width: 100%;
        height: 1rem;
        font-size: 0;
        border-top: #F4F4F4 .01rem solid;
        border-bottom: #F4F4F4 .01rem solid;
        box-sizing: border-box
      }
      .condition-btn{
        width: 50%;
        height: 100%;
        display: inline-block;
        font-size: .3rem;
        line-height: 1rem;
        text-align: center
      }
      .condition-btn.active{
        background: #ff6500;
        color: #fff;
        margin-top: -.02rem;
      }
      .van-tree-more-tit{
        font-size: .3rem;
        padding-bottom: .1rem;
      }
      .van-tree-select-more{
        padding: 0 .15rem;
        box-sizing: border-box;
        .van-tree-select__nav{
          border: none
        }
        .tag-box{
          border-bottom: #F4F4F4 .01rem solid;
          padding-bottom: .15rem; 
          margin-bottom: .2rem;
        }
        .tag{
          padding: 0 .2rem;
          border-radius: .55rem;
          line-height: .55rem;
          margin-right: .1rem;
          margin-bottom: .1rem;
          background: #f1f0f6;
          display: inline-block;
          &.active{
            background: #ff6500;
            color: #fff
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