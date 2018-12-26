<template>
    <div class="login">

     <div class="navv">
       <van-nav-bar
         right-text="注册"
         left-arrow
         @click-left="onClickLeft"
         @click-right="onClickRight"
       />
     </div>
      <p class="account">账号密码登录</p>
      <div class="formfield">
        <van-cell-group>
          <van-field v-model="mobile"   :error-message=message   @input='blur'   placeholder="请输入手机号码" />
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="password" type="password"  placeholder="请输入密码" />
        </van-cell-group>
      </div>
      <div class="noregister" v-if="noregister">
        <div class="iconfont icon-chahao"></div>
        <p>该手机号还未注册,</p>
        <p @click="goregi">去注册</p>
      </div>
      <!--登录-->
      <div class="enter" @click="login">
        登录
      </div>
      <p class="two">
        <router-link to="telephone">
          手机验证码登录
        </router-link>
        <!--&nbsp;|&nbsp;-->
        <!--<router-link to="resetPasswordfirst">-->
          <!--忘记密码？-->
        <!--</router-link>-->
      </p>

      <!--第三方登录-->
      <!-- <div style="height: 1.5rem"></div>
      <div class="bottom">
        <p>
          <span></span>
          第三方登录
          <span></span>
        </p>
        <div class="img clear">
          <router-link to="" tag="div">
            <img src="../../assets/icon/blog.png" alt="">
          </router-link>
          <router-link to="" tag="div">
            <img src="../../assets/icon/wechat.png" alt="">
          </router-link>
          <router-link to="" tag="div">
            <img src="../../assets/icon/QQ.png" alt="">
          </router-link>
        </div>
      </div> -->
    </div>
</template>

<script>
  import {isvalidPhone} from '@/utils/validate'
    export default {
        name: "login",
        data() {
            return {
              message:'',
              mobile:'',//手机号
              password:'',//密码
              check:'',
              noregister:false
            }
        },
        methods: {
          onClickRight(){
            this.$router.push('/register')
          },
          onClickLeft(){
            this.$router.go(-1);
          },
          login(){ //登录
            if(this.mobile==''){
              this.$toast("请输入手机号")
              return
            };
            if(this.password==''){
              this.$toast("请输入密码")
              return
            };
            if(!this.check){
              return}
            this.$http.post('appServiceSso/passwordLogin',{mobile:this.mobile,password:this.password}).then(res=>{
              if(res.msg=='success'){
                localStorage.setItem('userInfo',JSON.stringify(res.data));
                this.$toast('登录成功');
                setTimeout(()=>{
                  if(this.$proType == 3){
                    this.$router.replace('/')
                  } else {
                    this.$router.replace({ name: 'navbar', query: { type: 0 }})
                  }
                },1200)
              }else{
                if(res.info==="该用户不存在"){
                  // this.$toast(res.info)
                  this.noregister=true
                }
                if(res.info==="密码错误"){
                  this.$toast(res.info)
                }
              }
            }).catch(error=>{
              this.$toast('网络错误')
            })
          },

          blur(){
             this.check = isvalidPhone(this.mobile);
            if(!this.check){
              this.message=`手机号格式不正确`;
            }else{
              this.message='';
            }
            if(this.mobile==''){
              this.message='';
            }
          },
          goregi(){
            this.$router.push({
              name:'/register'
            })
          }
        },
        computed: {},
        created: function () {
          localStorage.clear();
        },
        mounted: function () {

        },

    }
</script>

<style scoped lang="less" type="text/less">
  .login{
    .account{
      margin: 0.6rem 0.2rem;
      font-size: 0.42rem;
    }
    .enter{
      margin: 0.35rem 0.2rem;
      background-color: #ff6500;
      height: 0.8rem;
      border-radius: 0.2rem;
      text-align: center;
      line-height: 0.8rem;
      font-size: 0.32rem;
      color: white;
    }
    .two{
      text-align: center;
      color: grey;
      a{
        color: grey;
        font-size: 0.24rem;
      }
    }
    .bottom{
      width: 100%;
      p{
        text-align: center;
        color: grey;
        font-size: 0.24rem;
        span{
          display: inline-block;
          border: 0.01rem solid #e6e6e6;
          width: 2.3rem;
          vertical-align: middle;
        }
      }
      .img{
        height: 2.5rem;
        line-height: 2.5rem;
        div{
          float: left;
          width: 33%;
          text-align: center;
          img{
            width: 0.9rem;
            height: 0.9rem;
          }
        }
      }
    }
  }
  .noregister{
    margin: 0.2rem 0.2rem;
    height: 0.3rem;
    font-size: 0.24rem;
    div{
      float: left;
    }
    p{
      float: left;
      &:nth-child(3){
        color: #00a62e;
      }
    }
    .iconfont{
      color: #ff6500;
      margin-top: 0.03rem;
      margin-right: 0.1rem;

    }
  }

</style>
