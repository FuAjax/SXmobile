<template>
  <div class="wrap">
    <div class="container">
      <!--&lt;!&ndash;轮播图组件&ndash;&gt;-->
      <!--<Sweep></Sweep>-->
      <!--&lt;!&ndash;五个模块&ndash;&gt;-->
      <!--<Five></Five>-->
      <!--&lt;!&ndash;中间分割块&ndash;&gt;-->
      <!--<div class="separate"></div>-->
      <!--&lt;!&ndash;精彩推荐&ndash;&gt;-->
      <!--<div class="wonder">-->
        <!--<div class="top">-->
          <!--<span class="orange">精彩</span>推荐-->
          <!--<div>-->
            <!--<span><i class="iconfont icon-xiangzuo"></i></span>-->
            <!--<span><i class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i></span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<ul>-->
          <!--<li v-for="item in wonder_list">-->
            <!--<van-row gutter="20">-->
              <!--<van-col span="17">-->
                <!--<div class="left">-->
                  <!--<div class="text">-->
                    <!--{{item.news}}-->
                  <!--</div>-->
                  <!--<p>{{item.data}}</p>-->
                <!--</div>-->
              <!--</van-col>-->
              <!--<van-col span="7">-->
                <!--<div class="right">-->
                  <!--<img :src="item.src" alt="">-->
                <!--</div>-->
              <!--</van-col>-->
            <!--</van-row>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</div>-->
      <!--<div class="separate"></div>-->
      <!--&lt;!&ndash;景点排行&ndash;&gt;-->
      <!--<div class="scenic">-->
        <!--<div class="scenic_top clear">-->
          <!--<router-link to="">-->
            <!--<span class="orange">景点</span>排行榜-->
          <!--</router-link>-->
          <!--<router-link tag="div" to="" class="right"><i class="iconfont icon-gengduo1"></i></router-link>-->
        <!--</div>-->

        <!--<div class="scenic_bottom">-->
          <!--<van-swipe   :width="320"-->
                       <!--:loop=false-->
                       <!--:show-indicators=false>-->

            <!--<van-swipe-item v-for="(item,index) in play_list">-->
              <!--<router-link to="" tag="div" class="rank">-->
                <!--<div>-->
                  <!--<img :src="item.src" alt="">-->
                  <!--<span :style="{backgroundColor:item.color}">-->
                      <!--<i>NO.{{index+1}}</i>-->
                    <!--</span>-->
                <!--</div>-->
                <!--<p>{{item.text}}</p>-->
              <!--</router-link>-->
            <!--</van-swipe-item>-->


            <!--&lt;!&ndash;更多&ndash;&gt;-->
            <!--<van-swipe-item>-->
              <!--<router-link to="/bb" tag="div" class="last">-->
                <!--<div>-->
                  <!--<i class="iconfont icon-gengduo2"></i>-->
                <!--</div>-->
                <!--<p>更多景点</p>-->
              <!--</router-link>-->
            <!--</van-swipe-item>-->

          <!--</van-swipe>-->
        <!--</div>-->
      <!--</div>-->
      <!--&lt;!&ndash;玩乐排行&ndash;&gt;-->
      <!--<div class="play">-->
        <!--<div class="play_top clear">-->
          <!--<router-link to="">-->
            <!--<span class="orange">玩乐</span>排行榜-->
          <!--</router-link>-->
          <!--<router-link tag="div" to="" class="right"><i class="iconfont icon-gengduo1"></i></router-link>-->
        <!--</div>-->
        <!--<div class="play_bottom">-->
          <!--<van-swipe   :width="320"-->
                       <!--:loop=false-->
                       <!--:show-indicators=false>-->

            <!--<van-swipe-item v-for="(item,index) in play_list">-->
              <!--<router-link to="" tag="div" class="rank">-->
                <!--<div>-->
                  <!--<img :src="item.src" alt="">-->
                  <!--<span :style="{backgroundColor:item.color}">-->
                      <!--<i>NO.{{index+1}}</i>-->
                    <!--</span>-->
                <!--</div>-->
                <!--<p>{{item.text}}</p>-->
              <!--</router-link>-->
            <!--</van-swipe-item>-->


            <!--&lt;!&ndash;更多&ndash;&gt;-->
            <!--<van-swipe-item>-->
              <!--<router-link to="/bb" tag="div" class="last">-->
                <!--<div>-->
                  <!--<i class="iconfont icon-gengduo2"></i>-->
                <!--</div>-->
                <!--<p>更多景点</p>-->
              <!--</router-link>-->
            <!--</van-swipe-item>-->

          <!--</van-swipe>-->
        <!--</div>-->
      <!--</div>-->
      <!--&lt;!&ndash;美食排行&ndash;&gt;-->
      <!--<div class="food">-->
        <!--<div class="food_top clear">-->
          <!--<router-link to="">-->
            <!--<span class="orange">美食</span>排行榜-->
          <!--</router-link>-->
          <!--<router-link tag="div" to="" class="right"><i class="iconfont icon-gengduo1"></i></router-link>-->
        <!--</div>-->
        <!--<div class="food_bottom">-->
          <!--<van-swipe   :width="320"-->
                       <!--:loop=false-->
                       <!--:show-indicators=false>-->

            <!--<van-swipe-item v-for="(item,index) in food_list">-->
              <!--<router-link to="" tag="div" class="rank">-->
                <!--<div>-->
                  <!--<img :src="item.src" alt="">-->
                  <!--<span :style="{backgroundColor:item.color}">-->
                      <!--<i>NO.{{index+1}}</i>-->
                    <!--</span>-->
                <!--</div>-->
                <!--<p>{{item.text}}</p>-->
              <!--</router-link>-->
            <!--</van-swipe-item>-->

            <!--&lt;!&ndash;更多&ndash;&gt;-->
            <!--<van-swipe-item>-->
              <!--<router-link to="/bb" tag="div" class="last">-->
                <!--<div>-->
                  <!--<i class="iconfont icon-gengduo2"></i>-->
                <!--</div>-->
                <!--<p>更多景点</p>-->
              <!--</router-link>-->
            <!--</van-swipe-item>-->

          <!--</van-swipe>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="separate"></div>-->
      <!--景区tab选项卡-->
      <div class="tab">
        <van-tabs>
          <van-tab title="景点">
            <!--景点-->
            <div class="scenic_wrap">
              <van-row gutter="20">
                <!--图-->
                <van-col span="8">
                  <router-link to="" tag="div" class="left">
                    <img src="../../../static/images/slide_01.jpg" alt="">
                  </router-link>
                </van-col>
                <!--右边文字-->
                <van-col span="16">
                  <div class="right">
                    <!--风景区-->
                    <router-link to="" tag="div" class="mulan">
                      <span class="lake">木兰天池</span>
                      <span class="five">AAAAA级风景区</span>
                    </router-link>
                    <!--评分-->
                    <div class="grade">
                        <span class="star">
                          <i class="iconfont icon-pingfenshixing"></i>
                          <i class="iconfont icon-pingfenkongxing"></i>
                          <i class="iconfont icon-pingfenbanxing"></i>
                          <i class="iconfont icon-pingfenshixing"></i>
                          <i class="iconfont icon-pingfenbanxing"></i>
                        </span>
                      <span class="score">4.0分</span>
                      <p class="much">
                        <span>￥35</span>/人
                      </p>
                    </div>
                    <!--定位-->
                    <div class="position">
                      <i class="iconfont icon-dizhi"></i>黄陂-木兰乡  距离我30.9KM
                    </div>
                    <!--数据-->
                    <div class="data">
                      <span>漂流</span>
                      <span>烧烤</span>
                      <span>棋牌</span>
                      <span>野菜</span>
                    </div>
                  </div>
                </van-col>
              </van-row>

              <router-link tag="p" to="" class="more">更多景点</router-link>
            </div>
          </van-tab>
          <!--游玩-->
          <van-tab title="游玩">
            <div class="scenic_wrap">
              <van-row gutter="20">
                <!--图-->
                <van-col span="8">
                  <router-link to="" tag="div" class="left">
                    <img src="../../../static/images/slide_01.jpg" alt="">
                  </router-link>
                </van-col>
                <!--右边文字-->
                <van-col span="16">
                  <div class="right">
                    <!--风景区-->
                    <router-link to="" tag="div" class="mulan">
                      <span class="lake">木兰天池</span>
                      <span class="five">AAAAA级风景区</span>
                    </router-link>
                    <!--评分-->
                    <div class="grade">
                        <span class="star">
                          <i class="iconfont icon-pingfenshixing"></i>
                          <i class="iconfont icon-pingfenkongxing"></i>
                          <i class="iconfont icon-pingfenbanxing"></i>
                          <i class="iconfont icon-pingfenshixing"></i>
                          <i class="iconfont icon-pingfenbanxing"></i>
                        </span>
                      <span class="score">4.0分</span>
                      <p class="much">
                        <span>￥3555555</span>/人
                      </p>
                    </div>
                    <!--定位-->
                    <div class="position">
                      <i class="iconfont icon-dizhi"></i>黄陂-木兰乡  距离我30.9KM
                    </div>
                    <!--数据-->
                    <div class="data">
                      <span>漂流</span>
                      <span>烧烤</span>
                      <span>棋牌</span>
                      <span>野菜</span>
                    </div>
                  </div>
                </van-col>
              </van-row>
              <van-row gutter="20">
                <!--图-->
                <van-col span="8">
                  <router-link to="" tag="div" class="left">
                    <img src="../../../static/images/slide_01.jpg" alt="">
                  </router-link>
                </van-col>
                <!--右边文字-->
                <van-col span="16">
                  <div class="right">
                    <!--风景区-->
                    <router-link to="" tag="div" class="mulan">
                      <span class="lake">木兰天池</span>
                      <span class="five">AAAAA级风景区</span>
                    </router-link>
                    <!--评分-->
                    <div class="grade">
                        <span class="star">
                          <i class="iconfont icon-pingfenshixing"></i>
                          <i class="iconfont icon-pingfenkongxing"></i>
                          <i class="iconfont icon-pingfenbanxing"></i>
                          <i class="iconfont icon-pingfenshixing"></i>
                          <i class="iconfont icon-pingfenbanxing"></i>
                        </span>
                      <span class="score">4.0分</span>
                      <p class="much">
                        <span>￥3555555</span>/人
                      </p>
                    </div>
                    <!--定位-->
                    <div class="position">
                      <i class="iconfont icon-dizhi"></i>黄陂-木兰乡  距离我30.9KM
                    </div>
                    <!--数据-->
                    <div class="data">
                      <span>漂流</span>
                      <span>烧烤</span>
                      <span>棋牌</span>
                      <span>野菜</span>
                    </div>
                  </div>
                </van-col>
              </van-row>
              <van-row gutter="20">
                <!--图-->
                <van-col span="8">
                  <router-link to="" tag="div" class="left">
                    <img src="../../../static/images/slide_01.jpg" alt="">
                  </router-link>
                </van-col>
                <!--右边文字-->
                <van-col span="16">
                  <div class="right">
                    <!--风景区-->
                    <router-link to="" tag="div" class="mulan">
                      <span class="lake">木兰天池</span>
                      <span class="five">AAAAA级风景区</span>
                    </router-link>
                    <!--评分-->
                    <div class="grade">
                        <span class="star">
                          <i class="iconfont icon-pingfenshixing"></i>
                          <i class="iconfont icon-pingfenkongxing"></i>
                          <i class="iconfont icon-pingfenbanxing"></i>
                          <i class="iconfont icon-pingfenshixing"></i>
                          <i class="iconfont icon-pingfenbanxing"></i>
                        </span>
                      <span class="score">4.0分</span>
                      <p class="much">
                        <span>￥3555555</span>/人
                      </p>
                    </div>
                    <!--定位-->
                    <div class="position">
                      <i class="iconfont icon-dizhi"></i>黄陂-木兰乡  距离我30.9KM
                    </div>
                    <!--数据-->
                    <div class="data">
                      <span>漂流</span>
                      <span>烧烤</span>
                      <span>棋牌</span>
                      <span>野菜</span>
                    </div>
                  </div>
                </van-col>
              </van-row>
              <router-link tag="p" to="" class="more">更多景点</router-link>
            </div>
          </van-tab>
          <!--住宿-->
          <van-tab title="住宿">
            <div class="scenic_wrap">
              <van-row gutter="20">
                <!--图-->
                <van-col span="8">
                  <router-link to="" tag="div" class="left">
                    <img src="../../../static/images/slide_01.jpg" alt="">
                  </router-link>
                </van-col>
                <!--右边文字-->
                <van-col span="16">
                  <div class="right">
                    <!--风景区-->
                    <router-link to="" tag="div" class="mulan">
                      <span class="lake">木兰天池</span>
                      <span class="five">AAAAA级风景区</span>
                    </router-link>
                    <!--评分-->
                    <div class="grade">
                        <span class="star">
                          <i class="iconfont icon-pingfenshixing"></i>
                          <i class="iconfont icon-pingfenkongxing"></i>
                          <i class="iconfont icon-pingfenbanxing"></i>
                          <i class="iconfont icon-pingfenshixing"></i>
                          <i class="iconfont icon-pingfenbanxing"></i>
                        </span>
                      <span class="score">4.0分</span>
                      <p class="much">
                        <span>￥3555555</span>/人
                      </p>
                    </div>
                    <!--定位-->
                    <div class="position">
                      <i class="iconfont icon-dizhi"></i>黄陂-木兰乡  距离我30.9KM
                    </div>
                    <!--数据-->
                    <div class="data">
                      <span>漂流</span>
                      <span>烧烤</span>
                      <span>棋牌</span>
                      <span>野菜</span>
                    </div>
                  </div>
                </van-col>
              </van-row>
              <van-row gutter="20">
                <!--图-->
                <van-col span="8">
                  <router-link to="" tag="div" class="left">
                    <img src="../../../static/images/slide_01.jpg" alt="">
                  </router-link>
                </van-col>
                <!--右边文字-->
                <van-col span="16">
                  <div class="right">
                    <!--风景区-->
                    <router-link to="" tag="div" class="mulan">
                      <span class="lake">木兰天池</span>
                      <span class="five">AAAAA级风景区</span>
                    </router-link>
                    <!--评分-->
                    <div class="grade">
                        <span class="star">
                          <i class="iconfont icon-pingfenshixing"></i>
                          <i class="iconfont icon-pingfenkongxing"></i>
                          <i class="iconfont icon-pingfenbanxing"></i>
                          <i class="iconfont icon-pingfenshixing"></i>
                          <i class="iconfont icon-pingfenbanxing"></i>
                        </span>
                      <span class="score">4.0分</span>
                      <p class="much">
                        <span>￥3555555</span>/人
                      </p>
                    </div>
                    <!--定位-->
                    <div class="position">
                      <i class="iconfont icon-dizhi"></i>黄陂-木兰乡  距离我30.9KM
                    </div>
                    <!--数据-->
                    <div class="data">
                      <span>漂流</span>
                      <span>烧烤</span>
                      <span>棋牌</span>
                      <span>野菜</span>
                    </div>
                  </div>
                </van-col>
              </van-row>
              <van-row gutter="20">
                <!--图-->
                <van-col span="8">
                  <router-link to="" tag="div" class="left">
                    <img src="../../../static/images/slide_01.jpg" alt="">
                  </router-link>
                </van-col>
                <!--右边文字-->
                <van-col span="16">
                  <div class="right">
                    <!--风景区-->
                    <router-link to="" tag="div" class="mulan">
                      <span class="lake">木兰天池</span>
                      <span class="five">AAAAA级风景区</span>
                    </router-link>
                    <!--评分-->
                    <div class="grade">
                        <span class="star">
                          <i class="iconfont icon-pingfenshixing"></i>
                          <i class="iconfont icon-pingfenkongxing"></i>
                          <i class="iconfont icon-pingfenbanxing"></i>
                          <i class="iconfont icon-pingfenshixing"></i>
                          <i class="iconfont icon-pingfenbanxing"></i>
                        </span>
                      <span class="score">4.0分</span>
                      <p class="much">
                        <span>￥3555555</span>/人
                      </p>
                    </div>
                    <!--定位-->
                    <div class="position">
                      <i class="iconfont icon-dizhi"></i>黄陂-木兰乡  距离我30.9KM
                    </div>
                    <!--数据-->
                    <div class="data">
                      <span>漂流</span>
                      <span>烧烤</span>
                      <span>棋牌</span>
                      <span>野菜</span>
                    </div>
                  </div>
                </van-col>
              </van-row>
              <router-link tag="p" to="" class="more">更多住宿</router-link>
            </div>
          </van-tab>
          <!--美食-->
          <van-tab title="美食">
            <div class="scenic_wrap">
              <van-row gutter="20">
                <!--图-->
                <van-col span="8">
                  <router-link to="" tag="div" class="left">
                    <img src="../../../static/images/slide_01.jpg" alt="">
                  </router-link>
                </van-col>
                <!--右边文字-->
                <van-col span="16">
                  <div class="right">
                    <!--风景区-->
                    <router-link to="" tag="div" class="mulan">
                      <span class="lake">木兰天池</span>
                      <span class="five">AAAAA级风景区</span>
                    </router-link>
                    <!--评分-->
                    <div class="grade">
                        <span class="star">
                          <i class="iconfont icon-pingfenshixing"></i>
                          <i class="iconfont icon-pingfenkongxing"></i>
                          <i class="iconfont icon-pingfenbanxing"></i>
                          <i class="iconfont icon-pingfenshixing"></i>
                          <i class="iconfont icon-pingfenbanxing"></i>
                        </span>
                      <span class="score">4.0分</span>
                      <p class="much">
                        <span>￥3555555</span>/人
                      </p>
                    </div>
                    <!--定位-->
                    <div class="position">
                      <i class="iconfont icon-dizhi"></i>黄陂-木兰乡  距离我30.9KM
                    </div>
                    <!--美食品种-->
                    <div class="variety">
                      油焖虾,蒸虾,藕海子,凤爪,龙凤虾,毛豆
                    </div>
                  </div>
                </van-col>
              </van-row>
              <van-row gutter="20">
                <!--图-->
                <van-col span="8">
                  <router-link to="" tag="div" class="left">
                    <img src="../../../static/images/slide_01.jpg" alt="">
                  </router-link>
                </van-col>
                <!--右边文字-->
                <van-col span="16">
                  <div class="right">
                    <!--风景区-->
                    <router-link to="" tag="div" class="mulan">
                      <span class="lake">木兰天池</span>
                      <span class="five">AAAAA级风景区</span>
                    </router-link>
                    <!--评分-->
                    <div class="grade">
                        <span class="star">
                          <i class="iconfont icon-pingfenshixing"></i>
                          <i class="iconfont icon-pingfenkongxing"></i>
                          <i class="iconfont icon-pingfenbanxing"></i>
                          <i class="iconfont icon-pingfenshixing"></i>
                          <i class="iconfont icon-pingfenbanxing"></i>
                        </span>
                      <span class="score">4.0分</span>
                      <p class="much">
                        <span>￥3555555</span>/人
                      </p>
                    </div>
                    <!--定位-->
                    <div class="position">
                      <i class="iconfont icon-dizhi"></i>黄陂-木兰乡  距离我30.9KM
                    </div>
                    <!--美食品种-->
                    <div class="variety">
                      油焖虾,蒸虾,藕海子,凤爪,龙凤虾,毛豆
                    </div>
                  </div>
                </van-col>
              </van-row>
              <van-row gutter="20">
                <!--图-->
                <van-col span="8">
                  <router-link to="" tag="div" class="left">
                    <img src="../../../static/images/slide_01.jpg" alt="">
                  </router-link>
                </van-col>
                <!--右边文字-->
                <van-col span="16">
                  <div class="right">
                    <!--风景区-->
                    <router-link to="" tag="div" class="mulan">
                      <span class="lake">木兰天池</span>
                      <span class="five">AAAAA级风景区</span>
                    </router-link>
                    <!--评分-->
                    <div class="grade">
                        <span class="star">
                          <i class="iconfont icon-pingfenshixing"></i>
                          <i class="iconfont icon-pingfenkongxing"></i>
                          <i class="iconfont icon-pingfenbanxing"></i>
                          <i class="iconfont icon-pingfenshixing"></i>
                          <i class="iconfont icon-pingfenbanxing"></i>
                        </span>
                      <span class="score">4.0分</span>
                      <p class="much">
                        <span>￥3555555</span>/人
                      </p>
                    </div>
                    <!--定位-->
                    <div class="position">
                      <i class="iconfont icon-dizhi"></i>黄陂-木兰乡  距离我30.9KM
                    </div>
                    <!--美食品种-->
                    <div class="variety">
                      油焖虾,蒸虾,藕海子,凤爪,龙凤虾,毛豆
                    </div>
                  </div>
                </van-col>
              </van-row>
              <router-link tag="p" to="" class="more">更多美食</router-link>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="test"></div>
  </div>
</template>

<script>
  import Sweep from 'com/common/swiper';
  import Five from 'com/common/five'

  export default {
    name: "grangeindex",
    // components:{Sweep,Five},
    data() {
      return {
        cityname:'上海',
        wonder_list:[
          {
            news:'武汉市关于落实“三乡工程”拓面提质 三年行动的工作意见武汉市关于落实“三乡工程”拓面提质 三年行动的工作意见武汉市关于落实“三乡工程”拓面提质 三年行动的工作意见武汉市关于落实“三乡工程”拓面提质 三年行动的工作意见',
            data:"2018-08-31",
            src:'../../../static/images/slide_01.jpg'
          },
          {
            news:'武汉市关于落实“三乡工程”拓面提质 三年行动的工作意见武汉市关于落实“三乡工程”拓面提质 三年行动的工作意见武汉市关于落实“三乡工程”拓面提质 三年行动的工作意见武汉市关于落实“三乡工程”拓面提质 三年行动的工作意见',
            data:"2018-08-31",
            src:'../../../static/images/slide_01.jpg'
          },
          {
            news:'武汉市关于落实“三乡工程”拓面提质 三年行动的工作意见武汉市关于落实“三乡工程”拓面提质 三年行动的工作意见武汉市关于落实“三乡工程”拓面提质 三年行动的工作意见武汉市关于落实“三乡工程”拓面提质 三年行动的工作意见',
            data:"2018-08-31",
            src:'../../../static/images/slide_01.jpg'
          }
        ],//精彩推荐
        scenic_list:[
          {text:'木兰天池风景区(5A)',src:'../../../static/images/slide_01.jpg',color:'#ff6500'},
          {text:'木兰天池风景区(5A)',src:'../../../static/images/slide_01.jpg',color:'#8ab8d4'},
          {text:'木兰天池风景区(5A)',src:'../../../static/images/slide_01.jpg',color:'#e38800'},
          {text:'木兰天池风景区(5A)',src:'../../../static/images/slide_01.jpg',color:'#b4b4b9'},
          {text:'木兰天池风景区(5A)',src:'../../../static/images/slide_01.jpg',color:'#b4b4b9'}
        ],//景点
        play_list:[
          {text:'木兰天池风景区(5A)',src:'../../../static/images/slide_01.jpg',color:'#ff6500'},
          {text:'木兰天池风景区(5A)',src:'../../../static/images/slide_01.jpg',color:'#8ab8d4'},
          {text:'木兰天池风景区(5A)',src:'../../../static/images/slide_01.jpg',color:'#e38800'},
          {text:'木兰天池风景区(5A)',src:'../../../static/images/slide_01.jpg',color:'#b4b4b9'},
          {text:'木兰天池风景区(5A)',src:'../../../static/images/slide_01.jpg',color:'#b4b4b9'}
        ],//游玩
        food_list:[
          {text:'木兰天池风景区(5A)',src:'../../../static/images/slide_01.jpg',color:'#ff6500'},
          {text:'木兰天池风景区(5A)',src:'../../../static/images/slide_01.jpg',color:'#8ab8d4'},
          {text:'木兰天池风景区(5A)',src:'../../../static/images/slide_01.jpg',color:'#e38800'},
          {text:'木兰天池风景区(5A)',src:'../../../static/images/slide_01.jpg',color:'#b4b4b9'},
          {text:'木兰天池风景区(5A)',src:'../../../static/images/slide_01.jpg',color:'#b4b4b9'}
        ],//美食
        //景点选项卡
        scenic:[
          {
            src:'../../../static/images/slide_01.jpg',
            spot:'木兰天池',
            a:'AAAAA级风景区',
            score:4,
            yuan:35,
          }
        ],
      }
    },
    methods: {


    },
    computed: {},
    created: function () {
      console.log(numbers(1, 2, 3, 4, 5))
    },

    mounted: function () {


      // 一个是滑动前事件  或者on tuhs move    transform: translateX(0px);
    },
    destroy:function(){

    }

  }
  const numbers = (...nums) => nums;

</script>

<style scoped lang="less" type="text/less">
  .wrap{
    //隔开
    .separate{
      height: 0.28rem;
      background-color: #f1f0f6;
    }
    //精彩推荐
    .wonder{
      padding: 0 0.3rem;
      .top{
        height: 1.15rem;
        line-height: 1.15rem;
        font-size: 0.24rem;
        font-weight: bold;
        .orange{
          color: #ff6500;
        }
        div{
          float: right;
          span{
            display: inline-block;
            width: 0.3rem;
            height: 0.3rem;
            border:1Px #c6c6c8 solid;
            line-height: 0.25rem;
            text-align: center;
            background-color: #f6f5fb;
            i{
              color: #98979d;
            }
          }
        }
      }
      ul{
        li{
          padding: 0.3rem 0;
          border-top: 0.02rem #e4e4e4 solid;
          .left{
            font-size: 0.2rem;
            .text{
              line-height: 0.3rem;
              height: 0.9rem;
              overflow: hidden;
            }
            p{
              color: grey;
              font-size: 0.15rem;
              padding-top: 0.09rem;
            }
          }
          .right{
            height: 1.18rem;
          }
        }
      }
    }
    //景点排行榜
    .scenic{
      .scenic_top{
        padding: 0 0.3rem;
        height: 1.15rem;
        line-height: 1.15rem;
        a{
          font-size: 0.24rem;
          font-weight: bold;
        }
        .orange{
          color: #ff6500;
        }
        .right{
          height: 1rem;
          float: right;
        }
      }
      .scenic_bottom{
        border-bottom: 0.02rem #e4e4e4 solid;
        padding-bottom: 0.2rem;
        padding-left:0.3rem;
        .rank{
          padding-right:0.2rem;
          div{
            height: 2rem;
            position: relative;
            span{
              position: absolute;
              left: 0;
              top:0;
              width: 0.9rem;
              height: 0.4rem;
              text-align: center;
              line-height: 0.3rem;
              i{
                font-size: 0.2rem;
                color: white;
              }
            }
          }
          p{
            font-size: 0.18rem;
            padding-top: 0.13rem;
          }
        }
        .last{
          div{
            i{
              font-size: 1rem;
            }
          }
          p{
            font-size: 0.18rem;
            padding-left: 0.12rem;
          }
        }
      }
    }
    //游玩排行榜
    .play{
      .play_top{
        padding: 0 0.3rem;
        height: 1.15rem;
        line-height: 1.15rem;
        a{
          font-size: 0.24rem;
          font-weight: bold;
        }
        .orange{
          color: #ff6500;
        }
        .right{
          height: 1rem;
          float: right;
        }
      }
      .play_bottom{
        border-bottom: 0.02rem #e4e4e4 solid;
        padding-bottom: 0.2rem;
        padding-left:0.3rem;
        .rank{
          padding-right:0.2rem;
          div{
            height: 2rem;
            position: relative;
            span{
              position: absolute;
              left: 0;
              top:0;
              width: 0.9rem;
              height: 0.4rem;
              text-align: center;
              line-height: 0.3rem;
              i{
                font-size: 0.2rem;
                color: white;
              }
            }
          }
          p{
            font-size: 0.18rem;
            padding-top: 0.13rem;
          }
        }
        .last{
          div{
            i{
              font-size: 1rem;
            }
          }
          p{
            font-size: 0.18rem;
            padding-left: 0.12rem;
          }
        }
      }
    }
    //美食排行榜
    .food{
      .food_top{
        padding: 0 0.3rem;
        height: 1.15rem;
        line-height: 1.15rem;
        a{
          font-size: 0.24rem;
          font-weight: bold;
        }
        .orange{
          color: #ff6500;
        }
        .right{
          height: 1rem;
          float: right;
        }
      }
      .food_bottom{
        padding-bottom: 0.2rem;
        padding-left:0.3rem;
        .rank{
          padding-right:0.2rem;
          div{
            height: 2rem;
            position: relative;
            span{
              position: absolute;
              left: 0;
              top:0;
              width: 0.9rem;
              height: 0.4rem;
              text-align: center;
              line-height: 0.3rem;
              i{
                font-size: 0.2rem;
                color: white;
              }
            }
          }
          p{
            font-size: 0.18rem;
            padding-top: 0.13rem;
          }
        }
        .last{
          div{
            i{
              font-size: 1rem;
            }
          }
          p{
            font-size: 0.18rem;
            padding-left: 0.12rem;
          }
        }
      }
    }
    //tab选项卡
    .tab{
      padding-bottom: 0.2rem;
      border-bottom: 1px rgba(192,192,192,.5) solid;
      //景点
      .scenic_wrap{
        padding: 0 0.3rem;
        &>div{
          padding: 0.2rem 0;
          border-top: 0.5px rgba(192,192,192,.5) solid;
        }
        .more{
          height: 0.7rem;
          background-color: #fff2ea;
          text-align: center;
          line-height: 0.7rem;
          color: #ff6500;
          font-size: 0.2rem;
        }
        .left{
          width: 2.15rem;
          height: 1.58rem;
        }
        .right{
          div{
            margin-bottom: 0.05rem;
          }
          .mulan{
            font-size: 0.24rem;
            .lake{

            }
            .five{
              display: inline-block;
              width: 1.71rem;
              height: 0.3rem;
              font-size: 0.18rem;
              text-align: center;
              line-height: 0.3rem;
              vertical-align: middle;
              border-radius: 0.3rem;
              color: #00a62e;
              margin-left: 0.1rem;
              background-color: #ebf8ee;
            }
          }
          .grade{
            .score{
              font-size: 0.18rem;
              vertical-align: middle;
              color: #ff6500;
            }
            .much{
              display: inline-block;
              font-size: 0.2rem;
              vertical-align: middle;
              margin-left: 0.8rem;
              span{
                color: #e90009;
              }
            }
          }
          .position{
            i{
              font-size: 0.3rem;
              color: #c7c6cb;
              vertical-align: middle;
              margin-right: 0.05rem;
            }
            font-size: 0.2rem;
          }
          .data{
            span{
              font-size: 0.18rem;
              padding: 0 0.1rem;
              border-radius: 0.05rem;
            }
            span:first-child{
              border: 0.01rem #099b4c solid;
              color:#099b4c;
            }
            span:nth-child(2){
              border: 0.01rem #00a0e9 solid;
              color:#00a0e9;
            }
            span:nth-child(3){
              border: 0.01rem #eb3d00 solid;
              color:#eb3d00;
            }
            span:nth-child(4){
              border: 0.01rem #e3007b solid;
              color:#e3007b;
            }
          }
        }
        .van-row{
          margin-left: 0!important;
          margin-right: 0!important;
        }
        .variety{
          font-size: 0.18rem;
          color: #ff6500;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
  //样式的修改
  .van-tabs /deep/ .van-ellipsis{
    font-size: 0.2rem;
    font-weight: bold;
  }
  .van-tabs /deep/ .van-tabs__nav--line{
    padding: 0 0.3rem;
  }
  .van-tabs /deep/ .van-tabs__line{
    left: 0.12rem;
    height: 0.02rem;
    bottom: 0rem;
    width: 1.55rem!important;
    background-color: #ff6500;
  }
  .van-tabs /deep/ .van-col{
    padding-left: 0!important;
  }
  .van-tabs /deep/ .van-tab--active{
    color: #ff6500;
  }
  .van-tabs /deep/ .van-hairline--top-bottom::after{
    border-width: 0;
  }

</style>

