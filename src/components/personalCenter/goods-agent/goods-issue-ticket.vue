<template>
  <div style="margin-bottom: 1rem;">
    <div class="topBar">
    <Header :title='title' />
    </div>
    <div style="width:100%; height:1.2rem;"></div>
    <div id="step1">
      <div class="list release">
        <h3 class="step2-title">基本信息</h3>
        <div class="bot">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>门票名称</p>
          </div>
          <div class="middle">
            <van-field v-model="ticketName" placeholder="请填写, 如标准间" />
          </div>
          <div class="right">
            <div class="iconfont"></div>
          </div>
        </div>
        <div class="bot bot11" @click="popShowClick(7)">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>门票类型</p>
          </div>
          <div class="middle" style="margin-top: 0">
            {{ticketTypeName || '请选择'}}
          </div>
          <div class="right">
            <div class="iconfont"></div>
          </div>
        </div>
        <div class="bot bot11">
          <div class="left" style="width: 1.9rem; margin-right: 0.13rem;">
            <div class="iconfont icon-xingxing"></div>
            <p>产品有效期</p>
          </div>
          <div class="middle">
            <div :class="periodType == 1?'ischeck btn checkbtn':'btn checkbtn'" @click="validity(1)">长期</div>
            <div :class="periodType == 2?'ischeck btn checkbtn':'btn checkbtn'" @click="validity(2)">指定日期</div>
          </div>
        </div>
        <div class="bot bot11" v-show="periodType == 2" @click="popShowClick(1)">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>开始日期</p>
          </div>
          <div class="middle" style="margin-top: 0">
            {{periodStart || '请选择'}}
          </div>
          <div class="right">
            <div class="iconfont"></div>
          </div>
        </div>
        <div class="bot bot11" v-show="periodType == 2" @click="popShowClick(2)">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>结束日期</p>
          </div>
          <div class="middle" style="margin-top: 0">
            {{periodEnd || '请选择'}}
          </div>
          <div class="right">
            <div class="iconfont"></div>
          </div>
        </div>
      </div>
      
      <div class="blank"></div>
      <div class="list release">
        <h3 class="step2-title" style="padding-top: .2rem">价格信息</h3>
        <div class="bot bot5">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>票面价</p>
          </div>
          <div class="middle">
            <van-field v-model="facePrice" type="number" placeholder="请填写" />
          </div>
          <div class="right">
            <p>元</p>
          </div>
        </div>
        <div class="bot bot5">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>费用包含</p>
          </div>
          <div class="middle">
            <van-field v-model="priceInclude" placeholder="请填写" />
          </div>
        </div>
        <div class="bot bot5">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>网络预订价</p>
          </div>
          <div class="middle">
            <van-field v-model="bookingPrice" placeholder="请填写" />
          </div>
          <div class="right">
            <p>元</p>
          </div>
        </div>
        
        <!-- <div class="bot bot11">
          <div class="left" style="width: 1.9rem; margin-right: 0.13rem;">
            <div class="iconfont icon-xingxing"></div>
            <p>支付方式</p>
          </div>
          <div class="middle">
            <div :class="isRent?'btn checkbtn':'ischeck btn checkbtn'" @click="rent(0)">在线支付</div>
            <div :class="isRent?'ischeck btn checkbtn':'btn checkbtn'" @click="rent(1)">到店支付</div>
          </div>
        </div> -->
      </div>
      <div class="blank"></div>
      <div class="list">
        <h3 class="step2-title" style="padding-top: .2rem">预订信息</h3>
        <div class="bot bot11">
          <div class="left" style="width: 1.9rem; margin-right: 0.13rem;">
            <div class="iconfont icon-xingxing"></div>
            <p>预订时间</p>
          </div>
          <div class="middle">
            <div :class="bookingType == 1 ?'ischeck btn checkbtn':'btn checkbtn'" @click="reserve(1)">指定时间</div>
            <div :class="bookingType == 2 ?'ischeck btn checkbtn':'btn checkbtn'" @click="reserve(2)">随时可订</div>
          </div>
        </div>
        <div class="bot bot11" v-if="bookingType == 1" @click="popShowClick(3)">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>预定提前时间</p>
          </div>
          <div class="middle" style="margin-top: 0">
            {{specificPoints ? '提前' + daysTime + '天' + specificPoints + '前预定' : '请选择'}}
          </div>
          <div class="right">
            <div class="iconfont"></div>
          </div>
        </div>
        <div class="use">
          <div class="top" style="padding-top: .2rem">
            <div class="iconfont icon-xingxing"></div>
            <p>退款政策</p>
          </div>
          <template v-if="checkUseShow">
            <div :class="abolitionRules == 1 ? 'ischeck btn' : 'btn'" @click="abolitionClick(1)">有条件退</div>
            <div :class="abolitionRules == 2 ? 'ischeck btn' : 'btn'" @click="abolitionClick(2)">随时退</div>
            <div :class="abolitionRules == 3 ? 'ischeck btn' : 'btn'" @click="abolitionClick(3)">不可退</div>
          </template>
        </div>
        <div class="bot bot11" v-if='abolitionRules == 1'  @click="popShowClick(4)">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>最晚取消</p>
          </div>
          <div class="middle" style="margin-top: 0">
            {{abolitionPoints ? '提前' + abolitionDays + '天' + abolitionPoints + '前取消' : '请选择'}}
          </div>
          <div class="right">
            <div class="iconfont"></div>
          </div>
        </div>
      </div>
      <div class="blank"></div>
      <div class="list">
        <h3 class="step2-title" style="padding-top: .2rem">使用信息</h3>
        <div class="bot bot11">
          <div class="left" style="width: 1.9rem; margin-right: 0.13rem;">
            <div class="iconfont icon-xingxing"></div>
            <p>是否换票</p>
          </div>
          <div class="middle">
            <div :class="isExchange == 1 ?'ischeck btn checkbtn':'btn checkbtn'" @click="isExchange = 1">需换票</div>
            <div :class="isExchange == 0 ?'ischeck btn checkbtn':'btn checkbtn'" @click="isExchange = 0">不需要</div>
          </div>
        </div>
        <div class="bot" v-show="isExchange == 1">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>取票地点</p>
          </div>
          <div class="middle">
            <van-field v-model="ticketPlace" placeholder="请填写" />
          </div>
          <div class="right">
            <div class="iconfont"></div>
          </div>
        </div>
         <div class="bot bot11" v-show="isExchange == 1" @click="popShowClick(5)">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>取票开始时间</p>
          </div>
          <div class="middle" style="margin-top: 0">
            {{ticketStart || '请选择'}}
          </div>
          <div class="right">
            <div class="iconfont"></div>
          </div>
        </div>
        <div class="bot bot11" v-show="isExchange == 1" @click="popShowClick(6)">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>取票结束时间</p>
          </div>
          <div class="middle" style="margin-top: 0">
            {{ticketEnd || '请选择'}}
          </div>
          <div class="right">
            <div class="iconfont"></div>
          </div>
        </div>
        <div class="others">
          <van-cell-group>
            <van-field
              v-model="usageMethod"
              label="使用方法"
              type="textarea"
              placeholder="请输入留言"
              rows="1"
              autosize
            />
          </van-cell-group>
        </div>
        <div class="others">
          <van-cell-group>
            <van-field
              v-model="additionalRemarks"
              label="补充说明"
              type="textarea"
              placeholder="请输入留言"
              rows="1"
              autosize
            />
          </van-cell-group>
        </div>
      </div>
    </div>

    <van-popup v-model="popShow" position="bottom" :close-on-click-overlay="false">
      <van-datetime-picker
        v-if="popType == 1"
        v-model="currentDate"
        type="date"
        :min-date="miniDate"
        @confirm="confirm"
        @cancel="cancel"
      />
      <van-datetime-picker
        v-if="popType == 2"
        v-model="endDate"
        type="date"
        :min-date="currentDate"
        @confirm="confirm"
        @cancel="cancel"
      />
      <div class="picker4-6" v-if="popType == 3">
        <div class="cell-title"><p class="confirm-icon" @click="confirmPop">确定</p><van-icon slot="right-icon" name="close" class="custom-icon close-icon" @click="cancel"/></div>
        <div class="columstab">请提前</div>
        <van-picker :columns="dayColums" @change="dayChange" />
        <div class="columstab">天</div>
        <van-picker :columns="hourColums" @change="hourChange" />
        <div class="columstab">:</div>
        <van-picker :columns="minColums" @change="minChange" />
        <div class="columstab">前预定</div>
      </div>
      <div class="picker4-6" v-if="popType == 4">
        <div class="cell-title"><p class="confirm-icon" @click="confirmPop">确定</p><van-icon slot="right-icon" name="close" class="custom-icon close-icon" @click="cancel"/></div>
        <div class="columstab">请提前</div>
        <van-picker :columns="dayColums1" @change="dayChange1" />
        <div class="columstab">天</div>
        <van-picker :columns="hourColums1" @change="hourChange1" />
        <div class="columstab">:</div>
        <van-picker :columns="minColums1" @change="minChange1" />
        <div class="columstab">取消</div>
      </div>
      <van-datetime-picker
        v-if="popType == 5"
        v-model="currentTime"
        type="time"
        @confirm="confirm"
        @cancel="cancel"
      />
      <van-datetime-picker
        v-if="popType == 6"
        v-model="currentTime"
        type="time"
        @confirm="confirm"
        @cancel="cancel"
      />
      <div v-if="popType == 7">
        <div class="cell-title"><p class="confirm-icon" @click="confirmPop">确定</p><van-icon slot="right-icon" name="close" class="custom-icon close-icon" @click="cancel"/></div>
        <van-picker :columns="colums" @change="columsChange" />
      </div>
    </van-popup>
    
    <button class="submit-btn" @click="submit">
      保存
    </button>
  </div>
</template>

<script>
  import Header from "../../common/header2"
  import getToken from '../../common/token'

  export default {
    name: "issueFarm",
    data() {
      return {
        isExchange: null,
        isLimit: false,
        isNumberLimit: false,
        step: 1,    // 第一页
        title: '添加门票',
        currentDate: new Date(),
        miniDate: new Date(),
        endDate: '',
        colums: [{values: ['特价票', '成人票', '学生票', '儿童票', '老人票', '套票', '团体票', '其他']}],
        dayColums: [{values: ['1', '2', '3', '4', '5', '6', '7']}],
        hourColums: [{values: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']}],
        minColums: [{values: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59']}],
        dayColums1: [{values: ['1', '2', '3', '4', '5', '6', '7']}],
        hourColums1: [{values: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']}],
        minColums1: [{values: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59']}],
        currentTime: '18:00',


        checkUseShow: true,
        chuangType: [],
        fangType: [],
        sheshi: [],
        imglist: [],
        img: '',



        // 保存\
        ticketName: '',
        periodType: '',
        costPrice: '',
        limitFix: '',
        usePeriodStart: '',
        usePeriodEnd: '',
        isBespoke: '',
        limitNumber: '',
        unuseTime:'',
        useTimeQuantum: '',
        scopeTrial: '',
        additionalRemarks: '',
        abolitionRules: null,
        bookingType: '',
        popShow: false,
        popType: 0,
        periodStart: '',
        periodEnd: '',
        voucherPrice: '',
        bespokeTime: '',
        ticketType: null,
        ticketTypeName: '',
        bookingPrice: '',
        facePrice: '',

        daysTime: null,
        specificPoints: null,
        abolitionDays: null,
        abolitionPoints: null,
        priceInclude: '',
        ticketPlace: '',
        ticketStart: '',
        ticketEnd: '',
        usageMethod: ''
      }
    },
    components: {
      Header
    },
    methods: {
      columsChange(picker, value, index){
        this.types = value[0]
        this.typesIndex = picker.getColumnIndex(0)
      },
      dayChange(picker, value, index){
        this.day = value
      },
      hourChange(picker, value, index){
        this.hour = value
      },
      minChange(picker, value, index){
        this.min = value
      },
      dayChange1(picker, value, index){
        this.day1 = value
      },
      hourChange1(picker, value, index){
        this.hour1 = value
      },
      minChange1(picker, value, index){
        this.min1 = value
      },
      confirmPop(){
        if(this.popType == 3){
          this.daysTime = this.day || this.dayColums[0].values[0]
          this.specificPoints = (this.hour || this.hourColums[0].values[0]) + ':' + (this.min || this.minColums[0].values[0])
        }
        if(this.popType == 4){
          this.abolitionDays = this.day1 || this.dayColums1[0].values[0]
          this.abolitionPoints = (this.hour1 || this.hourColums1[0].values[0]) + ':' + (this.min1 || this.minColums1[0].values[0])
        }
        if(this.popType == 7){
          this.ticketType = this.typesIndex || 0
          this.ticketTypeName = this.types || '特价票'
        }
        this.cancel()
      },
      validity(type){
        this.periodType = type
      },
      abolitionClick(type){
        this.abolitionRules = type
      },
      reserve(type){
        this.bookingType = type
      },
      bespoke(type){
        this.isBespoke = type
      },
      popShowClick(type){
        this.popShow = true
        this.popType = type
      },
      confirm(value){
        if(this.popType == 1){
          this.periodStart = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate();
        }
        if(this.popType == 2){
          this.periodEnd = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate();
        }
        if(this.popType == 5){
          this.ticketStart = value
        }
        if(this.popType == 6){
          this.ticketEnd = value
        }
        this.cancel()
      },
      cancel(){
        this.popShow = false
        this.popType = null
      },
      submit(){
        // businessId	商家id	number	
        // businessType	商家类别	number	
        // ticketName	门票名称	string	
        // ticketType	门票类型	string	
        // periodType	产品有效期	number	
        // periodEnd	有效期开始时间	string	
        // periodStart	有效期结束时间	string	
        // abolitionDays	取消提前天数	number	
        // abolitionPoints	取消提前天数时间点	string	
        // abolitionRules	取消规则	number	
        // bookingType	网络预约价	number	
        // daysTime	预定提前天数	number	
        // specificPoints	预定提前时间点	string	
        // isExchange	是否需要换票	number	
        // ticketPlace	换票地点	string	
        // ticketTime	换票时间	string	
        // additionalRemarks	补充说明	string	
        // bookingPrice	票面价	number	
        // facePrice	票面价	number	
        // priceInclude	费用包含	string	

        // usageMethod	使用方法	string	





        if(!this.ticketName){
          this.$toast('请填写门票名称')
          return false
        }
        if(!this.ticketType && this.ticketType !== 0){
          this.$toast('请选择门票类型')
          return false
        }
        if(!this.periodType){
          this.$toast('请选择产品有效期')
          return false
        }
        if(this.periodType == 2 && (!this.periodEnd || !this.periodStart)){
          this.$toast('请选择产品有效期期限')
          return false
        }
        if(!this.abolitionRules){
          this.$toast('请选择免费取消规则')
          return false
        }
        if(this.abolitionRules == 1 && (!this.abolitionDays || !this.abolitionPoints)){
          this.$toast('请选择取消条件')
          return false
        }
        if(!this.bookingType){
          this.$toast('请选择预定规则')
          return false
        }
        if(this.bookingType == 1 && (!this.daysTime || !this.specificPoints)){
          this.$toast('请选择预订条件')
          return false
        }

        if(!this.isExchange == 0 && !this.isExchange == 1){
          this.$toast('请选择是否换票')
          return false
        }
        if(!this.bookingPrice){
          this.$toast('请填写网上预订价')
          return false
        }
        if(!this.facePrice){
          this.$toast('请填写票面价')
          return false
        }
        if(!this.priceInclude){
          this.$toast('请填写费用包含')
          return false
        }
        if(!this.usageMethod){
          this.$toast('请填写使用方法')
          return false
        }
        
        
        var params = {
          businessId: this.id,
          businessType: 2,
          ticketName: this.ticketName,    //	房间名称	string
          ticketType: this.ticketType - 0 + 1,
          isExchange: this.isExchange,
          periodType: this.periodType,    //		产品有效期	number	1：长期有效 2：指定时间
          abolitionRules: this.abolitionRules,    //		免费取消规则	number	取消规则（1：有条件退，2：随时退，3：不可退）
          bookingType: this.bookingType,    //		预定规则	number	1：指定时间 2：随时可定
          facePrice: this.facePrice,
          bookingPrice: this.bookingPrice,
          priceInclude: this.priceInclude,
          usageMethod: this.usageMethod
        }
        

        if(params.isExchange == 1){
          if(this.ticketStart !== '' && this.ticketEnd !== ''){
            params.ticketTime = this.ticketStart + ',' + this.ticketEnd
          } else {
            this.$toast('请选择换票时间')
            return false
          }
          if(this.ticketPlace !== ''){
            params.ticketPlace = this.ticketPlace
          } else {
            this.$toast('请填写换票地址')
            return false
          }
        }
        if(params.periodType == 2){
          params.periodEnd = this.periodEnd    //		有效期结束时间	string	periodType为1时传入（YYYY-mm-dd）
          params.periodStart = this.periodStart    //		有效期开始时间	string	periodType为1时传入（YYYY-mm-dd）
        }
        if(params.abolitionRules == 1){
          params.abolitionDays = this.abolitionDays
          params.abolitionPoints = this.abolitionPoints
        }
        if(params.bookingType == 1){
          params.daysTime = this.daysTime
          params.specificPoints = this.specificPoints
        }
        if(this.additionalRemarks){
          params.additionalRemarks = this.additionalRemarks
        }
        if(this.unuseTime){
          params.unuseTime = this.unuseTime
        }
        if(this.useTimeQuantum){
          params.useTimeQuantum = this.useTimeQuantum
        }
        if(this.scopeTrial){
          params.scopeTrial = this.scopeTrial
        }
        
        

        this.$http.post('appServiceAccount/addTicket', params).then(
          res => {
            if (res.msg == 'success') {
              this.$toast(res.info)
              this.$router.back(-1) 
            }
          })
      }
    },
    created(){
      if(this.$route.query.id){
        this.id = this.$route.query.id
        // this.title = '修改住宿'
      }
      // this.init()
    },
    mounted(){
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../style/public.less";
  .submit-btn{
    width: 80%;
    height: .92rem;
    line-height: .92rem;
    text-align: center;
    background: #FF6400; color: #fff;
    border-radius: .05rem;
    display: block;
    margin: 0 auto;
    font-size: .32rem;
  }
  .picker4-6{
    width: 100%;
    text-align: center;
    font-size: 0;
    .van-picker{
      font-size: .28rem;
      width: 20%;
      vertical-align: middle;
      display: inline-block;
    }
    .columstab{
      display: inline-block;
      vertical-align: middle;
      font-size: .28rem;
    }
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
