<template>
  <footer>
    <div class="collect" @click="collect">
        <p class="iconfont icon-shoucang" :style="'color:'+ (isCollection? '#FF6500' : '#69696b') + ';'"></p>
        <p>{{p1}}</p>
    </div>
    <div class="call"  @click="phone">
      <router-link to="">
        <p class="iconfont icon-dianhua2"></p>
        <p>{{p2}}</p>
      </router-link>
    </div>
    <div class="look" @click="goTable">
      <router-link to="">
        <p class="iconfont icon-shijian1"></p>
        <p>{{p3}}</p>
      </router-link>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer",
    props:{
      detail:{
        type:String,
        required:true
      }
    },
    data() {
      return {
        p1: "收藏",
        p2: "电话",
        p3: "预约看房",
        isCollection: false,
        accountPhone:''//客服电话
      }
    },
    methods:{
      goTable(){
        if(localStorage.getItem('userInfo')){
          this.$router.push({
            name:"orderTable",
            params:{id:this.detail.farmhouseRentalsNumber}
          })
        }else{
          this.$toast("登录之后可预约")
          setTimeout(()=>{
            this.$router.push('/login')
          })
        }

      },
      collect(){//收藏
        var _this=this
        console.log(_this.detail);
        var farmhouseRentalsId=_this.detail.id
        if(localStorage.getItem('userInfo')){
          var id=JSON.parse(localStorage.getItem('userInfo')).userId
          console.log(id);

          this.$http.post('appServiceFarmhouse/farmhouseCollection',{farmhouseRentalsId:farmhouseRentalsId,userId:68}).then(res=>{
            console.log(res);
            if(res.msg=='success'){
              this.$toast(res.info);
              this.isCollection=true;
            }else if(res.msg='已经收藏啦!'){
              this.isCollection=true;
              this.$toast(res.info);
            }
          })
        }else{
          this.$toast("登录之后可收藏")
          setTimeout(()=>{
            this.$router.push('/login')
          })
        }


      },
      phone(){
        if(localStorage.getItem('userInfo')){
        // ||"02765770321"
          if(this.detail.accountPhone){
            this.accountPhone=this.detail.accountPhone
            window.location.href="tel:"+(this.accountPhone)
          }else {
            window.location.href="tel:"+("02765770321")
          }

        }else{
          this.$toast("登录之后可拨打电话")
          setTimeout(()=>{
            this.$router.push('/login')
          })
        }

      }
    },
    created:function () {
      var id = this.$route.params.id
      this.$http.post('appServiceFarmhouse/getRentalHouseDetail', {farmhouseRentalsNumber: id}).then(res => {
        this.isCollection = res.data.detail.iscollection
        console.log(this.isCollection);
      })
    },
  }
</script>

<style scoped type="text/less" lang="less">
  footer {
    margin-top: 1rem;
    height: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    border-top: 1px solid #e6e6e6;
    z-index: 100;
    div {
      flex: 1;
      width: 33%;
      position: relative;
      background-color: #fff;
      &:nth-child(2) {
        background-color: #fea541;
        .iconfont {
          color: #fff;
        }
        p {
          color: #fff;
        }
      }
      &:nth-child(3) {
        background-color: #ff6400;
        .iconfont {
          color: #fff;
        }
        p {
          color: #fff;
        }
      }
      p {
        float: left;
        position: absolute;
        margin: 0 auto;
        font-size: 0.3rem;
        color: #69696b;
        &:nth-child(1) {
          left: 20%;
          top: 29%;
        }
        &:nth-child(2) {
          left: 36%;
          top: 28%;
        }

      }
      .iconfont {
        font-size: 0.36rem;
        color: #9a9a9c;
      }
    }
  }

</style>
