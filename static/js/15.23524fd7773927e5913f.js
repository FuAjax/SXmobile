webpackJsonp([15],{"2MnC":function(t,e,s){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("p",[this._v(this._s(this.confirm))])])},staticRenderFns:[]};var a=s("VU/8")({name:"footer",data:function(){return{confirm:"确定预约"}}},i,!1,function(t){s("JAqN")},"data-v-9a63f2e2",null);e.a=a.exports},"89c0":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("GgDs"),a=s("2MnC"),n={name:"grangeindex",data:function(){return{cityname:"上海",scenic_list:[{text:"木兰天池风景区(5A)",src:"../../../../static/images/slide_01.jpg",color:"#ff6500"},{text:"木兰天池风景区(5A)",src:"../../../../static/images/slide_01.jpg",color:"#8ab8d4"},{text:"木兰天池风景区(5A)",src:"../../../../static/images/slide_01.jpg",color:"#e38800"},{text:"木兰天池风景区(5A)",src:"../../../../static/images/slide_01.jpg",color:"#b4b4b9"},{text:"木兰天池风景区(5A)",src:"../../../../static/images/slide_01.jpg",color:"#b4b4b9"}],play_list:[{text:"木兰天池风景区(5A)",src:"../../../../static/images/slide_01.jpg",color:"#ff6500"},{text:"木兰天池风景区(5A)",src:"../../../../static/images/slide_01.jpg",color:"#8ab8d4"},{text:"木兰天池风景区(5A)",src:"../../../../static/images/slide_01.jpg",color:"#e38800"},{text:"木兰天池风景区(5A)",src:"../../../../static/images/slide_01.jpg",color:"#b4b4b9"},{text:"木兰天池风景区(5A)",src:"../../../../static/images/slide_01.jpg",color:"#b4b4b9"}],food_list:[{text:"木兰天池风景区(5A)",src:"../../../../static/images/slide_01.jpg",color:"#ff6500"},{text:"木兰天池风景区(5A)",src:"../../../../static/images/slide_01.jpg",color:"#8ab8d4"},{text:"木兰天池风景区(5A)",src:"../../../../static/images/slide_01.jpg",color:"#e38800"},{text:"木兰天池风景区(5A)",src:"../../../../static/images/slide_01.jpg",color:"#b4b4b9"},{text:"木兰天池风景区(5A)",src:"../../../../static/images/slide_01.jpg",color:"#b4b4b9"}],scenic:[{src:"../../../../static/images/slide_01.jpg",spot:"木兰天池",a:"AAAAA级风景区",score:4,yuan:35}],detail:""}},methods:{init:function(){var t=this,e=this.$route.params.id;this.$http.post("appServiceFarmhouse/getVillageDetail",{villageNumber:e}).then(function(e){console.log(e),t.detail=e.data.detail,console.log(t.detail)})}},computed:{},created:function(){this.init()},mounted:function(){},destroy:function(){}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"wrap"},[s("div",{staticClass:"container"},[s("div",{staticClass:"tab"},[s("div",{staticClass:"scenic_wrap"},[s("van-row",{attrs:{gutter:"20"}},[s("van-col",{attrs:{span:"8"}},[s("div",{staticClass:"left"},[s("img",{attrs:{src:t.detail.banner[0],alt:""}})])]),t._v(" "),s("van-col",{attrs:{span:"16"}},[s("div",{staticClass:"right"},[s("router-link",{staticClass:"mulan",attrs:{to:"",tag:"div"}},[s("span",{staticClass:"lake"},[t._v(t._s(t.detail.villageName))])]),t._v(" "),s("div",{staticClass:"grade"},[s("div",{staticClass:"bot"},[s("p",[t._v("可租"+t._s(t.detail.rentingYears)+"年/")]),t._v(" "),s("p",[t._v(" "+t._s(t.detail.floor)+"层"+t._s(t.detail.bedroom)+"室/")]),t._v(" "),s("p",[t._v(t._s(t.detail.floorSpace)+"平")]),t._v(" "),s("p",{staticClass:"much"},[s("span",[t._v("￥"+t._s(t.detail.rentingAverage)+"万元")]),t._v("/年\n                    ")])])]),t._v(" "),s("div",{staticClass:"position"},[s("div",{staticClass:"name"},[s("i",{staticClass:"iconfont icon-dizhi"}),t._v(t._s(t.detail.villageName))]),t._v(" "),s("div",{staticClass:"pirce"})]),t._v(" "),s("div",{staticClass:"specil"},t._l(t.detail.characteristics,function(e,i){return s("div",{staticClass:"data"},[s("span",[t._v(t._s(e))])])}))],1)])],1)],1)])]),t._v(" "),s("div",{staticClass:"test"})]),t._v(" "),s("div",{staticClass:"blank"})])},staticRenderFns:[]};var c=s("VU/8")(n,o,!1,function(t){s("JFIA")},"data-v-1ce95382",null).exports,r={name:"message",data:function(){return{minHour:10,maxHour:20,minDate:new Date,maxDate:new Date(2019,10,1),currentDate:new Date,username:"",id:"",phone:"",date:null,time:"",showDate:!1,showTime:!1,columns:["全天可看","上午（08：00-12:00）","下午（12：00-18:00）"],url:"http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg",confirm:"确定预约",rows:[],introduct:"",faccountId:"",timeIndex:"",detail:""}},methods:{dateShow:function(){this.showDate=!0},cancel:function(){this.showDate=!1,this.showTime=!1},confirmDate:function(t){this.date=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate(),this.showDate=!1,this.showTime=!1},onConfirm:function(t,e){this.timeIndex=e,console.log(t),this.time=t,this.showDate=!1,this.showTime=!1},timeShow:function(){this.showTime=!0},order:function(){var t=this,e=this.$route.params.id;this.$http.post("appServiceFarmhouse/getVillageDetail",{villageNumber:e}).then(function(e){console.log(e),t.detail=e.data.detail,t.id=e.data.detail.id;JSON.parse(localStorage.getItem("userInfo")).userId;var s={userRealname:t.username,userMoblie:t.phone,bespeakTimes:t.date,detailTime:t.timeIndex,bespeakRequire:t.introduct,fuserId:68,ffarmhouseRentalsId:t.id};console.log(s),t.$http.post("appServiceFarmhouse/addBespeak",s).then(function(e){t.date?t.timeIndex?"添加成功"==e.info&&t.$toast("预约成功"):t.$toast("请选择看房时间段"):t.$toast("请选择看房日期")})})}},created:function(){this.date=(new Date).getFullYear()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getDate()}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"message"},[s("div",{staticClass:"top"},[t._v("预约信息")]),t._v(" "),s("div",{staticClass:"content"},[s("van-cell-group",[s("van-field",{attrs:{required:"",clearable:"",label:"用户名",placeholder:"请输入用户名"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),s("van-field",{attrs:{required:"",clearable:"",label:"手机号",placeholder:"请输入手机号"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),t._v(" "),s("div",{staticClass:"date",on:{click:function(e){t.dateShow()}}},[t._m(0),t._v(" "),s("div",{staticClass:"middle"},[t._v(t._s(t.date))]),t._v(" "),t._m(1)]),t._v(" "),s("div",{staticClass:"time",on:{click:function(e){t.timeShow()}}},[t._m(2),t._v(" "),s("div",{staticClass:"middle"},[t._v(t._s(t.time))]),t._v(" "),t._m(3)]),t._v(" "),s("div",{staticClass:"require"},[t._m(4),t._v(" "),s("div",{staticClass:"middle"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.introduct,expression:"introduct"}],staticStyle:{border:"none","line-height":"0.6rem",resize:"none"},attrs:{name:"",id:"",cols:"30",rows:"3",placeholder:"请输入要求"},domProps:{value:t.introduct},on:{input:function(e){e.target.composing||(t.introduct=e.target.value)}}})])])],1)]),t._v(" "),s("div",{staticClass:"blank"}),t._v(" "),s("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:t.showDate,callback:function(e){t.showDate=e},expression:"showDate"}},[s("van-datetime-picker",{attrs:{type:"date","min-date":t.minDate},on:{confirm:t.confirmDate},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1),t._v(" "),s("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:t.showTime,callback:function(e){t.showTime=e},expression:"showTime"}},[s("van-picker",{attrs:{"show-toolbar":"",title:" ",columns:t.columns},on:{confirm:t.onConfirm}})],1),t._v(" "),s("footer",{on:{click:t.order}},[s("p",[t._v(t._s(t.confirm))])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"left"},[e("div",{staticClass:"iconfont icon-xingxing"}),this._v(" "),e("p",[this._v("期望看房日期")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right"},[e("div",{staticClass:"iconfont icon-gengduo1"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"left"},[e("div",{staticClass:"iconfont icon-xingxing"}),this._v(" "),e("p",[this._v("期望看房时间")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right"},[e("div",{staticClass:"iconfont icon-gengduo1"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"left"},[e("div",{staticClass:"iconfont icon-xingxing"}),this._v(" "),e("p",[this._v("看房要求")])])}]};var d=s("VU/8")(r,l,!1,function(t){s("HLvs")},"data-v-9302bde4",null).exports,v=s("nRcY"),u={name:"villageOrder",data:function(){return{title:"预约看房",isback:!0,color:"#FF6400",rows:[]}},components:{Header:i.a,Footer:a.a,Broker:c,Message:d,Agent:v.a},methods:{},created:function(){}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"topBar"},[e("Header",{attrs:{title:this.title,color:this.color,isback:this.isback}})],1),this._v(" "),e("Broker"),this._v(" "),e("Message")],1)},staticRenderFns:[]};var _=s("VU/8")(u,m,!1,function(t){s("hvc8")},"data-v-3c0d3630",null);e.default=_.exports},"8UbI":function(t,e){},HLvs:function(t,e){},JAqN:function(t,e){},JFIA:function(t,e){},hvc8:function(t,e){},nRcY:function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"agent"},[s("div",{staticClass:"top"},[t._v("经纪人")]),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"left"},[s("img",{attrs:{src:t.url,alt:""}})]),t._v(" "),s("div",{staticClass:"middle"},[s("div",{staticClass:"name"},[t._v(t._s(t.name))]),t._v(" "),s("div",{staticClass:"phone"},[t._v(t._s(t.phone))])]),t._v(" "),t._m(0)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right"},[e("div",{staticClass:"iconfont icon-dianhua2"})])}]};var a=s("VU/8")({name:"agent",data:function(){return{url:"http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg",name:"王伟伟",phone:"186666666"}}},i,!1,function(t){s("8UbI")},"data-v-2bb6aabc",null);e.a=a.exports}});