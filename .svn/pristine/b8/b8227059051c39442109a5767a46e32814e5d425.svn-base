/*
    Created by name: "FuDi", Date:2018/11/19 ,Time:16:50
*/

let m ={
    init(){
      var consultId=this.$route.params.consultId
      this.$http.post('appServiceInformation/consult',{consultId}).then(res=>{
        // console.log(res.data);
        this.consult=res.data.consult[0]
        this.newConsult=res.data.newConsult
        console.log(this.consult);
        console.log(this.newConsult);
      })
    }
}
export default m
