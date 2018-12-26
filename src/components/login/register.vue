<template>
    <div class="register">
      <div class="navv">
        <van-nav-bar
          right-text="登录"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />
      </div>
      <p class="account">注册账号</p>
      <div class="formfield">
        <van-cell-group>
          <van-field v-model="mobile"  :error-message=message  @input='blur' placeholder="请输入手机号" />
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="password" type='password' @input='change' :error-message=pmessage class='bb' placeholder="密码6-20个英文字母、数字、下划线"/>
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="password02" type='password' @input='rechange' :error-message=pmessage02 class='bb' placeholder="请再次输入密码"/>
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="code" placeholder="请输入手机验证码" >
            <span slot="button" v-show="sendAuthCode" class="code" @click="sendCode">
              获取验证码
            </span>
            <span slot="button" v-show="!sendAuthCode" class="recode">{{auth_time}}秒后再发送</span>
          </van-field>

        </van-cell-group>
      </div>
      <div class="bottom">
        <van-checkbox v-model="checked" checked-color="#4b0">
          我已同意武汉三乡工程网 <router-link to="" class="aa">《用户协议》</router-link>
        </van-checkbox>
      </div>
      <div class="enter" @click="register">
        立即注册
      </div>
    </div>
</template>

<script>
  import {isvalidPhone,isPasswd} from '@/utils/validate'
    export default {
        name: "register",
        data() {
            return {
              message:'',//手机格式
              checked:false,//单选框
              mobile:'',
              password:'',
              password02:'',//再次输入密码
              code:'',
              pmessage:'',//密码提示
              pchecked:false,
              sendAuthCode:true,
              auth_time:0,
              pmessage02:'',
              check:false,//判断手机号码是否有效
            }
        },
        methods: {
          onClickLeft(){
            this.$router.go(-1);
          },
          onClickRight(){
            this.$router.push('/login')
          },
          blur(){//手机号的input
            this.check = isvalidPhone(this.mobile);
            console.log(this.check );
            if(!this.check){
              this.message=`手机号格式不正确`;
            }else{
              this.message='';
            }
            if(this.mobile==''){
              this.message='';
            }
          },

          change(){ //密码的input
            this.pchecked=isPasswd(this.password);
            if(!this.pchecked){
              this.pmessage='密码格式不正确'
            }else{
              this.pmessage='';
            }
            if(this.password==''){
              this.pmessage='';
            }
          },

          rechange(){//两次输入的密码
            if(this.password02 !=this.password){
              this.pmessage02='两次密码不一致'
            }else{
              this.pmessage02='';
            }
            if(this.password02==''){
              this.pmessage02='';
            }
          },


          sendCode(){  //发送验证码
            if(this.mobile==''){
              this.$toast('请输入手机号');
              return
            }
            if(!this.check){
              return
            };
            this.sendAuthCode=false;
            this.auth_time=120;
            let auth_timetimer =  setInterval(()=>{
              this.auth_time--;
              if(this.auth_time<=0){
                this.sendAuthCode = true;
                clearInterval(auth_timetimer);
              }
            }, 1000);
            this.$http.post('appServiceSso/sendCode',{mobile:this.mobile}).then(
              res=>{
                if(res.msg=='success'){
                  this.$toast("短信验证码发送成功");
                }else{
                  this.$toast(res.info)
                }
              }
            ).catch(error=>{
              this.$toast('网络错误');
            })
          },

          register(){ //注册按钮
            if(this.mobile=='' || this.password==''){
              this.$toast('请输入手机号或密码')
              return
            }
            if(this.code==''){
              this.$toast('验证码');
              return
            }
            if(!this.check){//判断手机号码是否有效
              return
            }
            if(!this.pchecked){
              return
            }
            if(!this.checked){
              this.$toast("请同意协议");
              return
            }
            if(this.password02!=this.password){
              return
            }

            this.$http.post('appServiceSso/mobileRegister',{code:this.code,mobile:this.mobile,password:this.password}).then(
              res=>{
                if(res.msg=='success'){
                  this.$toast('注册成功');
                  setTimeout(()=>{
                    this.$router.push('/login')
                  },1200)
                }else{
                  this.$toast(res.info);
                }
              }
            ).catch(error=>{
              this.$toast('网络错误');
            })
          },
        },
        computed: {},
        created: function () {

        },
        mounted: function () {
        },

    }
</script>

<style scoped lang="less" type="text/less">
  .register{
    .account{
      margin: 0.6rem 0.2rem;
      font-size: 0.42rem;
    }
    .code{
      display: inline-block;
      width: 1.5rem;
      background: #ff6500;
      border-radius: 0.3rem;
      text-align: center;
      font-size: 0.2rem;
      color: white;
    }
    .enter{
      margin: 0.35rem 0.2rem;
      background-color: #ff6500;
      height: 0.8rem;
      border-radius: 0.2rem;
      text-align: center;
      line-height: 0.8rem;
      font-size: 0.24rem;
      color: white;
    }
    .bottom{
      margin: 0.2rem;
      .aa{
        color: #00a0e9;
      }
    }
    .recode{
      display: inline-block;
      width: 1.5rem;
      background: rgba(192,192,192,.5);
      border-radius: 0.3rem;
      text-align: center;
      font-size: 0.2rem;
      color: white;
    }
    .bb{
    }
  }
</style>
