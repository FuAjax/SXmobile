webpackJsonp([44],{"/mKb":function(t,s){},A23n:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});a("XmAh");var e=a("il3B"),i=a("+1BH"),n={name:"myCollect",components:{stars:a("754W").a,noList:i.a},data:function(){return{popshow:!1,value:"",details:["收藏农房","收藏农庄","收藏村庄","收藏景点","收藏咨询"],currentIndex:0,doit:"操作",title:"我的收藏",checkedList:[],result:[],list:[],show:!1,loading:!1,finished:!1,fourSpan:["有山","拎包入住"],checked:!1,path:"appServiceUser/farmhouseCollection",page:1,rows:20,ischeck:!0,aaa:!0}},methods:{back:function(){this.$router.back(-1)},onClickLeft:function(){this.popshow=!1},onClickRight:function(){this.show?(this.doit="操作",this.show=!1):(this.doit="取消",this.show=!0)},search:function(){this.popshow=!0},onClick:function(t,s){this.currentIndex=t,this.page=1,this.loading=!1,this.finished=!1,this.doit="操作",this.title="我的收藏",this.value="",this.show=!1,this.list=[],0==t&&(this.path="appServiceUser/farmhouseCollection"),1==t&&(this.path="appServiceUser/grangeCollection"),2==t&&(this.path="appServiceUser/villageCollection"),3==t&&(this.path="appServiceUser/landspaceplaceCollection"),4==t&&(this.path="appServiceUser/informationCollection")},init:function(t,s){var a=this,e={page:this.page,rows:this.rows};this.show=!1,this.value&&""!==this.value&&(this.page=1,this.popshow=!1,this.title="我的收藏-查询结果",e.collectinfo=this.value,e.page=1),null===t&&(this.popshow=!1,this.title="我的收藏"),this.$http.post(this.path,e).then(function(t){"success"==t.msg?(a.list=s?t.data.rows:a.list.concat(t.data.rows),a.checkedList=[],a.list.forEach(function(t){a.checkedList.push(!1)}),a.loading=!1,a.total=t.data.total,a.page=a.page+1,a.list.length!=a.total&&0!=a.total||(a.finished=!0)):a.finished=!0}).catch(function(t){a.finished=!0})},toggle:function(t){this.$refs.checkedList[t].toggle(),this.result.length==this.list.length?this.checked=!0:this.checked=!1},checkAll:function(){var t=this;this.checked?this.list.forEach(function(s){t.result=t.list}):this.list.forEach(function(s){t.result=[]})},cancel:function(t,s,a){var i=this;if(s)e.a.confirm({title:"删除操作",message:"是否确认删除该收藏记录"}).then(function(){i.$http.post("appServiceUser/cancelCollection",{type:t,ids:s}).then(function(t){"success"==t.msg&&i.list.splice(a,1)})}).catch(function(){});else if(this.result.length>0){s="";this.result.forEach(function(t){s+=t.id,s+=","});var n=s.slice(0,s.length-1);console.log(n),e.a.confirm({title:"删除操作",message:"是否确认删除选中收藏记录"}).then(function(){i.$http.post("appServiceUser/cancelCollection",{type:t,ids:n}).then(function(t){"success"==t.msg&&(i.page=1,i.init(null,!0))})}).catch(function(){})}}},computed:{},created:function(){},mounted:function(){}},l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"myCollect"},[a("div",{staticClass:"head"},[a("van-nav-bar",{staticStyle:{"text-align":"center"},attrs:{title:t.title,"right-text":t.doit,"left-arrow":""},on:{"click-left":t.back}},[a("van-icon",{attrs:{slot:"left",name:"arrow-left",size:"0.3rem"},slot:"left"}),t._v(" "),a("van-icon",{attrs:{slot:"right",name:"search",size:"0.35rem"},on:{click:t.search},slot:"right"}),t._v(" "),a("p",{attrs:{slot:"right"},on:{click:t.onClickRight},slot:"right"},[t._v(t._s(t.doit))])],1)],1),t._v(" "),a("div",{staticStyle:{"padding-top":".91rem"}},[a("van-tabs",{on:{click:t.onClick}},[a("van-list",{attrs:{finished:t.finished},on:{load:t.init},model:{value:t.loading,callback:function(s){t.loading=s},expression:"loading"}},[a("van-tab",{attrs:{title:"农房"}},[t.list.length>0?a("van-checkbox-group",{model:{value:t.result,callback:function(s){t.result=s},expression:"result"}},t._l(t.list,function(s,e){return a("div",{staticClass:"farmhouse",staticStyle:{position:"relative"}},[a("van-row",{attrs:{gutter:"10"}},[a("div",{style:"position: relative; height: 100%; left: "+(t.show?"1":"0")+"rem;"},[a("div",{staticClass:"checkBox",on:{click:function(s){t.toggle(e)}}},[a("van-checkbox",{ref:"checkedList",refInFor:!0,attrs:{name:s}})],1),t._v(" "),a("van-col",{attrs:{span:"24"}},[a("p",{staticClass:"top"},[t._v("\n                      "+t._s(s.updatetime)+"\n                    ")]),t._v(" "),a("div",{staticClass:"center"},[a("router-link",{attrs:{to:{name:"rentDetail",params:{id:s.farmhouseRentalsNumber}}}},[a("van-row",{attrs:{gutter:"10"}},[a("van-col",{staticClass:"left",attrs:{span:"8"}},[a("img",{attrs:{src:s.logoUrl,alt:""}})]),t._v(" "),a("van-col",{staticClass:"right",attrs:{span:"16"}},[a("p",{staticClass:"van-ellipsis "},[t._v("\n                            "+t._s(s.farmhouseTitle)+"\n                          ")]),t._v(" "),a("div",{staticClass:"van-ellipsis"},[a("span",[t._v("朝向: "+t._s(s.houseOrientation))]),t._v(" "),0==s.isInterview?a("p",[a("span",[t._v("￥"+t._s(s.rentingPrice)+"万")]),t._v("元/年\n                            ")]):a("p",[a("span",[t._v("面谈")])])]),t._v(" "),a("div",{staticClass:"van-ellipsis"},[t._v("\n                            "+t._s(s.fareaName)+" - "+t._s(s.fvillageName)+" - "+t._s(s.fstreetName)+"\n                          ")]),t._v(" "),a("div",{staticClass:"van-ellipsis"},[t._v("\n                            装修情况: "+t._s(s.decorationSituation)+"\n                          ")])])],1)],1)],1),t._v(" "),a("div",{staticClass:"bottom"},[t._v("\n                      "+t._s(s.isTurnover)+"\n                      "),t._v(" "),a("p",[a("span",{on:{click:function(a){t.cancel(3,s.id,e)}}},[t._v("取消收藏")]),t._v(" "),a("router-link",{attrs:{to:{name:"orderTable",params:{id:s.farmhouseRentalsNumber}}}},[a("span",{staticClass:"fix"},[t._v("预约看房")])])],1)])])],1)]),t._v(" "),a("div",{staticClass:"separate"})],1)})):t._e(),t._v(" "),t.list.length>0?a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"farmBottom"},[a("van-checkbox",{on:{change:t.checkAll},model:{value:t.checked,callback:function(s){t.checked=s},expression:"checked"}},[t._v("全选")]),t._v(" "),a("span",{on:{click:function(s){t.cancel(3)}}},[t._v("取消收藏")])],1):t._e(),t._v(" "),0==t.list.length&&t.finished?[a("noList",{attrs:{detail:t.details[t.currentIndex]}})]:t._e()],2),t._v(" "),a("van-tab",{attrs:{title:"农庄"}},[t.list.length>0?a("van-checkbox-group",{model:{value:t.result,callback:function(s){t.result=s},expression:"result"}},t._l(t.list,function(s,e){return a("div",{staticClass:"grange"},[a("van-row",{attrs:{gutter:"10"}},[a("div",{style:"position: relative; left: "+(t.show?"1":"0")+"rem;"},[a("div",{staticClass:"checkBox",on:{click:function(s){t.toggle(e)}}},[a("van-checkbox",{ref:"checkedList",refInFor:!0,attrs:{name:s}})],1),t._v(" "),a("van-col",{attrs:{span:"24"}},[a("div",{staticClass:"center"},[a("router-link",{attrs:{to:{name:"grangedetail",params:{id:s.grangeNumber}}}},[a("van-row",{attrs:{gutter:"10"}},[a("van-col",{staticClass:"left",attrs:{span:"8"}},[a("img",{attrs:{src:s.logoUrl,alt:""}})]),t._v(" "),a("van-col",{staticClass:"right",attrs:{span:"16"}},[a("p",{staticClass:"van-ellipsis "},[t._v("\n                            "+t._s(s.grangeName)+"\n                          ")]),t._v(" "),a("div",{staticClass:"van-ellipsis"},[a("span",[t._v(t._s(s.managementClass))]),t._v(" "),a("p",[a("span",[t._v("￥"+t._s(s.personConsumption))]),t._v("\n                              起\n                            ")])]),t._v(" "),a("div",{staticClass:"van-ellipsis"},[a("i",{staticClass:"iconfont icon-dizhi"}),t._v(t._s(s.addressDetail)+"\n                          ")]),t._v(" "),a("p",{staticClass:"van-ellipsis"},t._l(s.plays,function(s){return a("span",[t._v(t._s(s))])}))])],1)],1)],1),t._v(" "),a("div",{staticClass:"bottom"},[a("stars",{attrs:{rate:s.totalMark}}),t._v(" "),a("span",{staticClass:"score"},[t._v(t._s(s.totalMark)+"分")]),t._v(" | "+t._s(s.totalAppraisalnumber)+"条评论\n                      "),a("p",[a("span",{on:{click:function(a){t.cancel(1,s.id,e)}}},[t._v("取消收藏")])])],1)])],1)]),t._v(" "),a("div",{staticClass:"separate"})],1)})):t._e(),t._v(" "),t.list.length>0?a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"farmBottom"},[a("van-checkbox",{on:{change:t.checkAll},model:{value:t.checked,callback:function(s){t.checked=s},expression:"checked"}},[t._v("全选")]),t._v(" "),a("span",{on:{click:function(s){t.cancel(1)}}},[t._v("取消收藏")])],1):t._e(),t._v(" "),0==t.list.length&&t.finished?[a("noList",{attrs:{detail:t.details[t.currentIndex]}})]:t._e()],2),t._v(" "),a("van-tab",{attrs:{title:"村庄"}},[t.list.length>0?a("van-checkbox-group",{model:{value:t.result,callback:function(s){t.result=s},expression:"result"}},t._l(t.list,function(s,e){return a("div",{staticClass:"village"},[a("van-row",{attrs:{gutter:"10"}},[a("div",{style:"position: relative; left: "+(t.show?"1":"0")+"rem;"},[a("div",{staticClass:"checkBox",on:{click:function(s){t.toggle(e)}}},[a("van-checkbox",{ref:"checkedList",refInFor:!0,attrs:{name:s}})],1),t._v(" "),a("van-col",{attrs:{span:"24"}},[a("router-link",{attrs:{to:{name:"villageDetail",params:{id:s.villageNumber}}}},[a("div",{staticClass:"center"},[a("van-row",{attrs:{gutter:"10"}},[a("van-col",{staticClass:"left",attrs:{span:"8"}},[a("img",{attrs:{src:s.logoUrl,alt:""}})]),t._v(" "),a("van-col",{staticClass:"right",attrs:{span:"16"}},[a("p",{staticClass:"van-ellipsis "},[t._v("\n                          "+t._s(s.flanspacePlaceName)+"\n                            "),""!=s.beautifulCountry?a("span",[t._v("美丽乡村")]):t._e()]),t._v(" "),a("div",{staticClass:"van-ellipsis"},[a("span",[t._v("已租出"+t._s(s.completedFarmhouse)+"套")]),t._v(" "),a("p",[a("span",[t._v(t._s(s.rentingAverage)+"万元")]),t._v("/年\n                            ")])]),t._v(" "),a("div",{staticClass:"van-ellipsis"},[a("i",{staticClass:"iconfont icon-dizhi"}),t._v(t._s(s.fareaName)+" - "+t._s(s.fstreetName)+" - "+t._s(s.flanspacePlaceName)+"\n                            "),a("p",[t._v("村庄均价")])]),t._v(" "),a("p",{staticClass:"van-ellipsis"},t._l(s.characteristics,function(s){return a("span",[t._v(t._s(s))])}))])],1)],1)]),t._v(" "),a("div",{staticClass:"bottom"},[a("span",{staticClass:"one"},[t._v(t._s(s.rentFarmhouse)+"套")]),t._v("在租农房\n                      "),a("p",[a("span",{on:{click:function(a){t.cancel(4,s.id,e)}}},[t._v("取消收藏")])])])],1)],1)]),t._v(" "),a("div",{staticClass:"separate"})],1)})):t._e(),t._v(" "),t.list.length>0?a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"farmBottom"},[a("van-checkbox",{on:{change:t.checkAll},model:{value:t.checked,callback:function(s){t.checked=s},expression:"checked"}},[t._v("全选")]),t._v(" "),a("span",{on:{click:function(s){t.cancel(4)}}},[t._v("取消收藏")])],1):t._e(),t._v(" "),0==t.list.length&&t.finished?[a("noList",{attrs:{detail:t.details[t.currentIndex]}})]:t._e()],2),t._v(" "),a("van-tab",{attrs:{title:"景点"}},[t.list.length>0?a("van-checkbox-group",{model:{value:t.result,callback:function(s){t.result=s},expression:"result"}},t._l(t.list,function(s,e){return a("div",{staticClass:"scenic"},[a("van-row",{attrs:{gutter:"10"}},[a("div",{style:"position: relative; left: "+(t.show?"1":"0")+"rem;"},[a("div",{staticClass:"checkBox",on:{click:function(s){t.toggle(e)}}},[a("van-checkbox",{ref:"checkedList",refInFor:!0,attrs:{name:s}})],1),t._v(" "),a("van-col",{attrs:{span:"24"}},[a("router-link",{attrs:{to:{name:"scenicDetail",params:{id:s.lanspacePlaceNumber}}}},[a("div",{staticClass:"center"},[a("van-row",{attrs:{gutter:"10"}},[a("van-col",{staticClass:"left",attrs:{span:"8"}},[a("img",{attrs:{src:s.logoUrl,alt:""}})]),t._v(" "),a("van-col",{staticClass:"right",attrs:{span:"16"}},[a("p",{staticClass:"van-ellipsis "},[t._v("\n                            "+t._s(s.lanspacePlaceName)+"\n                            "),a("span",[t._v(t._s(s.lanspacePlaceGrade)+"级风景区")])]),t._v(" "),a("div",{staticClass:"van-ellipsis"},[a("stars",{attrs:{rate:s.totalMark}}),a("span",{staticClass:"four"},[t._v(t._s(s.totalMark)+"分")]),t._v(" "),a("p",[a("span",[t._v("￥"+t._s(s.totalAppraisalnumber))]),t._v("/人\n                            ")])],1),t._v(" "),a("div",{staticClass:"van-ellipsis"},[a("i",{staticClass:"iconfont icon-dizhi"}),t._v(t._s(s.fcityName)+" - "+t._s(s.fareaName)+" - "+t._s(s.lanspacePlaceName)+"\n                          ")]),t._v(" "),a("p",{staticClass:"van-ellipsis"},t._l(s.characteristics,function(s){return a("span",[t._v(t._s(s))])}))])],1)],1)]),t._v(" "),a("div",{staticClass:"comment"},[a("span",[t._v("金刚点评：")]),t._v(t._s(s.comment)+"\n                    ")]),t._v(" "),a("div",{staticClass:"bottom"},[a("p",[a("span",{on:{click:function(a){t.cancel(2,s.id,e)}}},[t._v("取消收藏")])])])],1)],1)]),t._v(" "),a("div",{staticClass:"separate"})],1)})):t._e(),t._v(" "),t.list.length>0?a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"farmBottom"},[a("van-checkbox",{on:{change:t.checkAll},model:{value:t.checked,callback:function(s){t.checked=s},expression:"checked"}},[t._v("全选")]),t._v(" "),a("span",{on:{click:function(s){t.cancel(2)}}},[t._v("取消收藏")])],1):t._e(),t._v(" "),0==t.list.length&&t.finished?[a("noList",{attrs:{detail:t.details[t.currentIndex]}})]:t._e()],2),t._v(" "),a("van-tab",{attrs:{title:"资讯"}},[t.list.length>0?a("van-checkbox-group",{model:{value:t.result,callback:function(s){t.result=s},expression:"result"}},t._l(t.list,function(s,e){return a("div",{staticClass:"infor"},[a("van-row",{attrs:{gutter:"10"}},[a("div",{style:"position: relative; left: "+(t.show?"1":"0")+"rem;"},[a("div",{staticClass:"checkBox",on:{click:function(s){t.toggle(e)}}},[a("van-checkbox",{ref:"checkedList",refInFor:!0,attrs:{name:s}})],1),t._v(" "),a("van-col",{attrs:{span:"24"}},[a("router-link",{attrs:{to:{name:"textDetail",params:{id:s.informationId}}}},[a("p",{staticClass:"text"},[t._v("\n                      "+t._s(s.informationTitle)+"\n                    ")])]),t._v(" "),a("div",{staticClass:"bottom"},[t._v("\n                      "+t._s(s.createTime)+"\n                      "),a("p",[a("span",{on:{click:function(a){t.cancel(5,s.id,e)}}},[t._v("取消收藏")])])])],1)],1)]),t._v(" "),a("div",{staticClass:"separate"})],1)})):t._e(),t._v(" "),t.list.length>0?a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"farmBottom"},[a("van-checkbox",{on:{change:t.checkAll},model:{value:t.checked,callback:function(s){t.checked=s},expression:"checked"}},[t._v("全选")]),t._v(" "),a("span",{on:{click:function(s){t.cancel(5)}}},[t._v("取消收藏")])],1):t._e(),t._v(" "),0==t.list.length&&t.finished?[a("noList",{attrs:{detail:t.details[t.currentIndex]}})]:t._e()],2)],1)],1)],1),t._v(" "),a("van-popup",{staticClass:"layer",attrs:{"close-on-click-overlay":!1,position:"right"},model:{value:t.popshow,callback:function(s){t.popshow=s},expression:"popshow"}},[a("div",{staticClass:"container"},[a("van-nav-bar",{attrs:{title:"筛选","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),a("div",{staticClass:"common"},[a("van-row",{attrs:{gutter:"10"}},[a("van-col",{staticClass:"left",attrs:{span:"8"}},[t._v("标题搜索")]),t._v(" "),a("van-col",{staticClass:"right",attrs:{span:"16"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"text",placeholder:"请输入标题搜索"},domProps:{value:t.value},on:{input:function(s){s.target.composing||(t.value=s.target.value)}}})])],1)],1),t._v(" "),a("div",{staticClass:"bottom"},[a("button",{on:{click:function(s){t.init(t.value,!0)}}},[t._v("搜索")]),t._v(" "),a("button",{staticStyle:{"background-color":"#C4C4C6","margin-top":".2rem"},on:{click:function(s){t.init(null,!0)}}},[t._v("清空筛选条件")])])],1)])],1)},staticRenderFns:[]};var c=a("VU/8")(n,l,!1,function(t){a("OpAb"),a("/mKb")},"data-v-455a6354",null);s.default=c.exports},OpAb:function(t,s){}});