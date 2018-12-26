/*
    Created by name: "FuDi", Date:2018/11/15 ,Time:17:26
*/

let m={
  init(){
    var restful=this.$route.params.restful

    this.$http.post('/appServiceInformation/column',{cityId:1,restful}).then(res=>{
      console.log(res.data);
      if(res.msg='success'){
        this.title=res.data.columnName
        this.info=res.data.info
      }
    })
  }
}
export default m
