/*
    Created by name: "FuDi", Date:2018/11/20 ,Time:10:11
*/
let m = {

  consultClick() {
    this.show = true
  },
  // 标题
  typeClick(item) {
    this.type = item.name
    this.consultTypeId = item.id
    this.restful = item.restful
    this.show = false
  },
  sexClick(item, index) {
    this.changeRed = index
    this.linksex = item.id
  },
  myphone() {
    if (this.phoneNumber == this.phoneNumber2) {
      this.yanzhen = false
    } else {
      this.yanzhen = true

    }
  },
  yanzhengma() {
    if (this.phoneNumber == '') {
      this.$toast('请输入手机号');
      return
    }
    var phoneNumber = this.phoneNumber
    this.sendAuthCode = false;
    this.auth_time = 120;
    let auth_timetimer = setInterval(() => {
      this.auth_time--;
      if (this.auth_time <= 0) {
        this.sendAuthCode = true;
        clearInterval(auth_timetimer);
      }
    }, 1000);
    this.$http.post('appServiceSso/sendCode', {mobile: phoneNumber}).then(res => {
      if (res.msg == 'success') {
        this.$toast("短信验证码发送成功");
        console.log(res.data)
      } else {
        this.$toast(res.info)
      }
    }).catch(error => {
      this.$toast('网络错误');
    })
    console.log(this.phoneNumber);
  },
  init() {

    this.$http.post('/appServiceInformation/publishConsultParameter',).then(res => {
      var user = JSON.parse(localStorage.getItem('userInfo'))
      if (user) {
        this.yanzhen = false
      } else {
          this.yanzhen = true
      }

      if (res.data.mobile==null) {
        this.yanzhen = false
        this.phoneNumber2 = res.data.mobile
        this.phoneNumber = res.data.mobile
      }else{
        this.yanzhen = true
      }

      this.consultType = res.data.consultType
    })
  },
  next() {
    // 标题
    let consultDescribe = this.messageQuestion
    // 描述
    let consultTitle = this.messageTitle
    // 咨询分类id
    let consultTypeId = this.consultTypeId
    // 咨询分类restful
    let consultTypeRestful = this.restful
    // 咨询名称
    let consultTypeName = this.type
    // 联系人名字
    let linkman = this.userName
    // 联系人手机号
    let linkmobile = this.phoneNumber
    // 联系人性别
    let linksex = this.linksex
    // 用户id
    var user = JSON.parse(localStorage.getItem('userInfo'))
    if (user == '' || user == null) {
      this.yanzhen = false
    } else {
      var userID = JSON.parse(localStorage.getItem('userInfo')).userId
      if (userID) {
        this.yanzhen = true
      }
    }
    // 验证码
    let verificationCode = this.card
    if (consultTypeName!="请选择") {
      if (linkman) {
        if (linkmobile){
          if(verificationCode){
            this.$http.post('/appServiceInformation/publishConsult',{
              consultDescribe,
              consultTitle,
              consultTypeId,
              consultTypeRestful,
              consultTypeName,
              linkman,
              linkmobile,
              linksex,
              userID,
              verificationCode
            }).then(res=>{
              if (res.info=="发布成功"){
                this.$toast("发布成功")
                this.$router.push({
                  name:'Information'
                })
              }else if (res.info=="该手机号已被注册，请登录或者更改手机号") {
                this.$toast(res.info)
                this.$router.push({
                  name:'login'
                })
              }else{
                this.$toast(res.info)
              }
            })
          }else{
            this.$toast("请输入验证码")
          }

        } else{
          this.$toast("请输入联系人手机号")
        }
      }else{
        this.$toast("请输入联系人姓名")
      }
    }else{
      this.$toast("请选择咨询类别")
    }



  },
}
export default m
