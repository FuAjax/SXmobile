/*
    Created by name: "FuDi", Date:2018/11/15 ,Time:19:26
*/

let m={
  init(){
    var restful=this.$route.params.restful
    this.$http.post('/appServiceInformation/tag',{cityId:1,restful}).then(res=>{
      console.log(res);
      this.info=res.data.info
      this.title=res.data.tagName
    })
  }
}
export default m
