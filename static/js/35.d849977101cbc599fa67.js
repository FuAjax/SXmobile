webpackJsonp([35],{"8MLe":function(t,e){},DmOb:function(t,e){},ZKJ6:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("XmAh");var s=a("il3B"),n={name:"farmhouseManage",components:{noList:a("+1BH").a},data:function(){return{details:"农房",show:!1,timeshow:!1,overlay:!0,value:"",title:"我的农房",timetitle:"选择时间",list:[],status:[{id:null,name:"全部"},{id:1,name:"待交易"},{id:2,name:"待审核"},{id:3,name:"审核未通过"},{id:4,name:"已下架"},{id:5,name:"已交易"}],bedroom:[{id:null,name:"全部"},{id:1,name:"1"},{id:2,name:"2"},{id:3,name:"3"},{id:4,name:"4"},{id:5,name:"5"},{id:6,name:"6"}],area:[{id:null,name:"全部"},{id:"0,100",name:"0-100平"},{id:"100,300",name:"100-300平"},{id:"300,500",name:"300-500平"},{id:"500",name:"500平以上"}],statusType:null,bedroomNumber:null,areaNumber:null,currentDatestart:new Date,currentDate:new Date,startDate:"选择开始时间",endDate:"选择结束时间",loading:!1,finished:!1,rows:20,page:1,timeType:1}},methods:{back:function(){this.$router.back(-1)},onClickLeft:function(){this.show=!1},onClickRight:function(){this.show=!0},timeshowClick:function(t){this.timeshow=!0,this.timeType=t,this.timetitle=1==t?"选择开始时间":"选择结束时间"},timeclose:function(t){t&&(1==this.timeType?(this.startDate=this.formatDate(Date.parse(new Date(t))).split(" ")[0],this.endDate="选择结束时间"):this.endDate=this.formatDate(Date.parse(new Date(t))).split(" ")[0]),this.timeshow=!1},init:function(t,e){var a=this;console.log(t,e),setTimeout(function(){var s={page:a.page,rows:a.rows};a.show=!1,1==e?(a.page=1,s.page=1):(a.title="我的农房",a.statusType=null,a.bedroomNumber=null,a.areaNumber=null,a.startDate="选择开始时间",a.endDate="选择结束时间"),a.statusType&&(s.status=a.statusType),t&&""!==t&&(a.page=1,s.page=1,s.farmInfo=t),a.bedroomNumber&&(s.bedroomNumber=a.bedroomNumber),"选择开始时间"!==a.startDate&&"选择结束时间"!==a.endDate&&(s.startTime=a.startDate,s.endTime=a.endDate),a.areaNumber&&(s.areaNumber=a.areaNumber),(a.statusType||a.areaNumber||"选择开始时间"!==a.startDate&&"选择结束时间"!==a.endDate||a.bedroomNumber||t&&""!==t)&&(a.title="我的农房-查询结果",a.page=1,s.page=1),console.log(s),a.$http.post("appServiceUser/myfarmhouse",s).then(function(t){"success"==t.msg?(a.loading=!1,1==a.page?a.list=t.data.rows:a.list=a.list.concat(t.data.rows),a.total=t.data.total,a.page=a.page+1,(a.list.length>=a.total||0==a.total)&&(a.finished=!0)):a.finished=!0}).catch(function(t){a.finished=!0})},500)},formatDate:function(t){var e=(t=new Date(t)).getFullYear(),a=t.getMonth()+1,s=t.getDate(),n=t.getHours(),i=t.getMinutes(),o=t.getSeconds();return n=n<10?"0"+n:n,i=i<10?"0"+i:i,o=o<10?"0"+o:o,e+"-"+(a=a<10?"0"+a:a)+"-"+(s=s<10?"0"+s:s)+" "+n+":"+i},delSellmyhouse:function(t,e,a){var n=this,i="";1==e&&(i="删除"),2==e&&(i="下架"),s.a.confirm({title:i+"操作",message:"是否确认"+i+"选中的农房"}).then(function(){n.$http.post("appServiceUser/delSellmyhouse",{id:t,type:e}).then(function(t){"success"==t.msg&&(1==e&&n.list.splice(a,1),2==e&&(n.list[a].status=2))})}).catch(function(){})}},computed:{},created:function(){},mounted:function(){}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"farmhouseManage",attrs:{id:"farmhouseManage"}},[a("div",{staticClass:"head"},[a("van-nav-bar",{staticStyle:{"text-align":"center"},attrs:{title:t.title,"right-text":"筛选","left-arrow":""},on:{"click-left":t.back,"click-right":t.onClickRight}})],1),t._v(" "),a("div",{staticStyle:{"padding-top":".91rem"}},[a("van-list",{attrs:{finished:t.finished},on:{load:t.init},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[t.list.length>0?a("ul",{staticClass:"list"},t._l(t.list,function(e,s){return a("li",[a("p",{staticClass:"top"},[t._v("\n              "+t._s(e.updateTime)+"\n              "),a("span",[t._v("\n                "+t._s(e.statusName)+"\n              ")])]),t._v(" "),a("div",{staticClass:"center"},[a("router-link",{attrs:{to:{name:"rentDetail",params:{id:e.farmhouseRentalsNumber}}}},[a("van-row",{attrs:{gutter:"10"}},[a("van-col",{staticClass:"left",attrs:{span:"8"}},[a("img",{attrs:{src:e.logoUrl,alt:""}}),t._v(" "),a("p",{staticClass:"van-ellipsis"},[t._v("编号"+t._s(e.farmhouseRentalsNumber))])]),t._v(" "),a("van-col",{staticClass:"right",attrs:{span:"16"}},[a("p",{staticClass:"van-ellipsis"},[t._v("\n                      "+t._s(e.farmhouseTitle)+"\n                    ")]),t._v(" "),a("p",{staticClass:"van-ellipsis"},[t._v("\n                      "+t._s(e.detail)+"\n                    ")]),t._v(" "),a("p",{staticClass:"van-ellipsis"},[a("i",{staticClass:"iconfont icon-dizhi"}),t._v("\n                      "+t._s(e.address)+"\n                    ")]),t._v(" "),"面谈"===e.rentingPrice?a("p",[t._v("\n                      "+t._s(e.rentingPrice)+"\n                    ")]):a("p",[a("span",[t._v("\n                        ￥"+t._s(e.rentingPrice)+"万元\n                      ")]),t._v("\n                      /年\n                    ")])])],1)],1)],1),t._v(" "),a("p",{staticClass:"bottom"},[a("span",{directives:[{name:"show",rawName:"v-show",value:1==e.status,expression:"item.status == 1"}],staticClass:"edit"},[t._v("编辑")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:0==e.status||1==e.status||-2==e.status,expression:"item.status == 0 || item.status == 1 || item.status == -2"}],on:{click:function(a){t.delSellmyhouse(e.id,1,s)}}},[t._v("删除")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:1==e.status,expression:"item.status == 1"}],on:{click:function(a){t.delSellmyhouse(e.id,2,s)}}},[t._v("下架")])]),t._v(" "),a("div",{staticClass:"separate"})])})):t._e(),t._v(" "),0==t.list.length&&t.finished?[a("noList",{attrs:{detail:t.details}})]:t._e()],2)],1),t._v(" "),a("van-popup",{staticClass:"layer",attrs:{"close-on-click-overlay":!1,position:"right"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("div",{staticClass:"container"},[a("van-nav-bar",{attrs:{title:"筛选","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),a("div",{staticClass:"common"},[a("van-row",{attrs:{gutter:"10"}},[a("van-col",{staticClass:"left",attrs:{span:"8"}},[t._v("标题搜索")]),t._v(" "),a("van-col",{staticClass:"right",attrs:{span:"16"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"text",placeholder:"请输入标题搜索"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})])],1)],1),t._v(" "),a("div",{staticClass:"common"},[a("van-row",{attrs:{gutter:"10"}},[a("van-col",{staticClass:"left",attrs:{span:"8"}},[t._v("\n              面积\n            ")]),t._v(" "),a("van-col",{staticClass:"right",attrs:{span:"16"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.areaNumber,expression:"areaNumber"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.areaNumber=e.target.multiple?a:a[0]}}},[t._l(t.area,function(e){return[a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])]})],2)])],1)],1),t._v(" "),a("div",{staticClass:"common"},[a("van-row",{attrs:{gutter:"10"}},[a("van-col",{staticClass:"left",attrs:{span:"8"}},[t._v("状态")]),t._v(" "),a("van-col",{staticClass:"right",attrs:{span:"16"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.statusType,expression:"statusType"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.statusType=e.target.multiple?a:a[0]}}},[t._l(t.status,function(e){return[a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])]})],2)])],1)],1),t._v(" "),a("div",{staticClass:"common"},[a("van-row",{attrs:{gutter:"10"}},[a("van-col",{staticClass:"left",attrs:{span:"8"}},[t._v("室数量")]),t._v(" "),a("van-col",{staticClass:"right",attrs:{span:"16"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.bedroomNumber,expression:"bedroomNumber"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.bedroomNumber=e.target.multiple?a:a[0]}}},[t._l(t.bedroom,function(e,s){return[a("option",{domProps:{value:e.id}},[t._v("　"+t._s(e.name)+" "+t._s(0!==s?"间":""))])]})],2)])],1)],1),t._v(" "),a("div",{staticClass:"common"},[a("van-row",{attrs:{gutter:"6"}},[a("van-col",{staticClass:"left",attrs:{span:"8"}},[t._v("更新时间")]),t._v(" "),a("van-col",{staticClass:"center",attrs:{span:"8"}},[a("button",{on:{click:function(e){t.timeshowClick(1)}}},[t._v(t._s(t.startDate))])]),t._v(" "),a("van-col",{staticClass:"center",attrs:{span:"8"}},[a("button",{on:{click:function(e){t.timeshowClick(2)}}},[t._v(t._s(t.endDate))])])],1)],1),t._v(" "),a("div",{staticClass:"bottom"},[a("button",{on:{click:function(e){t.init(t.value,1)}}},[t._v("搜索")]),t._v(" "),a("button",{staticStyle:{"background-color":"#C4C4C6","margin-top":".2rem"},on:{click:function(e){t.init(null,!0)}}},[t._v("清空筛选条件")])])],1)]),t._v(" "),a("van-actionsheet",{staticStyle:{"text-align":"center"},attrs:{overlay:t.overlay,title:t.timetitle},model:{value:t.timeshow,callback:function(e){t.timeshow=e},expression:"timeshow"}},[a("van-datetime-picker",{directives:[{name:"show",rawName:"v-show",value:1==t.timeType,expression:"timeType == 1"}],attrs:{type:"date"},on:{confirm:t.timeclose,cancel:t.timeclose},model:{value:t.currentDatestart,callback:function(e){t.currentDatestart=e},expression:"currentDatestart"}}),t._v(" "),a("van-datetime-picker",{directives:[{name:"show",rawName:"v-show",value:2==t.timeType,expression:"timeType == 2"}],attrs:{type:"date","min-date":t.currentDatestart},on:{confirm:t.timeclose,cancel:t.timeclose},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1)],1)},staticRenderFns:[]};var o=a("VU/8")(n,i,!1,function(t){a("DmOb"),a("8MLe")},"data-v-88a6c44c",null);e.default=o.exports}});