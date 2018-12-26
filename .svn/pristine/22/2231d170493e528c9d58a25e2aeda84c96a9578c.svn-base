<template>
    <div>
        <ul>
            <router-link v-for="(nav,i) in list" :to="{name:nav.name}" tag="li" :key="i" active-class="imgbox">
                <img :src="nav.url" alt="">
                <p>{{nav.text}}</p>
            </router-link>
        </ul>
        <div class="blank"></div>
    </div>
</template>

<script>
import url from  '../../assets/images/7.png'
import url2 from '../../assets/images/6.png'
import url3 from '../../assets/images/5.png'
import url4 from '../../assets/images/9.png'
import url5 from '../../assets/images/2 (10).png'
import url6 from '../../assets/images/2 (1).png'
import url7 from '../../assets/images/4.png'
import url8 from '../../assets/images/8.png'
import url9 from '../../assets/images/10.png'
import url10 from '../../assets/images/6.png'

export default {
    name:"Nav",
    data(){
        return{
            list:[
                {text:"农庄",url:url,name : "town"},
                {text:"景点",url:url2,name : "town"},
                {text:"游玩",url:url3,name:"play"},
                {text:"住宿",url:url4,name:"stay"},
                {text:"美食",url:url5,name:"foods"},
                {text:"租农房",url:url6,name:"grange"},
                {text:"地图找房",url:url7,name:"map"},
                {text:"查公交",url:url8,name:"bus"},
                {text:"农房求租",url:url9,name:"wanted"},
                {text:"美丽乡村",url:url10,name:"beauty"},
            ]
        }
    }
}
</script>

 <style lang="less" scoped type="text/less">
    ul{
        display: flex;
        flex-wrap: wrap;
        padding: 0.31rem 0.26rem 0.3rem 0.4rem;
        justify-content: space-between;
        .imgbox{
            flex: 1;
            margin-right: 0.31rem;
            text-align: center;
            margin-bottom: 0.2rem;
            img{
                width: 0.86rem;
                margin-left: 0.1rem;
                height: 0.89rem;
            }
            p{
                width: 100%;
                font-size: 0.2rem;
                margin-top: 0.13rem;
                color: #8e8e90
            }
        }
    }
    .blank{
        height: 0.2rem;
        width: 100%;
        border-bottom: 0.01rem solid #e7e6ec;
        border-top: 0.01rem solid #e7e6ec;
        background-color: #f1f0f6
    }
</style>

