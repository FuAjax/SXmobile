/*
    Created by name: "FuDi", Date:2018/11/20 ,Time:10:30
*/

let m = {

  showPopup(num) {
    if (num == 1) {
      this.show = true;
      this.date2 = false;
      this.date1 = true;
    } else if (num == 2) {
      this.show = true;
      this.date2 = true;
      this.date1 = false;
    }
  },
  confirm2(value) {//离店日期
    this.value2 = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate();
    // console.log(this.value2);
    var d = value.getDate();
    var d2 = value.getDate() + 1
    if (d < 10) {
      d = "0" + d;
    }
    if (d2 < 10) {
      d2 = "0" + d2;
    }
    this.value2 = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + d2
    // nextday = y + "-" + m + "-" + d2
    this.show = false;
    if (this.value1 != '') {
      this.DateDiff(this.value1, this.value2)
    }
    // 入住时间
    var value1 = this.value1

    // 离店时间
    var value2 = this.value2

    var id = this.$route.params.id
    var userID = JSON.parse(localStorage.getItem('userInfo'))
    this.$http.post('appServiceOrder/returnOrderInfo', {
      userId: userID,
      productId: id,
      checkinTime: value1,
      checkoutTime: value2
    }).then(res => {
      // console.log(res);
      this.drawback = res.data.drawback
      this.priceDetail = res.data.priceDetail
      this.totalPrice = `￥` + res.data.totalPrice + `元`
    })
    init();
  },
  confirm(value) {//离店日期
    this.value1 = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate();
    // console.log(this.value2);
    var d = value.getDate();
    var d2 = value.getDate() + 1
    if (d < 10) {
      d = "0" + d;
    }
    if (d2 < 10) {
      d2 = "0" + d2;
    }
    this.value1 = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + d2
    // nextday = y + "-" + m + "-" + d2
    this.show = false;
    if (this.value1 != '') {
      this.DateDiff(this.value1, this.value2)
    }
    // 入住时间
    var value1 = this.value1

    // 离店时间
    var value2 = this.value2

    var id = this.$route.params.id
    var userID = JSON.parse(localStorage.getItem('userInfo'))
    this.$http.post('appServiceOrder/returnOrderInfo', {
      userId: userID,
      productId: id,
      checkinTime: value1,
      checkoutTime: value2
    }).then(res => {
      // console.log(res);
      this.drawback = res.data.drawback
      this.priceDetail = res.data.priceDetail
      this.totalPrice = `￥` + res.data.totalPrice + `元`
    })
    init();
  },
  cancel() {
    this.show = false;
  },
  DateDiff(sDate1, sDate2) {
    var aDate, oDate1, oDate2, iDays;
    aDate = sDate1.split("-");
    oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);
    aDate = sDate2.split("-");
    oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);
    iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24);
    this.days = iDays;
  },
  detail() {
    this.show2 = true;
  },

  // 获取入住信息
  init() {
    var value1 = this.value1
    var value2 = this.value2
    value1 = value1.getFullYear() + '-' + (value1.getMonth() + 1) + '-' + (value1.getDate());
    value2 = value2.getFullYear() + '-' + (value2.getMonth() + 1) + '-' + (value2.getDate() + 1);
    // console.log(value2);
    var userID = JSON.parse(localStorage.getItem('userInfo'))
    
    // console.log(userID);
    // console.log(userID.userId);
    // console.log(userID.nickName);
    // this.phone=userID.nickName
    // this.UserName=userID.userId
    var id = this.$route.params.id
    // console.log(id);
    
    this.$http.post('appServiceOrder/stay/writeinformation', {productId: id, userId: userID}).then(res => {
      // console.log(res.data);
      this.productName = res.data.productName
      this.businessLogoUrl = res.data.businessLogoUrl
      this.abolitionRules = res.data.abolitionRules
      this.telephone = res.data.telephone
      this.areaName = res.data.areaName
      this.bedType = res.data.bedType
      this.businessName = res.data.businessName
      this.breakfastNumber = res.data.breakfastNumber
    })
    this.$http.post('appServiceOrder/queryGeneralContact', {productId: id, userId: userID}).then(res => {
      this.info = res.data
      if (res.data.length>0){
        this.itCARD=this.info[0].contactIdcard
        this.itPHONE=this.info[0].contactMobile
        this.itNAME=this.info[0].contactName
      }

    })

    this.$http.post('appServiceOrder/returnOrderInfo', {
      userId: userID,
      productId: id,
      checkinTime: value1,
      checkoutTime: value2
    }).then(res => {
      // console.log(res);
      this.drawback = res.data.drawback
      this.priceDetail = res.data.priceDetail
      this.totalPrice = `￥` + res.data.totalPrice + `元`
    })
    // this.$http.post('appServiceOrder/returnOrderInfo',{
    //   userId: UserName,
    //   productId: id,
    //   checkinTime: this.value1,
    //   checkoutTime: this.value2
    // }).then(res => {
    //   console.log(res);
    //   this.drawback = res.data.drawback
    //   this.priceDetail = res.data.priceDetail
    //   this.totalPrice = `￥` + res.data.totalPrice + `元`
    // })
  },

  toActive(index,item) {

    this.activeIndex = index;
    this.changeRed = index;
    var userNAME = document.getElementsByClassName('userNAME')
    var userPHONE = document.getElementsByClassName('userPHONE')
    var userCARD = document.getElementsByClassName('userCARD')
    this.itNAME=userNAME[index].value
    console.log(this.itNAME);
    this.itPHONE=userPHONE[index].value
    this.itCARD=userCARD[index].value
  },
  // 提交订单
  submit() {
    var Name = /^(([a-zA-Z+\.?\·?a-zA-Z+]{2,30}$)|([\u4e00-\u9fa5+\·?\u4e00-\u9fa5+]{2,30}$))/;
    var Phone = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
    var Card = /^(^[1-9]\d{5}[1-9]\d{3}(((0[2])([0|1|2][0-8])|(([0-1][1|4|6|9])([0|1|2][0-9]|[3][0]))|(((0[1|3|5|7|8])|(1[0|2]))(([0|1|2]\d)|3[0-1]))))((\d{4})|\d{3}[Xx])$)$/;
    var userNAME = document.getElementsByClassName('userNAME')
    var userPHONE = document.getElementsByClassName('userPHONE')
    var userCARD = document.getElementsByClassName('userCARD')


    var nameArray=[]
    var phoneArray=[]
    var cardArray=[]

    for (var p=0;p<userNAME.length;p++){
      nameArray.push(userNAME[p].value)
    }

    for (var o=0;o<userPHONE.length;o++){
      phoneArray.push(userPHONE[o].value)
    }
    for (var i=0;i<userCARD.length;i++){
      cardArray.push(userCARD[i].value)
    }

    for (var i = 0; i < userNAME.length; i++) {

      if (Name.test(userNAME.item(i).value)) {
        for (var ip = 0; ip < userPHONE.length; ip++) {
          if(Phone.test(userPHONE.item(ip).value)){
            for (var ic = 0; ic < userCARD.length; ic++) {
              if (Card.test(userCARD.item(ic).value)) {
                if (this.itNAME==''){
                  this.itNAME=userNAME[0].value
                  this.itPHONE=userPHONE[0].value
                  this.itCARD=userCARD[0].value
                  console.log(this.itNAME);
                }
                var occupantsName =this.itNAME
                var occupantsMobile = this.itPHONE
                var occupantsIdcard =this.itCARD
                var checkinTime = ''
                var checkoutTime = ''
                checkinTime = this.value1
                checkoutTime = this.value2
                var id = this.$route.params.id
                console.log(occupantsName);
                console.log(occupantsMobile);
                console.log(occupantsIdcard);
                this.$http.post('appServiceOrder/stay/submit', {
                  userId: 1,
                  productId: id,
                  occupantsName,
                  occupantsMobile,
                  occupantsIdcard,
                  checkoutTime,
                  checkinTime
                }).then(res => {
                  if (res.info == '请求成功') {
                    this.$toast("预订成功");
                    this.$router.push({
                      name: "inntoConfirm", params: {
                        id: res.data.orderId,
                        occupantsIdcard: occupantsIdcard,
                        occupantsMobile: occupantsMobile,
                        occupantsName: occupantsName,
                        checkoutTime,
                        checkinTime
                      }
                    })
                  }
                })
              } else {
                this.$toast("请输入正确证件号码")
              }
            }
          } else {
            this.$toast("请输入正确手机号码")
          }
        }
      } else {
        this.$toast("请输入正确姓名")
        return false
      }
    }

  },

  // 添加入住人弹框
  addPeople() {
    this.showPeople = true
    this.showPeopleList = true
  },
  // 添加入住人确定
  beforeCloseList(action, done) {
    var userID = JSON.parse(localStorage.getItem('userInfo')).userId
    var id = ""
    if (action === 'confirm') {
      setTimeout(done, 0);

      var array = this.info
      this.info.forEach(function (item, index) {
        id = item.id
      })
      if(this.userName){
        if(this.userPassword){
          if(this.userCard){
            array.push({
              'contactIdcard': this.userCard,
              'contactMobile': this.userPassword,
              'contactName': this.userName,
              'fuserId': userID,
              'id': id + 1
            })
          }else{
            this.$toast("请输入正确证件号码")
          }
        }else{
          this.$toast("请输入正确手机号码")
        }
      }else{
        this.$toast("请输入正确姓名")
      }
        // console.log(array);
    } else {
      done();
    }
  }
}
export default m
