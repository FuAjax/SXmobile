<template>
  <div>
    <div class="topBar">
      <Header :title='title' :isback='isback'/>
    </div>
    <div class="content">
      <van-cell-group>
        <van-field
          v-model="messageTitle"
          label="标题"
          type="textarea"
          placeholder="一句话描述您问题（必填）"
          rows="1"
          :autosize="{ minHeight: 120}"

        />

      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="messageQuestion"
          label="问题描述"
          type="textarea"
          placeholder="一句话描述您问题（必填）"
          rows="1"
          :autosize="{ minHeight: 120}"

        />
      </van-cell-group>
      <div class="person">

        <div class="bot bot1" style="padding-left: 0.1rem;">
          <div class="left">
            <!--<div class="iconfont icon-xingxing"></div>-->
            <p style="color: #323237;">咨询类别
            </p>
          </div>
          <div class="middle" style="width: 30%">
            <p @click="consultClick">
              {{type}}
            </p>
          </div>
          <van-popup v-model="show" position="bottom" :overlay="true">
            <div v-for="(item,index) in consultType" class="Type" @click="typeClick(item)">{{item.name}}</div>
          </van-popup>

          <!--<div class="btn">政法法规咨询</div>-->
        </div>

        <div class="bot bot1">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>联系人</p>
          </div>
          <div class="middle" style="width: 30%">
            <p>
              <input type="text" placeholder="请填写" style="width: 88%;" v-model="userName">
            </p>
          </div>
          <div class="right">
            <div class="btn" v-for="(item,index) in sex" @click="sexClick(item,index)" :class="{red:changeRed == index}">{{item.name}}</div>
          </div>
        </div>
        <div class="bot bot2">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>联系电话</p>
          </div>
          <div class="middle">
            <p>
              <input type="text" placeholder="请填写" style="width: 88%;" v-model="phoneNumber" v-on:input="myphone">
            </p>
          </div>
        </div>
        <div class="bot bot3" v-if="yanzhen">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>验证码</p>
          </div>
          <div class="middle">
            <p>
              <input type="text" placeholder="请填写" style="width: 88%;" v-model="card">
            </p>
          </div>
          <div class="right" @click="yanzhengma" >
            <p v-show="sendAuthCode">获取验证码</p>
            <span slot="button" v-show="!sendAuthCode" class="recode">{{auth_time}}秒后再发送</span>
          </div>
        </div>
      </div>
      <div @click="next()" class="footer">
        立即发布
      </div>
    </div>

  </div>
</template>

<script>
  import Header from '../../common/Header'
  import methods from './m/methods'

  export default {
    name: "issueConsult",

    data() {
      return {
        title: '发布咨询',
        isback: true,
        color: '#FF6400',
        messageTitle: '',
        messageQuestion: '',
        consultType: [],//咨询类别
        show: false,
        list: false,
        type: '请选择',
        sex: [
          {name: '女士', id: 0},
          {name: '男士', id: 1},
        ],
        changeRed:0,
        phoneNumber:'',
        phoneNumber2:'',
        sendAuthCode:true,
        auth_time:0,
        consultTypeId:'',
        restful:'',
        userName:'',
        card:'',
        linksex:0,
        consultTypeName:'',
        yanzhen:false,
      }
    },
    components: {
      Header
    },
    created: function () {
      this.init()
    },
    methods: methods
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../style/public.less";

  .content {
    margin-top: 0.92rem;
  }

  .person {
    padding: 0 0.3rem;
    margin-top: 0.44rem;
    margin-bottom: 1rem;
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
          color: #323237;
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
    .bot1 {
      .right {
        margin-top: -0.1rem;
        .btn {
          float: left;
          border-radius: 1.2rem 0 0 1.2rem;
          padding: 0 0.2rem;
          height: 0.48rem;
          line-height: 0.48rem;
          text-align: center;
          background-color: #e7e6ec;
          .hc();
          &:nth-child(2) {
            border-radius: 0 1.2rem 1.2rem 0;
          }
        }
        .red{
          background-color: #ff6400;
          color: #fff;
        }
      }
    }
    .bot3, .bot4 {
      .left {
        p {
          /*margin-left: 0.26rem;*/
        }
      }
    }
    .bot3 {
      .right {
        p {
          padding: 0.12rem 0.28rem;
          background-color: @mr;
          color: #fff;
          font-size: 0.26rem;
          border-radius: 0.3rem;
          margin-top: -0.15rem;
        }
      }
    }
  }

  .footer {
    background-color: @mr;
    .jz();
    font-size: 0.35rem;
    color: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1rem;
  }

  .blank {
    .jg();
    height: 0.45rem;
  }

  .Type {
    min-height: 1rem;
    line-height: 1rem;
    overflow: auto;
    margin: 0 auto;
    text-align: center;
    font-size: 0.3rem;
    color: #000000;
    .bt();
  }
  .recode{
    width: 1.5rem;
    background-color: #e7e6ec;
    border-radius: 0.3rem;
    text-align: center;
    font-size: 0.2rem;
    padding: 0.2rem 0.2rem;
    color: #908f94
  }
</style>
