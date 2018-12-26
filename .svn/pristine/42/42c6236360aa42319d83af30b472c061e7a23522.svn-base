/*
    Created by name: "FuDi", Date:2018/11/21 ,Time:9:17
*/
let m = {
  init() {
    var id = this.$route.params.orderId
    this.$http.post('appServiceOrder/stay/waittingpay',{userId: 1,orderId: id}).then(res=>{
      console.log(res.data);
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
    })
  }
}
export default m
