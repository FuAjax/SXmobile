webpackJsonp([11],{"8TX8":function(t,e){},"8yEK":function(t,e){},Dgiu:function(t,e){},H2mI:function(t,e){},KrQw:function(t,e){},PD4Y:function(t,e,i){"use strict";var a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bottom"},[i("van-tabs",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.houseList,function(e,a){return i("van-tab",{attrs:{title:e.name}},[t._v(t._s(e.text))])}))],1)},staticRenderFns:[]};var s=i("VU/8")({name:"Bootom",data:function(){return{active:0,houseList:[{name:"同地区农房",text:"木兰山民宿农庄A"},{name:"周边街道农房",text:"木兰山民宿农庄B"},{name:"周边地区农房",text:"木兰山民宿农庄C"}]}}},a,!1,function(t){i("X+YF")},"data-v-47e97434",null);e.a=s.exports},"X+YF":function(t,e){},Y0Oq:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("GgDs"),s={name:"Footer",props:{detail:{type:String,required:!0}},data:function(){return{name:"王先生",url:"http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg",isCollection:!1}},methods:{call:function(){window.location.href="tel:"+this.detail.linkmanMobile},collect:function(){var t=this;console.log(this.detail);var e=this.detail.id;if(localStorage.getItem("userInfo")){var i=JSON.parse(localStorage.getItem("userInfo")).userId;console.log(i),this.$http.post("appServiceFarmhouse/farmhouseCollection",{farmhouseRentalsId:e,userId:68}).then(function(e){console.log(e),"success"==e.msg?(t.$toast(e.info),t.isCollection=!0):(e.msg="已经收藏啦!")&&(t.isCollection=!0,t.$toast(e.info))})}else this.$toast("登录之后可评论"),setTimeout(function(){t.$router.push("/login")})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("footer",[a("div",{staticClass:"left"},[t.detail.logo?a("div",{staticClass:"img",style:"background:url("+t.tab.logoUrl+");width: 100%;height: 100%;background-size:cover;background-position: center center"}):a("img",{attrs:{src:i("7dTR"),alt:""}}),t._v(" "),a("p",[t._v(t._s(t.detail.linkman))]),t._v(" "),a("div",{staticClass:"border-right"})]),t._v(" "),a("div",{staticClass:"right",on:{click:t.call}},[a("div",{staticClass:"iconfont icon-dianhua2"}),t._v(" "),a("p",[t._v("电话")])])])])},staticRenderFns:[]};var o=i("VU/8")(s,n,!1,function(t){i("H2mI")},"data-v-e3e4d5b2",null).exports,r={name:"Title",props:{detail:{type:String,required:!0}},data:function(){return{p1:"个人求租",p2:"黄陂区",p3:"4房",p4:"木兰山",p5:"160平",p6:"独立小院",p7:"可种菜",bian:"编号:",numbers:"2000002",shijian:"更新时间:",time:"2017-08-09",range:"星级",show:!1}},methods:{shareShow:function(){this.show=!0},weixin:function(){this.WXConfig.wxShowMenu()},xinlang:function(){var t=this.detail.fstreetName+this.detail.farmhouseTitle+"—【武汉市三乡工程网农房求租】",e=window.screen.height/2-250,i=window.screen.width/2-300,a=(window.screen.height,window.screen.width,t),s=a,n=window.location.href;window.open("http://service.weibo.com/share/share.php?pic="+encodeURIComponent("")+"&title="+encodeURIComponent(s.toString().replace(/ /g," ").replace(/<br \/>/g," "))+"&url="+encodeURIComponent(n),"分享至新浪微博","height=500,width=600,top="+e+",left="+i+",toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no")},zone:function(){var t=this.detail.fstreetName+this.detail.farmhouseTitle+"—【武汉市三乡工程网农房求租】",e=t,i=window.location.href,a=e,s=t,n="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?";n+="url="+encodeURIComponent(i||document.location),n+="&showcount=0",n+="&desc="+encodeURIComponent(a||"分享的描述"),n+="&title="+encodeURIComponent(s||document.title),n+="&pics="+encodeURIComponent(""),window.open(n,"width=600px,height=800px,top="+(screen.height-"800px")/2+",left="+(screen.width-"600px")/2+",toolbar=no,menubar=no,scrollbars=no,resizable=1,location=no,status=0")}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"top"},[i("div",{staticClass:"title"},[i("div",{staticClass:"left"},[i("p",[t._v(t._s(t.detail.farmhouseTitle))])]),t._v(" "),i("div",{staticClass:"right"},[i("div",{staticClass:"iconfont icon-fenxiang",on:{click:function(e){t.shareShow()}}})])]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"num"},[i("p",[t._v(t._s(t.bian))]),t._v(" "),i("p",[t._v(t._s(t.detail.farmhouseRentingNumber))])]),t._v(" "),i("div",{staticClass:"time"},[i("p",[t._v(t._s(t.shijian))]),t._v(" "),i("p",[t._v(t._s(t.detail.updateTime))])])])]),t._v(" "),i("div",{staticClass:"blank"}),t._v(" "),i("van-popup",{attrs:{position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("ul",{on:{click:t.weixin}},[i("div",{staticClass:"iconfont icon-weixin1"}),t._v(" "),i("p",[t._v("微信好友")])]),t._v(" "),i("ul",{on:{click:t.xinlang}},[i("div",{staticClass:"iconfont icon-weibo2 xinlang"}),t._v(" "),i("p",[t._v("新浪微博")])]),t._v(" "),i("ul",{on:{click:t.zone}},[i("div",{staticClass:"iconfont icon-QQ zone"}),t._v(" "),i("p",[t._v("QQ空间")])])])],1)},staticRenderFns:[]};var l=i("VU/8")(r,c,!1,function(t){i("iGZ/")},"data-v-0107d70e",null).exports,d={name:"Time",props:{detail:{type:String,required:!0}},data:function(){return{year:"2",shi:"4",ting:"2",mi:"160",nian:"20",btnList:[{name:"有山"},{name:"独立院落"},{name:"近高速"},{name:"可种菜"},{name:"养宠物"}]}}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"total"},[i("div",{staticClass:"top"},[i("div",{staticClass:"year"},[i("div",{staticClass:"header"},[i("p",[t._v(t._s(t.detail.rentingPrice)+"万")]),t._v(" "),i("p",[t._v("元/年")])]),t._v(" "),i("div",{staticClass:"bot"},[t._v("\n          期望租金\n        ")])]),t._v(" "),i("div",{staticClass:"room"},[i("div",{staticClass:"header"},[i("p",[t._v(t._s(null==t.detail.bedroom?0:t.detail.bedroom))]),t._v(" "),i("p",[t._v("室")]),t._v(" "),i("p",[t._v(t._s(t.ting))]),t._v(" "),i("p",[t._v("厅")])]),t._v(" "),i("div",{staticClass:"bot"},[t._v("\n          期望户型\n        ")])]),t._v(" "),i("div",{staticClass:"nian"},[i("div",{staticClass:"header"},[i("p",[t._v(t._s(t.detail.rentingYears))]),t._v(" "),i("p",[t._v("年")])]),t._v(" "),i("div",{staticClass:"bot"},[t._v("\n          租赁年限\n        ")])])]),t._v(" "),i("div",{staticClass:"btnbox"},t._l(t.detail.characteristics,function(e,a){return i("div",{key:a,staticClass:"btn"},[t._v(t._s(e))])}))]),t._v(" "),i("div",{staticClass:"blank"})])},staticRenderFns:[]};var p=i("VU/8")(d,v,!1,function(t){i("rueW")},"data-v-4ead2ae5",null).exports,m={name:"Information",props:{detail:{type:String,required:!0}},data:function(){return{List:[{title:"期望租金",message:"1-1.5万元/年"},{title:"期望户型",message:"3居"},{title:"租赁年限",message:"5年"},{title:"期望地区",message:"黄陂区-木兰山-张家冲"},{title:"期望景区",message:"木兰封建区"},{title:"拟租赁用途",message:"民宿"},{title:"联系人",message:"万先生",person:"个人/企业"}]}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"information"},[i("div",{staticClass:"list"},[i("p",[t._v("期望租金")]),t._v(" "),i("p",[t._v(t._s(t.detail.rentingPrice)+"万元/年")])]),t._v(" "),i("div",{staticClass:"list"},[i("p",[t._v("期望户型")]),t._v(" "),i("p",[t._v(t._s(t.detail.bedroom)+"居")])]),t._v(" "),i("div",{staticClass:"list"},[i("p",[t._v("租赁年限")]),t._v(" "),i("p",[t._v(t._s(t.detail.rentingYears)+"年")])]),t._v(" "),i("div",{staticClass:"list"},[i("p",[t._v("期望地区")]),t._v(" "),i("p",[t._v(t._s(t.detail.fareaName)+"-"+t._s(t.detail.fstreetName))])]),t._v(" "),i("div",{staticClass:"list"},[i("p",[t._v("拟租赁用途")]),t._v(" "),t._l(t.detail.uses,function(e,a){return i("p",[t._v(t._s(e))])})],2),t._v(" "),i("div",{staticClass:"list"},[i("p",[t._v("联系人")]),t._v(" "),i("p",[t._v(t._s(t.detail.linkman))]),t._v(" "),i("p",[t._v(t._s(1==t.detail.rentType?"官方发布":2==t.detail.rentType?"用户发布":""))])])]),t._v(" "),i("div",{staticClass:"blank"})])},staticRenderFns:[]};var u=i("VU/8")(m,_,!1,function(t){i("KrQw")},"data-v-a224e0a0",null).exports,g={name:"Recommend",props:{detail:{type:String,required:!0}},data:function(){return{activeNames:["1"],title:"农房介绍",text:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊",first:"不不不不不不不不不不不不不不"}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[i("van-collapse-item",{attrs:{title:"详细需求",name:"1"}},[i("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[i("p",[t._v("详细需求")])]),t._v("\n      "+t._s(t.detail.farmhouseDescribe)+"\n    ")])],1),t._v(" "),i("div",{staticClass:"blank"})],1)},staticRenderFns:[]};var h=i("VU/8")(g,f,!1,function(t){i("u6DJ")},"data-v-143b46c6",null).exports,C={name:"RimFarm",props:{list:{type:Array,required:!0}},data:function(){return{list:[{goodsID:1,imgSrc:"http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg",add:"木兰天池风景区(5A)",price:"220",year:"8",meters:"100"},{goodsID:2,imgSrc:"http://07.imgmini.eastday.com/mobile/20180302/b293c7af30c8a9eba71d44fe49d21cbc.jpeg",add:"木兰天池风景区(5A)",price:"220"},{goodsID:3,imgSrc:"http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg",add:"木兰天池风景区(5A)",price:"220"},{goodsID:4,imgSrc:"http://img.idol001.com/origin/2017/06/20/36a6298c214e4cb4784ef0c5494428801497949779.jpg",add:"木兰天池风景区(5A)",price:"220"},{goodsID:4,imgSrc:"http://img.idol001.com/origin/2017/06/20/36a6298c214e4cb4784ef0c5494428801497949779.jpg",add:"木兰天池风景区(5A)sssssssssssss",price:"220"},{goodsID:4,imgSrc:"http://img.idol001.com/origin/2017/06/20/36a6298c214e4cb4784ef0c5494428801497949779.jpg",add:"木兰天池风景区(5A)",price:"220"},{goodsID:4,imgSrc:"http://img.idol001.com/origin/2017/06/20/36a6298c214e4cb4784ef0c5494428801497949779.jpg",add:"木兰天池风景区(5A)",price:"220"}]}}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"farm"},[i("div",{staticClass:"top"},[t._v("周边农房")]),t._v(" "),i("div",{staticClass:"content"},[i("van-swipe",{attrs:{loop:!1}},t._l(t.list,function(e,a){return i("van-swipe-item",{key:a,staticClass:"swiper"},[i("router-link",{attrs:{to:{name:"detail",params:{goods:e.goodsID}}}},[i("img",{attrs:{src:e.fileURL,alt:"",srcset:""}}),t._v(" "),i("div",{staticClass:"add"},[t._v(t._s(e.farmhouseTitle))]),t._v(" "),i("div",{staticClass:"bot"},[i("div",{staticClass:"price"},[t._v(t._s(e.rentingPrice)+"万元")]),t._v(" "),i("div",{staticClass:"year"},[t._v(t._s(e.rentingYears)+"年")]),t._v(" "),i("div",{staticClass:"meters"},[t._v(t._s(e.coveredArea)+"平")])])])],1)}))],1)]),t._v(" "),i("div",{staticClass:"blank"})])},staticRenderFns:[]};var w=i("VU/8")(C,b,!1,function(t){i("8yEK")},"data-v-7e3a3144",null).exports,y=i("754W"),k={name:"RimGrange",props:{foodList:{type:Array,required:!0},playList:{type:Array,required:!0},stayList:{type:Array,required:!0}},data:function(){return{activeIndex:0,changeRed:0,list:[{goodsID:1,position:"黄陂区",imgSrc:"http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg",add:"木兰天池风景区(5A)",price:"220",year:"8",meters:"100"},{goodsID:2,position:"黄陂区",imgSrc:"http://07.imgmini.eastday.com/mobile/20180302/b293c7af30c8a9eba71d44fe49d21cbc.jpeg",add:"木兰天池风景区(5A)",price:"220"},{goodsID:3,position:"黄陂区",imgSrc:"http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg",add:"木兰天池风景区(5A)",price:"220"},{goodsID:4,position:"黄陂区",imgSrc:"http://img.idol001.com/origin/2017/06/20/36a6298c214e4cb4784ef0c5494428801497949779.jpg",add:"木兰天池风景区(5A)",price:"220"},{goodsID:4,position:"黄陂区",imgSrc:"http://img.idol001.com/origin/2017/06/20/36a6298c214e4cb4784ef0c5494428801497949779.jpg",add:"木兰天池风景区(5A)sssssssssssss",price:"220"},{goodsID:4,position:"黄陂区",imgSrc:"http://img.idol001.com/origin/2017/06/20/36a6298c214e4cb4784ef0c5494428801497949779.jpg",add:"木兰天池风景区(5A)",price:"220"},{goodsID:4,position:"黄陂区",imgSrc:"http://img.idol001.com/origin/2017/06/20/36a6298c214e4cb4784ef0c5494428801497949779.jpg",add:"木兰天池风景区(5A)",price:"220"}],btnList:[{name:"住宿"},{name:"美食"},{name:"游玩"}]}},methods:{toActive:function(t){this.activeIndex=t,this.changeRed=t,console.log(this.changeRed)}},components:{stars:y.a}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"scenicDetail"},[i("div",{staticClass:"farm"},[i("div",{staticClass:"scenic_top clear"},[i("span",[t._v("周边农庄")]),t._v(" "),i("van-tabs",{attrs:{type:"card"}},[i("van-tab",{attrs:{title:"住宿"}},[i("div",{staticClass:"scenic_bottom"},[i("van-swipe",{attrs:{width:320,loop:!1,"show-indicators":!1}},t._l(t.stayList,function(e,a){return i("van-swipe-item",[i("router-link",{staticClass:"rank",attrs:{to:"",tag:"div"}},[i("div",{staticClass:"total"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:e.fileUrl,alt:""}}),t._v(" "),i("p",{staticClass:"qi"},[t._v("￥"+t._s(e.personConsumption)+"起")])]),t._v(" "),i("router-link",{staticClass:"van-ellipsis",attrs:{to:""}},[t._v("\n                        "+t._s(e.grangeName)+"\n                      ")]),t._v(" "),i("p",[i("span",[i("stars",{attrs:{rate:e.totalMark||0}}),t._v(" "+t._s(e.totalMark)+"分")],1),t._v(" "),i("span"),t._v(" "),i("span",[t._v(t._s(e.fareaName))])])],1)])],1)}))],1)]),t._v(" "),i("van-tab",{attrs:{title:"美食"}},[i("div",{staticClass:"scenic_bottom"},[i("van-swipe",{attrs:{width:320,loop:!1,"show-indicators":!1}},t._l(t.foodList,function(e,a){return i("van-swipe-item",[i("router-link",{staticClass:"rank",attrs:{to:"",tag:"div"}},[i("div",{staticClass:"total"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:e.fileUrl,alt:""}}),t._v(" "),i("p",{staticClass:"qi"},[t._v("￥"+t._s(e.personConsumption)+"起")])]),t._v(" "),i("router-link",{staticClass:"van-ellipsis",attrs:{to:""}},[t._v("\n                        "+t._s(e.grangeName)+"\n                      ")]),t._v(" "),i("p",[i("span",[i("stars",{attrs:{rate:e.totalMark||0}}),t._v(" "+t._s(e.totalMark)+"分")],1),t._v(" "),i("span"),t._v(" "),i("span",[t._v(t._s(e.fareaName))])])],1)])],1)}))],1)]),t._v(" "),i("van-tab",{attrs:{title:"游玩"}},[i("div",{staticClass:"scenic_bottom"},[i("van-swipe",{attrs:{width:320,loop:!1,"show-indicators":!1}},t._l(t.playList,function(e,a){return i("van-swipe-item",[i("router-link",{staticClass:"rank",attrs:{to:"",tag:"div"}},[i("div",{staticClass:"total"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:e.fileUrl,alt:""}}),t._v(" "),i("p",{staticClass:"qi"},[t._v("￥"+t._s(e.personConsumption)+"起")])]),t._v(" "),i("router-link",{staticClass:"van-ellipsis",attrs:{to:""}},[t._v("\n                        "+t._s(e.grangeName)+"\n                      ")]),t._v(" "),i("p",[i("span",[i("stars",{attrs:{rate:e.totalMark||0}}),t._v(" "+t._s(e.totalMark)+"分")],1),t._v(" "),i("span"),t._v(" "),i("span",[t._v(t._s(e.fareaName))])])],1)])],1)}))],1)])],1)],1)])]),t._v(" "),i("div",{staticClass:"blank"})])},staticRenderFns:[]};var I=i("VU/8")(k,R,!1,function(t){i("8TX8"),i("Dgiu")},"data-v-0d0c2fb6",null).exports,x=i("fwYu"),S=i("PD4Y"),L={name:"wantedDetail",data:function(){return{detail:"",getFoodList:"",getPlayList:"",getStayList:"",rentalHouse:[],RimeFarm:!1,RimGrange:!1,isback:!0,title:"求租详情"}},components:{Header:a.a,Footer:o,Title:l,Time:p,Information:u,Recommend:h,RimeFarm:w,RimGrange:I,Link:x.a,Bootom:S.a},methods:{init:function(){var t=this,e=this.$route.params.id;this.$http.post("appServiceFarmhouse/getRentingHouseDetail",{farmhouseRentingNumber:e,userId:1}).then(function(e){t.detail=e.data.detail,t.getFoodList=e.data.getFoodList,t.getPlayList=e.data.getPlayList,t.getStayList=e.data.getStayList,t.rentalHouse=e.data.rentalHouse,e.data.rentalHouse.length>0&&(t.RimeFarm=!0),e.data.getFoodList&&e.data.getPlayList&&e.data.getStayList&&(t.RimGrange=!0),console.log(e)})}},created:function(){this.init()}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wantedDetail"},[t.isapp?t._e():i("div",{staticClass:"topBar"},[i("Header",{attrs:{title:t.title,isback:t.isback}})],1),t._v(" "),i("Title",{attrs:{detail:t.detail}}),t._v(" "),i("Time",{attrs:{detail:t.detail}}),t._v(" "),i("Information",{attrs:{detail:t.detail}}),t._v(" "),i("Recommend",{attrs:{detail:t.detail}}),t._v(" "),t.RimeFarm?i("RimeFarm",{attrs:{list:t.rentalHouse}}):t._e(),t._v(" "),t.RimGrange?i("RimGrange",{attrs:{foodList:t.getFoodList,playList:t.getPlayList,stayList:t.getStayList}}):t._e(),t._v(" "),i("Link"),t._v(" "),i("Footer",{attrs:{detail:t.detail}})],1)},staticRenderFns:[]};var F=i("VU/8")(L,D,!1,function(t){i("xG4o")},"data-v-71184af9",null);e.default=F.exports},"iGZ/":function(t,e){},rueW:function(t,e){},u6DJ:function(t,e){},xG4o:function(t,e){}});