import getToken from 'com/common/token'
import utils from '@/utils/validate'
let m = {
  init() {
    this.$http.post('appServiceAccount/getFarmhouseSaveParameter',{cityId:1}).then(
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
          var columns = [], columns1 = [], columns2 = [], item = {}, item1 = {}, item2 = {}
          this.area.forEach((item, index) => {
            columns.push(item)
          })
          item = {
            values: columns,
            defaultIndex: 0
          }
          this.columns.push(item)
          if (this.area[0].children) {
            this.area[0].children.forEach((item, index) => {
              columns1.push(item)
            })
            this.columnsIndex1 = 1
          }
          item1 = {
            values: columns1,
            defaultIndex: 0
          }
          this.columns1.push(item1)
          if (this.area[0].children[0].children) {
            this.area[0].children[0].children.forEach((item, index) => {
              columns2.push(item)
            })
            this.columnsIndex2 = 1
          }
          item2 = {
            values: columns2,
            defaultIndex: 0
          }
          this.columns2.push(item2)

          // 附近景点
          this.spot = data.landspace
          var spotColumns = [], spotColumns1 = [], spotitem = {}, spotitem1 = {}
          this.spot.forEach((item, index) => {
            spotColumns.push(item)
          })
          spotitem = {
            values: spotColumns,
            defaultIndex: 0
          }
          this.spotColumns.push(spotitem)
          if (this.spot[0].children) {
            this.spot[0].children.forEach((item, index) => {
              spotColumns1.push(item)
            })
            spotitem1 = {
              values: spotColumns1,
              defaultIndex: 0
            }
            this.spotColumns1.push(spotitem1)
          }
          // 房屋类型
          var houseTypeColumns = [], houseTypeitem = {}
          this.houseTypeColumns = []
          data.houseType.forEach((item, index) => {
            houseTypeColumns.push(item)
          })
          houseTypeitem = {
            values: houseTypeColumns,
            defaultIndex: 0
          }
          this.houseTypeColumns.push(houseTypeitem)
          // 朝向
          var houseOrientation = [], houseOrientationitem = {}
          this.houseOrientation = []
          data.houseOrientation.forEach((item, index) => {
            houseOrientation.push(item)
          })
          houseOrientationitem = {
            values: houseOrientation,
            defaultIndex: 0
          }
          this.houseOrientation.push(houseOrientationitem)
          // 装修情况
          var decorationSituationColumns = [], decorationSituationitem = {}
          this.decorationSituationColumns = []
          data.decorationSituation.forEach((item, index) => {
            decorationSituationColumns.push(item)
          })
          decorationSituationitem = {
            values: decorationSituationColumns,
            defaultIndex: 0
          }
          this.decorationSituationColumns.push(decorationSituationitem)
          // 房屋结构
          var buildingStructure = [], buildingStructureitem = {}
          this.buildingStructureColumns = []
          data.buildingStructure.forEach((item, index) => {
            buildingStructure.push(item)
          })
          buildingStructureitem = {
            values: buildingStructure,
            defaultIndex: 0
          }
          this.buildingStructureColumns.push(buildingStructureitem)
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
          this.roomColumns = [
            {
              values: ['1室', '2室', '3室', '4室', '5室', '6室', '7室', '8室', '9室', '10室'],
              defaultIndex: 0
            }
          ]
          this.hallColumns = [
            {
              values: ['0厅', '1厅', '2厅', '3厅', '4厅', '5厅'],
              defaultIndex: 0
            }
          ]
          this.toiletColumns = [
            {
              values: ['0卫', '1卫', '2卫', '3卫', '4卫', '5卫'],
              defaultIndex: 0
            }
          ]
          this.balconyColumns = [
            {
              values: ['0阳', '1阳', '2阳', '3阳', '4阳', '5阳'],
              defaultIndex: 0
            }
          ]
          this.kitchenColumns = [
            {
              values: ['0厨', '1厨', '2厨', '3厨', '4厨', '5厨'],
              defaultIndex: 0
            }
          ]
          
          // 手机号
          if (data.mobile) {
            this.phone = data.mobile
            this.mobile = data.mobile
            this.isCodeShow = false
          }
          
          if(this.$route.query.id){
            this.id = this.$route.query.id;
            this.getFarmHouse(this.$route.query.id)
          }
        }
      }
    )
  },
  getFarmHouse(id){
    this.$http.post('appServiceAccount/getFarmhouseSaveById',{id}).then(
      res => {
        if (res.msg == 'success') {
          this.addressDetail = res.data.addressDetail
          // 室厅卫阳厨
          this.phone = res.data.linkmobile
          this.roomIndex = res.data.bedroom
          this.balconyIndex = res.data.balcony + 1 || 0
          this.toiletIndex = res.data.bathroom + 1 || 0
          this.kitchenIndex = res.data.kitchen + 1 || 0
          this.hallIndex = res.data.drawingroom + 1 || 0
          this.apartmentName = this.roomColumns[0].values[this.roomIndex - 1] + '-' + 
          this.hallColumns[0].values[this.hallIndex - 1] + '-' + 
          this.toiletColumns[0].values[this.toiletIndex - 1] + '-' + 
          this.balconyColumns[0].values[this.balconyIndex - 1] + '-' + 
          this.kitchenColumns[0].values[this.kitchenIndex - 1]
          this.roomColumns[0].defaultIndex = this.roomIndex - 1
          this.hallColumns[0].defaultIndex = this.hallIndex - 1
          this.toiletColumns[0].defaultIndex = this.toiletIndex - 1
          this.balconyColumns[0].defaultIndex = this.balconyIndex - 1
          this.kitchenColumns[0].defaultIndex = this.kitchenIndex - 1
          // 用途
          var useId = res.data.useId.split(',')
          this.checkUseIds = res.data.useId.split(',')
          this.checkUseName = res.data.useName.split(',')
          this.checkUseResful = res.data.useRestful.split(',')
          this.use.forEach((item, index) => {
            useId.forEach((id) => {
              if(item.id == id){
                item.ischecked = true
              }
            })
          })
          // 所在地区
          var area = res.data.areaId.split(',')
          this.columns[0].values.forEach((item, index) => {
            if(item.value == area[1]){
              this.columnsIndex = index + 1
                var a = {}, b = {}
                this.columnsName = []
                this.columnsIds = []
                this.columns[0].defaultIndex = index
                this.columnsName.push(this.columns[0].values[index].label)
                this.columnsIds.push(this.columns[0].values[index].value)
                if(index > 0){
                  this.columns1 = []
                  var columns1 = []
                  this.area[index].children.forEach((element) => {
                    columns1.push(element)
                  })
                  a = {
                    values: columns1,
                    defaultIndex: index
                  }
                  this.columns1.push(a)
                }
                this.columns1[0].values.forEach((itema, index1) => {
                    if(itema.value == area[2]){
                      this.columnsIndex1 = index1 + 1
                      this.columns1[0].defaultIndex = index1
                      this.columnsName.push(this.columns1[0].values[index1].label)
                      this.columnsIds.push(this.columns1[0].values[index1].value)
                      if(index1 > 0){
                        this.columns2 = []
                        var columns2 = []
                        this.area[index].children[index1].children.forEach((eleme) => {
                          columns2.push(eleme)
                        })
                        b = {
                          values: columns2,
                          defaultIndex: index1
                        }
                        this.columns2.push(b)
                      }
                      this.columns2[0].values.forEach((items, index2) => {
                        if(items.value == area[3]){
                          this.columnsIndex2 = index2 + 1
                          this.columns2[0].defaultIndex = index2
                          this.columnsName.push(this.columns2[0].values[index2].label)
                          this.columnsIds.push(this.columns2[0].values[index2].value)
                        }
                      })
                    }
                })
              }
          })
          // 位置标注
          if(res.data.latitude && res.data.longitude){
            this.location = res.data.longitude + ',' + res.data.latitude
            this.locationSpot.lng = res.data.longitude
            this.locationSpot.lat = res.data.latitude
          }
          // 周边景点
          if(res.data.landspaceId && res.data.landspaceAreaId){
            var landspace = (res.data.landspaceAreaId + ',' + res.data.landspaceId).split(',')
            this.spotColumns[0].values.forEach((item, index) => {
              if(item.value == landspace[0]){
                var a = {}
                this.spotColumnsName = []
                this.spotColumnsIds = []
                this.spotColumns[0].defaultIndex = index
                this.spotColumnsName.push(this.spotColumns[0].values[index].label)
                this.spotColumnsIds.push(this.spotColumns[0].values[index].value)
                if(index > 0){
                  this.spotColumns1 = []
                  var spotColumns1 = []
                  this.spot[index].children.forEach((element) => {
                    spotColumns1.push(element)
                  })
                  this.columnsIndex1 = index +1
                  a = {
                    values: spotColumns1,
                    defaultIndex: 0
                  }
                  this.spotColumns1.push(a)
                }
              }
              this.spotColumns1[0].values.forEach((items, index2) => {

                if(items.value == landspace[1]){
                  this.spotColumns1[0].defaultIndex = index2
                  this.spotColumnsName.push(this.spotColumns1[0].values[index2].label)
                  this.spotColumnsIds.push(this.spotColumns1[0].values[index2].value)
                }
              })
            })
          }
          // 占地面积   建筑面积   宅基地面积
          this.floorSpace = res.data.floorSpace
          this.coveredArea = res.data.coveredArea
          if(res.data.curtilageArea){
            this.curtilageArea = res.data.curtilageArea
          }
          // 出租年限
          this.rentingYears = res.data.rentingYears
          // 出租价格
          this.isFace = res.data.isInterview ? true : false
          if(!this.isFace){
            this.rentingPrice = res.data.rentingPrice
          }
          // 出租情况
          this.isRent = res.data.isWholerent ? false : true
          if(this.isRent){
            this.partrentalInstructions = res.data.partrentalInstructions
          }
          // 图片   视频    vr
          if(res.data.logourl){
            var imglist = res.data.logourl
            if(res.data.otherurl && res.data.otherurl !== ''){
              imglist += ',' + res.data.otherurl
            }
            this.imglist = imglist.split(',')
          }
          if(res.data.videourl && res.data.videourl !== ''){
            var videolist = res.data.videourl.split(',')
            this.videoList = []
            this.videoCoverList = []
            this.videoList.push(videolist[1])
            this.videoCoverList.push(videolist[0])
          }
          if(res.data.vrurl && res.data.vrurl !== ''){
            this.vrUrl = res.data.vrurl
          }
          // 楼层
          this.floor = res.data.floor
          // 产权年限
          if(res.data.propertyYear){
            this.propertyYear = res.data.propertyYear
          }
          // 建筑年代
          this.builtYear = res.data.builtYear
          // 改造年代
          this.transformationYear = res.data.transformationYear
          // 朝向
          this.houseOrientationName = res.data.houseOrientation
          this.houseOrientation[0].values.forEach((item, index) => {
            if(item.name === this.houseOrientationName){
              this.houseOrientation[0].defaultIndex = index
            }
          })
          // 装修情况
          this.decorationSituationName = res.data.decorationSituation
          this.decorationSituationColumns[0].values.forEach((item, index) => {
            if(item.name === this.decorationSituationName){
              this.decorationSituationColumns[0].defaultIndex = index
            }
          })
          // 房屋结构
          this.buildingStructureName = res.data.buildingStructure
          this.buildingStructureColumns[0].values.forEach((item, index) => {
            if(item.name === this.buildingStructureName){
              this.buildingStructureColumns[0].defaultIndex = index
            }
          })
          // 房屋类型
          this.houseTypeName = res.data.houseType
          this.houseTypeColumns[0].values.forEach((item, index) => {
            if(item.name === this.houseTypeName){
              this.houseTypeColumns[0].defaultIndex = index
            }
          })
          // 特色
          var characteristicId = res.data.characteristicId.split(',')
          this.checkCharacteristicIds = res.data.characteristicId.split(',')
          this.checkCharacteristicName = res.data.characteristicName.split(',')
          this.checkCharacteristicResful = res.data.characteristicRestful.split(',')
          this.characteristic.forEach((item, index) => {
            characteristicId.forEach((id) => {
              if(item.id == id){
                item.ischecked = true
              }
            })
          })
          // 土地状态   性质
          this.landState = res.data.landState == '宅基地' ? 2 :  res.data.landState == '自建房' ? 1 : null
          this.landCharacteristic = res.data.landCharacteristic == '国有土地' ? 2 :  res.data.landState == '集体土地' ? 1 : null
          // 配套
          var matingsId = res.data.matingsId.split(',')
          this.buildingMatchingIds = res.data.matingsId.split(',')
          this.buildingMatchingName = res.data.matingsName.split(',')
          this.buildingMatchingResful = res.data.matingsRestful.split(',')
          this.buildingMatching.forEach((item, index) => {
            matingsId.forEach((id) => {
              if(item.id == id){
                item.ischecked = true
              }
            })
          })
          // 标题
          this.houseTit = res.data.farmhouseTitle
          // 补充说明
          this.farmhouseDescribe = res.data.farmhouseDescribe
          this.value = res.data.linkman
          this.linksex = res.data.linksex
        }
      })
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
  onChange(picker, value) {
    var index = picker.getColumnIndex(0)
    this.columnsIndex = index + 1
    this.columnsIndex1 = null
    this.columnsIndex2 = null
    this.columns1 = []
    this.columns2 = []
    var columns = [], item = {}
    if (this.area[index].children) {
      this.area[index].children.forEach((item, index) => {
        columns.push(item)
      })
    }
    item = {
      values: columns,
      defaultIndex: index
    }
    this.columns1.push(item)
    if (this.columns1[0].values.length > 0) {
      this.columnsIndex1 = 1
    }
  },
  onChange1(picker, value) {
    var index = picker.getColumnIndex(0)
    this.columnsIndex1 = index + 1
    this.columnsIndex2 = null
    this.columns2 = []
    var columns = [], item = {}
    if (this.area[this.columnsIndex - 1].children[index].children) {
      this.area[this.columnsIndex - 1].children[index].children.forEach((item, index) => {
        columns.push(item)
      })
    }
    item = {
      values: columns,
      defaultIndex: index
    }
    this.columns2.push(item)
    if (this.columns2[0].values.length > 0) {
      this.columnsIndex2 = 1
    }
  },
  onChange2(picker, value) {
    var index = picker.getColumnIndex(0)
    this.columnsIndex2 = index + 1
  },
  // 周边景点
  spotonChange(picker, value) {
    var index = picker.getColumnIndex(0)
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
    // item = {
    //   values: spotColumns1,
    //   defaultIndex: 0
    // }
    // this.spotColumns1.push(item)
    if (this.spotColumns1.length > 0) {
      this.spotColumnsIndex1 = 1
    }
  },
  spotonChange1(picker, value) {
    var index = picker.getColumnIndex(0)
    this.spotColumnsIndex1 = index + 1
  },
  // 房屋类型
  houseTypeChange(picker, value) {
    var index = picker.getColumnIndex(0)
    this.houseTypeIndex = index + 1
  },
  // 朝向
  houseOrientationChange(picker, value) {
    var index = picker.getColumnIndex(0)
    this.houseOrientationIndex = index + 1
  },
  // 楼层
  floorColumnsChange(picker, value) {
    var index = picker.getColumnIndex(0)
    this.floorIndex = index + 1
  },
  // 装修情况
  decorationSituationChange(picker, value) {
    var index = picker.getColumnIndex(0)
    this.decorationSituationIndex = index + 1
  },
  // 房屋结构
  buildingStructureChange(picker, value) {
    var index = picker.getColumnIndex(0)
    this.buildingStructureIndex = index + 1
  },
  roomChange(picker, value) {
    var index = picker.getColumnIndex(0)
    this.roomIndex = index + 1
  },
  hallChange(picker, value) {
    var index = picker.getColumnIndex(0)
    this.hallIndex = index + 1
  },
  toiletChange(picker, value) {
    var index = picker.getColumnIndex(0)
    this.toiletIndex = index + 1
  },
  balconyChange(picker, value) {
    var index = picker.getColumnIndex(0)
    this.balconyIndex = index + 1
  },
  kitchenChange(picker, value) {
    var index = picker.getColumnIndex(0)
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
      this.houseTypeName = this.houseTypeColumns[0].values[this.houseTypeIndex - 1].name
      this.generateTit()
    }

    if (this.popType == 3) {         // 房屋户型
      if (this.roomIndex && this.hallIndex && this.toiletIndex && this.balconyIndex && this.kitchenIndex) {
        this.apartmentName = this.roomColumns[0].values[this.roomIndex - 1] + '-' + this.hallColumns[0].values[this.hallIndex - 1] + '-' + this.toiletColumns[0].values[this.toiletIndex - 1] + '-' + this.balconyColumns[0].values[this.balconyIndex - 1] + '-' + this.kitchenColumns[0].values[this.kitchenIndex - 1]
      }
      this.generateTit()
    }
    if (this.popType == 4) {         // 楼层
      this.floorName = this.floorColumns[0].values[this.floorIndex - 1].name
    }
    if (this.popType == 5) {         // 朝向
      this.houseOrientationName = this.houseOrientation[0].values[this.houseOrientationIndex - 1].name
    }
    if (this.popType == 6) {         // 装修情况
      this.decorationSituationName = this.decorationSituationColumns[0].values[this.decorationSituationIndex - 1].name
    }
    if (this.popType == 7) {         // 房屋结构
      this.buildingStructureName = this.buildingStructureColumns[0].values[this.buildingStructureIndex - 1].name
    }
    if (this.popType == 9) {
      this.location = this.locationSpot.lng + ',' + this.locationSpot.lat
    }
    this.popShow = false
  },
  // pop 关闭
  closePop() {
    this.popShow = false
    if(this.popType==9){
      this.position="";
      let mapdiv=document.getElementsByClassName("tangram-suggestion-main");
      for(let i=0;i<mapdiv.length;i++){
        mapdiv.item(i).style.zIndex='0';
      }
    }
  },
  delIMg(index) {        //删除图片
    this.imglist.splice(index, 1)
  },
  delVideo(index) {        //删除视频
    this.videoList.splice(index, 1)
  },
  delVideoCover(index){
    this.videoCoverList.splice(index, 1)
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
  uploadVideoCover(e) {       //视频封面上传
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
      this.videoCoverList.push(url + res.key)
    })
  },
  getCode() {
    if (!utils.isvalidPhone(this.phone)) {
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
    // this.$http.post('appServiceUser/baseInfo').then(res => {
    //   if (res.msg == "success") {
    //     this.mobile = res.data.mobile
    //     this.phone = res.data.mobile
    //   }
    // })
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
      imgs = imgs.split(',')
      imgs.shift()
      if (imgs.length > 0) {     // 当有一张以上图片
        params.otherurl = imgs.join(',')
      }
    } else {
      this.$toast('至少上传一张图片')
      return false
    }
    if(this.videoList.length > 0 || this.videoCoverList.length > 0) {
      if (this.videoList.length > 0 && this.videoCoverList.length > 0) {     // 当有视频
        params.videourl = this.videoCoverList[0] +','+ this.videoList[0]
      } else {
        this.$toast('上传视频同时必须上传视频封面')
        return false
      }
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
    if(this.landState){
      params.landState = this.landState == 2 ? '宅基地' : this.landState == 1 ? '自建房' : ''   // 土地状态
    }
    if(this.landCharacteristic){
      params.landCharacteristic = this.landCharacteristic == 2 ? '国有土地' : this.landCharacteristic == 1 ? '集体土地' : ''   // 土地性质
    }
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
      params.vrurl = this.vrUrl
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
      if (!utils.isvalidPhone(this.phone)) {
        this.$toast('手机号错误')
        return false
      } else {
        // if(this.phone !== this.mobile){
          params.linkmobile = this.phone
          // if (this.code && this.code !== '') {
          //   params.verificationCode = this.code
          // }
        // }
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
    if(this.id){
      params.id = this.id - 0
    }
    this.$http.post('appServiceAccount/saveFarmhouse', params).then(res => {
      if (res.msg == "success") {
        this.$toast(res.info)
        setTimeout(() => {
          this.$router.back(-1)
        }, 1000);
      } else {
        this.$toast(res.info)
      }
    })
  }
}

export default m;