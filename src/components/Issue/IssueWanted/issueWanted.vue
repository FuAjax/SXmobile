<template>
  <div class="issueWanted">
    <Header :title='title'/>
    <div style="width:100%; height:0.9rem;"></div>
    <!--地区-->
    <div class="message">
      <!--地区-->
      <div class="bot"  @click="showPop(1)" style="padding-left: 0.28rem">
        <div class="left" style="    width: 1.5rem;">
          <!--<div class="iconfont icon-xingxing"></div>-->
          <p>期望地区</p>
        </div>
        <div class="middle">
          <p v-if="columnsName.length > 0">{{(columnsName[0] +''+ (columnsName[1] ? '-' +columnsName[1] : '') + (columnsName[2] ? '-' +columnsName[2] : '') )}}</p>
          <p v-else>请选择</p>
        </div>
        <div class="right">
          <div class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></div>
        </div>
      </div>
      <!--景点-->
      <div class="bot"  @click="showPop(2)">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>期望景点</p>
        </div>
        <div class="middle">
          <p v-if="spotColumnsName.length > 0">{{(spotColumnsName)}}</p>
          <p v-else>请选择</p>
          <div class="iconfont"></div>
        </div>
        <div class="right">
          <div class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></div>
        </div>
      </div>
      <!--户型-->
      <div class="bot" @click="showPop(3)">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>房屋户型</p>
        </div>
        <div class="middle">
          <p>{{apartmentName || '请选择'}}</p>
        </div>
        <div class="right">
          <div class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></div>
        </div>
      </div>
      <!--面积-->
      <div class="bot bot5">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>建筑面积</p>
        </div>
        <div class="middle">
          <van-field type='number' v-model="floorSpace"  placeholder="请填写"/>
        </div>
        <div class="right">
          <p>平方米</p>
        </div>
      </div>
      <!--年限-->
      <div class="bot bot5">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>建筑年限</p>
        </div>
        <div class="middle">
          <van-field type='number' v-model="rentingYears"  placeholder="请填写"/>
        </div>
        <div class="right">
          <p>年</p>
        </div>
      </div>
      <!--价格-->
      <div class="bot bot5 ">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>期望价格</p>
        </div>
        <div class="middle year">
          <van-field type='number' v-model="rentingPrice"  placeholder="不填写显示为面议，可保留两位小数"/>
        </div>
        <div class="right">
          <p>万元/年</p>
        </div>
      </div>
      <!--特色-->
      <div class="use" style='padding-top: .3rem'>
        <div class="top">
          <div class="iconfont icon-xingxing"></div>
          <p>房屋特色</p>
        </div>
        <template v-if="checkCharacteristicShow">
          <div v-for="(item,i) in characteristic" :class="item.ischecked ? 'ischeck btn' : 'btn'" @click="checkCharacteristic(i, item)">{{item.name}}</div>
        </template>
      </div>
      <!--用途-->
      <div class="use">
        <div class="top">
          <div class="iconfont icon-xingxing"></div>
          <p>出租用途</p>
        </div>
        <template v-if="checkUseShow">
          <div v-for="(item,i) in use" :class="item.ischecked ? 'ischeck btn' : 'btn'" @click="checkUse(i, item)">{{item.name}}</div>
        </template>
      </div>
      <!--经营-->
      <div class="bot bot11">
        <div class="left" style="width: 1.9rem; margin-right: 0.13rem;">
          <div class="iconfont icon-xingxing"></div>
          <p>经营主体</p>
        </div>
        <div class="middle">
          <div :class="isRent?'btn checkbtn':'ischeck btn checkbtn'" @click="rent(0)">个人</div>
          <div :class="isRent?'ischeck btn checkbtn':'btn checkbtn'" @click="rent(1)">企业</div>
        </div>
      </div>
    </div>
    <div class="blank"></div>
    <!--标题-->
    <div class="message2">
      <div class="list">
        <div class="others" style="position: relative;">
          <div style="line-height: 3.2;">
            <span style="color: #e81210;" class="iconfont icon-xingxing"></span><span>信息标题 </span>
            <span style="color:#96969b"> [可修改]</span>
          </div>
        </div>
      </div>
      <div class="others" style="position: relative">
        <van-cell-group>
          <van-field
            v-model="farmhouseTitle"
            type="textarea"
            placeholder="请输入信息标题"
            rows="1"
            autosize
          />
        </van-cell-group>
      </div>
    </div>

    <div class="blank"></div>
    <!--其他-->
    <div class="others">
      <van-cell-group>
        <van-field
          v-model="farmhouseDescribe"
          label="补充说明"
          type="textarea"
          placeholder="请输入留言"
          rows="1"
          autosize
        />
      </van-cell-group>
    </div>
    <div class="blank"></div>
    <!--联系人-->
    <div class="list release" style="margin-bottom: 1rem">
      <div class="bot bot10">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>联系人</p>
        </div>
        <div class="middle lotaMiddle">
          <van-field v-model="linkman" placeholder="请填写"/>
        </div>
        <div class="right">
          <div :class="isFace?'btn checkbtn':'ischeck btn checkbtn'" @click="face(0)">先生</div>
          <div :class="isFace?'ischeck btn checkbtn':'btn checkbtn'" @click="face(1)">女士</div>
        </div>
      </div>
      <div class="bot">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>联系电话</p>
        </div>
        <div class="middle">
          <van-field placeholder="请填写" v-model="linkmobile"  />
        </div>
        <div class="right">
          <div class="iconfont"></div>
        </div>
      </div>
      <div class="bot bot10" v-if="mobileValid">
        <div class="left">
          <div class="iconfont icon-xingxing"></div>
          <p>验证码</p>
        </div>
        <div class="middle lotaMiddle">
          <van-field  placeholder="请填写" v-model="verificationCode"/>
        </div>
        <div class="right">
          <div v-show="sendAuthCode" class="ischeck btnOne" @click="getCode()">获取验证码</div>
          <div slot="button" v-show="!sendAuthCode" class="ischeck btnOne" style="background: #E7E6EC!important; color: #757575!important">{{auth_time}}秒后再发送</div>
        </div>
      </div>
      <div class="bot">
        <div class="left" style="padding-left: 0.22rem;margin-right: 0">
          <!--<div class="iconfont icon-xingxing"></div>-->
          <p>身份证号码</p>
        </div>
        <div class="middle">
          <van-field placeholder="请填写" style="padding-left: 0;"/>
        </div>
        <div class="right">
          <div class="iconfont"></div>
        </div>
      </div>
    </div>

    <div class="footer" @click="submit">立即发布</div>


    <!--弹框-->
    <van-popup v-model="popShow" position="bottom" :close-on-click-overlay="false">
      <div class="cell-title"><p class="confirm-icon" @click="confirmPop">确定</p><van-icon slot="right-icon" name="close" class="custom-icon close-icon" @click="closePop"/></div>
      <!-- 所在地区 -->
      <div class="position-columns" v-show="popType == 1">
        <van-picker :columns="columns" @change="onChange"/>
        <van-picker :columns="columns1" @change="onChange1"/>
        <van-picker :columns="columns2" @change="onChange2"/>
      </div>
      <!--期望景点-->
      <div class="position-columns spot-columns" v-show="popType == 2">
        <van-picker :columns="spotColumns" @change="spotonChange"/>
        <van-picker :columns="spotColumns1" @change="spotonChange1"/>
      </div>

      <!-- 户型 -->
      <div class="position-columns fivColumns" v-show="popType == 3">
        <van-picker :columns="roomColumns" @change="roomChange"/>
        <van-picker :columns="hallColumns" @change="hallChange"/>
      </div>
    </van-popup>

  </div>
</template>

<script>
  import Header from "../../common/header2"
  import methods from "./methods"
  export default {
    name: "issueWanted",
    components: {
      Header
    },
    data() {
      return {
        title: '发布求租',
        code:true,
        mobileValid:true,
        use: [
          {name: '上镜'},
          {name: '上镜'},
          {name: '上镜'},
          {name: '上镜'},
          {name: '上镜'},
          {name: '上镜'},
        ],
        popShow:false,
        // 所在地区
        popType: 1,
        area: [],
        columns: [],
        columns1: [],
        columns2: [],
        columnsIndex: 1,
        columnsIndex1: null,
        columnsIndex2: null,
        columnsName: [],       // 所在地区 name 集合
        columnsIds: [],       // 所在地区 id 集合

        // 附近景点
        spot: [],
        spotColumns: [],
        spotColumns1: [],
        spotColumns2: [],
        spotColumnsIndex: null,
        spotColumnsIndex1: null,
        spotColumnsIndex2: null,
        spotColumnsName: [],       // 附近景点 name 集合
        spotColumnsIds: [],       // 附近景点 id 集合

        roomColumns: [],
        roomIndex: 1,
        hallColumns: [],
        hallIndex: 0,
        toiletColumns: [],
        toiletIndex: 1,
        balconyColumns: [],
        balconyIndex: 1,
        kitchenColumns: [],
        kitchenIndex: 1,
        apartmentName: null,    // 户型总配置

        coveredArea:'',//租赁面积
        coveredYear:'',//租赁年限
        coveredPrice:'',//租赁价格

        // 房屋特色
        characteristic: [],
        checkCharacteristicIds: [],
        checkCharacteristicName: [],
        checkCharacteristicResful: [],
        checkCharacteristicShow: true,

        // 用途
        use: [],
        checkUseShow: true,
        checkUseIds: [],
        checkUseResful: [],
        checkUseName: [],
        popShow:false,
        isFace:false,
        isRent: false,      // 整租
        houseTit:'',
        mobile:'',//手机号
        floorSpace:'',//建筑面积
        rentingYears:'',//	租赁年限
        rentingPrice:'',//	租赁价格
        managementSubject:'个人',//	经营主体
        farmhouseTitle:'',//	信息标题
        farmhouseDescribe:'',//	详细信息
        linkman:'',//	联系人名字
        linkmobile:'',//	联系人手机号
        linksex:'1',//	联系人性别
        isCode:false,
        isCodeShow:false,
        sendAuthCode: true,   // 验证码
        auth_time: 60,
        verificationCode: '',
      }
    },
    methods:methods,
    created:function () {
      this.init()
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../style/public.less";

  .issueWanted {
    .message {
      font-size: 0.28rem;
      padding: 0 0.3rem;
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
          &.lotaMiddle {
            width: 2rem !important;
            min-width: 2rem;
          }
          p {
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
        .middleR {
          padding-left: 2.23rem;
          textarea {
            height: auto;
            min-height: 2rem;
          }
        }
      }
      .van-cell {
        padding: 0;
      }
      .year {
        min-width: 3.6rem;
      }
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
      .use {
        .btn.ischeck {
          background-color: #ff6400!important;
          color: #fff!important;
        }
      }
    }
    .footer {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0.88rem;
      color: #fff;
      background-color: #ff6400;
      font-size: 0.32rem;
      line-height: 0.88rem;
      text-align: center;
    }
    .blank {
      .jg()
    }
    .list{
      .van-cell{
        padding: 0;
      }
    }
  }
</style>
<style scoped lang="less" type="text/less">
  @import "../../../style/public.less";
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
      width: 28%!important
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
  .ischeck{
    background-color: #ff6400!important;
    color: #fff!important;
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
      height: 8rem;
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
