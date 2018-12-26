/*
    Created by name: "FuDi", Date:2018/11/19 ,Time:14:59
*/
let m={
  init(){
    var restful=this.$route.params.restful
    this.$http.post('/appServiceInformation/consultList',{type:1,info:restful,}).then(res=>{
      console.log(res.data);
    })
  }
}
export default m
