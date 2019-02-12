<template>
  <div id="farmhouseManage" class="farmhouseManage">
    <div class="head">
      <van-nav-bar :title='title'
        @click-left="back"
        style="text-align: center" left-arrow>
        <div slot="right">
          <span style="padding: 0 .2rem" @click="onClickLeft">
            {{cityName}}
          </span>
          <van-icon name="search" @click="onClickRight"/>
        </div>
      </van-nav-bar>
    </div>
    <div style="padding-top: .91rem">
      <!--条件筛选-->
      <div style="position: fixed; top: .91rem; width: 100%; z-index: 999;background: #fff">
        <div class="condition">
          <ul class="top_tab clear" >
            <li class="list van-ellipsis" v-for="item in navList" @click="areaClick(item.index)" :class="{active:activeIndex == item.index}">
              {{item.name}}
              <i class="iconfont icon-xiala1" v-if="item.index == activeIndex"></i>
              <i class="iconfont icon-xiala" v-else></i>
            </li>
          </ul>
          <div class="condition-box" style="4.5rem" v-if="activeIndex==0 || activeIndex==1 || activeIndex==3 || activeIndex==2">
            <div class="van-tree-select" style="height: 3.5rem;" v-if="activeIndex==0">
                <div class="van-tree-select__nav van-tree-select__nav-top" style="width: 16%;">
                    <div style="text-align:center" :class=" (mainActiveIndex0 == 0 ? 'van-tree-select__nitem--active van-ellipsis van-tree-select__nitem' : 'van-ellipsis van-tree-select__nitem')" @click="areaCheck(0)">区域</div>
                    <div style="text-align:center" :class=" (mainActiveIndex0 == 1 ? 'van-tree-select__nitem--active van-ellipsis van-tree-select__nitem' : 'van-ellipsis van-tree-select__nitem')" @click="areaCheck(1)">景点</div>
                </div>
                <template v-if='mainActiveIndex0 == 0'>
                  <div class="van-tree-select__nav">
                      <div v-for="(item, index) in areaList"
                          :class=" (mainActiveIndex == index ? 'van-tree-select__nitem--active  van-tree-select__nitem' : ' van-tree-select__nitem')"
                          @click="onItemClick(1, index)">
                      {{item.name}}
                      </div>
                  </div>
                  <div class="van-tree-select__nav">
                      <div v-for="(item, index) in mainActiveIndex || mainActiveIndex == 0 ? areaList[mainActiveIndex].children:[]"
                          :class=" (mainActiveIndex1 == index ? 'van-tree-select__nitem--active  van-tree-select__nitem' : ' van-tree-select__nitem')"
                          @click="onItemClick(2, index)">
                      {{item.name}}
                      </div>
                  </div>
                  <div class="van-tree-select__nav">
                      <div v-for="(item, index) in (mainActiveIndex || mainActiveIndex == 0) && (mainActiveIndex1 || mainActiveIndex1 == 0) ? areaList[mainActiveIndex].children[mainActiveIndex1].children : []"
                          :class=" (mainActiveIndex2 == index ? 'van-tree-select__nitem--active  van-tree-select__nitem' : ' van-tree-select__nitem')"
                          @click="onItemClick(3, index)">
                      {{item.name}}
                      </div>
                  </div>
                </template>
                <template v-if='mainActiveIndex0 == 1'>
                  <div class="van-tree-select__nav" style="width: 30%">
                      <div v-for="(item, index) in areaLandList"
                          :class=" (mainActiveIndex == index ? 'van-tree-select__nitem--active  van-tree-select__nitem' : ' van-tree-select__nitem')"
                          @click="onItemClick(1, index)">
                      {{item.name}}
                      </div>
                  </div>
                  <div class="van-tree-select__nav" style="width: 54%">
                      <div v-for="(item, index) in mainActiveIndex || mainActiveIndex == 0 ? areaLandList[mainActiveIndex].children:[]"
                          :class=" (mainActiveIndex1 == index ? 'van-tree-select__nitem--active  van-tree-select__nitem' : ' van-tree-select__nitem')"
                          @click="onItemClick(2, index)">
                      {{item.name}}
                      </div>
                  </div>
                </template>
            </div>
            <div class="van-tree-select" style="height: 4.5rem;border-bottom: #F4F4F4 .01rem solid;box-sizing: border-box;" v-if="activeIndex==1">
              <div class="van-tree-select__nav van-tree-select__nav-top" style="width: 100%;">
                <div style="text-align:center" :class=" (check1 == -1 ? 'van-tree-select__nitem--active van-ellipsis van-tree-select__nitem' : 'van-ellipsis van-tree-select__nitem')" @click="check(1,-1)">不限</div>
                <div style="text-align:center" v-for="(item, index) in farmhouseRentPrice" :class=" (check1 == index ? 'van-tree-select__nitem--active van-ellipsis van-tree-select__nitem' : 'van-ellipsis van-tree-select__nitem')" @click="check(1,index)">{{item.text}}</div>
              </div>
            </div>
            <div class="van-tree-select" style="height: 4.5rem;border-bottom: #F4F4F4 .01rem solid;box-sizing: border-box;" v-if="activeIndex==2">
              <div class="van-tree-select__nav van-tree-select__nav-top" style="width: 100%;">
                <div style="text-align:center" :class=" (check2 == -1 ? 'van-tree-select__nitem--active van-ellipsis van-tree-select__nitem' : 'van-ellipsis van-tree-select__nitem')" @click="check(2,-1)">不限</div>
                <div style="text-align:center" v-for="(item, index) in characteristic" :class=" (check2 == index ? 'van-tree-select__nitem--active van-ellipsis van-tree-select__nitem' : 'van-ellipsis van-tree-select__nitem')" @click="check(2,index)">{{item.text}}</div>
              </div>
            </div>
            <div class="van-tree-select van-tree-select-more" style="height: 3.5rem;" v-if="activeIndex==3">
              <div class="van-tree-select__nav" style="width: 100%">
                <div class="van-tree-select__nitem" style="width: 100%; border: none">
                  <div class="van-tree-more-tit">面积</div>
                  <div class="tag-box">
                    <div :class="more1 == -1?'tag active':'tag'" @click="moreClick(1, -1)">不限</div>
                    <div :class="item.active?'tag active':'tag'" 
                    v-for="(item, index) in farmhouseRentalArea" v-if='tagshow' @click="moreClick(1, index)">{{item.text}}</div>
                  </div>
                  <div class="van-tree-more-tit">租赁年限</div>
                  <div class="tag-box">
                    <div :class="more2 == -1?'tag active':'tag'" @click="moreClick(2, -1)">不限</div>
                    <div :class="item.active?'tag active':'tag'" 
                    v-for="(item, index) in farmhouseRentalLife" v-if='tagshow' @click="moreClick(2, index)">{{item.text}}</div>
                  </div>
                  <div class="van-tree-more-tit">户型</div>
                  <div class="tag-box">
                    <div :class="more3 == -1?'tag active':'tag'" @click="moreClick(3, -1)">不限</div>
                    <div :class="more3 == index?'tag active':'tag'" 
                    v-for="(item, index) in room" v-if='tagshow' @click="moreClick(3, index)">{{item.text}}</div>
                  </div>
                  <div class="van-tree-more-tit">用途</div>
                  <div class="tag-box">
                    <div :class="more4 == -1?'tag active':'tag'" @click="moreClick(4, -1)">不限</div>
                    <div :class="item.active?'tag active':'tag'" 
                    v-for="(item, index) in rentingUse" v-if='tagshow' @click="moreClick(4, index)">{{item.text}}</div>
                  </div>
                  <div class="van-tree-more-tit">朝向</div>
                  <div class="tag-box">
                    <div :class="item.active?'tag active':'tag'" 
                    v-for="(item, index) in houseOrientation" v-if='tagshow' @click="moreClick(5, index)">{{item.text}}</div>
                  </div>
                  <div class="van-tree-more-tit">房屋类型</div>
                  <div class="tag-box">
                    <div :class="item.active?'tag active':'tag'" 
                    v-for="(item, index) in houseType" v-if='tagshow' @click="moreClick(6, index)">{{item.text}}</div>
                  </div>
                  <div class="van-tree-more-tit">楼层</div>
                  <div class="tag-box">
                    <div :class="item.active?'tag active':'tag'" 
                    v-for="(item, index) in floor" v-if='tagshow' @click="moreClick(7, index)">{{item.text}}</div>
                  </div>
                  <div class="van-tree-more-tit">出租方式</div>
                  <div class="tag-box">
                    <div :class="item.active?'tag active':'tag'" 
                    v-for="(item, index) in rentingStyle" v-if='tagshow' @click="moreClick(8, index)">{{item.text}}</div>
                  </div>
                  <div class="van-tree-more-tit">装修</div>
                  <div class="tag-box">
                    <div :class="item.active?'tag active':'tag'" 
                    v-for="(item, index) in decorationSituation" v-if='tagshow' @click="moreClick(9, index)">{{item.text}}</div>
                  </div>
                  <div class="van-tree-more-tit">房龄</div>
                  <div class="tag-box">
                    <div :class="more10 == -1?'tag active':'tag'" @click="moreClick(10, -1)">不限</div>
                    <div :class="item.active?'tag active':'tag'" 
                    v-for="(item, index) in farmhouseAge" v-if='tagshow' @click="moreClick(10, index)">{{item.text}}</div>
                  </div>
                  <div class="van-tree-more-tit">特色看房</div>
                  <div class="tag-box">
                    <div :class="more11 == -1?'tag active':'tag'" @click="moreClick(11, -1)">不限</div>
                    <div :class="more11 == 1?'tag active':'tag'" @click="moreClick(11, 1)">vr看房</div>
                    <div :class="more11 == 2?'tag active':'tag'" @click="moreClick(11, 2)">视频看房</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-box" v-if="activeIndex==0 || activeIndex==3">
              <div class="condition-btn" @click="clear">重置</div>
              <div class="condition-btn active" @click="confirm(activeIndex)">确定</div>
            </div>
          </div>
        </div>
      </div>
      <div style="padding-top: .91rem;">
        <van-tabs sticky :offset-top=88 v-model="active" animated @click="onClick">
          <van-list
            v-model="loading"
            :finished="finished"
            @load="init"
            >
            <van-tab v-for="item in tabList" :title="item.name" @click="onClick">
              <ul class="list" v-if="list.length > 0">
                <li v-for="(item,index) in list">
                  <p class="top">
                    {{item.updateTime}}
                    <span>
                      <i class="iconfont icon-mip"></i> {{item.accountName}}
                    </span>
                  </p>
                  <div class="center">
                    <router-link :to="{name: 'farmhouseDetail-agent', query: {id: item.id}}">
                      <van-row gutter="10">
                        <van-col span="8" class="left">
                          <div :style="'position: relative; background: url('+ item.logoUrl +') center center / cover;; width: 100%; height: 1.8rem'">
                            <p class="van-ellipsis" style="font-size: .18rem">编号{{item.number}}</p>
                          </div>
                        </van-col>
                        <van-col span="16" class="right">
                          <p class="van-ellipsis">
                            {{item.title}}
                          </p>
                          <p class="van-ellipsis">
                            可租{{item.rentingYears}}年/{{item.bedroom}}室{{item.drawingroom}}厅{{item.coveredArea}}平
                          </p>
                          <p class="van-ellipsis">
                            <i class="iconfont icon-dizhi"></i>
                            {{item.areaName}}
                          </p>
                          <p style="margin-bottom: 0">
                            <span>
                              {{item.rentingPrice}}
                            </span>
                          </p>
                        </van-col>
                      </van-row>
                    </router-link>
                  </div>
                  <p class="bottom">
                    <span v-if="active==2">成交</span>
                    <span class="edit" v-if="active==0 || active==1" @click="edit(item.id, index)">编辑</span>
                    <router-link :to="{name: 'farmhouseDetail-agent', query: {id: item.id}}"><span v-if="active==0 || active==1 || active==2 || active==3" >查看</span></router-link>
                    <span v-if="active==1" @click="del(item.id, index)">删除</span>
                    <!--  @click="delete(item.id, index)" -->
                  </p>
                  <div class="separate"></div>
                </li>
              </ul>
              <template v-if="list.length == 0 && finished">
                <noList :detail='details'/>
              </template>
            </van-tab>
          </van-list>
        </van-tabs>
      </div>
    </div>
    <van-dialog
      v-model="searchShow"
      show-cancel-button
      confirm-button-text='搜索'
      :before-close="beforeClose"
      >
      <van-field
        v-model="info"
        placeholder="请输入搜索词"
      />
    </van-dialog>
    <van-popup v-model="cityShow" position="bottom" :overlay='true'>
      <van-picker :columns="city" show-toolbar @cancel="onCancel" @confirm="onConfirm"/>
    </van-popup>
  </div>
</template>

<script>
import { Dialog, Search } from 'vant';
import noList from "../../common/noList";
  export default {
    name: "farmhouseManage",
    components: {
      noList
    },
    data() {
        return {
          title: '农房管理',
          finished: false,
          loading: false,
          searchData: {},
          page: 1,
          rows: 30,
          tabList: [
            {name: '待审核', index: 0, path: '', type: 1},
            {name: '未通过', index: 1, path: '', type: 2},
            {name: '已通过', index: 2, path: '', type: 3},
            {name: '已成交', index: 3, path: '', type: 4},
          ],
          navList: [
            {name: '区域', index: 0},
            {name: '价格', index: 1},
            {name: '特色', index: 2},
            {name: '更多', index: 3}
          ],
          activeIndex: null,
          active: 0,
          details: '农房',
          list: [],
          // 地区
          mainActiveIndex0: 0,         // 一级选中元素的index
          mainActiveIndex: null,         // 一级选中元素的index
          mainActiveIndex1: null,        // 二级选中元素的index
          mainActiveIndex2: null,        // 三级选中元素的index
          check1: null,
          check2: null,
          more1: null,
          more2: null,
          more3: null,
          more4: null,
          more5: null,
          more6: null,
          more7: null,
          more8: null,
          more9: null,
          more10: null,
          more11: null,
          moreResful: [],
          areaResful: [],
          priceRest: [],
          charRest: [],
          tagshow: false,
          searchShow: false,
          cityShow: false,
          city: [],
          cityName: '武汉',
          cityId: 1,
          info: ''
        }
    },
    methods: {
      edit(id, index){
        this.$router.push({name: 'issueFarm-agent', query: {id}})
      },
      del(id, index){
        Dialog.confirm({
          title: '删除操作',
          message: '是否确定从我的农房列表删除该条数据'
        }).then(() => {
          this.$http.post('appServiceAccount/deleteFarmhouse', {id}).then(res=>{
            if(res.msg=='success'){
              this.list.splice(index, 1)
              this.$toast('删除成功');
            }
          })
        })
      },
      getCity(){
        this.$http.post('appServiceAccount/getCity').then(res=>{
          if(res.msg=='success'){
            this.city = res.data
            this.city.forEach((item)=>{
              item.text = item.name
            })
            this.cityName = this.city[0].text
            this.cityId = this.city[0].id
          }
        })
      },
      onConfirm(picker, values){
        this.cityName = values.name
        this.cityId = values.id
        this.page = 1
        this.init()
        this.onCancel()
      },
      onCancel(){
        this.cityShow = false
      },
      back(){
        this.$router.back(-1)
      },
      onClickLeft(){
        this.cityShow = true
      },
      onClickRight(){
        this.searchShow = true
      },
      onClick(index, title){
        this.page = 1
        this.loading = false
        this.finished = false
        this.show=false;
        var list = this.list
        this.list = []
        if(list.length > 3){
          this.init()
        }
      },
      beforeClose(action, done) {
        if (action === 'confirm') {
          if(this.info != ''){
            this.page = 1
            this.searchData.inputStr = this.info
            this.init()
          } else {
            this.$toast('搜索词不能为空');
          }
          setTimeout(done, 1000);
        } else {
          this.info = ''
          done();
        }
      },
      timeshowClick(o){
        this.timeshow = true
        this.timeType = o
        if(o==1){
          this.timetitle = '选择开始时间'
        } else {
          this.timetitle = '选择结束时间'
        }
      },
      timeclose(value){
        if(value){
          if(this.timeType == 1){
            this.startDate = this.formatDate(Date.parse(new Date(value))).split(' ')[0]
            this.endDate = '选择结束时间'
          } else {
            this.endDate = this.formatDate(Date.parse(new Date(value))).split(' ')[0]
          }
        }
        this.timeshow = false
      },
      init(info, clear){
        var defaultParmas = { page: this.page, rows: this.rows, type: this.active + 1 || 1, cityId: this.cityId || 1 }
        var parmas = Object.assign(defaultParmas, this.searchData)
        this.$http.post('appServiceAccount/getFarmhouseList',parmas).then(res=>{
          if(res.msg == 'success'){
            this.loading = false;
            if(this.page == 1){
              this.list = res.data.rows
            } else {
              this.list = this.list.concat(res.data.rows)
            }
            this.total = res.data.total
            this.page = this.page + 1
            // 数据全部加载完成
            if (this.list.length >= this.total || this.total == 0) {
              this.finished = true;
            }
            this.activeIndex = null
          } else {
            this.finished = true;
          }
        }).catch(error=>{
            this.finished = true;
        })
      },
      formatDate(date){
          date = new Date(date);
          var y=date.getFullYear();
          var m=date.getMonth()+1;
          var d=date.getDate();
          var h=date.getHours();
          var m1=date.getMinutes();
          var s=date.getSeconds();
          h = h<10?("0"+h):h;
          m1 = m1<10?("0"+m1):m1;
          s = s<10?("0"+s):s;
          m = m<10?("0"+m):m;
          d = d<10?("0"+d):d;
          return y+"-"+m+"-"+d+" "+h+":"+m1
      },
      delSellmyhouse(id, type, index){
        var title = ''
        if(type == 1){
          title = '删除'
        } 
        if(type == 2){
          title = '下架'
        } 
        Dialog.confirm({
          title: title + '操作',
          message: '是否确认' + title + '选中的农房'
        }).then(() => {
          this.$http.post('appServiceUser/delSellmyhouse',{id,type}).then(res=>{
            if(res.msg == 'success'){
              if(type == 1){
                this.list.splice(index,1) 
              }
              if(type == 2){
                this.list[index].status = 2
              }
            }
          })
        }).catch(() => {
          // on cancel
        });
      },
      clear(){
        if(this.activeIndex == 0){
          this.mainActiveIndex = null
          this.mainActiveIndex1 = null
          this.mainActiveIndex2 = null          
          this.navList[0].name = '区域'
        }
        if(this.activeIndex == 3){
          this.more1 = null
          this.more2 = null
          this.more3 = null
          this.more4 = null
          this.more5 = null
          this.more6 = null
          this.more7 = null
          this.more8 = null
          this.more9 = null
          this.more10 = null
          this.more11 = null
          
          // 区域
          this.areaList.forEach((item, index) => {
            item.text = item.name
            if(item.children.length > 0){
              item.children.forEach((items, index) => {
                items.text = items.name
                if(items.children.length > 0){
                  items.children.forEach((itemsa, index) => {
                    itemsa.text = itemsa.name
                  })
                }
              })
            }
          })
          // 景点
          this.areaLandList.forEach((item, index) => {
            item.text = item.name
            if(item.children.length > 0){
              item.children.forEach((items, index) => {
                items.text = items.name
              })
            }
          })
          // 面积
          this.farmhouseRentalArea.forEach((item, index) => {
            item.active = false
          })
          // 租赁年限
          this.farmhouseRentalLife.forEach((item, index) => {
            item.active = false
          })
          // 用途
          this.rentingUse.forEach((item, index) => {
            item.active = false
          })
          // 朝向
          this.houseOrientation.forEach((item, index) => {
            item.active = false
          })
          // 房屋类型
          this.houseType.forEach((item, index) => {
            item.active = false
          })
          // 楼层
          this.floor.forEach((item, index) => {
            item.active = false
          })
          // 出租方式
          this.rentingStyle.forEach((item, index) => {
            item.active = false
          })
          // 装修
          this.decorationSituation.forEach((item, index) => {
            item.active = false
          })
          // 房龄
          this.farmhouseAge.forEach((item, index) => {
            item.active = false
          })
        }
      },
      getParameter(){
        this.$http.post('appServiceAccount/getFarmhouseParameter', { cityId: this.cityId }).then(res=>{
          if(res.msg=='success'){
            // 区域
            this.areaList = res.data.areaList
            this.areaList.forEach((item, index) => {
              item.text = item.name
              if(item.children.length > 0){
                item.children.forEach((items, index) => {
                  items.text = items.name
                  if(items.children.length > 0){
                    items.children.forEach((itemsa, index) => {
                      itemsa.text = itemsa.name
                    })
                  }
                })
              }
            })
            // 景点
            this.areaLandList = res.data.areaLandList
            this.areaLandList.forEach((item, index) => {
              item.text = item.name
              if(item.children.length > 0){
                item.children.forEach((items, index) => {
                  items.text = items.name
                })
              }
            })
            // 价格
            this.farmhouseRentPrice = res.data.farmhouseRentPrice
            // 特色
            this.characteristic = res.data.characteristic
            // 面积
            this.farmhouseRentalArea = res.data.farmhouseRentalArea
            this.farmhouseRentalArea.forEach((item, index) => {
              item.active = false
            })
            // 租赁年限
            this.farmhouseRentalLife = res.data.farmhouseRentalLife
            this.farmhouseRentalLife.forEach((item, index) => {
              item.active = false
            })
            // 户型
            this.room = res.data.room
            // 用途
            this.rentingUse = res.data.rentingUse
            this.rentingUse.forEach((item, index) => {
              item.active = false
            })
            // 朝向
            this.houseOrientation = res.data.houseOrientation
            this.houseOrientation.forEach((item, index) => {
              item.active = false
            })
            // 房屋类型
            this.houseType = res.data.houseType
            this.houseType.forEach((item, index) => {
              item.active = false
            })
            // 楼层
            this.floor = res.data.floor
            this.floor.forEach((item, index) => {
              item.active = false
            })
            // 出租方式
            this.rentingStyle = res.data.rentingStyle
            this.rentingStyle.forEach((item, index) => {
              item.active = false
            })
            // 装修
            this.decorationSituation = res.data.decorationSituation
            this.decorationSituation.forEach((item, index) => {
              item.active = false
            })
            // 房龄
            this.farmhouseAge = res.data.farmhouseAge
            this.farmhouseAge.forEach((item, index) => {
              item.active = false
            })
            this.tagshow = true
          }
        });
      },
      // 排序
      areaCheck(index){                       // 景点/区域
          this.mainActiveIndex0 = index
          this.mainActiveIndex = null
          this.mainActiveIndex1 = null
          this.mainActiveIndex2 = null
      },
      onItemClick(type, index) {
        if(type == 1){
          this.mainActiveIndex = index
          this.mainActiveIndex1 = null
          this.mainActiveIndex2 = null
        } 
        if(type == 2){
          this.mainActiveIndex1 = index;
          this.mainActiveIndex2 = null
        }
        if(type == 3){
          this.mainActiveIndex2 = index;
        }
      },
      areaClick(index){
        if(this.activeIndex != index){
          this.activeIndex = index
        } else {
          this.activeIndex = null
        }
        this.searchData = {}
      },
      check(type, index){
        this.page = 1
        if(type == 1){
          this.check1 = index
        }
        if(type == 2){
          this.check2 = index
        }
        if(index != -1){    // 发送请求
          if(type == 1){
            this.priceRest = this.farmhouseRentPrice[index].menuRestfulDictionary
            this.navList[1].name = this.farmhouseRentPrice[index].text
          }
          if(type == 2){
            this.charRest = this.characteristic[index].menuRestfulDictionary
            this.navList[2].name = this.characteristic[index].text
          }
        } else {
          if(type == 1){
            this.priceRest = ''
            this.navList[1].name = '不限'
          }
          if(type == 2){
            this.charRest = ''
            this.navList[2].name = '不限'
          }
        }
        this.submit()
      },
      moreClick(type, index){
        if(type == 1){
          if(index == -1){
            if(this.more1 == index){
              this.tagshow = false
              this.$nextTick(()=>{
                this.more1 = null
                this.tagshow = true
              })
            } else {
              this.tagshow = false
              this.$nextTick(()=>{
                this.more1 = -1
                this.farmhouseRentalArea.forEach((item)=> {
                  item.active = false
                })
                this.tagshow = true
              })
            }
          }
          if(index != -1 && this.more1 != -1){
            this.tagshow = false
            var active = !this.farmhouseRentalArea[index].active
            this.$nextTick(()=>{
              this.farmhouseRentalArea[index].active = active
              this.tagshow = true
            })
          }
        }
        if(type == 2){
          if(index == -1){
            if(this.more2 == index){
              this.tagshow = false
              this.$nextTick(()=>{
                this.more2 = null
                this.tagshow = true
              })
            } else {
              this.tagshow = false
              this.$nextTick(()=>{
                this.more2 = -1
                this.farmhouseRentalLife.forEach((item)=> {
                  item.active = false
                })
                this.tagshow = true
              })
            }
          } 
          if(index != -1 && this.more2 != -1){
            this.tagshow = false
            var active = !this.farmhouseRentalLife[index].active
            this.$nextTick(()=>{
              this.farmhouseRentalLife[index].active = active
              this.tagshow = true
            })
          }
        }
        if(type == 3){
          if(this.more3 == index){
            this.tagshow = false
            this.$nextTick(()=>{
              this.more3 = null
              this.tagshow = true
            })
          } else {
            this.tagshow = false
            this.$nextTick(()=>{
              this.more3 = index
              this.tagshow = true
            })
          }
        }
        if(type == 4){
          if(index == -1){
            if(this.more4 == index){
              this.tagshow = false
              this.$nextTick(()=>{
                this.more4 = null
                this.tagshow = true
              })
            } else {
              this.tagshow = false
              this.$nextTick(()=>{
                this.more4 = -1
                this.rentingUse.forEach((item)=> {
                  item.active = false
                })
                this.tagshow = true
              })
            }
          } 
          if(index != -1 && this.more4 != -1){
            this.tagshow = false
            var active = !this.rentingUse[index].active
            this.$nextTick(()=>{
              this.rentingUse[index].active = active
              this.tagshow = true
            })
          }
        }
        if(type == 5){
          if(index == 0){
            if(this.more5 == index){
              this.tagshow = false
              this.$nextTick(()=>{
                this.more5 = null
                this.houseOrientation[index].active = false
                this.tagshow = true
              })
            } else {
              this.tagshow = false
              this.$nextTick(()=>{
                this.more5 = index
                this.houseOrientation.forEach((item)=> {
                  item.active = false
                })
                this.houseOrientation[index].active = true
                this.tagshow = true
              })
            }
          } 
          if(index != 0 && this.more5 != 0){
            this.tagshow = false
            var active = !this.houseOrientation[index].active
            this.$nextTick(()=>{
              this.houseOrientation[index].active = active
              this.tagshow = true
            })
          }
        }
        if(type == 6){
          if(index == 0){
            if(this.more6 == index){
              this.tagshow = false
              this.$nextTick(()=>{
                this.more6 = null
                this.houseType[index].active = false
                this.tagshow = true
              })
            } else {
              this.tagshow = false
              this.$nextTick(()=>{
                this.more6 = index
                this.houseType.forEach((item)=> {
                  item.active = false
                })
                this.houseType[index].active = true
                this.tagshow = true
              })
            }
          } 
          if(index != 0 && this.more6 != 0){
            this.tagshow = false
            var active = !this.houseType[index].active
            this.$nextTick(()=>{
              this.houseType[index].active = active
              this.tagshow = true
            })
          }
        }
        if(type == 7){
          if(index == 0){
            if(this.more7 == index){
              this.tagshow = false
              this.$nextTick(()=>{
                this.more7 = null
                this.floor[index].active = false
                this.tagshow = true
              })
            } else {
              this.tagshow = false
              this.$nextTick(()=>{
                this.more7 = index
                this.floor.forEach((item)=> {
                  item.active = false
                })
                this.floor[index].active = true
                this.tagshow = true
              })
            }
          }
          if(index != 0 && this.more7 != 0){
            this.tagshow = false
            var active = !this.floor[index].active
            this.$nextTick(()=>{
              this.floor[index].active = active
              this.tagshow = true
            })
          }
        }
        if(type == 8){
          if(index == 0){
            if(this.more8 == index){
              this.tagshow = false
              this.$nextTick(()=>{
                this.more8 = null
                this.rentingStyle[index].active = false
                this.tagshow = true
              })
            } else {
              this.tagshow = false
              this.$nextTick(()=>{
                this.more8 = index
                this.rentingStyle.forEach((item)=> {
                  item.active = false
                })
                this.rentingStyle[index].active = true
                this.tagshow = true
              })
            }
          }
          if(index != 0 && this.more8 != 0){
            this.tagshow = false
            var active = !this.rentingStyle[index].active
            this.$nextTick(()=>{
              this.rentingStyle[index].active = active
              this.tagshow = true
            })
          }
        }
        if(type == 9){
          if(index == 0){
            if(this.more9 == index){
              this.tagshow = false
              this.$nextTick(()=>{
                this.more9 = null
                this.decorationSituation[index].active = false
                this.tagshow = true
              })
            } else {
              this.tagshow = false
              this.$nextTick(()=>{
                this.more9 = index
                this.decorationSituation.forEach((item)=> {
                  item.active = false
                })
                this.decorationSituation[index].active = true
                this.tagshow = true
              })
            }
          }
          if(index != 0 && this.more9 != 0){
            this.tagshow = false
            var active = !this.decorationSituation[index].active
            this.$nextTick(()=>{
              this.decorationSituation[index].active = active
              this.tagshow = true
            })
          }
        }
        if(type == 10){
          if(index == -1){
            if(this.more10 == index){
              this.tagshow = false
              this.$nextTick(()=>{
                this.more10 = null
                this.tagshow = true
              })
            } else {
              this.tagshow = false
              this.$nextTick(()=>{
                this.more10 = -1
                this.farmhouseAge.forEach((item)=> {
                  item.active = false
                })
                this.tagshow = true
              })
            }
          } 
          if(index != -1 && this.more10 != -1){
            this.tagshow = false
            var active = !this.farmhouseAge[index].active
            this.$nextTick(()=>{
              this.farmhouseAge[index].active = active
              this.tagshow = true
            })
          }
        }
        if(type == 11){
          if(index == -1){
            if(this.more11 == index){
              this.tagshow = false
              this.$nextTick(()=>{
                this.more11 = null
                this.tagshow = true
              })
            } else {
              this.tagshow = false
              this.$nextTick(()=>{
                this.more11 = index
                this.tagshow = true
              })
            }
          }
          if(index != -1 && this.more11 != -1){
            this.tagshow = false
            this.$nextTick(()=>{
              this.more11 = index
              this.tagshow = true
            })
          }
        }
      },
      confirm(type){
        if(type == 0){
          let resful = '', name = ''
          if(this.mainActiveIndex0 == 0){            // 区域
            this.navList[0].name = '区域'
            if(this.mainActiveIndex || this.mainActiveIndex == 0) {
              resful = this.areaList[this.mainActiveIndex].restful
              name = this.areaList[this.mainActiveIndex].name
              if(this.mainActiveIndex1 || this.mainActiveIndex1 == 0) {
                resful = this.areaList[this.mainActiveIndex].children[this.mainActiveIndex1].restful
              name = this.areaList[this.mainActiveIndex].children[this.mainActiveIndex1].name
                if(this.mainActiveIndex2 || this.mainActiveIndex2 == 0) {
                  resful = this.areaList[this.mainActiveIndex].children[this.mainActiveIndex1].children[this.mainActiveIndex2].restful
                  name = this.areaList[this.mainActiveIndex].children[this.mainActiveIndex1].children[this.mainActiveIndex2].name
                }
              }
            }
          }
          if(this.mainActiveIndex0 == 1){            // 景点
            this.navList[0].name = '景点'
            if(this.mainActiveIndex || this.mainActiveIndex == 0) {
              resful = this.areaLandList[this.mainActiveIndex].restful
                  name = this.areaLandList[this.mainActiveIndex].name
              if(this.mainActiveIndex1 || this.mainActiveIndex1 == 0) {
                resful = this.areaLandList[this.mainActiveIndex].children[this.mainActiveIndex1].restful
                  name = this.areaLandList[this.mainActiveIndex].children[this.mainActiveIndex1].name
              }
            }
          }
          this.areaResful = resful
          this.navList[0].name = name || this.navList[0].name
        } else {
          this.areaResful = ''
        }
        if(type == 3){
          let resful = []
          this.farmhouseRentalArea.forEach((item)=>{
            if(item.active){
              resful.push(item.menuRestfulDictionary)
            }
          })
          this.farmhouseRentalLife.forEach((item)=>{
            if(item.active){
              resful.push(item.menuRestfulDictionary)
            }
          })
          if(this.more3 !== -1){
            this.room.forEach((item, index)=>{
              if(this.more3 == index){
                resful.push(item.menuRestfulDictionary)
              }
            })
          }
          this.rentingUse.forEach((item)=>{
            if(item.active){
              resful.push(item.menuRestfulDictionary)
            }
          })
          this.houseOrientation.forEach((item)=>{
            if(item.active){
              resful.push(item.menuRestfulDictionary)
            }
          })
          this.houseType.forEach((item)=>{
            if(item.active){
              resful.push(item.menuRestfulDictionary)
            }
          })
          this.floor.forEach((item)=>{
            if(item.active){
              resful.push(item.menuRestfulDictionary)
            }
          })
          this.rentingStyle.forEach((item)=>{
            if(item.active){
              resful.push(item.menuRestfulDictionary)
            }
          })
          this.decorationSituation.forEach((item)=>{
            if(item.active){
              resful.push(item.menuRestfulDictionary)
            }
          })
          this.farmhouseAge.forEach((item)=>{
            if(item.active){
              resful.push(item.menuRestfulDictionary)
            }
          })
          this.isVr = 0
          if(this.more11 == 1){
            this.isVr = 1
          }
          this.isVideo = 0
          if(this.more11 == 2){
            this.isVideo = 1
          }
          this.moreResful = resful
        } else {
          this.moreResful = []
        }
        this.submit()
      },
      submit(){
        this.searchData = {
          rest: this.moreResful.join('') + this.areaResful + this.priceRest + this.charRest,
          isVideo: this.isVideo || 0,
          isVr: this.isVr || 0,
        }
        this.page = 1
        this.init()
      }
    },
    computed: {},
    created: function () {
      this.getParameter()
      this.getCity()
      if(this.$route.query.tab){
        this.active = this.$route.query.tab - 1
      }
    },
    mounted: function () {}
  }
</script>
<style scoped lang="less" type="text/less">
  .head{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
  }
  .van-ellipsis.van-nav-bar__title,.van-hairline--top-bottom.van-actionsheet__header{
    text-align: center
  }
  .farmhouseManage{
    .list{
      li{
        padding: 0;
        .top{
          font-size: .26rem;
          margin:0 .3rem;
          border-bottom: 0.01rem solid #e6e6e6;
          padding: .2rem 0;
          span{
            float: right;
            color: red;
          }
        }
        .center{
          margin:0 .2rem;
          border-bottom: 0.01rem solid #e6e6e6;
          padding: .2rem 0;
          .left{
            img{
              display: block
            }
            height: 1.6rem;
            position: relative;
            p{
              position: absolute;
              width: 100%;
              height: 0.3rem;
              background-color: rgba(0, 0, 0, 0.5);
              bottom: 0;
              color: white;
              line-height: 0.3rem;
              text-indent: 0.2rem;
            }
          }
          .right{
            p:first-child{
              color: black;
              font-size: 0.3rem;
            }
            p{
              color: grey;
              margin-bottom: 0.15rem;
            }
            p:nth-child(4){
              span{
                font-size: 0.24rem;
                color: red;
              }
            }
          }
        }
        .bottom{text-align: right;
          margin:0 0.2rem;
          padding: 0.2rem 0;
          span{
            display: inline-block;
            width: 1.25rem;
            height: 0.5rem;
            border: 0.01rem solid grey;
            text-align: center;
            line-height: 0.5rem;
            border-radius: 0.5rem;
          }
          .edit{
            border-color: #00a0e9;
            color:#00a0e9 ;
          }
          .setting{
            border-color: #00b230;
            color: #00b230 ;
          }
          .orang{
            border-color: #ff6500;
            color: #ff6500 ;
          }
        }
        .separate{
          height: 0.2rem;
          background-color: #f1f0f6;
        }
      }
  }

  .post{
    position: fixed;
    width: 1.13rem;
    height: 1.13rem;
    border-radius: 50%;
    background-color: #00b034;
    text-align: center;
    color: white;
    font-size: 0.24rem;
    padding-top: 0.2rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-shadow: 0 0 0.1rem #00b034;
    box-shadow: 0 0 0.1rem #00b034;
    bottom: 2rem;
    right: 0.3rem;
    p{
      font-size: 0.2rem;
    }
  }
  //弹出层
  .layer{
    .container{
      .common{
        margin: 0.2rem;
        .left{
          color: grey;
          font-size: 0.28rem;
          margin-top: 0.12rem;
        }
        .right{
          input{
            border: 0.01rem solid #e5e5e5;
            background-color: #f1f0f6;
            font-size: 0.28rem;
            width: 100%;
            vertical-align: middle;
            height: 0.7rem;
            padding-left: 0.3rem;
            box-sizing: border-box;
          }
          select{
            border: 0.01rem solid #e5e5e5;
            background-color: #f1f0f6;
            font-size: 0.28rem;
            width: 100%;
            vertical-align: middle;
            height: 0.7rem;
            padding-left: 0.3rem;
            box-sizing: border-box;
          }
        }
        .center{
          button{
            width: 100%;
            height: 0.7rem;
            font-size: 0.2rem;
            background-color: #f1f0f6;
          }
        }
      }
      .bottom{
        padding: 0.15rem;
        button{
          width: 100%;
          height: 0.8rem;
          line-height: 0.8rem;
          background-color: #ff6500;
          text-align: center;
          border-radius: 3px;
          color: white;
          font-size: 0.28rem;
        }
      }
    }
  }
  }

  //条件
  .condition{
    position: relative;
    .top_tab{
      margin: 0 0.3rem;
      li{
        height: 0.85rem;
        float: left;
        width: 25%;
        font-size: 0.24rem;
        text-align: center;
        line-height: 0.85rem;
      }
    }
    .area{
      position: absolute;
      z-index: 999;
      top: 0.85rem;
      width: 100%;
      background-color: white;
      border-top:  0.01rem solid #e6e6e6;
      .regin{
        .left{
          width: 25%;
          float: left;
          font-size: 0.2rem;
          margin-left: 0.2rem;
          box-sizing: border-box;
          div{
            border-bottom: 0.01rem solid #e6e6e6;
            height: 0.8rem;
            text-align: center;
            line-height: 0.8rem;
          }
        }
        .right{
          background-color: #faf9ff;
          border-left: 0.01rem solid #e6e6e6;
          width: 72%;
          float: left;
        }
      }
      .group{
        background-color: white;
      }
      .season{
        position: relative;
        margin: 0 0.2rem;
        p{
          color: grey;
          margin: 0.2rem 0;
        }
        .content{
          border-bottom: 0.01rem solid #e5e5e5;
          padding-bottom: 0.2rem;
          margin-bottom: 0.2rem;
          span{
            display: inline-block;
            height: 0.55rem;
            padding: 0 0.2rem;
            border-radius: 0.55rem;
            background-color: #f1f0f6;
            text-align: center;
            line-height: 0.55rem;
            margin-right: 0.2rem;
            margin-top: 0.15rem;
          }
        }
        .bottom{
          width: 100%;
          margin-top: 1rem;
          span{
            display: inline-block;
            width: 49%;
            background-color: #fea541;
            color: white;
            height: 0.85rem;
            line-height: 0.85rem;
            vertical-align: middle;
            text-align: center;
          }
        }
      }
    }
    .van-tree-select__nitem--active{
      color: #ff6500;
    }
  }
    .condition-box{
      position: absolute;
      z-index: 999;
      background: #fff;
      top: 100%;
      border-top: #F4F4F4 .01rem solid;
      width: 100%;
      height: 4.5rem;
      font-size: 0;
      .van-tree-select__nav{
        height: 100%;
        width: 28%;
        display: inline-block;
        border-right: #F4F4F4 .01rem solid;
        box-sizing: border-box;
        position: relative;
        .van-tree-select__nitem{
          line-height: 1.6;
          padding: .2rem .1rem;
          font-size: .26rem;
          border-right: #F4F4F4 .01rem solid;
          box-sizing: border-box;
        }
      }
      .van-tree-select__nav-top .van-tree-select__nitem--active, .van-tree-select__nav-top .van-tree-select__nitem:active{
        color: #ff6500;
      }
      .btn-box{
        width: 100%;
        height: 1rem;
        font-size: 0;
        border-top: #F4F4F4 .01rem solid;
        border-bottom: #F4F4F4 .01rem solid;
        box-sizing: border-box
      }
      .condition-btn{
        width: 50%;
        height: 100%;
        display: inline-block;
        font-size: .3rem;
        line-height: 1rem;
        text-align: center
      }
      .condition-btn.active{
        background: #ff6500;
        color: #fff;
        margin-top: -.02rem;
      }
      .van-tree-more-tit{
        font-size: .3rem;
        padding-bottom: .1rem;
      }
      .van-tree-select-more{
        padding: 0 .15rem;
        box-sizing: border-box;
        .van-tree-select__nav{
          border: none
        }
        .tag-box{
          border-bottom: #F4F4F4 .01rem solid;
          padding-bottom: .15rem; 
          margin-bottom: .2rem;
        }
        .tag{
          padding: 0 .2rem;
          border-radius: .55rem;
          line-height: .55rem;
          margin-right: .1rem;
          margin-bottom: .1rem;
          background: #f1f0f6;
          display: inline-block;
          &.active{
            background: #ff6500;
            color: #fff
          }
        }
      }
    }
</style>
<style>
  #farmhouseManage .van-hairline--bottom.van-nav-bar .van-ellipsis.van-nav-bar__title{
      text-align: center
  }
</style>