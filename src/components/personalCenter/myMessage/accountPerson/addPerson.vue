<template>
  <div>
    <Header :title="title" :isback="true"/>
    <div class="list">
      <van-cell-group>
        <van-field
          v-model="name"
          :value='name'
          label="真实姓名"
          icon="question-o"
          placeholder="请输入真实姓名"
          @click-icon="$toast('question')"
        />
        <van-field
          v-model="idCard"
          :value='idCard'
          label="身份证号"
          icon="question-o"
          placeholder="请输入身份证号"
          @click-icon="$toast('question')"
        />
        <van-field
          v-model="phone"
          :value='phone'
          type="number"
          label="手机号码"
          icon="question-o"
          placeholder="请输入手机号码"
          @click-icon="$toast('question')"
        />
      </van-cell-group>
    </div>
    <div class="footer" @click="add">
      <p>{{id?"保存修改":"添加"}}</p>
    </div>
  </div>
</template>

<script>
  import Header from "../../../common/Header2";
  import util from "../../../../utils/validate";

  export default {
    name: "addPerson",
    data() {
      return {
        title: '添加联系人',
        name: '',
        idCard: '',
        phone: '',
      }
    },
    components: {
      Header
    },
    created(){
      if(this.$route.query.id){
        this.id = this.$route.query.id - 0
        this.phone = this.$route.query.contactMobile
        this.name = this.$route.query.contactName
        this.idCard = this.$route.query.contactIdcard
        this.title = '修改联系人'
      }
    },
    methods:{
      add(){
        if(this.name !== ''){
          if(this.idCard !== ''){
            if(this.phone !== '' && util.isvalidPhone(this.phone)){
              const params = {
                ci: this.idCard,
                cn: this.name,
                cm: this.phone
              }
              if(this.id){
                params.id = this.id
              }
              this.$http.post("appServiceUser/updateContact", params).then(res => {
                if (res.msg == "success") {
                  if(params.id){
                  this.$toast('修改成功');
                  } else {
                    this.$toast('添加成功');
                  }
                  setTimeout(()=>{
                    this.$router.back(-1)
                  }, 800)
                }
              });
            } else {
                this.$toast('请填写正确手机号');
            }
          } else {
              this.$toast('请填写身份证号');
          }
        } else {
            this.$toast('请填写真实姓名');
        }
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../../style/public.less";
 .list{
   padding: 0.3rem;
   padding-top: .92rem;
   .bot {
     height: 0.26rem;
     padding: 0.3rem 0;
     .bt();
     .left {
       float: left;
       width: 2rem;
       margin-right: 0.23rem;
       .iconfont {
         .xx();
       }
       p {
         font-size: 0.27rem;
         color: #2b2b2d;
         float: left;
       }
     }
     .middle {
       float: left;
       font-size: 0.27rem;
       .hc();
     }
     .right {
       float: right;
       .iconfont {
         font-size: 0.29rem;
         color: #bababc;
       }
     }
   }
 }
 .footer{
    padding: 0.3rem;
    p {
      width: 100%;
      height: 0.88rem;
      .jz();
      font-size: 0.35rem;
      color: #fff;
      background-color: @mr;
      border-radius: 0.15rem;
    }
 }
</style>
