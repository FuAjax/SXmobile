<template>
  <div id="ticketbook" class="ticketBook">
    <div class="topBar">
      <Header :title='title' :color='color'/>
    </div>
    <div style="width:100%; height:.92rem;"></div>
    <router-link :to="info.businessType==1?{name:'scenicDetail', params: {id: info.businessNumber}}:{name:'grangedetail', params: {id: info.businessNumber}}" tag="div" class="detail" style="background: #FF6400">
      <img src="./../../../assets/ticket-Bg.png" alt="">
      <div>
        <h3>{{info.businessName}}</h3>
        <p>{{info.ticketName}}</p>
      </div>
    </router-link>
    <div class="item">
      <div class="separate"></div>
      <div class="date">
        <van-cell-group>
          <van-field
            readonly
            v-model="userTime"
            clearable
            label="使用日期"
            placeholder="请选择出行日期"
            @click="showpopup"
          />
        </van-cell-group>
      </div>
      <div class="mount">
        <span>购买数量</span>
        <van-stepper class="pp" v-model="value" />
      </div>
      <div class="separate"></div>
      <div class="verify">
        <span>
        预订信息
        </span>
        需填1位，用于入园验证
      </div>
      <div class="nameadd" v-if="friends.length>0">
        <span v-if="checkchange" v-for="(item, index) in friends" :style="'background:#' + (check[index] ? 'FF6500; color: #fff' : 'E6E6E6; color: #808080') + ';'" @click="checkFriend(index)">{{item.contactName}}</span>
        <!-- <span @click="add">新增</span> -->
      </div>
      <van-cell-group class="floatL">
        <van-field
          v-model="username"
          @blur="blur"
          label="预订人"
          placeholder="请输入用户名"
        />
        <van-field
          v-model="phone"
          @blur="blur"
          label="手机"
          placeholder="请输入手机号"
        />
        <!-- <van-field
          v-model="ID"
          label="身份证"
          placeholder="请输入用户名"
        /> -->
      </van-cell-group>
      <div class="agreement">
        <van-checkbox v-model="checked">我同意该协议</van-checkbox>
      </div>
    </div>

    <!--底部-->
    <div class="bottom clear" style="position: fixed; bottom: 0; left: 0; font-size: .26rem; color: #606063;background-color: white">
      <div>
        <span>总价</span>
        <span class="price">￥<span style="font-size: .3rem;">{{price * value}}</span> 元</span>
      </div>
      <p>
        <button @click="detail" style="color: #606063">明细 <i class="iconfont icon-shangsanjiaoxiangshangmianxing"></i></button>
        <span v-if="checked && value>0 && username !== '' && phone.length == 11 && userTime" @click="submit">
          提交订单
        </span>
        <span v-else style="background: #B2B2B2">
          提交订单
        </span>
      </p>
    </div>

    <!--日期-->
    <van-popup v-model="show" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        @confirm="confirm"
        @cancel="cancel"
      />
    </van-popup>

    <!--明细-->
    <van-popup v-model="show2" position="bottom">
      <div style="line-height: .8rem; fon-size: .26rem; padding: 0 .2rem; box-sizing: border-box;color: #1e1e1e;background-color: #e3e3e4;">价格明细</div>
      <div style="line-height: .8rem; fon-size: .26rem; padding: 0 .2rem; box-sizing: border-box;color: #1e1e1e;">
        <p style="float: left">门票</p>
        <p style="float: right">{{price}}元 * {{value}}张</p>
      </div>
    </van-popup>

    <!--新增联系人-->
    <van-dialog
      v-model="showadd"
      show-cancel-button
      :before-close="beforeClose"
      title="新增">
      <van-field
        v-model="username"
        label="姓名"
        placeholder="请输入您的真实姓名"
      />
      <van-field
        v-model="idCard"
        type="password"
        label="证件号"
        placeholder="请输入您的身份证号"
      />
      <van-field
        v-model="mobile"
        label="手机号"
        placeholder="请输入手机号"
      />
    </van-dialog>
  </div>
</template>

<script>
    import Header from "../../common/header2"
    export default {
        name: "ticketBook",
        components:{
            Header
        },
        data() {
          return {
            title: '创建订单',
            isback: true,
            color: '#FF6400',
            info: {},
            friends: [], //好友
            check: [],
            ID: '', // 身份证
            userTime: null, // 使用时间
            price: 0,// 价格
            checked: false, // 同意协议

            mobile: '', // 手机号
            idCard: '', // idCard
            username:'', // 新增游客
            value:1,
            show:false,
            currentDate:new Date(),
            minDate:new Date(),
            show2:false,
            phone:'',
            useid:'',
            showadd:false,
            password:'',
            checkIndex: null,
            checkchange: true
          }
        },
        methods: {
          init(){
            var id = this.$route.params.id
            this.id = id
            this.$http.post('/appServiceOrder/ticket/writeinformation',{productId: id}).then(res=>{
              if(res.msg == "success"){
                this.info = res.data
                this.queryGeneralContact()
                this.queryTicketPrice()
              }
            })
          },
          queryGeneralContact(){
            this.$http.post('/appServiceOrder/queryGeneralContact').then(res=>{
              if(res.msg == "success"){
                this.friends = res.data
                this.check = []
                for(var i = 0; i < res.data.length; i++){
                  this.check.push(false)
                }
              }
            })
          },
          queryTicketPrice(){
            this.$http.post('/appServiceOrder/queryTicketPrice',
              {productId: this.id,
                useTime: this.userTime || new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()}).then(res=>{
              if(res.msg == "success"){
                this.price = res.data.price
              }
            })
          },
          checkFriend(index){
            this.checkIndex = index + 1
            for(var i = 0; i < this.friends.length; i++){
              this.check[i] = false
              if(i == index){
               this.check[i] = true
               this.username = this.friends[i].contactName
               this.phone = this.friends[i].contactMobile
              }
            }
          },
          showpopup(){
            this.show=true;
          },
          confirm(value){
            this.userTime = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate();
            this.show = false;
            this.queryTicketPrice()
          },
          cancel(){
            this.show = false;
          },
          detail(){
            this.show2 = true;
          },
          add(){//新增联系人
            this.showadd=true;
          },
          beforeClose(action, done) {
            if (action === 'confirm') {
              setTimeout(done, 1000);
            } else {
              done();
            }
          },
          submit(){
            if(this.value>0){
              if(this.userTime){
                if(this.phone.length == 11){
                  if(this.username !== ''){
                    const params = {
                      buyNumber: this.value,//	购买数量	string
                      useTime: this.userTime,//	使用时间	string
                      occupantMobile: this.phone,//	联系人手机号	string
                      occupantName: this.username,//	联系人姓名	string
                      productId: this.id,//	门票id	number
                    }
                    this.$http.post('/appServiceOrder/submitAdvanceOrder/ticket',params).then(res=>{
                      if(res.msg == "success"){
                        if(this.$proType == 1){
                          window.open('https://m.3xgc.com/#/payment/' + 1 + '/' + res.data.orderId + '?userId=' + JSON.parse(localStorage.getItem('userInfo')).userId, '_self')
                          return false
                        }
                        this.$router.push({ name: 'payment', params: { id: res.data.orderId, type: 1 }})
                      }
                    })
                  } else {
                    this.$toast("请填写预订人")
                  }
                } else {
                  this.$toast("请填写正确手机号")
                }
              } else {
                this.$toast("请选择出行日期")
              }
            } else {
              this.$toast("购买数量不能小于1")
            }
          },
          blur(){
            if(this.checkIndex){
              var check = this.check
              if(this.username == this.friends[this.checkIndex-1].contactName && this.phone == this.friends[this.checkIndex-1].contactMobile) {
                for(var i = 0; i < this.friends.length; i++){
                  check[i] = false
                }
                check[this.checkIndex-1] = true
              } else {
                for(var i = 0; i < this.friends.length; i++){
                  check[i] = false
                }
              }
              this.checkchange = false
              this.$nextTick(()=>{
                this.check = check
                this.checkchange = true
              })
            }
          }
        },
        computed: {},
        created: function () {
          this.init()
        },
        mounted: function () {
        }
    }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../style/public.less";
  .ticketBook{
    .detail{
      padding: 0 0 .3rem;
      position: relative;
      width: 100%;
      height: 3rem;
      img{
        width: 100%;
        position: absolute;
        height: 3rem;
      }
      div{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 1.3rem .5rem;
        line-height: 2;
        h3{
          font-size: .3rem;
        }
        p{
          font-size: .26rem;
          color: #2c2c22
        }
      }
    }
    .separate{
      height: 0.2rem;
      background-color: #f1f0f6;
    }
    .date{
      margin: 0;
      border-bottom: 0.01rem #e6e6e6 solid;
    }
    .mount{
      margin: 0 0.3rem;
      padding: 0.2rem 0;
      font-size: 0.28rem;
      color: #58585B;
      overflow: hidden;
      span{
        line-height: .5rem;
        display: inline-block;
      }
      .pp{
        margin-left: 0.8rem;
        float: right;
      }
    }
    .verify{
      padding: 0.2rem;
      color: grey;
      span{
        font-size: 0.28rem;
        font-weight: bold;
        color: black;
      }
    }
    .nameadd{
      margin: 0 0.2rem;
      padding: 0.2rem 0;
      border-bottom: 0.01rem solid #e6e6e6;
      span{
        margin-right: .2rem;
        display: inline-block;
        min-width: 1.5rem;
        height:0.5rem;
        background-color: #bdbdbd;
        border-radius: 0.5rem;
        text-align: center;
        line-height: 0.5rem;
        color: 808080;
      }
      // span:last-child{
      //   border-radius: 0.5rem;
      //   color: grey;
      // }
    }
    //尾部
    .bottom{
      width: 100%;
      box-shadow: .02rem 0 .06rem #e6e6e6;
      div{
        float: left;
        height: 1rem;
        line-height: 1rem;
        padding-left: 0.2rem;
        .price{
          color: red;
        }
      }
      p{
        float: right;
        span{
          display: inline-block;
          width: 3.04rem;
          height:1rem;
          background-color: #ff6500;
          text-align: center;
          line-height: 1rem;
          color: white;
          font-size: 0.26rem;
        }
        button{
          background-color: white;
        }
      }
    }
    .agreement{
      padding: .2rem .3rem;
      box-sizing: border-box;
      color: #58585B
    }
  }
</style>
<style lang="less" type="text/less">
#ticketbook{
   .van-hairline--bottom::after{
    border-bottom-width: 0
  }
  .van-cell-group.van-hairline--top-bottom{
    .van-field__control,.van-field__control span{
      text-align: right;
      font-size: .26rem;
    }
  }
  .item{
    padding-bottom: 1rem;
    .van-cell__title,.mount{
      span{
        font-size: .26rem!important;
        color: #58585B;
        font-weight:normal!important;
      }
    }
    .floatL {
      .van-field__control{
        text-align: left;
      }
    }
  }
}
</style>
