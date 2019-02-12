<template>
    <div class="myOrdersAll">
      <div class="head">
        <van-nav-bar title="看房记录详情"
          @click-left="back"
          left-arrow>
        </van-nav-bar>
      </div>
      <div style="overflow: hidden;">
        <ul>
          <li>
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
                    可租{{item.farmhouseYear}}年{{'/' + item.farmhouseFloor}}层{{'/' + item.farmhouseBedroom}}室{{'/' + item.farmhouseArea}}平
                    <span v-if="item.farmhouseYear">¥{{item.farmhouseYear}}万元/年</span>
                  </p>
                  <p class="van-ellipsis">
                    {{item.farmhouseAreaName}}-{{item.farmhouseStreetName}}　　{{item.farmhouseLandspaceName}}
                  </p>
                  <p class="van-ellipsis">
                    {{item.farmhouseCharacteristics}}
                  </p>
                </van-col>
              </van-row>
            </div>
          </li>
        </ul>
        <div class="separate"></div>
        
      <div class="list release">
        <div class="bot bot10">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>客户姓名</p>
          </div>
          <div class="middle lotaMiddle">
            <van-field :readonly=readonly v-model="linkMan" :value="linkMan" placeholder="请填写" />
          </div>
          <div class="right">
            <div :class="linksex == 0?'btn checkbtn':'ischeck btn checkbtn'" @click="sex(1)">先生</div>
            <div :class="linksex == 1?'btn checkbtn':'ischeck btn checkbtn'" @click="sex(0)">女士</div>
          </div>
        </div>
        <div class="bot">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>客户电话</p>
          </div>
          <div class="middle">
            <van-field :readonly=readonly v-model="linkphone" :value="linkphone" type="number" placeholder="请填写" />
          </div>
          <div class="right">
            <div class="iconfont"></div>
          </div>
        </div>
        <div class="bot">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>客户年龄</p>
          </div>
          <div class="middle">
            <van-field :readonly=readonly v-model="linkage" :value="linkage" type="number" placeholder="请填写" />
          </div>
          <div class="right">
            岁
          </div>
        </div>
        <div class="bot">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>实际看房日期</p>
          </div>
          <div class="middle" @click="getTime()">
            {{time||'请选择'}}
          </div>
        </div>
        <div class="bot">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>租赁用途</p>
          </div>
          <div class="middle">
            <van-field :readonly=readonly v-model="linkuse" :value="linkuse" placeholder="请填写" />
          </div>
          <div class="right"></div>
        </div>
        <div class="bot">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>价格预期</p>
          </div>
          <div class="middle">
            <van-field :readonly=readonly v-model="linkmoney" :value="linkmoney" type="number" placeholder="请填写" />
          </div>
          <div class="right">
            万/年
          </div>
        </div>
        <div class="bot">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>租赁年限</p>
          </div>
          <div class="middle">
            <van-field :readonly=readonly v-model="linkyear" :value="linkyear" type="number" placeholder="请填写" />
          </div>
          <div class="right">
            年
          </div>
        </div>
        <div class="others">
          <i class="iconfont icon-xingxing" style="color: #E81210"></i>
          <van-field :readonly=readonly
            v-model="otherInstruction" :value="otherInstruction"
            label="详细说明"
            type="textarea"
            placeholder="请输入留言"
            rows="3"
            autosize
          />
        </div>
        <div v-if="item.type == 2" class="btn-submit" @click="submit()">保存</div>
      </div>
    </div>
    <van-actionsheet v-model="timeShow">
      <van-datetime-picker
        type="date"
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
            timeShow: false,
            currentDate: new Date(),
            item: {},
            linkuse: '',
            linksex: 0,
            linkMan: '',
            linkphone: '',
            linkage: '',
            linkmoney: '',
            linkyear: '',
            otherInstruction: '',
            time: '',
            readonly: false
          }
        },
        methods: {
          init(id){
            this.$http.post('appServiceAccount/getBespeak',{id}).then(res=>{
              if(res.msg == 'success'){
                this.item = res.data
                this.linkMan = res.data.userName
                this.linkphone = res.data.userMoblie
                if(res.data.type == 1){          // 已带看
                  this.getBeseak(id)
                  this.readonly = true
                }
              }
            })
          },
          getBeseak(id){
            this.$http.post('appServiceAccount/getBespeakRemember',{id}).then(res=>{
              if(res.msg == 'success'){
                this.otherInstruction = res.data.bespeakRequire
                this.time = res.data.day
                this.linkmoney = res.data.price
                this.linkuse = res.data.use
                this.linkage = res.data.userAge
                this.linkphone = res.data.userMoblie
                this.linkMan = res.data.userName
                this.linksex = res.data.userSex
                this.linkyear = res.data.year
              }
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
          sex(type){
            if(this.item.type == 2){
              this.linksex = type
            }
          },
          timeclose(value){
            if(value){
              this.time = this.formatDate(Date.parse(new Date(value))).split(' ')[0]
            }
            this.timeShow = false
          },
          getTime(){
            if(this.item.type == 2){
              this.timeShow = true
            }
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
          submit(){
            if(this.linkMan == ''){
              this.$toast('请填写用户真实姓名');
              return false;
            }
            if(this.linkphone == ''){
              this.$toast('请填写用户联系电话');
              return false;
            }
            if(this.linksex == ''){
              this.$toast('请选择客户性别');
              return false;
            }
            if(this.linkage == ''){
              this.$toast('请填写客户年龄');
              return false;
            }
            if(this.time == ''){
              this.$toast('请选择看房日期');
              return false;
            }
            if(this.linkuse == ''){
              this.$toast('请填写租赁用途');
              return false;
            }
            if(this.linkmoney == ''){
              this.$toast('请填写预期价格');
              return false;
            }
            if(this.linkyear == ''){
              this.$toast('请填写租赁年限');
              return false;
            }
            if(this.otherInstruction == ''){
              this.$toast('请填写详细说明');
              return false;
            }
            
            var params = {
              bespeakId: this.id,
              userName: this.linkMan,
              userMoblie: this.linkphone,
              day: this.time,
              userSex: this.linksex,
              userAge: this.linkage,
              use: this.linkuse,
              price: this.linkmoney,
              year: this.linkyear,
              bespeakRequire: this.otherInstruction,
            }

            this.$http.post('appServiceAccount/saveBespeakRemember', params).then(res=>{
              if(res.msg == 'success'){
                this.$toast(res.info);
                setTimeout(() => {
                  this.back()
                }, 1000);
              }
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
            this.init(this.$route.query.id)
          }
        },
        mounted: function () {},

    }
</script>
<style scoped lang="less" type="text/less">
  @import "../../../style/public.less";
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
  .list {
    font-size: .28rem;
    padding: 0 0.3rem;
    .use {
      overflow: hidden;
      .bt();
      .top {
        height: 0.58rem;
        .iconfont {
          .xx()
        }
        p {
          font-size: 0.26rem;
          color: #2b2b2d;
          float: left;
        }
      }
      .btn {
        float: left;
        margin-right: 0.19rem;
        background-color: #e7e6ec;
        color: #757575;
        padding: 0.15rem 0.35rem;
        border-radius: 0.3rem;
        margin-bottom: 0.3rem;
      }
    }
    .bot {
      line-height: 0.38rem;
      overflow: hidden;
      padding: 0.3rem 0;
      .bt();
      .left {
        float: left;
        width: 1.8rem;
        margin-right: 0.23rem;
        .iconfont {
          .xx();
        }
        p {
          font-size: 0.26rem;
          color: #2b2b2d;
          float: left;
        }
      }
      .middle {
          min-width: 4rem;
        &.lotaMiddle{
          width: 2rem!important;
          min-width: 2rem;
        }
        p{
          color: #757575;
        }
        float: left;
        font-size: 0.26rem;
        .hc();
      }
      .right {
        float: right;
        .iconfont {
          line-height: 0.38rem;
          font-size: 0.3rem;
          color: #bababc;
        }
      }
      .middleR{
        padding-left: 2.23rem;
        textarea{
          height: auto;min-height: 2rem;
        }
      }
    }
    .bot4{
      .left{
        p{
          // margin-left: 0.26rem;
        }
      }
    }
    .bot5, .bot6 {
      .right {
        p {
          font-size: 0.26rem;
        }
      }
    }
    .bot9 {
      .right {
        font-size: 0.26rem;
      }
    }
    .bot10 {
      .right {
        margin-top: -0.1rem;
        .btn {
          float: left;
          border-radius: 1.2rem 0 0 1.2rem;
          height: 0.6rem;
          line-height: 0.6rem;
          padding: 0 .24rem;
          text-align: center;
          transform: translateY(.04rem);
          background-color: #e7e6ec;
          color: #757575;
          &:nth-child(2){
            background-color: #e7e6ec;
            border-radius:  0 1.2rem 1.2rem  0 ;
            .hc();
          }
        }
      }
    }
    .ischeck{
      background-color: #ff6400!important;
      color: #fff!important;
    }
    .bot11{
      .middle{
        margin-top: -0.1rem;
        .btn {
          font-size: .24rem;
          float: left;
          border-radius: 1.2rem 0 0 1.2rem;
          padding: 0 .2rem;
          height: 0.6rem;
          line-height: 0.6rem;
          text-align: center;
            background-color: #e7e6ec;
          transform: translateY(.04rem);
          &:nth-child(2){
            border-radius:  0 1.2rem 1.2rem  0 ;
            background-color: #e7e6ec;
            .hc();
          }
        }
      }
    }
    .btn-submit{
      width: 100%;
      line-height: .92rem;
      font-size: .32rem;
      background: #FF6400;
      text-align: center;
      border-radius: .06rem;
      color: #fff;
      margin-top: .6rem;
    }
  }
</style>
<style> 
  .myOrdersAll  .other-characteristic textarea{
    min-height: 2rem
  }
  .myOrdersAll .list.release .van-cell.van-hairline.van-field{
    padding: 0;
    height: .38rem;
    line-height: .36rem;
  }
  .myOrdersAll .list.release .van-cell.van-hairline.van-field input{
    font-size: 0.26rem;
  }
  .myOrdersAll .list .others{
    padding: .3rem 0;
    padding-left: .2rem;
    box-sizing: border-box;
    position: relative;
  }
  .myOrdersAll .list .others i{
    position: absolute;
    top: .35rem;
    left: 0;
  }
  .myOrdersAll .list .others .van-field__body,.myOrdersAll .list .others .van-cell.van-hairline.van-field,
  .myOrdersAll .list .others .van-cell__value{
    overflow: hidden;height: auto;
    min-height: 2rem
  }
  .myOrdersAll .list textarea.van-field__control{
    height: auto;min-height: 2rem;
  } 
  .myOrdersAll .van-nav-bar__title {
    text-align: center
  }
</style>