/*
    Created by name: "FuDi", Date:2018/11/21 ,Time:11:20
*/
let m = {
  init() {
    var userID= JSON.parse(localStorage.getItem('userInfo'))
    var id = this.$route.params.orderId
    this.$http.post('appServiceOrder/stay/waittingpay',{userId: userID,orderId: id}).then(res=>{
      this.businessMobile=res.data.businessMobile
      this.businessName=res.data.businessName
      this.businessNumber=res.data.businessNumber//
      this.checkinTime=res.data.checkinTime//入住时间
      this.checkoutTime=res.data.checkoutTime//离店时间
      this.drawback=res.data.drawback//入住规则
      this.occupantsIdcard=res.data.occupantsIdcard//入住人证件号
      this.occupantsMobile=res.data.occupantsMobile//入住人电话
      this.occupantsName=res.data.occupantsName//入住人名字
      this.orderNo=res.data.orderNo//订单编号
      this.orderPrice=res.data.orderPrice//总价
      this.outTime=res.data.outTime//订单时间
      this.roomName=res.data.roomName//房间类型
      this.stayNumber=res.data.stayNumber//入住人数
      this.businessLogoUrl=res.data.businessLogoUrl//
    })
  },
    // 立即支付
    pay(){
      var id = this.$route.params.orderId
      if(this.$proType == 1){
        window.open('https://m.3xgc.com/#/intoPayment/' + id + '?userId=' + JSON.parse(localStorage.getItem('userInfo')).userId, '_self')
        return false
      }
      this.$router.push({name:'intoPayment',params:{id:id}})
    },

}


export default m
