<template>
  <div class="aa">
    <button type="text" v-text="keepTime" @click="StartCountDown"></button>

    <!--百度地图容器-->
    <div id="container" v-if="aa==1"></div>

    <div style="height: 2rem;border: 1px red solid" v-if="aa==1">
      <input type="text" id="suggestId"  placeholder="地址" v-model="address_detail" style="border: 1px red solid"/>
    </div>
    <button @click="tab">按钮</button>



  </div>

</template>

<script>
    export default {
      name: "test",
      data() {
        return {
          keepTime: '倒计时',
          limittime: 100,
          settime: '',
          flag: false,
          mainActiveIndex: 0,
          activeId: 1,
          items:[
            {
              // 导航名称
              text: '所有城市',
              // 该导航下所有的可选项
              children: [
                {
                  text: '温州',
                  id: 1,
                  children:[
                    {
                      text:'第三级',
                      id:66,
                    }
                  ],
                },
                {
                  text: '杭州',
                  id: 2,
                  children:[
                    {
                      text:'第二级的第三级',
                      id:555,
                    }
                  ],
                }
              ]
            }
          ],
          aa:0,



          address_detail:null,
          map:{},
          locationSpot: {
            lng: '114.312',
            lat: '30.598'
          },
          ac:{},
        }
      },
      methods: {
        tab(){
          this.aa=1;
          setTimeout(()=>{
            this.setmap()
          },500)

        },
        StartCountDown() {
          var mydate = new Date();
          mydate.setMinutes(mydate.getMinutes() + this.limittime);
          this.settime = mydate;

          let time = setInterval(() => {
            if (this.flag == true) {
              clearInterval(time)
            }
            this.timeDown()
          }, 100)
        },
        timeDown() {
          const endTime = new Date(this.settime);
          const nowTime = new Date();
          let leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);
          let d = parseInt(leftTime / (24 * 60 * 60));
          let h = this.formate(parseInt(leftTime / (60 * 60) % 24));
          let m = this.formate(parseInt(leftTime / 60 % 60));
          let s = this.formate(parseInt(leftTime % 60));
          if (leftTime <= 0) {
            this.flag = true;
            alert("时间到，停止作答");
          }
          this.keepTime = `${h}:${m}:${s}`;
        },
        formate(time) {
          if (time >= 10) {
            return time
          } else {
            return `0${time}`
          }
        },

        setmap(){
          const _this=this;
          this.map = new BMap.Map('container');
          this.map.centerAndZoom("武汉",12);
          this.map.enableScrollWheelZoom();
          this.ac = new BMap.Autocomplete(    //建立一个自动完成的对象
            {
              "input": "suggestId"
              , "location": this.map
            })
          console.log('111',this.ac)
          var myValue
          this.ac.addEventListener("onconfirm", function (e) {    //鼠标点击下拉列表后的事件
            var _value = e.item.value;
            myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
            this.address_detail = myValue
          });
        },




      },
      created:function(){

      },
      mounted: function () {

      },
    }
</script>

<style scoped lang="less" type="text/less">
  .aa{
    #container{
      width: 100%;
      height: 8rem;
    }
  }
</style>
