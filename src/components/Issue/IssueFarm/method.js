import getToken from 'com/common/token'
import { isvalidPhone, returnFloat } from '@/utils/validate'
let m = {
  init() {
    this.$http.post('/appServiceInformation/publishFarmhouseParameter',{cityId:1}).then(
      res => {
        if (res.msg == 'success') {
          const data = res.data
          // 出租用途
          this.use = data.use
          this.use.forEach((item, index) => {
            item.ischecked = false
          })
          // 所在地区
          this.area = data.area
          this.area.forEach((item, index) => {
            this.columns.push(item.label)
          })
          if (this.area[0].children) {
            this.area[0].children.forEach((item, index) => {
              this.columns1.push(item.label)
            })
            this.columnsIndex1 = 1
          }
          if (this.area[0].children[0].children) {
            this.area[0].children[0].children.forEach((item, index) => {
              this.columns2.push(item.label)
            })
            this.columnsIndex1 = 1
          }
          // 附近景点
          this.spot = data.landspace
          this.spot.forEach((item, index) => {
            this.spotColumns.push(item.label)
          })
          if (this.spot[0].children) {
            this.spot[0].children.forEach((item, index) => {
              this.spotColumns1.push(item.label)
            })
          }
          // 房屋类型
          this.houseType = data.houseType
          this.houseType.forEach((item, index) => {
            this.houseTypeColumns.push(item.name)
          })
          // 朝向
          this.houseOrient = data.houseOrientation
          this.houseOrient.forEach((item, index) => {
            this.houseOrientation.push(item.name)
          })
          // 装修情况
          this.decorationSituation = data.decorationSituation
          this.decorationSituation.forEach((item, index) => {
            this.decorationSituationColumns.push(item.name)
          })
          // 房屋结构
          this.buildingStructure = data.buildingStructure
          this.buildingStructure.forEach((item, index) => {
            this.buildingStructureColumns.push(item.name)
          })
          // 房屋特色
          this.characteristic = data.characteristic
          this.characteristic.forEach((item, index) => {
            item.ischecked = false
          })
          // 房屋配套
          this.buildingMatching = data.buildingMatching
          this.buildingMatching.forEach((item, index) => {
            item.ischecked = false
          })

          // 户型 室 厅 卫 阳 厨
          this.roomColumns = ['1室', '2室', '3室', '4室', '5室', '6室', '7室', '8室', '9室', '10室']
          this.hallColumns = ['0厅', '1厅', '2厅', '3厅', '4厅', '5厅']
          this.toiletColumns = ['0卫', '1卫', '2卫', '3卫', '4卫', '5卫']
          this.balconyColumns = ['0阳', '1阳', '2阳', '3阳', '4阳', '5阳']
          this.kitchenColumns = ['0厨', '1厨', '2厨', '3厨', '4厨', '5厨']

          // 手机号
          if (data.mobile) {
            this.phone = data.mobile
            this.mobile = data.mobile
            this.isCodeShow = false
          }
        }
      }
    )
  },
  setmap() {
    const _this = this;
    this.map = new BMap.Map('l-map');
    this.map.centerAndZoom("武汉", 12);
    this.map.enableScrollWheelZoom();
    this.ac = new BMap.Autocomplete(    //建立一个自动完成的对象
      {
        "input": "getInput",
        "location": this.map
      });
    let myValue;
    this.ac.addEventListener('onconfirm', function (e) {
      let _value = e.item.value;
      myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
      _this.address_detail = myValue;
      setPlace();
    })
    function setPlace() {
      _this.map.clearOverlays();    //清除地图上所有覆盖物
      function myFun() {
        var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
        _this.map.centerAndZoom(pp, 18);
        _this.map.addOverlay(new BMap.Marker(pp));    //添加标注
        // console.log(pp)
        _this.locationSpot.lng = pp.lng;
        _this.locationSpot.lat = pp.lat;
      }
      var local = new BMap.LocalSearch(_this.map, { //智能搜索
        onSearchComplete: myFun
      });
      local.search(myValue);
    }
  },
  // 根据经纬度绘制地图中的坐标点
  drawLocation () {
    if(this.locationSpot.lng !== "" && this.locationSpot.lat !== ""){
      this.map.clearOverlays();
      const new_point = new BMap.Point(this.locationSpot.lng, this.locationSpot.lat)
      const marker = new BMap.Marker(new_point)
      this.map.addOverlay(marker)
      this.map.panTo(new_point)
    }
  },
  // 选择用途
  checkUse(index, item) {           // 出租用途
    if (this.use[index].ischecked) {    // 已选中 取消选中
      this.checkUseIds.splice(index, 1)
      this.checkUseName.splice(index, 1)
      this.checkUseResful.splice(index, 1)
      this.checkUseShow = false
      this.$nextTick(() => {
        this.use[index].ischecked = false
        this.checkUseShow = true
      })
    } else {                          // 未选中 选中
      if (this.checkUseIds.length < 3) {
        this.checkUseIds.push(item.id)
        this.checkUseName.push(item.name)
        this.checkUseResful.push(item.restful)
        this.checkUseShow = false
        this.$nextTick(() => {
          this.use[index].ischecked = true
          this.checkUseShow = true
        })
      } else {
        this.$toast('最多选择三个出租用途')
        // return false
      }
    }
    // this.checkUseShow = false
    // this.$nextTick(()=>{
    //   this.use[index].ischecked = !this.use[index].ischecked
    //   this.checkUseShow = true
    // })
    // console.log(this.use)
  },
  checkCharacteristic(index, item) {           // 房屋特色
    if (this.characteristic[index].ischecked) {
      this.checkCharacteristicIds.splice(index, 1)
      this.checkCharacteristicName.splice(index, 1)
      this.checkCharacteristicResful.splice(index, 1)
    } else {
      this.checkCharacteristicIds.push(item.id)
      this.checkCharacteristicName.push(item.name)
      this.checkCharacteristicResful.push(item.restful)
    }
    this.checkCharacteristicShow = false
    this.$nextTick(() => {
      this.characteristic[index].ischecked = !this.characteristic[index].ischecked
      this.checkCharacteristicShow = true
    })
  },
  checkBuildingMatching(index, item) {           // 房屋配套
    if (this.buildingMatching[index].ischecked) {
      this.buildingMatchingIds.splice(index, 1)
      this.buildingMatchingName.splice(index, 1)
      this.buildingMatchingResful.splice(index, 1)
    } else {
      this.buildingMatchingIds.push(item.id)
      this.buildingMatchingName.push(item.name)
      this.buildingMatchingResful.push(item.restful)
    }
    this.buildingMatchingShow = false
    this.$nextTick(() => {
      this.buildingMatching[index].ischecked = !this.buildingMatching[index].ischecked
      this.buildingMatchingShow = true
    })
  },
  face(o) {           // 是否面谈
    this.isFace = (o == 1 ? true : false)
  },
  rent(o) {           // 是否整租
    this.isRent = (o == 1 ? true : false)
  },
  landCharacteristicChange(o) {     // 土地状态
    if (this.landCharacteristic === o) {
      this.landCharacteristic = null
      return false
    }
    this.landCharacteristic = o
  },
  landStateChange(o) {     // 土地状态
    if (this.landState === o) {
      this.landState = null
      return false
    }
    this.landState = o
  },
  // 所在地区
  onChange(picker, value, index) {
    this.columnsIndex = index + 1
    this.columnsIndex1 = null
    this.columnsIndex2 = null
    this.columns1 = []
    this.columns2 = []
    if (this.area[index].children) {
      this.area[index].children.forEach((item, index) => {
        this.columns1.push(item.label)
      })
    }
    if (this.columns1.length > 0) {
      this.columnsIndex1 = 1
    }
  },
  onChange1(picker, value, index) {
    this.columnsIndex1 = index + 1
    this.columnsIndex2 = null
    this.columns2 = []
    if (this.area[this.columnsIndex - 1].children[index].children) {
      this.area[this.columnsIndex - 1].children[index].children.forEach((item, index) => {
        this.columns2.push(item.label)
      })
    }
    if (this.columns2.length > 0) {
      this.columnsIndex2 = 1
    }
  },
  onChange2(picker, value, index) {
    this.columnsIndex2 = index + 1
  },
  // 周边景点
  spotonChange(picker, value, index) {
    this.spotColumnsIndex = index + 1
    this.spotColumnsIndex1 = null
    this.spotColumnsIndex2 = null
    this.spotColumns1 = []
    this.spotColumns2 = []
    if (this.spot[index].children) {
      this.spot[index].children.forEach((item, index) => {
        this.spotColumns1.push(item.label)
      })
    }
    if (this.spotColumns1.length > 0) {
      this.spotColumnsIndex1 = 1
    }
  },
  spotonChange1(picker, value, index) {
    this.spotColumnsIndex1 = index + 1
  },
  // 房屋类型
  houseTypeChange(picker, value, index) {
    this.houseTypeIndex = index + 1
  },
  // 朝向
  houseOrientationChange(picker, value, index) {
    this.houseOrientationIndex = index + 1
  },
  // 楼层
  floorColumnsChange(picker, value, index) {
    this.floorIndex = index + 1
  },
  // 装修情况
  decorationSituationChange(picker, value, index) {
    this.decorationSituationIndex = index + 1
  },
  // 房屋结构
  buildingStructureChange(picker, value, index) {
    this.buildingStructureIndex = index + 1
  },
  roomChange(picker, value, index) {
    this.roomIndex = index + 1
  },
  hallChange(picker, value, index) {
    this.hallIndex = index + 1
  },
  toiletChange(picker, value, index) {
    this.toiletIndex = index + 1
  },
  balconyChange(picker, value, index) {
    this.balconyIndex = index + 1
  },
  kitchenChange(picker, value, index) {
    this.kitchenIndex = index + 1
  },
  showPop(type) {
    /** 
     * type == 1 所在地区
     * type == 2 周边景点
     * type == 3 户型
     * type == 4 楼层
     * type == 5 朝向
     * type == 6 装修情况
     * type == 7 房屋结构
     * type == 8 房屋类型
    */
    this.popType = type
    this.popShow = true
    if (type == 9) {
      setTimeout(() => {
        this.setmap();
      }, 1500)
    }
  },
  generateTit() {                     // 生成标题
    // 农房出租：标题可自动生成也可以手动改写，自动加入字段：{地区} {面积} {X室}{X平} {房屋类型} {特色标签1} {景区}
    // 完整示例：黄陂区 木兰山 6室180平 2层楼房 独立院落 可种菜 景区    // + ' ' + this.houseTypeName + '{特色}' + ' '
    // 如其中一个字段内容为空 则不显示此字段内容
    var title = this.columnsName.join(' ')  // 地区
    if (this.coveredArea && this.coveredArea !== '') {  // 面积
      title += (' ' + this.coveredArea + '平')
    }
    if (this.apartmentName) {     // 室
      title += (' ' + this.apartmentName.split('-')[0])
    }
    if (this.houseTypeName) {      // 房屋类型
      title += (' ' + this.houseTypeName)
    }
    if (this.checkCharacteristicName.length > 0) {      // 特色标签1
      title += (' ' + this.checkCharacteristicName[0])
    }
    if (this.spotColumnsName.length > 1) {      // 景区
      title += (' ' + this.spotColumnsName[1])
    }
    this.houseTit = title
  },
  // pop 确定
  confirmPop() {
    if (this.popType == 1) {         // 所在地区
      if (this.columnsIndex2) {         // 村
        var columnsIds = [], columnsName = []
        columnsName.push(this.area[this.columnsIndex - 0 - 1].label)
        columnsName.push(this.area[this.columnsIndex - 0 - 1].children[this.columnsIndex1 - 0 - 1].label)
        columnsIds.push(this.area[this.columnsIndex - 0 - 1].value)
        columnsIds.push(this.area[this.columnsIndex - 0 - 1].children[this.columnsIndex1 - 0 - 1].value)
        // if(this.area[this.columnsIndex - 0 - 1].children[this.columnsIndex1 - 0 - 1].children){         // 村
        columnsIds.push(this.area[this.columnsIndex - 0 - 1].children[this.columnsIndex1 - 0 - 1].children[this.columnsIndex2 - 0 - 1].value)
        columnsName.push(this.area[this.columnsIndex - 0 - 1].children[this.columnsIndex1 - 0 - 1].children[this.columnsIndex2 - 0 - 1].label)
        // }
        this.columnsName = columnsName
        this.columnsIds = columnsIds
      } else {
        this.$toast('所在地区请精确到村');
      }
      this.generateTit()
    }

    if (this.popType == 2) {         // 景点
      if (this.spotColumnsIndex1) {
        var spotColumnsIds = [], spotColumnsName = []
        spotColumnsName.push(this.spot[this.spotColumnsIndex - 0 - 1].label)
        spotColumnsName.push(this.spot[this.spotColumnsIndex - 0 - 1].children[this.spotColumnsIndex1 - 0 - 1].label)
        spotColumnsIds.push(this.spot[this.spotColumnsIndex - 0 - 1].value)
        spotColumnsIds.push(this.spot[this.spotColumnsIndex - 0 - 1].children[this.spotColumnsIndex1 - 0 - 1].value)

        this.spotColumnsName = spotColumnsName
        this.spotColumnsIds = spotColumnsIds
      } else {
        this.$toast('周边景点请精确到景点');
      }
      this.generateTit()
    }
    if (this.popType == 8) {         // 房屋类型
      this.houseTypeName = this.houseTypeColumns[this.houseTypeIndex - 1]
      this.generateTit()
    }

    if (this.popType == 3) {         // 房屋户型
      if (this.roomIndex && this.hallIndex && this.toiletIndex && this.balconyIndex && this.kitchenIndex) {
        this.apartmentName = this.roomColumns[this.roomIndex - 1] + '-' + this.hallColumns[this.hallIndex - 1] + '-' + this.toiletColumns[this.toiletIndex - 1] + '-' + this.balconyColumns[this.balconyIndex - 1] + '-' + this.kitchenColumns[this.kitchenIndex - 1]
      }
      this.generateTit()
    }
    if (this.popType == 4) {         // 楼层
      this.floorName = this.floorColumns[this.floorIndex - 1]
    }
    if (this.popType == 5) {         // 朝向
      this.houseOrientationName = this.houseOrientation[this.houseOrientationIndex - 1]
    }
    if (this.popType == 6) {         // 装修情况
      this.decorationSituationName = this.decorationSituationColumns[this.decorationSituationIndex - 1]
    }
    if (this.popType == 7) {         // 房屋结构
      this.buildingStructureName = this.buildingStructureColumns[this.buildingStructureIndex - 1]
    }
    if (this.popType == 9) {
      this.location = this.locationSpot.lng + ',' + this.locationSpot.lat
    }
    this.popShow = false
  },
  // pop 关闭
  closePop() {
    this.popShow = false
  },
  delIMg(index) {        //删除图片
    this.imglist.splice(index, 1)
  },
  delVideo(index) {        //删除视频
    this.videoList.splice(index, 1)
  },
  uploadimg(e) {       //图片上传
    let file = e.target.files[0];
    let imgSize = file.size / 1024;//mb
    let fileType = file.name.substring(file.name.lastIndexOf('.') + 1, file.name.length).toLocaleLowerCase();
    let params = new FormData(); //创建form对象
    let timestamp = (new Date()).getTime();
    let Atanisi = Math.floor(Math.random() * 999999);
    let newName = timestamp + Atanisi + "." + fileType;
    params.append('key', newName);
    if (fileType != 'jpg' && fileType != 'bmp' && fileType != 'png' && fileType != "jpeg") {
      this.$toast('上传图片格式不正确')
      return false
    }
    if (imgSize > 5120) {
      this.$toast('上传的图片不得大于5MB')
      return false
    }
    let Token = getToken.genUpToken(2, newName);
    params.append('token', Token);
    params.append('file', file)
    let config = {
      "Content-Type": "multipart/form-data"
    }
    let url = getToken.niuUrl[1];
    this.$http.postImg('https://upload.qiniu.com/', params, null, null, config).then(res => {
      this.imglist.push(url + res.key)
    })
  },
  uploadVideo(e) {       //视频上传
    let file = e.target.files[0];
    let imgSize = file.size / 1024;//mb
    let fileType = file.name.substring(file.name.lastIndexOf('.') + 1, file.name.length).toLocaleLowerCase();
    let params = new FormData(); //创建form对象
    let timestamp = (new Date()).getTime();
    let Atanisi = Math.floor(Math.random() * 999999);
    let newName = timestamp + Atanisi + "." + fileType;
    params.append('key', newName);
    if (fileType != 'mp4') {
      this.$toast('上传视频格式不正确')
      return false
    }
    if (imgSize > 307200) {
      this.$toast('上传的视频不得大于300MB')
      return false
    }
    let Token = getToken.genUpToken(3, newName);
    params.append('token', Token);
    params.append('file', file)
    let config = {
      "Content-Type": "multipart/form-data"
    }
    let url = getToken.niuUrl[2];
    this.$http.postImg('https://upload.qiniu.com/', params, null, null, config).then(res => {
      this.videoList.push(url + res.key)
    })
  },
  getCode() {
    if (!isvalidPhone(this.phone)) {
      this.$toast('手机号格式错误')
      return false
    }
    this.sendAuthCode = false;
    this.auth_time = 120;
    let auth_timetimer = setInterval(() => {
      this.auth_time--;
      if (this.auth_time <= 0) {
        this.sendAuthCode = true;
        clearInterval(auth_timetimer);
      }
    }, 1000);

    this.$http.post('appServiceSso/sendCode', { mobile: this.phone }).then(
      res => {
        if (res.msg == 'success') {
          this.$toast('验证码发送成功')
        } else {
          this.$toast(res.info)
        }
      }
    ).catch(error => {
      this.$toast('网络错误');
    })
  },
  getPhone() {
    this.$http.post('appServiceUser/baseInfo').then(res => {
      if (res.msg == "success") {
        this.mobile = res.data.mobile
        this.phone = res.data.mobile
      }
    })
  },
  next() {               // 下一步 1
    var aaa = this.saveStep1()
    if (aaa) {
      this.step = 2
    }
  },
  backStep1() {               // 下一步
    this.step = 1
  },
  saveStep1() {               // step1
    const params = new Object()
    /*
      addressDetail	详细位置	string	
      areaId	地区id集合	string	格式:市id,区id,街id,村id
      areaName	地区名称集合	string	格式:市名称,区名称,街名称,村名称
      balcony	阳	number  
      bathroom	卫	number	
      bedroom	室	number	
      drawingroom	厅	number	
      kitchen	厨	number	
      floor	楼层	number	
      coveredArea	建筑面积	number	
      curtilageArea	宅基地面积	number	
      rentingYears	出租年限	number	
      isInterview	价格是否面议	number	0否 1是
      rentingPrice	出租价格	number	小数，isInterview为0时必须
      isWholerent	是否整租	number	0否 1是
      partrentalInstructions	部分出租说明	string	isWholerent为0时必须
      logourl	Logo链接	string	
      otherurl	其他图片链接集合	string	多个以,分隔
      videourl	视频链接	string	
      farmhouseTitle	农房标题	string	
      farmhouseDescribe	农房详细描述	string	
      useId	出租用途id集合	string	多个以,分隔
      useName	出租用途名称集合	string	多个以,分隔
      useRestful	出租用途restful集合	string	多个以,分隔
      landspaceId	景点id	number	
      landspaceName	景点名称	string	
      latitude	纬度	number	小数
      longitude	经度	number	小数
    */

    if (this.checkUseResful.length > 0) {
      params.useId = this.checkUseIds.join(',')
      params.useName = this.checkUseName.join(',')
      params.useRestful = this.checkUseResful.join(',')
    } else {
      this.$toast('至少选择一个出租用途')
      return false
    }
    if (this.columnsName.length > 0) {          // 所在地区
      params.areaName = '武汉,' + this.columnsName.join(',')
      params.areaId = '1,' + this.columnsIds.join(',')
    } else {
      this.$toast('请选择所在区域')
      return false
    }
    if (this.location && this.location !== '') {      // 地图标注
      params.latitude = this.locationSpot.lat
      params.longitude = this.locationSpot.lng
    }
    if (this.addressDetail !== '') {
      params.addressDetail = this.addressDetail
    }
    if (this.spotColumnsName.length > 1) {          // 周边景点
      params.landspaceName = this.spotColumnsName[1]
      params.landspaceId = this.spotColumnsIds[1]
    }

    if (this.coveredArea && this.coveredArea !== '') {
      params.coveredArea = this.coveredArea - 0
    } else {
      this.$toast('请填写建筑面积')
      return false
    }
    if (this.curtilageArea && this.curtilageArea !== '') {      // 基地面积
      params.curtilageArea = this.curtilageArea - 0
    }

    if (this.apartmentName && this.apartmentName !== '') {
      params.bedroom = this.roomIndex
      params.balcony = this.balconyIndex - 1
      params.bathroom = this.toiletIndex - 1
      params.kitchen = this.kitchenIndex - 1
      params.drawingroom = this.hallIndex - 1
    } else {
      this.$toast('请选择房屋户型')
      return false
    }

    if (this.rentingYears && this.rentingYears !== '') {
      params.rentingYears = this.rentingYears - 0
    } else {
      this.$toast('请填写出租年限')
      return false
    }

    params.isInterview = this.isFace ? 1 : 0
    if (!this.isFace) {     // 当不面议
      if (this.rentingPrice && this.rentingPrice !== '') {
        params.rentingPrice = this.rentingPrice
      } else {
        this.$toast('请填写出租价格')
        return false
      }
    }
    params.isWholerent = this.isRent ? 0 : 1
    if (this.isRent) {     // 当不整租
      if (this.partrentalInstructions && this.partrentalInstructions !== '') {
        params.partrentalInstructions = this.partrentalInstructions
      } else {
        this.$toast('请填写部分出租情况')
        return false
      }
    }
    if (this.imglist.length > 0) {
      params.logourl = this.imglist[0]
      var imgs = this.imglist.join(',')
      imgs.split(',', 2)
      if (this.imglist.length > 1) {     // 当有一张以上图片
        params.otherurl = imgs
      }
    } else {
      this.$toast('至少上传一张图片')
      return false
    }
    if (this.videoList.length > 0) {     // 当有视频
      params.videourl = this.videoList.join(',')
    }
    return params
  },
  saveStep2() {               // step2
    const params = new Object()
    if (this.floor && this.floor !== '') {
      params.floor = this.floor - 0
    } else {
      this.$toast('请填写楼层')
      return false
    }
    if (this.propertyYear && this.propertyYear !== '') {          // 产权年限
      params.propertyYear = this.propertyYear
    }
    if (this.builtYear && this.builtYear !== '') {
      params.builtYear = this.builtYear
    } else {
      this.$toast('请填写建筑年代')
      return false
    }
    if (this.transformationYear && this.transformationYear !== '') {          // 改造年代
      params.transformationYear = this.transformationYear
    }
    if (this.houseOrientationName !== '') {
      params.houseOrientation = this.houseOrientationName
    } else {
      this.$toast('请选择朝向')
      return false
    }
    if (this.decorationSituationName && this.decorationSituationName !== '') {
      params.decorationSituation = this.decorationSituationName
    } else {
      this.$toast('请选择装修情况')
      return false
    }
    if (this.buildingStructureName && this.buildingStructureName !== '') {
      params.buildingStructure = this.buildingStructureName
    } else {
      this.$toast('请选择房屋结构')
      return false
    }
    if (this.houseTypeName && this.houseTypeName !== '') {
      params.houseType = this.houseTypeName
    } else {
      this.$toast('请选择房屋类型')
      return false
    }
    if (this.checkUseResful.length > 0) {
      params.characteristicId = this.checkCharacteristicIds.join(',')
      params.characteristicName = this.checkCharacteristicName.join(',')
      params.characteristicRestful = this.checkCharacteristicResful.join(',')
    } else {
      this.$toast('至少选择一个房屋特色')
      return false
    }
    params.landState = this.landState ? '宅基地' : '自建房'   // 土地状态
    params.landCharacteristic = this.landCharacteristic ? '国有土地' : '集体土地'    // 土地性质
    if (this.checkUseResful.length > 0) {
      params.matingsId = this.buildingMatchingIds.join(',')
      params.matingsName = this.buildingMatchingName.join(',')
      params.matingsRestful = this.buildingMatchingResful.join(',')
    } else {
      this.$toast('至少选择一个房屋配套')
      return false
    }
    if (this.houseTit && this.houseTit !== '') {
      params.farmhouseTitle = this.houseTit
    } else {
      this.$toast('请填写信息标题')
      return false
    }
    if (this.farmhouseDescribe !== '') {    // 补充说明
      params.farmhouseDescribe = this.farmhouseDescribe
    }
    if (this.vrUrl !== '') {    // vr看房
      params.vrUrl = this.vrUrl
    }
    
    if (this.value && this.value !== '') {
      params.linkman = this.value
    } else {
      this.$toast('请填写联系人')
      return false
    }
    if (this.floorSpace && this.floorSpace !== '') {
      params.floorSpace = this.floorSpace
    } else {
      this.$toast('请填写占地面积')
      return false
    }

    params.linksex = this.linksex

    if (this.phone && this.phone !== '') {
      if (!isvalidPhone(this.phone)) {
        this.$toast('手机号错误')
        return false
      } else {
        if(this.phone !== this.mobile){
          params.linkmobile = this.phone
          if (this.code && this.code !== '') {
            params.verificationCode = this.code
          }
        }
      }
    } else {
      this.$toast('请填写手机号')
      return false
    }
    if (JSON.parse(localStorage.getItem('userInfo'))) {
      params.userId = JSON.parse(localStorage.getItem('userInfo')).userId
    }



    return params
    /*
      houseOrientation	房屋朝向	string	
      builtYear	建筑年代	number	
      decorationSituation	装修情况	string	
      buildingStructure	建筑结构	string	
      houseType	房屋类型	string	
      characteristicId	特色id集合	string	多个以,分隔
      characteristicName	特色名称集合	string	多个以,分隔
      characteristicRestful	特色restful集合	string	多个以,分隔
      matingsId	配套id集合	string	多个以,分隔
      matingsName	配套名称集合	string	多个以,分隔
      matingsRestful	配套restful集合	string	多个以,分隔
      landCharacteristic	土地性质	string	
      landState	土地状态	string	
      propertyYear	产权年限	number	
      transformationYear	改造年代	number	
      linkmobile	联系人手机号	string	userId为null时必须，userId不为null且linkmobile为null代表使用当前用户绑定的手机号，userId不为null且linkmobile不为null代表不使用当前用户绑定的手机号
      verificationCode	验证码	string	只有在userId不为null且linkmobile为null时非必须
      userId	用户id	number	未登录时为null
      linkman	联系人名字	string	
      linksex	联系人性别	number	0：女 1：男 2：未知

      floorSpace	占地面积	number	
      greeningCondition	绿化条件	string	
      idCard	联系人身份证号	string	
      naturalCondition	自然条件	string	
      sewageCondition	污水处理情况	string	
      transitRoute	交通路线	string	
    */
  },
  sex(type) {
    this.linksex = type
  },
  submit() {
    const saveStep1 = this.saveStep1()
    const saveStep2 = this.saveStep2()
    const params = Object.assign(saveStep1, saveStep2);
    this.$http.post('/appServiceInformation/publishFarmhouse', params).then(res => {
      if (res.msg == "success") {
        this.$toast('新增农房成功')
      } else {
        this.$toast(res.info)
      }
    })
  }
}

export default m;