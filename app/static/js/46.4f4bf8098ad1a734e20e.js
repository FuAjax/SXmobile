webpackJsonp([46],{Hf8Z:function(t,i){},Ph2w:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("GgDs"),a=s("fwYu"),n={name:"Project",props:{newsList:{type:Array,required:!0}},data:function(){return{scenic:"",rank:"相关资讯"}}},r={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{staticClass:"project"},t._l(t.newsList,function(i,e){return s("div",{key:e,staticClass:"content"},[s("router-link",{attrs:{to:{name:"textDetail",params:{id:i.infoId}}}},[s("div",{staticClass:"conLeft"},[s("div",{staticClass:"news"},[t._v(t._s(i.infoTitle))]),t._v(" "),s("div",[s("div",{staticClass:"time"},[t._v(t._s(i.infoTime))])])]),t._v(" "),s("div",{staticClass:"conRight"},[s("img",{staticClass:"newsImg",attrs:{src:i.infoLogourl,alt:""}})])])],1)})),t._v(" "),s("div",{staticClass:"blank"})])},staticRenderFns:[]};var c=s("VU/8")(n,r,!1,function(t){s("x5bV")},"data-v-76a4322e",null).exports,o={init:function(){var t=this,i=this.$route.params.restful;this.$http.post("/appServiceInformation/tag",{cityId:1,restful:i}).then(function(i){console.log(i),t.info=i.data.info,t.title=i.data.tagName})}},l={name:"label",data:function(){return{tagName:"",info:[],isback:!0,title:""}},components:{Header:e.a,Link:a.a,List:c},created:function(){this.init()},methods:o},d={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",[this.isapp?this._e():i("div",{staticClass:"topBar"},[i("Header",{attrs:{title:this.title,isback:this.isback}})],1),this._v(" "),i("List",{attrs:{newsList:this.info}}),this._v(" "),i("Link")],1)},staticRenderFns:[]};var f=s("VU/8")(l,d,!1,function(t){s("Hf8Z")},"data-v-35eae5d0",null);i.default=f.exports},x5bV:function(t,i){}});