<template>
  <div id="farmhouseDetail">
    <div class="topBar">
      <Header :title='title' :isback='true'/>
    </div>
    <div id="step2" style="padding-top: .92rem">
      <div class="list release">
        <div class="bot">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>客户姓名</p>
          </div>
          <div class="middle">
            <van-field v-model="userRealname" placeholder="请填写交易客户姓名" />
          </div>
        </div>
        <div class="bot">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>联系方式</p>
          </div>
          <div class="middle">
            <van-field type='number' v-model="userMobile" placeholder="请填写交易客户联系方式" />
          </div>
        </div>
        <div class="bot">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>价格</p>
          </div>
          <div class="middle">
            <van-field type='number' v-model="turnoverPrice" placeholder="请填写最终交易价格" />
          </div>
          <div class="right">
            万/年
          </div>
        </div>
        <div class="bot">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>出租年限</p>
          </div>
          <div class="middle">
            <van-field v-model="rentingYears" placeholder="请填写与客户签约的租赁年限 " />
          </div>
          <div class="right">
            年
            <div class="iconfont"></div>
          </div>
        </div> 
        <div class="bot" @click="showPop(5)">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>签约时间</p>
          </div>
          <div class="middle">
            {{turnoverTime || '请选择'}}
          </div>
          <div class="right">
            <div class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></div>
          </div>
        </div>
        
        <div class="use" style='padding-top: .3rem'>
          <div class="top">
            <div class="iconfont icon-xingxing"></div>
            <p>出租用途</p>
          </div>
          <div v-for="(item,index) in useList" :class="dealUser == item.name ? 'ischeck btn' : 'btn'" @click="checkUse(index, item)">{{item.name}}</div>
        </div>
        <div class="use" style='padding-top: .3rem'>
          <div class="top">
            <div class="iconfont icon-xingxing"></div>
            <p>出租方式</p>
          </div>
          <div v-for="(item, index) in rentTypeList" :class="dealType == item.name ? 'ischeck btn' : 'btn'" @click="checkRentType(index, item)">{{item.name}}</div>
        </div>
        <div class="use" style='padding-top: .3rem'>
          <div class="top">
            <div class="iconfont icon-xingxing"></div>
            <p>交易平台</p>
          </div>
          <div :class="dealPlat == 1 ? 'ischeck btn' : 'btn'" @click="checkPlat(1)">地呱呱</div>
          <div :class="dealPlat == 2 ? 'ischeck btn' : 'btn'" @click="checkPlat(2)">武汉三乡工程网</div>
          <div :class="dealPlat == 3 ? 'ischeck btn' : 'btn'" @click="checkPlat(3)">其他平台</div>
        </div>
      </div>
      <div class="others">
        <van-cell-group>
          <van-field
            v-model="otherInstruction"
            label="其他说明"
            type="textarea"
            placeholder="请输入留言"
            rows="1"
            autosize
          />
        </van-cell-group>
      </div>
      <div class="nextStep">
        <div @click="backStep1">取消</div>
        <div @click="submit">保存</div>
      </div>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        @confirm="confirm"
        @cancel="cancel"
      />
    </van-popup>
  </div>
</template>
<script>
  import Header from "../../common/header2"
  import util from "../../../utils/validate";
  export default {
    name: "detail",
    components: {
      Header
    },
    data() {
      return {
        title: '农房成交管理',
        dealType: 1, dealPlat: 0, dealUser: 0, show: false,
        userRealname: '',
        userMobile: '',
        turnoverPrice: '',
        turnoverTime: '',
        rentingYears: '',
        otherInstruction: '',
        rentTypeList: [],
        useList:[],
        currentDate:new Date(),
      }
    },
    methods: {
      init(id){
        this.$http.post('appServiceAccount/getTurnoverParameter').then(
        res => {
          if (res.msg == 'success') {
            this.rentTypeList = res.data.rentTypeList
            this.useList = res.data.useList
          }
        })
      },
      backStep1(){
        this.$router.back(-1)
      },
      showPop(){
        this.show = true
      },
      checkUse(index, item){
        if(item.name == this.dealUser){
          this.dealUser = 0
          return false
        }
        this.dealUser = item.name
      },
      checkRentType(index, item){
        if(item.name == this.dealType){
          this.dealType = 0
          return false
        }
        this.dealType = item.name        
      },
      checkPlat(index){
        if(index == this.dealPlat){
          this.dealPlat = 0
          return false
        }
        this.dealPlat = index
      },
      confirm(value){
        this.turnoverTime = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate();
        this.cancel()
      },
      cancel(){
        this.show = false
      },
      submit(){
        if(this.userRealname == ''){
          this.$toast("请填写客户姓名")
          return false
        }
        if(this.userMobile == '' || !util.isvalidPhone(this.userMobile)){
          this.$toast("请填写正确手机号")
          return false
        }
        if(this.turnoverPrice == ''){
          this.$toast("请填写交易价格")
          return false
        }
        if(this.rentingYears == ''){
          this.$toast("请填写出租年限格")
          return false
        }
        if(this.turnoverTime == ''){
          this.$toast("请选择交易时间")
          return false
        }
        if(this.dealUser == 0){
          this.$toast("请选择租赁用途")
          return false
        }
        if(this.dealType == 0){
          this.$toast("请选择租赁方式")
          return false
        }
        if(this.dealPlat == 0){
          this.$toast("请选择成交渠道")
          return false
        }
        var params = {
          farmhouseId: this.id,
          userRealname: this.userRealname,
          userMobile: this.userMobile,
          turnoverPrice: this.turnoverPrice,
          rentingYears: this.rentingYears,
          turnoverTime: this.turnoverTime,
          leasehold: this.dealUser,
          rentingStyle: this.dealType,
          transactionChannel: this.dealPlat == 1 ? "地呱呱" : this.dealPlat == 2 ? "武汉三乡工程网" : "其他平台"
        }
        if(this.otherInstruction == ''){
          params.otherInstruction = this.otherInstruction
        }
        this.$http.post('appServiceAccount/saveTurnover',params).then(res => {
          if (res.msg == 'success') {
            this.$toast("保存成功")
            setTimeout(()=>{
              this.$router.back(-1)
            }, 1000)
          }
        })
      }
    },
    computed: {},
    created: function () {
      this.id = this.$route.query.id;
      this.init(this.id)
    },
    mounted: function () {}
  }
</script>
<style scoped lang="less" type="text/less">
  @import "../../../style/public.less";
  
  .blank {
    .jg();
  }
  #step1,
  #step2{
    font-size: .28rem;
    padding-bottom: 2rem;
  }
  #step2 .step2-title{
    font-size: .32rem;
    font-weight: 600;
    padding: 0 .3rem .3rem .3rem;
    box-sizing: border-box;
    border-bottom: .02rem solid #e6e6eb;
  }
  .btnOne{
    border-radius: 1.2rem;
    width: inherit;
    padding: 0.15rem 0.35rem;
  }
  .position-columns{
    font-size: 0;
    width: 100%;
    .van-picker{
      font-size: .28rem;
      display: inline-block;
      width: 33.3333%
    }
  }
  .spot-columns.position-columns{
    .van-picker{
      font-size: .28rem;
      display: inline-block;
      width: 50%
    }
  }
  .position-columns.fivColumns {
    .van-picker{
      font-size: .28rem;
      display: inline-block;
      width: 20%!important
    }
  }
  .blank{
    width: 100%;
    height: .2rem;
    background: #F0F0F5
  }
  .use{
    .btn.ischeck{
      .button();
    }
  }
  .cell-title{
    padding: .3rem;
  }
  .confirm-icon{
    color: #3979F5;
    font-size: .3rem;
    float: right;
  }
  .close-icon{
    display: inline-block;
    font-size: .4rem;
    color: #bababc
  }
  .btn.checkbtn{
    // font-size: 0.24rem!important;
  }
  .others{
    // padding-bottom: 1rem;
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
  } 
  .picture{
    padding: 0.43rem 0.3rem 0rem 0.3rem;
    .external,.interior,.rim,.video{
      .bt();
      margin-bottom: 0.27rem;
      padding-bottom: 0.29rem;
      .top{
        height: 0.46rem;
        .iconfont{
          float: left;
          .rc();
          font-size: 0.12rem;
          margin-top: 0.05rem;
        }
        p{
          font-size: 0.27rem;
          color: #343436;
        }
      }
      .imgbox{
        padding: 0; margin: 0;
        .img{
          .jz();
          width: 1.56rem;
          height: 1.6rem;
          border: 1px solid #dddce2;
          background-color: #faf9ff;
          border-radius: 0.1rem;
          .iconfont{
            font-size: 0.88rem;
            color: #b6b5bb;
          }
        }
      }
      .bot{
        font-size: 0.21rem;
        .fc();
        letter-spacing: 0.03rem;
        margin-top: 0.3rem;
      }
    }
    .video{
      margin-bottom: 0;
      border: none;
    }
  }
  
  .map{
    &>div:nth-child(1){
      height: 1rem;
      line-height: 1rem;
      input{
        border: 0.03rem solid #e5e5e5;
        height: 0.6rem;
        padding-left: 0.2rem;
        width: 4rem;
      }
    }
    #l-map{
      width: 100%;
      height: 300px;
    }
    .location{
      p{
        display: inline-block;
        font-size: 0.32rem;
        margin-right: 0.2rem;
      }
      margin-bottom: 0.4rem;
    }
  }
  //图片信息
  .imgInfor{
    margin: 0 0.3rem;
    font-size: 0.28rem;
    &>div{
      padding: 0.1rem 0;
      border-bottom: 0.01rem #e6e6e6 solid;
    }
    .projectimg{
      .buttonimg{
        margin-top: 0rem;
        margin-bottom: 0.3rem;
        font-size: 0;
        div{
          width: 1.5rem;
          height: 1.5rem;
          border: 0.01rem solid #e5e5e5;
          display: inline-block;
          position: relative;
          margin-right: 0.22rem;
          margin-bottom: 0.22rem;
          img{
            width: 100%;
            height: 100%;
          }
          i{
            position: absolute;
            font-size: 0.4rem;
            top: -0.2rem;
            right: -0.2rem;
          }
        }
        div:nth-of-type(4n){
          margin-right: 0
        }
        span{
          display: inline-block;
          width: 1.5rem;
          height: 1.5rem;
          background: url("../../../assets/button.png") center center no-repeat;
          background-size: cover;
          border: 0.01rem solid #e5e5e5;
          position: relative;
          vertical-align: top;
          input{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            outline: transparent;
            opacity: 0;
          }
        }
      }
      p{
        color: #ff6500;
        font-size: .21rem;
      }
    }
    .projectimg /deep/ .van-cell:not(:last-child)::after{
      border: none;
    }
  }
  .nextStep {
    background-color: @mr;
    .jz();
    font-size: 0.35rem;
    color: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1rem;    z-index: 99;
    line-height: 1rem;
    text-align: center;
    div{
    text-align: center;
      width: 50%;
      display: inline-block;
      height: 100%;
    }
    div:nth-of-type(1){
      background: #E7E6EC;
      color: #757575;
    }
  }
  .upload{
    p{
      font-size: 0.24rem;
    }
    .buttonimg{
      margin-top: 0.2rem;
      div{
        width: 1.58rem;
        height: 1.58rem;
        border: 0.01rem solid #e5e5e5;
        display: inline-block;
        position: relative;
        img{
          width: 100%;
          height: 100%;
        }
        i{
          position: absolute;
          width: 100%;
          display: inline-block;
          height: 0.5rem;
          background-color: rgba(0, 0, 0, 0.5);
          bottom: 0;
          text-align: center;
          line-height: 0.5rem;
          color: white;
        }
      }
      span{
        display: inline-block;
        border-radius: .06rem;
        width: 1.58rem;
        height: 1.58rem;
        background: url("../../../assets/button.png") center center no-repeat;
        background-size: cover;
        border: 0.01rem solid #e5e5e5;
        position: relative;
        vertical-align: top;
        input{
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          outline: transparent;
          opacity: 0;
        }
      }
    }
  }
</style>

<style>
  #step1 .bot .van-cell,
  #step2 .bot .van-cell{
    padding: 0
  }
  #step1 #tangram-suggestion--TANGRAM__1g-main.tangram-suggestion-main{
    text-align: left!important
  }
  #step2 .other-characteristic{
    width: 100%;
    /* min-height: 2rem; */
  }
  #step2 .other-characteristic textarea{
    min-height: 2rem
  }
  #step2 .other-characteristic .van-cell.van-hairline.van-field,.van-cell__value{
    overflow: hidden;
  }
  .list.release .van-cell.van-hairline.van-field{
    padding: 0;
    height: .38rem;
    line-height: .36rem;
  }
  .list.release .van-cell.van-hairline.van-field input{
    font-size: 0.26rem;
  }
  .middleR textarea{
    height: auto;min-height: 2rem;
  } 
</style>
