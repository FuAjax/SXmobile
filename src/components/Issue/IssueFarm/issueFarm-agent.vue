<template>
  <div style="margin-bottom: 1rem;">
    <div class="topBar">
    <Header :title='title' />
    <van-icon name="arrow-left"
      slot="left"
      style="line-height: .9rem; padding: 0 .3rem; position: fixed; z-index: 9999; background: #fff"
      size="0.3rem"
      v-show="step == 2"
      @click="backStep1"
    />
    </div>
    <div style="width:100%; height:1.2rem;"></div>
    <div id="step1" v-show='step == 1'>
      <div class="list release">
        <div class="use">
          <div class="top">
            <div class="iconfont icon-xingxing"></div>
            <p>出租用途</p>
          </div>
          <template v-if="checkUseShow">
            <div v-for="(item,i) in use" :class="item.ischecked ? 'ischeck btn' : 'btn'" @click="checkUse(i, item)">{{item.name}}</div>
          </template>
        </div>
        <div class="bot" @click="showPop(1)">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>所在地区</p>
          </div>
          <div class="middle">
            <p v-if="columnsName.length > 0">{{(columnsName[0] +''+ (columnsName[1] ? '-' +columnsName[1] : '') + (columnsName[2] ? '-' +columnsName[2] : '') )}}</p>
            <p v-else>请选择</p>
          </div>
          <div class="right">
            <div class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></div>
          </div>
        </div>
        <div class="bot">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>详细位置</p>
          </div>
          <div class="middle">
            <van-field v-model="addressDetail" placeholder="请精确到门牌号" />
          </div>
          <div class="right">
            <div class="iconfont"></div>
          </div>
        </div>
        <div class="bot" @click="showPop(9)">
          <div class="left">
            <div class="iconfont"></div>
            <p>位置标注</p>
          </div>
          <div class="middle">
            <p v-if="location !== ''">{{location}}</p>
            <p v-else>请选择</p>
          </div>
        </div>
        <div class="bot bot4" @click="showPop(2)">
          <div class="left">
            <div class="iconofnt"></div>
            <p>周边景点</p>
          </div>
          <div class="middle">
            <p v-if="spotColumnsName.length > 0">{{(spotColumnsName[0] +''+ (spotColumnsName[1] ? '-' +spotColumnsName[1] : ''))}}</p>
            <p v-else>请选择</p>
            <div class="iconfont"></div>
          </div>
          <div class="right">
            <div class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></div>
          </div>
        </div>
        <div class="bot bot5">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>占地面积</p>
          </div>
          <div class="middle">
            <van-field type='number' v-model="floorSpace" :value="floorSpace" placeholder="请填写" />
          </div>
          <div class="right">
            <p>平方米</p>
          </div>
        </div>
        <div class="bot bot5">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>建筑面积</p>
          </div>
          <div class="middle">
            <van-field type='number' v-model="coveredArea" :value="coveredArea" @blur="generateTit" placeholder="请填写" />
          </div>
          <div class="right">
            <p>平方米</p>
          </div>
        </div>
        <div class="bot bot6">
          <div class="left">
            <div class="iconfont"></div>
            <p>宅基地面积</p>
          </div>
          <div class="middle">
            <van-field type='number' v-model="curtilageArea" :value="curtilageArea" @blur="generateTit" placeholder="请填写" />
          </div>
          <div class="right">
            <p>平方米</p>
          </div>
        </div>
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
        <div class="bot bot9">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>出租年限</p>
          </div>
          <div class="middle">
            <van-field type='number' v-model="rentingYears" :value="rentingYears" placeholder="请填写" />
          </div>
          <div class="right">
            <p>年</p>
          </div>
        </div>
        <div class="bot bot10">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>出租价格</p>
          </div>
          <div class="middle lotaMiddle">
            <van-field v-model="rentingPrice" type='number' :disabled='isFace' :placeholder="(!isFace?'请填写':'不可填写')" />
          </div>
          <div class="right">
            <div :class="isFace?'btn checkbtn':'ischeck btn checkbtn'" @click="face(0)">万元/年</div>
            <div :class="isFace?'ischeck btn checkbtn':'btn checkbtn'" @click="face(1)">面议</div>
          </div>
        </div>
        <div class="bot bot11">
          <div class="left" style="width: 1.9rem; margin-right: 0.13rem;">
            <div class="iconfont icon-xingxing"></div>
            <p>出租情况</p>
          </div>
          <div class="middle">
            <div :class="isRent?'btn checkbtn':'ischeck btn checkbtn'" @click="rent(0)">整租</div>
            <div :class="isRent?'ischeck btn checkbtn':'btn checkbtn'" @click="rent(1)">部分</div>
          </div>
        </div>
        <div class="bot bot11" v-show="isRent" style="height: auto;min-height: 2rem">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>部分出租情况</p>
          </div>
          <div class="middleR" style="height: auto;min-height: 2rem">
            <van-field
            style="height: auto;min-height: 2rem;  vertical-align: top;font-size: .26rem"
              v-model="partrentalInstructions"
              type="textarea"
              placeholder="请填写部分出租情况"
              rows="1"
              autosize
            />
          </div>
        </div>
      </div>
      <div class="blank"></div>
      <div class="imgInfor">
        <div class="projectimg">
          <van-field
            v-model="img"
            label="图片"
            disabled
            required
          />
          <div class="buttonimg">
            <div v-for="(color,index) in imglist" v-dragging="{item:color,list:imglist,group:'color'}"
            :style="'background-image:url(' + color + '); background-size: cover; background-position: center center'">
              <!-- <img :src="color" alt=""> -->
              <i class='iconfont icon-menu_reject2Submitor' @click="delIMg(index)"></i>
            </div>
            <span>
            <input type="file" @change="uploadimg($event,4)">
          </span>
          </div>
          <p>上传农房图片，最少1张，第1张为封面，拖动调整图片顺序</p>
        </div>
      </div>
      <div class="picture">
        <div class="video">
          <div class="top">
            <div class="iconfont"></div>
            <p>视频</p>
          </div>
          <div class="imgbox upload">
              <div class="buttonimg">
                <div v-for="(item,index) in videoList">
                  <!-- <img :src="item" alt=""> -->
                  <video :src="item" style="width: 100%;height: 100%;"></video>
                  <i @click="delVideo(index)">删除</i>
                </div>
                <span v-show="videoList.length<1">
                  <input type="file" @change="uploadVideo($event)">
                </span>
              </div>
          </div>
          <div class="bot">横向拍摄房源视频效果更佳，最大可上传300M视频</div>
        </div>
      </div>
      <div class="picture">
        <div class="video">
          <div class="top">
            <div class="iconfont"></div>
            <p>视频封面</p>
          </div>
          <div class="imgbox upload">
              <div class="buttonimg">
                <div v-for="(color,index) in videoCoverList" v-dragging="{item:color,list:videoCoverList,group:'color'}" :style="'background-image:url(' + color + '); background-size: cover; background-position: center center'">
                  <i @click="delVideoCover(index)">删除</i>
                </div>
                <span v-show="videoCoverList.length<1">
                  <input type="file" @change="uploadVideoCover($event)">
                </span>
              </div>
          </div>
          <div class="bot">横向拍摄房源视频效果更佳，最大可上传300M视频</div>
        </div>
      </div>
      
      <div class="list release">
        <div class="bot bot5">
          <div class="left">
            <div class="iconfont"></div>
            <p>vr链接</p>
          </div>
          <div class="middle">
            <van-field v-model="vrUrl" placeholder="请填写" />
          </div>
          <div class="right">
          </div>
        </div>
      </div>
      <div class="nextStep" @click="next()">
        下一步
      </div>
    </div>
    <div id="step2" v-show='step == 2'>
      <h3 class="step2-title">房屋详情</h3>
      <div class="list release">
        <div class="bot">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>楼层</p>
          </div>
          <div class="middle">
            <van-field type='number' v-model="floor" :value="floor" @blur="generateTit" placeholder="请填写" />
          </div>
          <div class="right">
            楼
          </div>
        </div>
        <div class="bot">
          <div class="left">
            <div class="iconfont"></div>
            <p>产权年限</p>
          </div>
          <div class="middle">
            <van-field type='number' v-model="propertyYear" :value="propertyYear" @blur="generateTit" placeholder="请填写" />
          </div>
          <div class="right">
            年
          </div>
        </div>
        <div class="bot">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>建筑年代</p>
          </div>
          <div class="middle">
            <van-field v-model="builtYear" :value="builtYear" placeholder="请填写" />
          </div>
          <div class="right">
            年
            <div class="iconfont"></div>
          </div>
        </div> 
        <div class="bot">
          <div class="left">
            <div class="iconfont"></div>
            <p>改造年代</p>
          </div>
          <div class="middle">
            <van-field v-model="transformationYear" :value="transformationYear" placeholder="请填写" />
          </div>
          <div class="right">
            年
            <div class="iconfont"></div>
          </div>
        </div> 
        <div class="bot" @click="showPop(5)">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>朝向</p>
          </div>
          <div class="middle">
            {{houseOrientationName || '请选择'}}
          </div>
          <div class="right">
            <div class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></div>
          </div>
        </div>
        <div class="bot" @click="showPop(6)">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>装修情况</p>
          </div>
          <div class="middle">
            <p>{{decorationSituationName || '请选择'}}</p>
          </div>
          <div class="right">
            <div class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></div>
          </div>
        </div>
        <div class="bot" @click="showPop(7)">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>房屋结构</p>
          </div>
          <div class="middle">
            <p>{{buildingStructureName || '请选择'}}</p>
          </div>
          <div class="right">
            <div class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></div>
          </div>
        </div> 
        <div class="bot" @click="showPop(8)">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>房屋类型</p>
          </div>
          <div class="middle">
            <p>{{houseTypeName || '请选择'}}</p>
          </div>
          <div class="right">
            <div class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></div>
          </div>
        </div>
        <div class="use" style='padding-top: .3rem'>
          <div class="top">
            <div class="iconfont icon-xingxing"></div>
            <p>房屋特色</p>
          </div>
          <template v-if="checkCharacteristicShow">
            <div v-for="(item,i) in characteristic" :class="item.ischecked ? 'ischeck btn' : 'btn'" @click="checkCharacteristic(i, item)">{{item.name}}</div>
          </template>
        </div>
        <!-- <div class="other-characteristic others">
          <van-cell-group>
            <van-field
            label="补充说明"
            v-model="messagea"
            type="textarea"
            placeholder="其他特色 (最多三条) "
            rows="1"
            autosize
          />
          </van-cell-group>
        </div> -->
        <div class="bot bot11">
          <div class="left">
            <div class="iconfont"></div>
            <p>土地状态</p>
          </div>
          <div class="middle">
            <div :class="landState === 1?'ischeck btn checkbtn':'btn checkbtn'" @click="landStateChange(1)">自建房</div>
            <div :class="landState === 2?'ischeck btn checkbtn':'btn checkbtn'" @click="landStateChange(2)">宅基地</div>
          </div>
        </div>
        <div class="bot bot11">
          <div class="left">
            <div class="iconfont"></div>
            <p>土地性质</p>
          </div>
          <div class="middle">
            <div :class="landCharacteristic === 1?'ischeck btn checkbtn':'btn checkbtn'" @click="landCharacteristicChange(1)">集体土地</div>
            <div :class="landCharacteristic === 2?'ischeck btn checkbtn':'btn checkbtn'" @click="landCharacteristicChange(2)">国有土地</div>
          </div>
        </div>
      </div>
      <div class="blank"></div>
      <div class="list release">
        <div class="use" style='padding-top: .3rem'>
          <div class="top">
            <div class="iconfont icon-xingxing"></div>
            <p>房屋配套</p>
          </div>
          <template v-if="buildingMatchingShow">
            <div v-for="(item,i) in buildingMatching" :class="item.ischecked ? 'ischeck btn' : 'btn'" @click="checkBuildingMatching(i, item)">{{item.name}}</div>
          </template>
        </div>
      </div>
      <div class="blank"></div>
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
            v-model="houseTit"
            type="textarea"
            placeholder="请输入信息标题"
            rows="1"
            autosize
          />
        </van-cell-group>
      </div>
      <div class="blank"></div>
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
      <div class="list release">
        <div class="bot bot10">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>联系人</p>
          </div>
          <div class="middle lotaMiddle">
            <van-field v-model="value" :value="value" placeholder="请填写" />
          </div>
          <div class="right">
            <div :class="linksex == 0?'btn checkbtn':'ischeck btn checkbtn'" @click="sex(1)">先生</div>
            <div :class="linksex == 1?'btn checkbtn':'ischeck btn checkbtn'" @click="sex(0)">女士</div>
          </div>
        </div>
        <div class="bot">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>联系电话</p>
          </div>
          <div class="middle">
            <van-field v-model="phone" :value="phone" type="number" placeholder="请填写" />
          </div>
          <div class="right">
            <div class="iconfont"></div>
          </div>
        </div>
        <!-- <div class="bot bot10" v-show="phone !== mobile && phone.length == 11">
          <div class="left">
            <div class="iconfont icon-xingxing"></div>
            <p>验证码</p>
          </div>
          <div class="middle lotaMiddle">
            <van-field v-model="code" type="number" placeholder="请填写" />
          </div>
          <div class="right">
            <div v-show="sendAuthCode" class="ischeck btnOne" @click="getCode()">获取验证码</div>
            <div slot="button" v-show="!sendAuthCode" class="ischeck btnOne" style="background: #E7E6EC!important; color: #757575!important">{{auth_time}}秒后再发送</div>
          </div>
        </div> -->
      </div>
      <div class="nextStep">
        <div @click="backStep1">上一步</div>
        <div @click="submit">保存</div>
      </div>
    </div>

    <van-popup v-model="popShow" position="bottom" :close-on-click-overlay="false">
      <div class="cell-title"><p class="confirm-icon" @click="confirmPop">确定</p><van-icon slot="right-icon" name="close" class="custom-icon close-icon" @click="closePop"/></div>
      <!-- 所在地区 -->
      <div class="position-columns" v-show="popType == 1">
        <van-picker :columns="columns" value-key="label" @change="onChange"/>
        <van-picker :columns="columns1" value-key="label" @change="onChange1"/>
        <van-picker :columns="columns2" value-key="label" @change="onChange2"/>
      </div>
      <!-- 附近景区 -->
      <div class="position-columns spot-columns" v-show="popType == 2">
        <van-picker :columns="spotColumns" value-key="label" @change="spotonChange"/>
        <van-picker :columns="spotColumns1" value-key="label" @change="spotonChange1"/>
      </div>
      <!-- 户型 -->
      <div class="position-columns fivColumns" v-if="popType == 3">
          <van-picker :columns="roomColumns" @change="roomChange"/>
          <van-picker :columns="hallColumns" @change="hallChange"/>
          <van-picker :columns="toiletColumns" @change="toiletChange"/>
          <van-picker :columns="balconyColumns" @change="balconyChange"/>
          <van-picker :columns="kitchenColumns" @change="kitchenChange"/>
      </div>
      <!-- 楼层 -->
      <!-- <div class="once-columns" v-show="popType == 4">
        <van-picker :columns="floorColumns" @change="floorColumnsChange"/>
      </div> -->
      <!-- 朝向 -->
      <div class="once-columns" v-show="popType == 5">
        <van-picker :columns="houseOrientation" value-key="name" @change="houseOrientationChange"/>
      </div>
      <!-- 装修情况 -->
      <div class="once-columns" v-show="popType == 6">
        <van-picker :columns="decorationSituationColumns" value-key="name" @change="decorationSituationChange"/>
      </div>
      <!-- 房屋结构 -->
      <div class="once-columns" v-show="popType == 7">
        <van-picker :columns="buildingStructureColumns" value-key="name" @change="buildingStructureChange"/>
      </div>
      <!-- 房屋类型 -->
      <div class="once-columns" v-show="popType == 8">
        <van-picker :columns="houseTypeColumns" value-key="name" @change="houseTypeChange"/>
      </div>
      <!-- 地图 -->
      <div v-if="popType == 9">
        <div class="map">
          <div style="padding: 0 0.35rem">
            地理位置：<input type="text" id="getInput"  placeholder="地址" v-model="address_detail"/>
          </div>
          <div id="l-map"></div>
          <div class="location" style="padding: 0 0.35rem">
            <p>当前经度: <span>{{locationSpot.lng}}</span></p>
            <p>当前纬度: <span>{{locationSpot.lat}}</span></p>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import Header from "../../common/header2"
  import methods from "./method-agent.js"

  export default {
    name: "issueFarm",
    data() {
      return {
        step: 1,    // 第一页
        title: '发布农房',
        isFace: false,      // 面谈
        isRent: false,      // 整租
        message: '',
        messagea: '',
        value: '',
        // 用途
        use: [],
        checkUseShow: true,
        checkUseIds: [],
        checkUseResful: [],
        checkUseName: [],
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
        spotColumnsIndex: 1,
        spotColumnsIndex1: 1,
        spotColumnsIndex2: 1,
        spotColumnsName: [],       // 附近景点 name 集合
        spotColumnsIds: [],       // 附近景点 id 集合
        // 房屋类型
        houseType: [],
        houseTypeColumns: [],
        houseTypeIndex: 1,
        houseTypeName: null,
        // 朝向
        houseOrient: [],
        houseOrientation: [],
        houseOrientationIndex: 1,
        houseOrientationName: null,
        // 装修情况
        decorationSituation: [],
        decorationSituationColumns: [],
        decorationSituationIndex: 1,
        decorationSituationName: null,
        // 房屋结构
        buildingStructure: [],
        buildingStructureColumns: [],
        buildingStructureIndex: 1,
        buildingStructureName: null,
        // 房屋特色
        characteristic: [],
        checkCharacteristicIds: [],
        checkCharacteristicName: [],
        checkCharacteristicResful: [],
        checkCharacteristicShow: true,
        // 房屋配套
        buildingMatching: [],
        buildingMatchingIds: [],
        buildingMatchingName: [],
        buildingMatchingResful: [],
        buildingMatchingShow: true,
        // 户型  室厅阳厨
        roomColumns: [],
        roomIndex: 1,
        hallColumns: [],
        hallIndex: 1,
        toiletColumns: [],
        toiletIndex: 1,
        balconyColumns: [],
        balconyIndex: 1,
        kitchenColumns: [],
        kitchenIndex: 1,
        apartmentName: null,    // 户型总配置

        // 填写
        houseTit: '',       // 农房标题
        addressDetail: '',  // 详细位置
        floor: '',           // 楼层
        coveredArea: '',     // 建筑面积
        curtilageArea: '',   // 宅基地面积
        rentingYears: '',    // 出租年限
        rentingPrice: '',    // 出租价格
        partrentalInstructions: '',         // 部分出租说明
        farmhouseDescribe: '',              // 补充说明
        transformationYear: '',             // 改造年代
        propertyYear: '',                   // 产权年限

        builtYear: '',       //建筑年代
        landState: null,    // 土地状态
        landCharacteristic: null,  // 土地性质
        floorSpace: '',

        imglist: [],        // 图片集
        videoList: [],      // 视频集
        videoCoverList:[],  // 视频封面
        phone: null,        // 手机号
        mobile: null,
        code: null,
        isCode:false,
        isCodeShow:false,

        //地图
        address_detail:null,
        map:{},
        locationSpot: {
          lng: '114.312',
          lat: '30.598'
        },
        location: '',

        img: '',
        vrUrl: '',

        popTypeColumns: [],
        // 验证码
        sendAuthCode: true,
        auth_time: 60,
        linksex: 0,           // 性别
        
      }
    },
    components: {
      Header
    },
    methods: methods,
    created(){
      if(this.$route.query.id){
        this.title = '修改农房'
      }
      this.init()
    },
    mounted(){
    }
  }
</script>

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
