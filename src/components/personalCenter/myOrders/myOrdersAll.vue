<template>
    <div class="myOrdersAll">
      <div class="head">
        <van-nav-bar title="我的订单"
                     @click-left="back"
                     @click-right="onClickRight"
                     left-arrow>
          <van-icon name="search" slot="right" />
        </van-nav-bar>
      </div>
      <div style="padding-top: .91rem; overflow: hidden;">
        <van-tabs @click="onClick" v-model="currentIndex">
          <van-list
              v-model="loading"
              :finished="finished"
              @load="init"
              >
            <van-tab title="全部">
              <ul class="list" v-if="list.length > 0">
                <template v-for="(item, index) in list">
                  <!--待确认-->
                  <li v-if='item.orderStatus == 0'>
                    <p class="top clear">
                      {{item.orderTime}}
                      <span>{{item.statusName}}</span>
                    </p>
                    <div class="imgcenter" @click="detail(item.orderType, item.orderId)">
                      <van-row gutter="20">
                        <van-col span="8" class="left">
                          <div :style="'width: 100%; height: 100%;background: url('+item.businessLogoUrl+');'"></div>
                        </van-col>
                        <van-col span="16" class="right">
                          <p>{{item.businessName}}
                            <span>￥{{item.orderPrice}}</span>
                          </p>
                          <p >数量：{{item.orderNumber}}</p>
                          <p>使用时间：{{item.userTime}}</p>
                          <p>({{item.productType}})</p>
                        </van-col>
                      </van-row>
                    </div>
                    <div class="order">
                    <span>
                      {{item.statusName}}
                    </span>
                        <p>
                          <span>应付总额：</span>￥{{item.orderPrice}}
                        </p>
                      </div>
                    <div class="up clear">
                      <!-- <span class="fix">
                        修改订单
                    </span> -->
                        <span @click="detail(item.orderType, item.orderId)">
                      订单详情
                    </span>
                    </div>
                    <div class="separate"></div>
                  </li>
                  <!--待支付-->
                  <li v-if='item.orderStatus == 1'>
                          <p class="top clear">
                            {{item.orderTime}}
                            <span>{{item.statusName}}</span>
                          </p>
                          <div class="imgcenter" @click="detail(item.orderType, item.orderId)">
                            <van-row gutter="20">
                              <van-col span="8" class="left">
                                <div :style="'width: 100%; height: 100%;background: url('+item.businessLogoUrl+');'"></div>
                              </van-col>
                              <van-col span="16" class="right">
                                <p>{{item.businessName}}
                                  <span>￥{{item.orderPrice}}</span>
                                </p>
                                <p>数量：{{item.orderNumber}}</p>
                                <p>使用时间：{{item.userTime}}</p>
                                <p>({{item.productType}})</p>
                              </van-col>
                            </van-row>
                          </div>
                          <div class="order">
                        <span>
                          {{item.statusName}}
                        </span>
                            <p>
                              <span>应付总额：</span>￥{{item.orderPrice}}
                            </p>
                          </div>
                          <div class="up clear">
                        <span class="pay" @click="buynow(item.orderType,item.orderId)">
                          立即支付
                        </span>
                        <span @click="cancel(item.orderId)">
                          取消订单
                        </span>
                          </div>
                          <div class="separate"></div>
                  </li>
                  <!-- 待使用 -->
                  <li v-if='item.orderStatus == 2'>
                    <p class="top clear">
                      {{item.orderTime}}
                      <span>{{item.statusName}}</span>
                    </p>
                    <div class="imgcenter" @click="detail(item.orderType, item.orderId)">
                      <van-row gutter="20">
                        <van-col span="8" class="left">
                          <div :style="'width: 100%; height: 100%;background: url('+item.businessLogoUrl+');'"></div>
                        </van-col>
                        <van-col span="16" class="right">
                          <p>{{item.businessName}}
                            <span>￥{{item.orderPrice}}</span>
                          </p>
                          <p>数量：{{item.orderNumber}}</p>
                          <p>使用时间：{{item.userTime}}</p>
                          <p>({{item.productType}})</p>
                        </van-col>
                      </van-row>
                    </div>
                    <div class="order">
                      <span>
                        {{item.statusName}}
                      </span>
                        <p>
                          <span>应付总额：</span>￥{{item.orderPrice}}
                        </p>
                      </div>
                      <div class="up clear">
                      <span @click="cancel(item.orderId)">
                        取消订单
                      </span>
                    </div>
                    <div class="separate"></div>
                  </li>
                  <!--已使用-->
                  <li v-if='item.orderStatus == 3'>
                    <p class="top clear">
                      {{item.orderTime}}
                      <span>{{item.statusName}}</span>
                    </p>
                    <div class="imgcenter" @click="detail(item.orderType, item.orderId)">
                      <van-row gutter="20">
                        <van-col span="8" class="left">
                          <div :style="'width: 100%; height: 100%;background: url('+item.businessLogoUrl+');'"></div>
                        </van-col>
                        <van-col span="16" class="right">
                          <p>{{item.businessName}}
                            <span>￥{{item.orderPrice}}</span>
                          </p>
                          <p>数量：{{item.orderNumber}}</p>
                          <p>使用时间：{{item.userTime}}</p>
                          <p>({{item.productType}})</p>
                        </van-col>
                      </van-row>
                    </div>
                    <div class="order">
                    <span>
                      {{item.statusName}}
                    </span>
                        <p>
                          <span>应付总额：</span>￥{{item.orderPrice}}
                        </p>
                      </div>
                    <div class="up clear">
                    <span class="evalute">
                        评价
                    </span>
                    <span @click="detail(item.orderStatus, item.orderId)">
                      订单详情
                    </span>
                    </div>
                    <div class="separate"></div>
                  </li>
                  <!--退款-->
                  <li v-if='item.orderStatus < 0'>
                    <p class="top clear">
                      {{item.orderTime}}
                      <span>{{item.statusName}}</span>
                    </p>
                    <div class="imgcenter" @click="detail(item.orderType, item.orderId)">
                      <van-row gutter="20">
                        <van-col span="8" class="left">
                          <div :style="'width: 100%; height: 100%;background: url('+item.businessLogoUrl+');'"></div>
                        </van-col>
                        <van-col span="16" class="right">
                          <p>{{item.businessName}}
                            <span>￥{{item.orderPrice}}</span>
                          </p>
                          <p>数量：{{item.orderNumber}}</p>
                          <p>使用时间：{{item.userTime}}</p>
                          <p>({{item.productType}})</p>
                        </van-col>
                      </van-row>
                    </div>
                    <div class="order">
                      <span>
                        {{item.statusName}}
                      </span>
                          <p>
                            <span>应付总额：</span>￥{{item.orderPrice}}
                          </p>
                        </div>
                      <div class="up clear">
                      <!-- <span>
                        删除订单
                      </span> -->
                      <span @click="detail(item.orderStatus, item.orderId)">
                        订单详情
                      </span>
                    </div>
                    <div class="separate"></div>
                  </li>
                </template>
              </ul>
              <template v-if="list.length == 0 && finished">
                <noList :detail='details[currentIndex]'/>
              </template>
            </van-tab>
            <van-tab title="待确认">
              <ul class="list" v-if="list.length > 0">
                <!--待确认-->
                <li v-for='item in list' v-if='item.orderStatus == 0'>
                  <p class="top clear">
                    {{item.orderTime}}
                    <span>{{item.statusName}}</span>
                  </p>
                  <div class="imgcenter" @click="detail(item.orderType, item.orderId)">
                    <van-row gutter="20">
                      <van-col span="8" class="left">
                        <div :style="'width: 100%; height: 100%;background: url('+item.businessLogoUrl+');'"></div>
                      </van-col>
                      <van-col span="16" class="right">
                        <p>{{item.businessName}}
                          <span>￥{{item.orderPrice}}</span>
                        </p>
                        <p>数量：{{item.orderNumber}}</p>
                        <p>使用时间：{{item.userTime}}</p>
                        <p>({{item.productType}})</p>
                      </van-col>
                    </van-row>
                  </div>
                  <div class="order">
                  <span>
                    {{item.statusName}}
                  </span>
                      <p>
                        <span>应付总额：</span>￥{{item.orderPrice}}
                      </p>
                    </div>
                    <div class="up clear">
                    <!-- <span class="fix">
                      修改订单
                  </span> -->
                      <span @click="detail(item.orderType, item.orderId)">
                    订单详情
                  </span>
                  </div>
                  <div class="separate"></div>
                </li>
              </ul>
              <template v-if="list.length == 0 && finished">
                <noList :detail='details[currentIndex]'/>
              </template>
            </van-tab>
            <van-tab title="待支付">
              <ul class="list" v-if="list.length > 0">
                <!--待支付-->
                <li v-for='item in list' v-if='item.orderStatus == 1'>
                  <p class="top clear">
                    {{item.orderTime}} {{item.orderStatus}}
                    <span>{{item.statusName}}</span>
                  </p>
                  <div class="imgcenter" @click="detail(item.orderType, item.orderId)">
                    <van-row gutter="20">
                      <van-col span="8" class="left">
                        <div :style="'width: 100%; height: 100%;background: url('+item.businessLogoUrl+');'"></div>
                      </van-col>
                      <van-col span="16" class="right">
                        <p>{{item.businessName}}
                          <span>￥{{item.orderPrice}}</span>
                        </p>
                        <p>数量：{{item.orderNumber}}</p>
                        <p>使用时间：{{item.userTime}}</p>
                        <p>({{item.productType}})</p>
                      </van-col>
                    </van-row>
                  </div>
                  <div class="order">
                    <span>
                      {{item.statusName}}
                    </span>
                        <p>
                          <span>应付总额：</span>￥{{item.orderPrice}}
                        </p>
                      </div>
                      <div class="up clear">
                    <span class="pay" @click="buynow(item.orderType,item.orderId)">
                      立即支付
                    </span>
                    <span @click="cancel(item.orderId)">
                      取消订单
                    </span>
                  </div>
                  <div class="separate"></div>
                </li>
              </ul>
              <template v-if="list.length == 0 && finished">
                <noList :detail='details[currentIndex]'/>
              </template>
            </van-tab>
            <!-- 待使用 -->
            <van-tab title="待使用">
              <ul class="list" v-if="list.length > 0">
                <li v-for='item in list' v-if='item.orderStatus == 2'>
                  <p class="top clear">
                    {{item.orderTime}}
                    <span>{{item.statusName}}</span>
                  </p>
                  <div class="imgcenter" @click="detail(item.orderType, item.orderId)">
                    <van-row gutter="20">
                      <van-col span="8" class="left">
                        <div :style="'width: 100%; height: 100%;background: url('+item.businessLogoUrl+');'"></div>
                      </van-col>
                      <van-col span="16" class="right">
                        <p>{{item.businessName}}
                          <span>￥{{item.orderPrice}}</span>
                        </p>
                        <p>数量：{{item.orderNumber}}</p>
                        <p>使用时间：{{item.userTime}}</p>
                        <p>({{item.productType}})</p>
                      </van-col>
                    </van-row>
                  </div>
                  <div class="order">
                  <span>
                    {{item.statusName}}
                  </span>
                      <p>
                        <span>应付总额：</span>￥{{item.orderPrice}}
                      </p>
                    </div>
                    <div class="up clear">
                    <span @click="cancel(item.orderId)">
                      取消订单
                    </span>
                  </div>
                  <div class="separate"></div>
                </li>
              </ul>
              <template v-if="list.length == 0 && finished">
                <noList :detail='details[currentIndex]'/>
              </template>
            </van-tab>
            <van-tab title="已使用">
              <ul class="list" v-if="list.length > 0">
                <!--已使用-->
                <li v-for='item in list' v-if='item.orderStatus == 3'>
                  <p class="top clear">
                    {{item.orderTime}}
                    <span>{{item.statusName}}</span>
                  </p>
                  <div class="imgcenter" @click="detail(item.orderType, item.orderId)">
                    <van-row gutter="20">
                      <van-col span="8" class="left">
                        <div :style="'width: 100%; height: 100%;background: url('+item.businessLogoUrl+');'"></div>
                      </van-col>
                      <van-col span="16" class="right">
                        <p>{{item.businessName}}
                          <span>￥{{item.orderPrice}}</span>
                        </p>
                        <p>数量：{{item.orderNumber}}</p>
                        <p>使用时间：{{item.userTime}}</p>
                        <p>({{item.productType}})</p>
                      </van-col>
                    </van-row>
                  </div>
                  <div class="order">
                    <span>
                      {{item.statusName}}
                    </span>
                    <p>
                      <span>应付总额：</span>￥{{item.orderPrice}}
                    </p>
                  </div>
                  <div class="up clear">
                    <span class="evalute">
                      评价
                    </span>
                    <span @click="detail(item.orderType, item.orderId)">
                      订单详情
                    </span>
                  </div>
                  <div class="separate"></div>
                </li>
              </ul>
              <template v-if="list.length == 0 && finished">
                <noList :detail='details[currentIndex]'/>
              </template>
            </van-tab>
            <van-tab title="待退款">
              <ul class="list" v-if="list.length > 0">
                <!--退款-->
                <li v-for='item in list' v-if='item.orderStatus < 0'>
                  <p class="top clear">
                    {{item.orderTime}}
                    <span>{{item.statusName}}</span>
                  </p>
                  <div class="imgcenter" @click="detail(item.orderType, item.orderId)">
                    <van-row gutter="20">
                      <van-col span="8" class="left">
                        <div :style="'width: 100%; height: 100%;background: url('+item.businessLogoUrl+');'"></div>
                      </van-col>
                      <van-col span="16" class="right">
                        <p>{{item.businessName}}
                          <span>￥{{item.orderPrice}}</span>
                        </p>
                        <p>数量：{{item.orderNumber}}</p>
                        <p>使用时间：{{item.userTime}}</p>
                        <p>({{item.productType}})</p>
                      </van-col>
                    </van-row>
                  </div>
                  <div class="order">
                    <span>
                      {{item.statusName}}
                    </span>
                        <p>
                          <span>应付总额：</span>￥{{item.orderPrice}}
                        </p>
                      </div>
                    <div class="up clear">
                    <!-- <span>
                      删除订单
                    </span> -->
                    <span @click="detail(item.orderType, item.orderId)">
                      订单详情
                    </span>
                  </div>
                  <div class="separate"></div>
                </li>
              </ul>
              <template v-if="list.length == 0 && finished">
                <noList :detail='details[currentIndex]'/>
              </template>
            </van-tab>
          </van-list>
        </van-tabs>
      </div>

      <!--取消弹窗-->
      <van-dialog
        v-model="foodshow"
        show-cancel-button
        confirmButtonText="取消订单"
        :before-close="beforeClose"
        className="foodDialog"
         >
        <p>您确认要取消订单吗？</p>
        <p>取消后，订单不可恢复</p>
        <div class="wrap">
          <!-- <van-row gutter="5">
            <van-col span="8" class="left">可退数量</van-col>
            <van-col span="16" class="right">
              <span class="num">1张</span>
              <van-stepper v-model="ticketValue" style="float: right"></van-stepper>
            </van-col>
          </van-row>
          <van-row gutter="5">
            <van-col span="8" class="left">订单消费密码</van-col>
            <van-col span="16" class="right">
              <div class="code">
                <van-radio-group v-model="radio">
                  <van-radio name="1">123456</van-radio>
                  <van-radio name="2">123456</van-radio>
                  <van-radio name="3">123456</van-radio>
                </van-radio-group>
              </div>
            </van-col>
          </van-row> -->
          <van-row gutter="5">
            <van-col span="8" class="left">取消原因</van-col>
            <van-col span="16" class="right">
              <div class="choose">
                <select v-model="select">
                  <option value="" disabled selected>请选择取消原因</option>
                  <option value="行程有变">行程有变</option>
                  <option value="房间实际描述和照片不符">房间实际描述和照片不符</option>
                  <option value="无法联系商家">无法联系商家</option>
                  <option value="涨价了">涨价了</option>
                  <option value="商家服务态度差">商家服务态度差</option>
                  <option value="没房了">没房了</option>
                  <option value="设施故障无法继续入住">设施故障无法继续入住</option>
                  <option value="重新预订">重新预订</option>
                  <option value="其他原因">其他原因</option>
                </select>
              </div>
            </van-col>
          </van-row>
          <van-row gutter="5">
            <van-col span="8" class="left">消费费用</van-col>
            <van-col span="16" class="right">
              <span class="num">￥{{orderPrice}}</span>
            </van-col>
          </van-row>
          <van-row gutter="5">
            <van-col span="8" class="left">退还金额</van-col>
            <van-col span="16" class="right">
              <span class="num">￥{{refundAmount}}</span>
            </van-col>
          </van-row>


          <van-row gutter="5">
            <van-col span="8" class="left">退换方式</van-col>
            <van-col span="16" class="right">
              <div>退换原支付方式</div>
              <div class="num">预计1-7个工作日到账</div>
            </van-col>
          </van-row>
          <div class="textwrap">
            <textarea v-model="textarea" placeholder="更多原因(最多200字)"></textarea>
          </div>
        </div>
      </van-dialog>

      <!--右侧弹出层-->
      <van-popup v-model="searchShow"
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
          <div class="common">
            <van-row gutter="6">
              <van-col span="8" class="left">订单时间</van-col>
              <van-col span="8" class="center"><button @click="timeshowClick(1)">{{startDate}}</button></van-col>
              <van-col span="8" class="center"><button @click="timeshowClick(2)">{{endDate}}</button></van-col>
            </van-row>
          </div>

          <div class="bottom">
              <button @click="init(value, false, true)">搜索</button>
              <button style="background-color: #C4C4C6; margin-top: .2rem" @click="init(null,true)">清空筛选条件</button>
          </div>
        </div>
      </van-popup>


      <van-actionsheet :overlay='overlay' v-model="timeshow" :title="timetitle" style="text-align: center">
        <van-datetime-picker
          v-show="timeType == 1"
          type="date"
          v-model="currentDatestart"
          @confirm='timeclose'
          @cancel='timeclose'
        />
        <van-datetime-picker
          v-show="timeType == 2"
          type="date"
          :min-date="currentDatestart"
          v-model="currentDate"
          @confirm='timeclose'
          @cancel='timeclose'
        />
      </van-actionsheet>

    </div>
</template>

<script>
import noList from "../../common/noList";
    export default {
        name: "myOrdersAll",
        components: {
          noList
        },
        data() {
          return {
            details: ['', '待确认', '待支付', '待使用', '已使用', '待退款'],
            currentIndex: 0,
            ticketValue:1,//门票计
            foodshow:false,//美食
            radio:"1",
            select: '',
            textarea: '',
            orderPrice:0,
            refundAmount:0,



	        	searchShow: false,
	        	rows: 20,
	        	page: 1,
	        	list: [],
	        	loading: false,
            finished: false,
            total: 1,
            orderStatus: null,
            currentDate: new Date(),
            minDate: new Date(),
            searchData: {},

            timetitle: '选择时间',
            timeshow: false,
            overlay: true,
            value:'',

            timeType: 1,
            currentDatestart: new Date(),
            currentDate: new Date(),
            startDate: '开始时间',
            endDate: '结束时间',
          }
        },
        methods: {
          back(){
        	  this.$router.back(-1)
          },
          onClickLeft(){
             this.searchShow = false;
          },
          onClickRight(){
         	  this.searchShow=true;
          },
          cancel(orderId){//取消订单
            this.$http.post('appServiceOrder/readyCancelOrder',{orderId}).then(res=>{
              if(res.msg == 'success'){
                if(res.data.canCancel == 1){    // 可以取消
                  if(res.data.isDrawback == 1){
                    this.refundAmount = res.data.refundAmount
                    this.orderPrice = res.data.orderPrice
                    this.orderId = orderId
                  } else {
                    this.refundAmount = 0
                    this.orderPrice = 0
                  }
                } else {
                  this.$toast(res.data.reason);
                }
         	      this.foodshow=true;
              } else {
                this.$toast(res.info);
              }
            })
          },
          detail(type, id){
            console.log(type, id)
            if(type == 3){
              this.$router.push({name: 'tickettoUse', params: { id: id}})
            }
            if(type == 2){
              this.$router.push({name: 'inntoUse', params: { id: id}})
            }
            if(type == 1){
              this.$router.push({name: 'foodtoUse', params: { id: id}})
            }
          },
          beforeClose(action, done){
            if (action === 'confirm') {
              this.$http.post('appServiceOrder/cancelOrder',{orderId:this.orderId,cancelReason:this.select+this.textarea}).then(res=>{
                if(res.msg == 'success'){
                  done();
                  this.$toast('取消成功');
                } else {
                  this.$toast(res.info);
                }
              })
            } else {
              done();
            }
          },
          onClick(index, title) {
            this.currentIndex = index
    		    this.page = 1
            this.loading = true
            this.finished = true
            this.list = []
            this.value = ''
            this.startDate = '开始时间'
            this.endDate = '结束时间'
            if(index == 0){
            	this.orderStatus = null
            	this.init(null, true)
            }else if(index < 5){
            	this.orderStatus = index
            	this.init(index, true)
            }else {
            	this.orderStatus = -3
            	this.init(-3, true)
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
                this.endDate = '结束时间'
              } else {
                this.endDate = this.formatDate(Date.parse(new Date(value))).split(' ')[0]
              }
            }
            this.timeshow = false
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
          init(info, isclick, isSearch){
            // console.log('init...')
            let self = this;
            // setTimeout(() => {
              var parmas = {
                page: this.page,
                rows: this.rows
              }
              if(this.orderStatus){
        			  parmas.orderStatus = this.orderStatus - 1
              }
              if(isclick){
                this.value = ''
                this.startDate = '开始时间'
                this.endDate = '结束时间'
                parmas.page = 1
                this.page = 1
              }
              if(this.value!==''){
                parmas.orderInfo = this.value
              }
              if(isSearch){
                parmas.page = 1
                this.page = 1
              }
              if(this.startDate !== '开始时间' && this.endDate !== '结束时间'){
                parmas.startTime = this.startDate
                parmas.endTime = this.endDate
              }
              this.$http.post('appServiceUser/myorder',parmas).then(res=>{
                if(res.msg == 'success'){
                  if(isclick || isSearch){
                    this.list = res.data.rows
                  } else {
                    this.list = this.list.concat(res.data.rows)
                  }
                  this.loading = false;
                  this.total = res.data.total
                  this.page = this.page + 1
                  if(this.searchShow){
                    this.searchShow = false;
                  }
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
            // }, 500);
          },
        	confirm(){
          },
          buynow(orderType, orderId){
            if(orderType == 1){     // 美食
              var types = 2
              var path = 'payment'
              if(this.$proType == 1){
                window.open('https://m.3xgc.com/#/payment/' + types + '/' + orderId + '?userId=' + JSON.parse(localStorage.getItem('userInfo')).userId, '_self')
                return false
              }
              this.$router.push({name: path, params: {type: types, id: orderId}})
            } else if(orderType == 3) {     // 门票
              var types = 1
              var path = 'payment'
              if(this.$proType == 1){
                window.open('https://m.3xgc.com/#/payment/' + types + '/' + orderId + '?userId=' + JSON.parse(localStorage.getItem('userInfo')).userId, '_self')
                return false
              }
              this.$router.push({name: path, params: {type: types, id: orderId}})
            } else if(orderType == 2) {     // 住宿
              var path = 'intoPayment'
              if(this.$proType == 1){
                window.open('https://m.3xgc.com/#/intoPayment/' + orderId + '?userId=' + JSON.parse(localStorage.getItem('userInfo')).userId, '_self')
                return false
              }
              this.$router.push({name: path, params: { id: orderId }})
            }
          }
        },
        computed: {},
        created: function () {
          // this.init(null)
          if(this.$route.query.tab){
            this.currentIndex = this.$route.query.tab - 0
            if(this.currentIndex == 0){
            	this.orderStatus = null
            }else if(this.currentIndex < 5){
            	this.orderStatus = this.currentIndex
            }else {
            	this.orderStatus = -3
            }
          }
        },
        mounted: function () {},

    }
</script>
<style scoped lang="less" type="text/less">
  .myOrdersAll{
  	.head{
  		position: fixed;
  		left: 0;
  		top: 0;
  		width: 100%;
  		z-index: 999;
    }
    .allHead{
      padding: 0.2rem 0;
      li{
        width: 16%;
        float: left;
        text-align: center;
        position: relative;
        padding-bottom: 0.2rem;
        border-bottom: 0.01rem solid #ff6500;
        span{
          position: absolute;
          top: -0.15rem;
          width: 0.25rem;
          display: inline-block;
          height: 0.25rem;
          border-radius: 50%;
          border: 0.03rem solid red;
          color: red;
        }
      }

    }
    //列表
    .list{
      li{
      	box-sizing: border-box;
        padding: 0.2rem 0.3rem;
        .top{
          padding: 0.2rem 0;
        	font-size: .22rem;
          border-bottom: 0.01rem solid #e6e6e6;
          color:#5f5f5f;
          span{
            color: #ff6500;
            float: right;
            font-size: .24rem;
          }
        }
        .imgcenter{
          padding: 0.2rem 0;
          border-bottom: 0.01rem solid #e6e6e6;
          .left{
            height: 1.6rem;
            div{
              background-size: cover!important;
              background-position: center center!important;
            }
          }
          .right{
            p:first-child{
              font-size: 0.32rem;
              font-weight: bold;
              color: black;
              span{
              	float: right;
              	color: #DC0000;
              	font-weight: 400;
              }
            }
            p{
              color: grey;
              font-size: .26rem;
              margin-bottom: 0.04rem;
            }
          }
        }
        .order{
          padding: 0.2rem 0;
          border-bottom: 0.01rem solid #e6e6e6;
          font-size: 0.26rem;
          p{
            float: right;
            color:#DC0000;
            span{
              color: grey;
            }
          }
        }
        .up{
          padding: 0.2rem 0;
          border-bottom: 0.01rem solid #e6e6e6;
          span{
            width: 1.7rem;
            height: 0.55rem;
            text-align: center;
            line-height: 0.55rem;
            border-radius:0.55rem;
            float: right;
            border: 0.01rem solid #e6e6e6;
            margin-right: 0.2rem;
          }
          .pay{
            background-color: #ff6500;
            color: white;
          }
          .fix{
            background-color: #06a3ea;
            color: white;
          }
          .evalute{
            background-color: #00b034;
            color: white;
          }
        }
        .separate{
          height: 0.2rem;
          background-color: #f1f0f6;
        }
      }
    }




    .foodDialog{
      p{
        font-size: 0.28rem;
        margin-bottom: 0.2rem;
        &:nth-child(1){
          font-size: 0.32rem;
          text-align: center;
          margin-bottom: 0.1rem;
          line-height: 2;
          padding-top: .7rem;
        }
        &:nth-child(2){
          font-size: 0.32rem;
          text-align: center;
          margin-bottom: 0.1rem;
          line-height: 2;
          padding-bottom: 0.4rem;
        }
      }
      .wrap{
        margin: 0 0.6rem 0.6rem 0.6rem;
        .van-row{
          margin-bottom: 0.2rem;
          .left{
            color: grey;
          }
          .right{
            .num{
              color:red;
            }
            .choose{
              width: 100%;
              height: 0.6rem;
              border: 0.01rem solid #e5e5e5;
              select{
                border: none;
                width: 100%;
                height: 100%;
                outline: none;
                background-color: #f1f0f6;
              }
            }
          }
        }
        .textwrap{
          height: 1.85rem;
          border: 0.01rem solid #e5e5e5;
          border-radius: 0.12rem;
          overflow: hidden;
          textarea{
            width: 98%;
            height: 100%;
            border: none;
            background-color: #f1f0f6;
          }
        }

      }
    }
    .foodDialog /deep/ .van-radio{
      padding-bottom: 0.1rem;
    }
    .foodDialog /deep/ .van-dialog__cancel{
      background-color: #fea541;
      color: white;
    }
    .foodDialog /deep/ .van-dialog__confirm{
      background-color: #ff6400;
      color: white;
    }
  }
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
</style>
<style>

  .myOrdersAll .van-nav-bar__title {
    text-align: center
  }
</style>
