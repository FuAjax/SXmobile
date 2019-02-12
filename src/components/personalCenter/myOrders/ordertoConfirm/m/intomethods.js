/*
    Created by name: "FuDi", Date:2018/11/20 ,Time:18:58
*/

let m = {


  init() {
    var userID = JSON.parse(localStorage.getItem('userInfo')).userId
    var id = this.$route.params.id
    this.id = id
    this.$http.post('appServiceOrder/stay/waittingcomfirm', {userId: userID, orderId: id}).then(res => {
      this.orderPrice = res.data.orderPrice//金额
      this.drawback = res.data.drawback//入住规则
      this.orderNo = res.data.orderNo//订单号
      this.occupantsIdcard = res.data.occupantsIdcard//证件号
      this.occupantsMobile = res.data.occupantsMobile//手机号
      this.occupantsName = res.data.occupantsName//入住人
      this.roomName = res.data.roomName//房间类型
      this.stayNumber = res.data.stayNumber//入住人数
      this.checkinTime = res.data.checkinTime//入住时间
      this.checkoutTime = res.data.checkoutTime//离店时间
      this.businessLogoUrl = res.data.businessLogoUrl//图片地址
      this.businessName = res.data.businessName//图片地址

    })
  },

  publicBusi() {
    var _this = this
    var myVar;
    var userID= JSON.parse(localStorage.getItem('userInfo'))
    var id = this.$route.params.id
    this.myVar=setInterval(function () {
      var userID = JSON.parse(localStorage.getItem('userInfo'))
      _this.$http.post('appServiceOrder/queryOrderStatus', {
        orderId: id,
        userId: userID,
      }).then(res => {
        if (res.data.orderStatus == 1) {
          // _this.$toast("订单成功")
          _this.$router.push({name: 'intoAffirm', params: {orderId: id, userId: userID}})
        }
      })
    }, 2000);

    function alertFunc() {


    }
  },

}

export default m


// /intoAffirm/152
//

