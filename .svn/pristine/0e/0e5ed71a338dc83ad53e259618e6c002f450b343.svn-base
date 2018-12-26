/*
    Created by name: "FuDi", Date:2018/12/4 ,Time:15:54
*/

let m = {
  // 参数
  condition() {
    this.$http.post('appServiceFarmhouse/getMapParam').then(res => {
      // 区域
      let areaArray = res.data.areaHasVillage
      areaArray.unshift({text: "不限", children: "不限", restful: ''})
      // 价格
      let PriceArray = res.data.farmhouseRentPrice
      PriceArray.map(item => {
        item.children.unshift({menuRestfulDictionary: '', text: '不限', id: 0})
      })
      // 面积
      let AreaArray = res.data.farmhouseRentalArea
      AreaArray.map(item => {
        item.children.unshift({menuRestfulDictionary: '', text: '不限', id: 0})
      })
      // 年限
      let LifeArray = res.data.farmhouseRentalLife
      LifeArray.map(item => {
        item.children.unshift({menuRestfulDictionary: '', text: '不限', id: 0})
      })

      this.areaHasVillage = areaArray
      this.farmhouseRentPrice = res.data.farmhouseRentPrice
      this.farmhouseRentalArea = res.data.farmhouseRentalArea
      this.farmhouseRentalLife = res.data.farmhouseRentalLife
    })
  },
  // 数据
  init() {
    const params = {
      // 区域街道村庄id
      areaId: this.id,
      // 城市rest
      cityRestful: 'wuhan',
      // 输入框
      condition: this.conditionText,
      // 等级
      grade: this.grade,
      //页码
      page: '1',
      //rest
      restful: this.menuRestfulDictionaryPrice
        + this.menuRestfulDictionaryArea
        + this.menuRestfulDictionaryLife
        + this.restFul3id
        + this.areaRestfulDictionary
        + this.restful
        + this.restFul
    }

    this.$http.post('appServiceFarmhouse/mapcondition', params).then(res => {
      this.farmhouseCount = res.data.farmhouseCount

      if (res.data.farmhouseNum) {
        this.farmhouseNum = res.data.farmhouseNum
      } else {
        console.log(123);
      }
      this.setmap()
    })

  },

  setmap(fact) {
    this.map = new BMap.Map("allmap");    // 创建Map实例
    this.map.centerAndZoom("武汉", 9.5);
    this.map.enableScrollWheelZoom(true);

    // this.map.disableDragging();     //禁止拖拽
    function ComplexCustomOverlay(point, text, id, index) {
      this._point = point;
      this._text = text;
      this._id = id;
      this._index = index;
    }

    ComplexCustomOverlay.prototype = new BMap.Overlay();
    ComplexCustomOverlay.prototype.initialize = function (map) {

      this._map = map;

      //自定义控件容器

      let div = this._div = document.createElement("div");
      div.className = 'overlay';
      // div.id = "overlay"+this._index;
      div.style.position = "absolute";
      div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
      div.style.padding = "2px";
      div.style.MozUserSelect = "none";
      div.style.fontSize = "12px";
      let that = this;
      //小尖角
      let arrow = this._arrow = document.createElement("div");
      arrow.className = "map-arrow";
      arrow.style.position = "absolute";
      arrow.style.width = "0px";
      arrow.style.height = "0px";
      arrow.style.top = "42px";
      arrow.style.left = "18px";
      arrow.style.border = "10px transparent solid";
      arrow.style.borderTopColor = "#ff9900"
      div.appendChild(arrow);
      //a标签名称
      let a = this._a = document.createElement("a");
      a.className = "map-content";
      a.style.backgroundColor = "#ff9900";
      a.style.borderRadius = "5px";
      a.style.padding = "5px";
      a.style.color = "white";
      a.style.textDecoration = "none";
      a.style.height = "30px";
      a.style.whiteSpace = 'nowrap';
      a.style.display = "inline-block";
      div.appendChild(a);
      a.appendChild(document.createTextNode(this._text));
      map.getPanes().labelPane.appendChild(div);
      return div;
    }
    ComplexCustomOverlay.prototype.draw = function () {

      var map = this._map;

      var pixel = map.pointToOverlayPixel(this._point);

      this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + "px";

      this._div.style.top = pixel.y - 30 + "px";

    }
    if (this.farmhouseCount) {
      this.farmhouseCount.forEach((item, index) => {
        let point = new BMap.Point(item.longitude, item.latitude); //添加坐标
        // let point = new BMap.Point(116.4035,39.915); //添加坐标
        let myCompOverlay = new ComplexCustomOverlay(point, item.fname + item.number + '套', item.id, index);
        this.map.addOverlay(myCompOverlay);
      })

    } else {

      let point = new BMap.Point(this.farmhouseNum.longitude, this.farmhouseNum.latitude); //添加坐标
      // let point = new BMap.Point(116.4035,39.915); //添加坐标
      let myCompOverlay = new ComplexCustomOverlay(point, this.farmhouseNum.villageName + this.farmhouseNum.count + '套', this.farmhouseNum.id);
      console.log(myCompOverlay);
      this.map.addOverlay(myCompOverlay);
    }

    var that = this
    this.map.addEventListener("touchmove", function (e) {
      that.map.enableDragging();
    });
    this.map.addEventListener('touchend', function (e) {
      that.map.disableDragging();
    })
    this.map.disableDragging();
    this.map.enableScrollWheelZoom(true);


    // if(this.farmhouseCount==null){
    //   let point = new BMap.Point(this.farmhouseNum.longitude, this.farmhouseNum.latitude); //添加坐标
    //   let myCompOverlay = new ComplexCustomOverlay(point, this.farmhouseNum.villageName + this.farmhouseNum.count + '套');
    //   this.map.addOverlay(myCompOverlay);
    // }else{
    //   this.farmhouseCount.forEach((item, index) => {
    //     let point = new BMap.Point(item.longitude, item.latitude); //添加坐标
    //     // let point = new BMap.Point(116.4035,39.915); //添加坐标
    //     let myCompOverlay = new ComplexCustomOverlay(point, item.fname + item.number + '套', item.id, index);
    //     this.map.addOverlay(myCompOverlay);
    //   })
    // }
    this.tagcilck()
  },
  tagcilck() {
    var that = this;
    var odiv = document.getElementsByClassName('overlay');
    if (this.farmhouseCount) {
      this.farmhouseCount.forEach((item, index) => {
        odiv[index].onclick = function () {
          this.grade = item.grade
          this.id = item.id
          const params = {
            // 区域街道村庄id
            areaId: this.id,
            // 城市rest
            cityRestful: 'wuhan',
            // 输入框
            condition: '',
            // 等级
            grade: this.grade,
            //页码
            page: '1',
            //rest
            restful: '',
          }
          that.$http.post('appServiceFarmhouse/mapcondition', params).then(res => {
            that.farmhouseCount = res.data.farmhouseCount
            if (res.data.easyResult != null) {
              that.easyResult = res.data.easyResult
              that.farmhouseNum = res.data.farmhouseNum
              that.searchList = true

            }
            if (res.data.easyResult) {
              that.easyResult = res.data.easyResult.rows
              console.log(that.easyResult);
            }
            // console.log(that.easyResult);
            // console.log(that.farmhouseNum);
            that.setmap();
          })
        }
      })
    } else {
      const params = {
        // 区域街道村庄id
        areaId: this.id,
        // 城市rest
        cityRestful: 'wuhan',
        // 输入框
        condition: '',
        // 等级
        grade: this.grade,
        //页码
        page: '',
        //rest
        restful: '',
      }
      that.$http.post('appServiceFarmhouse/mapcondition', params).then(res => {
        // that.setmap();
        if (res.data.easyResult) {
          that.easyResult = res.data.easyResult.rows
          console.log(that.easyResult);
        }

        // if(res.data.easyResult){
        //   if(res.data.easyResult.rows!=null){
        //     console.log(123);
        //     that.villageMessage=res.data.easyResult.rows
        //     console.log(res.data.easyResult.rows);
        //   }
        // }

      })

    }

  },


  village() {
    this.area2 = false;
    this.area3 = false;
    this.area4 = false;
    this.area1 = !this.area1;
  },
  price() {
    this.area3 = false;
    this.area4 = false;
    this.area1 = false;
    this.area2 = !this.area2;
  },
  area() {
    this.area4 = false;
    this.area1 = false;
    this.area2 = false;
    this.area3 = !this.area3;
  },
  year() {
    this.area1 = false;
    this.area2 = false;
    this.area3 = false;
    this.area4 = !this.area4;
  },

  // 区域
  // pliceClick(index) {
  //   // 索引
  //   console.log(index);
  //   this.mainActiveIndex = index
  // },
  Villagecheck(item, index) {
    this.grade = item.grade
    this.areaRestfulDictionary = item.areaRestfulDictionary
    console.log(item);
    this.mainActiveIndex = index
    this.id = item.id
    this.areatext = item.text
    this.searchList = false
    if (index == 0) {
      this.areatext = '区域'
      this.grade = ''
      this.id = ''
      this.areaRestfulDictionary = item.restful
    }
    this.area1 = false;
    this.init()
    console.log(item.restful);
  },
  //价格
  priceClick(data) {
    this.menuRestfulDictionaryPrice = data.menuRestfulDictionary
    this.pricetext = data.text
    console.log(this.menuRestfulDictionaryPrice);
    if (data.id == 0) {
      this.pricetext = '价格'
    }
    this.searchList = false
    this.area2 = false;
    this.init();
  },
  // 面积
  AreaClick(data) {
    this.menuRestfulDictionaryArea = data.menuRestfulDictionary
    this.AreaID = data.id
    this.speciltext = data.text
    console.log(this.menuRestfulDictionaryArea);
    if (data.id == 0) {
      this.speciltext = '面积'
    }
    this.searchList = false
    this.area3 = false;
    this.init();
  },
  // 年限
  LifeClick(data) {
    this.menuRestfulDictionaryLife = data.menuRestfulDictionary
    this.yeartext = data.text
    console.log(this.menuRestfulDictionaryLife);
    if (data.id == 0) {
      this.yeartext = '年限'
    }
    this.searchList = false
    this.area4 = false;
    this.init();
  },
  onNavClick(item, index) {
    this.mainActiveIndex1 = index;
    this.areaRestfulDictionary=''
    this.grade=2
    this.id = item.id
    this.init()
    this.areatext=item.text
    this.searchList = false

    this.area1 = false;
    console.log(item);
  },
  onItemClick(data) {
    // this.restFul3id = data.restFul
    console.log(data);
    this.activeId = data.id;
    this.id=data.id
    this.areatext=data.text
    this.area1 = false;
    this.grade=3
    this.searchList = true
    this.init();
  },

  showListDown() {
    this.xia = false
    this.shang = true
    this.messageList = false
  },
  showListUp() {
    this.xia = true
    this.shang = false
    this.show = true
    this.messageList = true
  },
  findMap2() {
    this.conditionText = this.findMap
    console.log(this.conditionText);
    this.init()
  }


}
export default m
