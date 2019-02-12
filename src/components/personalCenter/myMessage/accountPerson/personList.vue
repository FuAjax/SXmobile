<template>
  <div>
    <Header :title="title" :isback="true"/>
    <div style="padding-top: .92rem">
      <div class="list" v-for="(item,i) in list">
        <div class="left">
          <div class="name">
            <p>姓名：</p>
            <p>{{item.contactName}}</p>
          </div>
          <div class="phone">
            <p>手机号码：</p>
            <p>{{item.contactMobile}}</p>
          </div>
          <div class="num">
            <p>身份证号：</p>
            <p>{{item.contactIdcard}}</p>
          </div>
        </div>
        <div class="right">
          <p @click="editContact(item)">修改</p>
          <span @click="delet(item.id)">删除</span>
        </div>
      </div>
    </div>
    <div class="footer" @click="addContact">
      添加联系人
    </div>
  </div>
</template>

<script>
  import { Dialog } from 'vant';
  import Header from "../../../common/Header2";

  export default {
    name: "personList",
    data() {
      return {
        title: '常用联系人',
        list: []
      }
    },
    components: {
      Header
    },
    created(){
      this.init()
    },
    methods:{
      init(){
        this.$http.post("appServiceUser/generalContact").then(res => {
          if (res.msg == "success") {
            this.list = res.data
          }
        });
      },
      addContact(){
        this.$router.push('/addPerson')
      },
      editContact(item){
        this.$router.push({name: 'addPerson', query: {id: item.id, contactMobile: item.contactMobile, contactName: item.contactName, contactIdcard: item.contactIdcard}})
      },
      delet(id){
        Dialog.confirm({
          title: '删除操作',
          message: '删除该常用联系人'
        }).then(() => {
          // on confirm
          this.$http.post("appServiceUser/delContact", {id}).then(res => {
            if (res.msg == "success") {
              this.init()
              this.$toast(res.info);
            }
          });
        }).catch(() => {
          // on cancel
        });
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">

  @import "../../../../style/public.less";

  .list {
    padding: 0.42rem 0.31rem;
    &:last-child{
      margin-bottom: 1rem;
    }
    .bt();
    min-height: 1rem;
    overflow: auto;
    padding-bottom: 0;
    .left {
      float: left;
      .name, .phone, .num {
        height: 0.68rem;

        p {
          float: left;
          font-size: 0.28rem;
          &:nth-child(1) {
            color: #6f6e73;
            width: 1.5rem;
            margin-right: 0.23rem;
          }
          &:nth-child(2) {
            color: #010103;
          }
        }
      }
    }
    .right {
      float: right;
      p {

        .button();
        background-color: #00b034;
        color: #fff;
        padding: 0.1rem 0.34rem;
        border-radius: 0.3rem;
        margin-bottom: 0.5rem;
      }
      span {
        .button();
        padding: 0.1rem 0.34rem;
        background-color: #e7e6ec;
        color: #65646a;
        border-radius: 0.3rem;
      }
    }
  }
  .footer{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.27rem;
    height: 1rem;
    color: #fff;
    background-color: @mr;
    position: fixed;
    left: 0;
    bottom: 0%;
  }
</style>
