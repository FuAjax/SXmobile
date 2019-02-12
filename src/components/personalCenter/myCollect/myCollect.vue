<template>
  <div class="myCollect">
    <div class="head">
      <van-nav-bar :title='title'
        @click-left="back"
        :right-text="doit"
        style="text-align: center"
        left-arrow>
          <van-icon name="arrow-left"
                    slot="left"
                    size="0.3rem"
          />
          <van-icon name="search"
                @click="search"
                    slot="right"
                    size="0.35rem"
          />
          <p slot="right" @click="onClickRight">{{doit}}</p>
      </van-nav-bar>
    </div>
	  <div style="padding-top: .91rem;">
      <div></div>
    <van-tabs @click="onClick" v-model="currentIndex">
      <van-list
        v-model="loading"
        :finished="finished"
        @load="init"
        >
        <van-tab title="农房">
          <!--农房-->
          <van-checkbox-group v-model="result" v-if="list.length > 0">
             <div class="farmhouse" style="position: relative; " v-for="(item,index) in list" >
               <van-row gutter="10">
                <div :style="'position: relative; height: 100%; left: ' + (show ? '1' : '0') + 'rem;'">
                  <div class="checkBox" @click="toggle(index)">
                    <van-checkbox :name="item" ref="checkedList" />
                  </div>
                  <van-col span="24">
                    <!--右边的内容-->
                    <p class="top">
                      {{item.updatetime}}
                    </p>
                    <div class="center">
                      <router-link :to="{name: 'rentDetail', params: {id: item.farmhouseRentalsNumber}}">
                      <van-row gutter="10">
                        <van-col span="8" class="left">
                          <img :src=item.logoUrl alt="">
                        </van-col>
                        <van-col span="16" class="right">
                          <p class="van-ellipsis ">
                            {{item.farmhouseTitle}}
                          </p>
                          <div class="van-ellipsis">
                            <span>朝向: {{item.houseOrientation}}</span>
                            <p v-if="item.isInterview == 0">
                              <span>￥{{item.rentingPrice}}万</span>元/年
                            </p>
                            <p v-else>
                              <span>面谈</span>
                            </p>
                          </div>
                          <div class="van-ellipsis">
                            {{item.fareaName}} - {{item.fvillageName}} - {{item.fstreetName}}
                          </div>
                          <div class="van-ellipsis">
                            装修情况: {{item.decorationSituation}}
                          </div>
                        </van-col>
                      </van-row>
                      </router-link>
                    </div>
                    <div class="bottom">
                      {{item.isTurnover}}
                      <!-- <stars :rate="4.7"></stars> <span class="score">4.0分</span> | 30条评论 -->
                      <p>
                        <span @click="cancel(3, item.id, index)">取消收藏</span>
                        <router-link :to="{name: 'orderTable', params: {id: item.farmhouseRentalsNumber}}"><span class="fix">预约看房</span></router-link>
                      </p>
                    </div>
                  </van-col>
                </div>
               </van-row>
               <div class="separate"></div>
             </div>
          </van-checkbox-group>
          <div class="farmBottom" v-show="show" v-if="list.length > 0">
            <van-checkbox v-model="checked" @change="checkAll">全选</van-checkbox>
            <span @click="cancel(3)">取消收藏</span>
          </div>
          <template v-if="list.length == 0 && finished">
            <noList :detail='details[currentIndex]'/>
          </template>
        </van-tab>

        <van-tab title="农庄">
          <!--农房-->
          <van-checkbox-group v-model="result" v-if="list.length > 0">
            <div class="grange" v-for="(item,index) in list" >
              <van-row gutter="10">
                <div :style="'position: relative; left: ' + (show ? '1' : '0') + 'rem;'">
                  <div class="checkBox" @click="toggle(index)">
                    <van-checkbox :name="item" ref="checkedList" />
                  </div>
                  <van-col span="24">
                    <!--右边的内容-->
                    <div class="center">
                      <router-link :to="{name: 'grangedetail', params: {id: item.grangeNumber}}">
                      <van-row gutter="10">
                        <van-col span="8" class="left">
                          <img :src="item.logoUrl" alt="">
                        </van-col>
                        <van-col span="16" class="right">
                          <p class="van-ellipsis ">
                            {{item.grangeName}}
                          </p>
                          <div class="van-ellipsis">
                            <span>{{item.managementClass}}</span>
                            <p>
                              <span>￥{{item.personConsumption}}</span>
                              起
                            </p>
                          </div>
                          <div class="van-ellipsis">
                            <i class="iconfont icon-dizhi"></i>{{item.addressDetail}}
                          </div>
                          <p class="van-ellipsis">
                            <span v-for="play in item.plays">{{play}}</span>
                          </p>
                        </van-col>
                      </van-row>
                      </router-link>
                    </div>
                    <div class="bottom">
                      <stars :rate="item.totalMark"></stars> <span class="score">{{item.totalMark}}分</span> | {{item.totalAppraisalnumber}}条评论
                      <p>
                        <span @click="cancel(1, item.id, index)">取消收藏</span>
                      </p>
                    </div>
                  </van-col>
                </div>
              </van-row>
              <div class="separate"></div>
            </div>
          </van-checkbox-group>
          <div class="farmBottom" v-show="show" v-if="list.length > 0">
            <van-checkbox v-model="checked" @change="checkAll">全选</van-checkbox>
            <span @click="cancel(1)">取消收藏</span>
          </div>
          <template v-if="list.length == 0 && finished">
            <noList :detail='details[currentIndex]'/>
          </template>
        </van-tab>

        <van-tab title="村庄">
          <!--村庄-->
          <van-checkbox-group v-model="result" v-if="list.length > 0">
            <div class="village" v-for="(item,index) in list" >
              <van-row gutter="10">
                <div :style="'position: relative; left: ' + (show ? '1' : '0') + 'rem;'">
                  <div class="checkBox" @click="toggle(index)">
                    <van-checkbox :name="item" ref="checkedList" />
                  </div>
                  <van-col span="24">
                    <!--右边的内容-->
                    <router-link :to="{name: 'villageDetail', params: {id: item.villageNumber}}">
                    <div class="center">
                      <van-row gutter="10">
                        <van-col span="8" class="left">
                          <img :src="item.logoUrl" alt="">
                        </van-col>
                        <van-col span="16" class="right">
                          <p class="van-ellipsis ">
                          {{item.flanspacePlaceName}}
                            <span v-if="item.beautifulCountry != ''">美丽乡村</span>
                          </p>
                          <div class="van-ellipsis">
                            <span>已租出{{item.completedFarmhouse}}套</span>
                            <p>
                              <span>{{item.rentingAverage}}万元</span>/年
                            </p>
                          </div>
                          <div class="van-ellipsis">
                            <i class="iconfont icon-dizhi"></i>{{item.fareaName}} - {{item.fstreetName}} - {{item.flanspacePlaceName}}
                            <p>村庄均价</p>
                          </div>
                          <p class="van-ellipsis">
                            <span v-for="play in item.characteristics">{{play}}</span>
                          </p>
                        </van-col>
                      </van-row>
                    </div>
                    </router-link>
                    <div class="bottom">
                      <span class="one">{{item.rentFarmhouse}}套</span>在租农房
                      <p>
                        <span @click="cancel(4, item.id, index)">取消收藏</span>
                      </p>
                    </div>
                  </van-col>
                </div>
              </van-row>
              <div class="separate"></div>
            </div>
          </van-checkbox-group>
          <div class="farmBottom" v-show="show" v-if="list.length > 0">
            <van-checkbox v-model="checked" @change="checkAll">全选</van-checkbox>
            <span @click="cancel(4)">取消收藏</span>
          </div>
          <template v-if="list.length == 0 && finished">
            <noList :detail='details[currentIndex]'/>
          </template>
        </van-tab>

        <van-tab title="景点">
          <!--景点-->
          <van-checkbox-group v-model="result" v-if="list.length > 0">
            <div class="scenic" v-for="(item,index) in list" >
              <van-row gutter="10">
                <div :style="'position: relative; left: ' + (show ? '1' : '0') + 'rem;'">
                  <div class="checkBox" @click="toggle(index)">
                    <van-checkbox :name="item" ref="checkedList" />
                  </div>
                  <van-col span="24">
                    <!--右边的内容-->
                    <router-link :to="{name:'scenicDetail', params: {id: item.lanspacePlaceNumber}}">
                    <div class="center">
                      <van-row gutter="10">
                        <van-col span="8" class="left">
                          <img :src=item.logoUrl alt="">
                        </van-col>
                        <van-col span="16" class="right">
                          <p class="van-ellipsis ">
                            {{item.lanspacePlaceName}}
                            <span>{{item.lanspacePlaceGrade}}级风景区</span>
                          </p>
                          <div class="van-ellipsis">
                            <stars :rate="item.totalMark"></stars><span class="four">{{item.totalMark}}分</span>
                            <p>
                              <span>￥{{item.totalAppraisalnumber}}</span>/人
                            </p>
                          </div>
                          <div class="van-ellipsis">
                            <i class="iconfont icon-dizhi"></i>{{item.fcityName}} - {{item.fareaName}} - {{item.lanspacePlaceName}}
                          </div>
                          <p class="van-ellipsis">
                            <span v-for="play in item.characteristics">{{play}}</span>
                          </p>
                        </van-col>
                      </van-row>
                    </div>
                    </router-link>
                    <div class="comment">
                      <span>金刚点评：</span>{{item.comment}}
                    </div>
                    <div class="bottom">
                      <p>
                        <span @click="cancel(2, item.id, index)">取消收藏</span>
                      </p>
                    </div>
                  </van-col>
                </div>
              </van-row>
              <div class="separate"></div>
            </div>
          </van-checkbox-group>
          <div class="farmBottom" v-show="show" v-if="list.length > 0">
            <van-checkbox v-model="checked" @change="checkAll">全选</van-checkbox>
            <span @click="cancel(2)">取消收藏</span>
          </div>
          <template v-if="list.length == 0 && finished">
            <noList :detail='details[currentIndex]'/>
          </template>
        </van-tab>

        <van-tab title="资讯">
          <!--资讯-->
          <van-checkbox-group v-model="result" v-if="list.length > 0">
            <div class="infor" v-for="(item,index) in list" >
              <van-row gutter="10">
                <div :style="'position: relative; left: ' + (show ? '1' : '0') + 'rem;'">
                  <div class="checkBox" @click="toggle(index)">
                    <van-checkbox :name="item" ref="checkedList" />
                  </div>
                  <van-col span="24">
                    <!--右边的内容-->
                    <router-link :to="{name:'textDetail', params: {id: item.informationId}}">
                    <p class="text">
                      {{item.informationTitle}}
                    </p>
                    </router-link>
                    <div class="bottom">
                      {{item.createTime}}
                      <p>
                        <span @click="cancel(5,item.id, index)">取消收藏</span>
                      </p>
                    </div>
                  </van-col>
                </div>
              </van-row>
              <div class="separate"></div>
            </div>
          </van-checkbox-group>
          <div class="farmBottom" v-show="show" v-if="list.length > 0">
            <van-checkbox v-model="checked" @change="checkAll">全选</van-checkbox>
            <span @click="cancel(5)">取消收藏</span>
          </div>
          <template v-if="list.length == 0 && finished">
            <noList :detail='details[currentIndex]'/>
          </template>
        </van-tab>
      </van-list>
      </van-tabs>
    </div>


    <!--右侧弹出层-->
    <van-popup v-model="popshow"
      class="layer"
      :close-on-click-overlay=false
      position="right">
      <div class="container">
        <van-nav-bar
          title="筛选"
          left-arrow
          @click-left="onClickLeft"
        />
        <div class="common">
          <van-row gutter="10">
            <van-col span="8" class="left">标题搜索</van-col>
            <van-col span="16" class="right">
              <input type="text" v-model="value" placeholder="请输入标题搜索">
            </van-col>
          </van-row>
        </div>

        <div class="bottom">
          <button @click="init(value, true)">搜索</button>
          <button style="background-color: #C4C4C6; margin-top: .2rem" @click="init(null,true)">清空筛选条件</button>
        </div>
      </div>
    </van-popup>

  </div>
</template>

<script>
  import { Dialog } from 'vant';
  import noList from "../../common/noList";
  import stars from 'com/common/rates'
    export default {
        name: "myCollect",
        components:{stars,noList},
        data() {
          return {
            popshow: false,
            value: '',
            details: ['收藏农房', '收藏农庄', '收藏村庄', '收藏景点', '收藏咨询'],
            currentIndex: 0,
            doit: '操作',
            title: '我的收藏',
            checkedList: [],
            result: [],
            list: [],
            show: false,
            loading: false,
            finished: false,
            fourSpan:['有山','拎包入住'],
            checked: false,
            path: 'appServiceUser/farmhouseCollection',
            page: 1,
            rows: 20,
            ischeck: true,
            aaa: true
          }
        },
        methods: {
          back(){
            this.$router.back(-1)
          },
          onClickLeft(){
            this.popshow = false
          },
          onClickRight(){
            if(this.show){
              this.doit = '操作'
              this.show=false;
            }else{
              this.doit = '取消'
              this.show=true;
            }
          },
          search(){
            this.popshow = true
          },
          onClick(index, title){
            this.currentIndex = index
    		    this.page = 1
            this.loading = false
            this.finished = false
            this.doit = '操作'
            this.title = '我的收藏'
            this.value = ''
            this.show=false;
            this.list = []
            if(index == 0){
              this.path = 'appServiceUser/farmhouseCollection'
            }
            if(index == 1){
              this.path = 'appServiceUser/grangeCollection'
            }
            if(index == 2){
              this.path = 'appServiceUser/villageCollection'
            }
            if(index == 3){
              this.path = 'appServiceUser/landspaceplaceCollection'
            }
            if(index == 4){
              this.path = 'appServiceUser/informationCollection'
            }
          },
          init(info, isclick){
            var parmas = {
              page: this.page,
              rows: this.rows
            }
            this.show=false
            if(this.value && this.value !== ''){
              this.page = 1
              this.popshow=false
              this.title = '我的收藏-查询结果'
              parmas.collectinfo = this.value
              parmas.page = 1
            }
            if(info === null){
              this.popshow=false
              this.title = '我的收藏'
            }

            this.$http.post(this.path, parmas).then(res=>{
              if(res.msg == 'success'){
                if(isclick){
                  this.list = res.data.rows
                } else {
                  this.list = this.list.concat(res.data.rows)
                }
                this.checkedList = []
                this.list.forEach((item)=>{
                  this.checkedList.push(false);
                })
                this.loading = false;
                this.total = res.data.total
                this.page = this.page + 1

                // 数据全部加载完成
                if (this.list.length == this.total || this.total == 0) {
                  this.finished = true;
                }
              }else {
                this.finished = true;
              }
            }).catch(error=>{
                this.finished = true;
            })
          },
          toggle(index) {
            this.$refs.checkedList[index].toggle();
            if(this.result.length == this.list.length){
              this.checked = true
            } else {
              this.checked = false
            }
          },
          checkAll(){
            var check = []
            if(this.checked){
              this.list.forEach((item)=>{
                this.result = this.list
              })
            }else{
              this.list.forEach((item)=>{
                this.result = []
              })
            }
          },
          cancel(type, id, index){
            if(id){                // 单条删除
              Dialog.confirm({
                title: '删除操作',
                message: '是否确认删除该收藏记录'
              }).then(() => {
                this.$http.post('appServiceUser/cancelCollection',{type, ids: id}).then(res=>{
                  if(res.msg == 'success'){
                    this.list.splice(index,1)
                  }
                })
              }).catch(() => {
                // on cancel
              });
            } else {
              if(this.result.length > 0) {
                var id = ''
                this.result.forEach((item)=>{
                  id += item.id
                  id += ','
                })
                var ids = id.slice(0,id.length-1)
                 Dialog.confirm({
                  title: '删除操作',
                  message: '是否确认删除选中收藏记录'
                }).then(() => {
                  this.$http.post('appServiceUser/cancelCollection',{type, ids}).then(res=>{
                    if(res.msg == 'success'){
                      this.page = 1
                      this.init(null, true)
                    }
                  })
                }).catch(() => {
                  // on cancel
                });
              } else {            // 未选择
              }
            }
          }
        },
        computed: {},
        created: function () {          
          if(this.$route.query.tab){
            this.currentIndex = this.$route.query.tab - 0
            if(this.currentIndex == 0){
              this.path = 'appServiceUser/farmhouseCollection'
            }
            if(this.currentIndex == 1){
              this.path = 'appServiceUser/grangeCollection'
            }
            if(this.currentIndex == 2){
              this.path = 'appServiceUser/villageCollection'
            }
            if(this.currentIndex == 3){
              this.path = 'appServiceUser/landspaceplaceCollection'
            }
            if(this.currentIndex == 4){
              this.path = 'appServiceUser/informationCollection'
            }
          }
        },
        mounted: function () {},

    }
</script>

<style scoped lang="less" type="text/less">
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
  .text{
    padding: .2rem .2rem 0 .2rem ;
    box-sizing: border-box;
  }
  .checkBox{
    padding-top: 0.2rem;
    display: inline-block;
    position: absolute;
    width: .6rem;    height: 100%;
    left: -.8rem;
  }
    .head{
  		position: fixed;
  		left: 0;
  		top: 0;
  		width: 100%;
  		z-index: 999;
    }
    .myCollect{
    overflow: hidden;
        .farmhouse{
          padding: 0.2rem 0;
          .top{
            margin:0 0.2rem;
            border-bottom: 0.01rem solid #e6e6e6;
            padding: 0.2rem 0;
          }
          .center{
            margin:0 0.2rem;
            border-bottom: 0.01rem solid #e6e6e6;
            padding: 0.2rem 0;
            .left{
              height: 1.7rem;
              position: relative;
              p{
                position: absolute;
                width: 95%;
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
               font-size: 0.32rem;
              }
             div{
                color: grey;
               margin-top: 0.15rem;
               p{
                 float: right;
                 span{
                   color: red;
                   font-size: 0.24rem;
                 }
               }
             }
              p:nth-child(4){
                padding-top: 0.1rem;
                height: 0.5rem;
                span{
                  font-size: 0.18rem;
                  padding: 0 0.1rem;
                  border-radius: 0.05rem;
                  margin-right: 0.15rem;
                }
                span:first-child{
                  border: 0.01rem #099b4c solid;
                  color:#099b4c;
                }
                span:nth-child(2){
                  border: 0.01rem #00a0e9 solid;
                  color:#00a0e9;
                }
                span:nth-child(3){
                  border: 0.01rem #eb3d00 solid;
                  color:#eb3d00;
                }
                span:nth-child(4){
                  border: 0.01rem #e3007b solid;
                  color:#e3007b;
                }
              }
            }
          }
          .bottom{
            position: relative;
            margin:0 0.2rem;
            padding: 0.2rem 0;
            color: grey;
            .score{
              color: red;
            }
            p{
              position: absolute;
              right: 0;
              top: 50%;
              margin-top: -0.25rem;
              .fix{
                background-color: #ff6400;
                color: white;
              }
              span{
                width: 1.6rem;
                height: 0.55rem;
                display: inline-block;
                border-radius: 0.55rem;
                border: 0.01rem solid #e6e6e6;
                text-align: center;
                line-height: 0.55rem;
              }
            }
          }
        }
        .farmBottom{
        position: fixed;
        background-color: white;
        width: 100%;
        z-index: 99;
        bottom: 0;
        padding: 0.2rem;
        border-top: 0.01rem #e6e6e6 solid;
        box-sizing: border-box;
        .van-checkbox{
          display: inline-block;
          vertical-align: middle;
        }
        span{
          display: inline-block;
          width: 1.6rem;
          height: 0.5rem;
          border-radius: 0.5rem;
          text-align: center;
          line-height: 0.5rem;
          background-color: #ff6500;
          color: white;
          vertical-align: middle;
          margin-left: 0.2rem;
        }
      }

        .grange{
          padding: 0.2rem 0;
          .top{
            margin:0 0.2rem;
            border-bottom: 0.01rem solid #e6e6e6;
            padding: 0.2rem 0;
          }
          .center{
            margin:0 0.2rem;
            border-bottom: 0.01rem solid #e6e6e6;
            padding: 0.2rem 0;
            .left{
              height: 1.7rem;
              position: relative;
              p{
                position: absolute;
                width: 95%;
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
                font-size: 0.32rem;
              }
              div{
                color: grey;
                margin-top: 0.15rem;
                p{
                  float: right;
                  span{
                    color: red;
                    font-size: 0.24rem;
                    font-weight: bold;
                  }
                }
              }
              p:nth-child(4){
                padding-top: 0.1rem;
                height: 0.5rem;
                span{
                  font-size: 0.18rem;
                  padding: 0 0.1rem;
                  border-radius: 0.05rem;
                  margin-right: 0.15rem;
                }
                span:first-child{
                  border: 0.01rem #099b4c solid;
                  color:#099b4c;
                }
                span:nth-child(2){
                  border: 0.01rem #00a0e9 solid;
                  color:#00a0e9;
                }
                span:nth-child(3){
                  border: 0.01rem #eb3d00 solid;
                  color:#eb3d00;
                }
                span:nth-child(4){
                  border: 0.01rem #e3007b solid;
                  color:#e3007b;
                }
              }
            }
          }
          .bottom{
            position: relative;
            margin:0 0.2rem;
            padding: 0.2rem 0;
            color: grey;
            .score{
              color: red;
            }
            p{
              position: absolute;
              right:0%;
              top: 50%;
              margin-top: -0.25rem;
              .fix{
                background-color: #ff6400;
                color: white;
              }
              span{
                width: 1.6rem;
                height: 0.55rem;
                display: inline-block;
                border-radius: 0.55rem;
                border: 0.01rem solid #e6e6e6;
                text-align: center;
                line-height: 0.55rem;
              }
            }
          }
        }

        .village{
          padding: 0.2rem 0;
          .top{
            margin:0 0.2rem;
            border-bottom: 0.01rem solid #e6e6e6;
            padding: 0.2rem 0;
          }
          .center{
            margin:0 0.2rem;
            border-bottom: 0.01rem solid #e6e6e6;
            padding: 0.2rem 0;
            .left{
              height: 1.7rem;
              position: relative;
              p{
                position: absolute;
                width: 95%;
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
                font-size: 0.32rem;
                span{
                  display: inline-block;
                  width: 1.3rem;
                  height: 0.3rem;
                  text-align: center;
                  line-height: 0.3rem;
                  background-color: #ebf8ee;
                  color: #5ac074;
                  border-radius: 0.3rem;
                  font-size: 0.15rem;
                  vertical-align: middle;
                }
              }
              div{
                color: grey;
                margin-top: 0.15rem;
                p{
                  float: right;
                  span{
                    color: red;
                    font-size: 0.24rem;
                  }
                }
              }
              p:nth-child(4){
                padding-top: 0.1rem;
                height: 0.4rem;
                span{
                  font-size: 0.18rem;
                  padding: 0 0.1rem;
                  border-radius: 0.05rem;
                  margin-right: 0.15rem;
                }
                span:first-child{
                  border: 0.01rem #099b4c solid;
                  color:#099b4c;
                }
                span:nth-child(2){
                  border: 0.01rem #00a0e9 solid;
                  color:#00a0e9;
                }
                span:nth-child(3){
                  border: 0.01rem #eb3d00 solid;
                  color:#eb3d00;
                }
                span:nth-child(4){
                  border: 0.01rem #e3007b solid;
                  color:#e3007b;
                }
              }
            }
          }
          .bottom{
            position: relative;
            margin:0 0.2rem;
            padding: 0.2rem 0;
            color: grey;
            .one{
             color: black;
              font-size: 0.26rem;
            }
            p{
              position: absolute;
              right: 0;
              top: 50%;
              margin-top: -0.25rem;
              .fix{
                background-color: #ff6400;
                color: white;
              }
              span{
                width: 1.6rem;
                height: 0.55rem;
                display: inline-block;
                border-radius: 0.55rem;
                border: 0.01rem solid #e6e6e6;
                text-align: center;
                line-height: 0.55rem;
              }
            }
          }
        }

        .scenic{
          padding: 0.2rem 0;
          .top{
            margin:0 0.2rem;
            border-bottom: 0.01rem solid #e6e6e6;
            padding: 0.2rem 0;
          }
          .center{
            margin:0 0.2rem;
            border-bottom: 0.01rem solid #e6e6e6;
            padding: 0.2rem 0;
            .left{
              height: 1.7rem;
              position: relative;
              p{
                position: absolute;
                width: 95%;
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
                font-size: 0.32rem;
                span{
                  display: inline-block;
                  height: 0.3rem;
                  text-align: center;
                  line-height: 0.3rem;
                  background-color: #ebf8ee;
                  color: #5ac074;
                  border-radius: 0.3rem;
                  font-size: 0.15rem;
                  vertical-align: middle;
                  padding: 0 0.12rem;
                }
              }
              div{
                color: grey;
                margin-top: 0.1rem;
                p{
                  float: right;
                  span{
                    color: red;
                    font-size: 0.24rem;
                  }
                }
                .four{
                  color: red;
                  vertical-align: middle;
                  margin-left: 0.15rem;
                }
              }
              p:nth-child(4){
                padding-top: 0.1rem;
                height: 0.4rem;
                span{
                  font-size: 0.18rem;
                  padding: 0 0.1rem;
                  border-radius: 0.05rem;
                  margin-right: 0.15rem;
                }
                span:first-child{
                  border: 0.01rem #099b4c solid;
                  color:#099b4c;
                }
                span:nth-child(2){
                  border: 0.01rem #00a0e9 solid;
                  color:#00a0e9;
                }
                span:nth-child(3){
                  border: 0.01rem #eb3d00 solid;
                  color:#eb3d00;
                }
                span:nth-child(4){
                  border: 0.01rem #e3007b solid;
                  color:#e3007b;
                }
              }
            }
          }
          .bottom{
            position: relative;
            margin:0 0.2rem;
            padding: 0.2rem 0;
            color: grey;
            .one{
              color: black;
              font-size: 0.26rem;
            }
            p{
              float: right;
              .fix{
                background-color: #ff6400;
                color: white;
              }
              span{
                width: 1.6rem;
                height: 0.55rem;
                display: inline-block;
                border-radius: 0.55rem;
                border: 0.01rem solid #e6e6e6;
                text-align: center;
                line-height: 0.55rem;
              }
            }
          }
          .comment{
            margin:0 0.2rem;
            margin-top: 0.2rem;
            padding: 0.2rem 0;
            border: 0.01rem solid #e6e6e6;
            background-color: #faf9ff;
            line-height: 0.3rem;
            border-radius: 0.1rem;
            span{
              color: grey;
            }
          }
        }

        .infor{
          .text{
            font-size: 0.32rem;
            color: black;
          }
          .bottom{
            position: relative;
            margin:0 0.2rem;
            padding: 0.2rem 0;
            color: grey;
            .one{
              color: black;
              font-size: 0.26rem;
            }
            p{
              float: right;
              .fix{
                background-color: #ff6400;
                color: white;
              }
              span{
                width: 1.6rem;
                height: 0.55rem;
                display: inline-block;
                border-radius: 0.55rem;
                border: 0.01rem solid #e6e6e6;
                text-align: center;
                line-height: 0.55rem;
              }
            }
          }
        }
          .separate{
            margin-top: 0.2rem;
            height: 0.2rem;
            background-color: #f1f0f6;
          }
          .scenic:last-of-type .separate,.infor:last-of-type .separate,
          .farmhouse:last-of-type .separate,.grange:last-of-type .separate,.village:last-of-type .separate{
            height: 0
          }
    }
</style>
<style>
.myCollect .van-tab{
  width: 20%; flex: 0 0 20%;
}
.myCollect .van-ellipsis.van-nav-bar__title,.van-hairline--top-bottom.van-actionsheet__header{
  text-align: center
}
.myCollect .van-nav-bar__right i,.myCollect .van-nav-bar__right p{
  display: inline-block;
  padding: 0 .06rem;
  margin-left:.1rem
}
.myCollect .van-nav-bar__right i{
  padding: 0  .1rem;
}

</style>
