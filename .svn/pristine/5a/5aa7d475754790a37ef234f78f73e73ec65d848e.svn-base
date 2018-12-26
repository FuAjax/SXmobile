<template>
    <div class="tab">
        <div class="top">
            <div class="left">
                <p>{{san}}</p>
                <p>{{tou}}</p>
            </div>
            <div class="right">
                <div class="btn_left btn">
                    <van-icon name="arrow-left" class="icon arrow-left"/>
                </div>
                 <div class="btn_right btn">
                    <van-icon name="arrow" class="icon arrow" />
                 </div>
                
            </div>
        </div>
        <div class="content">
            <router-link v-for="(tab,i) in list" :to="{name:'detail',params:{tabID:tab.tabID}}" tag="li" :key="i" class="tab_li">
                <div class="left">
                    <p>{{tab.text}}</p>
                    <p>{{tab.time}}</p>
                </div>
                <div class="right">
                    <img :src="tab.url" alt="">
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import url from  '../../assets/images/news_29.png'
export default {
    name:"tab",
    data(){ 
        return{
                san:"三乡",
                tou:"头条",
                list:[
                    {text:"武汉市关于落实“三乡工程”拓面提制三年行动的工作意见",time:"2018-08-31",url:url,tabID:1},
                    {text:"武汉市关于落实“三乡工程”拓面提制三年行动的工作意见",time:"2018-08-31",url:url,tabID:1},
                    {text:"武汉市关于落实“三乡工程”拓面提制三年行动的工作意见",time:"2018-08-31",url:url,tabID:1},
                ],
            }
    }
       
}
</script>

<style lang="less" scoped type="text/less">
    .tab{
        padding: 0.4rem 0.3rem 0.5rem 0.32rem;
        .top{
            height:0.75rem;
            width: 100%;
            border-bottom: 0.01rem solid #e6e6e6;
            .left{
                float: left;
                p{ 
                    float: left;
                    font-size: 0.35rem;
                    font-weight: 600;
                    &:nth-child(1){
                        color: #fd5c02
                    }
                    &:nth-child(2){
                        color: #000005
                    }
                }
            }
            .right{
               
                float: right;
                margin-top: 0.09rem;
                .btn{
                    width: 0.34rem;
                    height: 0.34rem;
                    background: #f6f5fb;
                    border: 0.01rem solid #c9c9cb;
                    line-height: 0.33rem;
                    text-align: center;
                    float: left;
                    &:nth-child(1){
                            margin-right: 0.2rem;
                        }
                    .icon{
                        font-size: 0.21rem;
                        color: #9d9ca2;
                        font-weight: 600;
                        
                    }
                }
            }
        } 
        .content{
            li{
                list-style: none;
                padding: 0.32rem 0 0.3rem 0.04rem;
               height: 1.4rem;
                border-bottom: 0.01rem solid #e6e6e6;
                .left{
                   float: left;
                   p{
                       &:nth-child(1){
                               font-size: 0.3rem;
                                color: #010103;
                                letter-spacing: 0.01rem;
                                font-weight: 600;
                                width: 4.65rem;
                                line-height: 0.5rem
                       }
                       &:nth-child(2){
                           font-size: 0.18rem;
                           color: #9a9a9c;
                              margin-top: 0.22rem;
                       }
                   }
                }
                .right{
                    float: right;
                    width: 1.84rem;
                         height: 1.5rem;
                    img{
                        width: 100%;
                        height: 100%
                    }
                }
            }
        }
    }

</style>
