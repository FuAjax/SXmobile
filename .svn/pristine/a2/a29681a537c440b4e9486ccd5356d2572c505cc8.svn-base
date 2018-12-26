<template>
    <div class="five">
       <div class="wrap">
         <router-link :to="{name:'sharePlay'}"
                      tag="div"
                      class="fiv"
         >
           <img :src="littleimg[0].src" alt="">
           <p>{{littleimg[0].title}}</p>
         </router-link>
         <router-link :to="{name:'scenic'}"
                      tag="div"
                      class="fiv"
         >
           <img :src="littleimg[1].src" alt="">
           <p>{{littleimg[1].title}}</p>
         </router-link>
         <router-link :to="{name:'sharePlay'}"
                      tag="div"
                      class="fiv"
         >
           <img :src="littleimg[2].src" alt="">
           <p>{{littleimg[2].title}}</p>
         </router-link>
         <router-link :to="{name:'shareInn'}"
                      tag="div"
                      class="fiv"
         >
           <img :src="littleimg[3].src" alt="">
           <p>{{littleimg[3].title}}</p>
         </router-link>
         <router-link :to="{name:'shareFood'}"
                      tag="div"
                      class="fiv"
         >
           <img :src="littleimg[4].src" alt="">
           <p>{{littleimg[4].title}}</p>
         </router-link>
       </div>
    </div>
</template>

<script>
    export default {
        name: "five",
        props:['littleimg'],
        data() {
            return {

              five:[
                {title:'农庄',src:'../../../static/images/shanjing.png'},
                {title:'景点',src:'../../../static/images/shuijing.png'},
                {title:'游玩',src:'../../../static/images/yuanluo.png'},
                {title:'住宿',src:'../../../static/images/zx_nongfang.png'},
                {title:'美食',src:'../../../static/images/zx_nongye.png'}
              ],
            }
        },
        methods: {},
        computed: {},
        created: function () {
        },
        mounted: function () {
        },

    }
</script>

<style scoped lang="less" type="text/less">
  .five{
    height:1.79rem;
    .wrap{
        display: inline-block;
        position: relative;
        // left: 50%; translateX(-50%)
        //transform: translateY(-50%);
        top: 50%;
        text-align: center;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
        .fiv{
        width:0.86rem;
		    text-align: center;
        display: inline-block;
        img{
          width: 0.86rem;
          height: 0.86rem;
          border-radius: 50%;
        }
        p{
          width: 100%;
          text-align: center;
          font-size: 0.26rem !important;
          margin-top: 0.1rem;
          color: #333!important;
        }
      }
        &>div:first-child{
          margin-left: 0;
        }
        &>div{
          margin-left: 0.5rem;
        }
    }


  }
</style>
