/*
    Created by name: "FuDi", Date:2018/11/16 ,Time:13:43
*/

let m ={
  init(){
    var id=this.$route.params.id
    this.$http.post('/appServiceInformation/news',{cityId:1,id:id}).then(res=>{
      console.log(res.data);

      this.info=res.data.info
      this.relatedInfo=res.data.relatedInfo

      this.TITLE=res.data.info[0].infoTitle+ '- 武汉三乡工程网'
      console.log(this.TITLE);
      if(comment){
        this.commentShow=true
      }
      this.comment1=res.data.comment[0]
      this.comment=res.data.comment
    })
    this.$http.post('/appServiceInformation/others',{cityId:1,id:id}).then(res=>{
      this.farmhouse=res.data.farmhouse
      this.grange=res.data.grange
      console.log(this.grange);

    })
  }
}
export default m
