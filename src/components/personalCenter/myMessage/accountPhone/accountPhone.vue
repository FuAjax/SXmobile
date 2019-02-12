<template>
  <div>
    <Header :title="title" :isback="true"/>
    <div style="padding-top: .92rem">
      <div v-if="step===1">
        <Top/>
      </div>
      <div v-if="step==2">
        <Top1/>
      </div>
      <div v-if="step==3">
        <Top2/>
      </div>
      <div v-if="step===1">
        <div class="password">
          <div class="before">
            <input class="all" v-model="mobile" placeholder="请输入待解绑手机号">
          </div>
          <div class="before">
            <input v-model="code" placeholder="请输入验证码">
            <div class="warn  warn2" @click="getCode">
              <p>{{auth_time == 120 ? "获取验证码" : auth_time + 's后重发'}}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="step===2">
        <div class="password">
          <div class="before">
            <input class="all" v-model="mobile" placeholder="请输入待绑定手机号">
          </div>
          <div class="before" v-if="!userInfo.mobile">
            <input class="all" v-model="password" placeholder="请输入登录密码">
          </div>
          <div class="before">
            <input v-model="code" placeholder="请输入验证码">
            <div class="warn  warn2" @click="getCode">
              <p>{{auth_time == 120 ? "获取验证码" : auth_time + 's后重发'}}</p>
            </div>
          </div>
        </div>
      </div>
      <div style="padding-bottom: .2rem" v-if="step===3">
        <img :src="url" alt="">
        <div class="bot" style="text-align: center">
          <p>恭喜您</p><br>
        </div>
        <div class="bot" style="text-align: center">
          <span>成功绑定手机：{{mobile}}</span>
        </div>
      </div>
      <div>
        <div class="amend" @click="next(step)">
          <p>{{step===1?'下一步':step===2?'确认绑定':'完成'}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "../../../common/Header2";
  import util from "../../../../utils/validate";
  import Top from "./components/top"
  import Top1 from "./components/top2"
  import Top2 from "./components/top3"
  import url from "../../../../assets/images/phone.png"
  let auth_timetimer
  export default {
    name: "accountPhone",
    data() {
      return {
        url,
        title: '更换手机号',
        mobile: '',
        code: '',
        password:'',
        auth_time: 120,

        step: 1,
      }
    },
    components: {
      Top,Top1,Top2,
      Header
    },
    created(){
      this.init()
    },
    methods: {
      init(){
        this.$http.post("appServiceUser/baseInfo").then(res => {
          if (res.msg == "success") {
            this.userInfo = res.data
          }
        });
      },
      next(step){
        if(step == 1){            // 解绑
          if(this.mobile !== '' && util.isvalidPhone(this.mobile)){
            if(this.mobile == this.userInfo.mobile){
              if(this.code !== ''){
                clearInterval(auth_timetimer);
                this.$http.post("appServiceUser/testMobile", {code: this.code,mobile: this.mobile}).then(res => {
                  this.$toast(res.info);
                  if (res.msg == "success") {
                    this.isCode = false
                    this.step = 2
                    this.mobile = ''
                    this.code = ''
                    this.auth_time = 120
                  }
                });
              } else {
                this.$toast('请填写验证码');
              }
            } else {
              this.$toast('填入手机号与账号绑定手机号不一致');
            }
          } else {
            this.$toast('请输入正确手机号');
          }
        }
        
        if(step == 2){            // 绑定
          if(this.mobile !== '' && util.isvalidPhone(this.mobile)){
            if(this.code !== ''){
              const params = {code: this.code,mobile: this.mobile}
              if(!this.userInfo.mobile){
                if(this.password !== ''){
                  params.password = this.password
                } else {
                  this.$toast('请填写登录密码');
                  return false
                }
              }
              clearInterval(auth_timetimer);
              this.$http.post("appServiceUser/bindMobile", params).then(res => {
                this.$toast(res.info);
                if (res.msg == "success") {
                  this.step = 3
                }
              });
            } else {
              this.$toast('请填写验证码');
            }
          } else {
            this.$toast('请输入正确手机号');
          }
        }
        
        if(step == 3){            // 绑定成功
          this.$router.back(-1)
        }
      },
      getCode(){
        if(!this.isCode){
          if(this.mobile !== '' && util.isvalidPhone(this.mobile)){
            this.sendCode()
            this.isCode = true
            this.$http.post('appServiceSso/sendCode',{mobile:this.mobile}).then(
              res=>{
                if(res.msg=='success'){
                  this.$toast('验证码发送成功')
                }else{
                  this.$toast(res.info)
                }
              }
            ).catch(error=>{
              this.$toast('网络错误');
            })
          } else {
            this.$toast('请输入正确手机号');
          }
        }
      },
      sendCode(){  // 倒计时
        this.sendAuthCode=false;
        this.auth_time=120;
        auth_timetimer =  setInterval(()=>{
          this.auth_time--;
          if(this.auth_time == 0){
            this.isCode = false
            clearInterval(auth_timetimer);
          }
        }, 1000);
      },
    },
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";
  
  .password {
    padding: 0 0.3rem;
    .before {
      height: 1.08rem;
      .bt();
      position: relative;
      &:nth-child(3) {
        border: none;
      }
      input {
        height: 1.0rem;
        position: absolute;
        &.all{
          width: 100%
        }
      }
      input::-webkit-input-placeholder {
        .hc();
        font-size: 0.26rem;
        text-align: left;
      }
      .warn {
        position: absolute;
        right: 0;
        top: 30%;
        font-size: 0.27rem;
        .rc();
        div, p {
          float: left;
        }
        div {
          margin-top: 0.08rem;
          margin-right: 0.2rem;
        }
      }
    }
  }
  .warn2{
    p{
      float: right;
      margin-right: 0;
      background-color: @mr;
      color: #fff;
      font-size: 0.23rem;
      border-radius: 1.2rem;
      line-height: 0.56rem;
      width: 1.57rem;
      text-align: center;
      height: 0.56rem;
    }
  }
  .amend{
    padding: 0.37rem 0.31rem 0 0.31rem ;
    border-top:1px solid @bc ;
    p{
      height: 0.89rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.34rem;
      border-radius: 0.1rem;
      color: #fff;
      background-color: @mr;
    }
  }
</style>
