<template>
    <div id="grangedetail" class="grangedetail">
      <div class="topBar">
        <Header :title='title' :isback='isback'/>
      </div>
      <div style="width:100%; height:.92rem;"></div>
      <!-- detail部分 -->
      <div v-if="detail">
        <!-- 轮播图 -->
        <div class="swiper_wrap">
          <van-swipe :autoplay="3000" @change="onChange">
            <van-swipe-item v-for="(item,index) in detail.fileUrls"
              :keys="index"
              :height="4">
              <div :style='"background:url("+ item.fileUrl +") center center no-repeat  ;background-size:cover; width: 100%;height: 100%"'></div>
            </van-swipe-item>
            <!-- <div class="custom-indicator" slot="indicator">
              {{ current + 1 }}/{{item.fileUrls.length}}
            </div> -->
          </van-swipe>
          <div class="share">
            <span @click="collection"><i class="iconfont icon-shoucang" :style="'color:'+ (isCollection? '#FF6500' : '#fff') + ';'"></i></span>
            <span @click="share"><i class="iconfont icon-fenxiang"></i></span>
          </div>
        </div>
        <div class="detail">
          <div class="top">
            {{detail.grangeName || ''}}
          </div>
          <div class="bottom">
            <span  v-if='detail.playList'  v-for="item in (detail.playList ? detail.playList.slice(0,4):null)">{{item}}</span>
            <div>
              星级
              <stars :rate="detail.totalMark"></stars>
              <span>{{detail.totalMark}}分</span>
            </div>
          </div>
        </div>
        <div class="separate" v-if="detail"></div>
        <ul class="scenicList">
          <li v-if="detail">
            <i class="iconfont icon-dizhi"></i>
            <a class="van-ellipsis gaga">
              {{detail.fcityName + '-'}}{{detail.fareaName + '-'}}{{detail.fstreetName + '-'}}{{detail.fvillageName + '-'}}{{detail.addressDetail}}
            </a>
            <a class="ditu"  @click="anchor('#anchorr')">
            <i class="iconfont icon-ditu"></i>
            地图
            </a>
          </li>
          <li>
            <i class="iconfont icon-dianhua2"></i>
            {{detail.contactPhone}}
          </li>
          <li>
            <i class="iconfont icon-shijian"></i>
            {{detail.businessHours}}
          </li>
          <li class="check clear" @click="ckeckScenic" v-if="detail.facilitiesList.length>0">
            <div v-for="item in (detail.facilitiesList.slice(0,8))">
              <img :src="item.logoUrl" alt="">
              <p>{{item.menuName}}</p>
            </div>
            <!-- <div>
              <img src="../../../assets/icon/more.png" alt="">
              <p></p>
            </div> -->
          </li>
        </ul>
        <div class="separate" v-if="detail"></div>
      </div>
      <div class="payment-online">
        <span>买单</span>
        <van-button type="warning" size="small" style="background-color: #ff6200;" @click="payment">去买单</van-button>
      </div>

      <div class="separate"></div>
      <!--门票-->
      <div v-if="ticket">
        <div class="tickets" v-if="ticket.count && ticket.count>0">
          门票( {{ticket.count}} )
        </div>
        <ul class="ticketList" v-if="ticket.count && ticket.count>0">
          <li v-for="item in ticketlist">
            <div>
              <router-link to="">
                {{item.ticketName}}
                ( {{item.ticketType == 1?"特价票":item.ticketType == 2?"成人票":item.ticketType == 3?"学生票":item.ticketType == 4?"儿童票":item.ticketType == 5?"老人票":item.ticketType == 6?"套票":item.ticketType == 7?"团体票":item.ticketType == 8?"其他":""}} )
              </router-link>
            </div>
            <div class="clear">
              <span>{{item.abolitionRules ==1?"有条件退":item.abolitionRules ==2?"随时退":item.abolitionRules ==3?"不可退":""}}</span>
              需游玩当天{{item.specificPoints}}前预订
              <router-link v-if="login" :to="{name:'ticketBook',params:{ type: 1, id: item.id}}" class="book">在线预订</router-link>
              <div v-else class="book" @click="TiBook(item.id)">在线预订</div>
            </div>
            <div>
              <span>￥{{item.bookingPrice}}元</span> <span class="line">￥{{item.facePrice}}元</span> &nbsp;|&nbsp;<a @click.stop="ticketKnow(item.id)" class="know">购买须知></a>
            </div>
          </li>
          <li class="more" :style="{display:(ticket.count>1 && ticketlist.length !=ticket.count )?'block':'none'}" @click="staycheck">查看全部{{ticket.count}}个门票 <i class="iconfont icon-xiala"></i></li>
        </ul>
        <div class="separate" v-if="ticket.count!=0"></div>
      </div>
      <!--住宿-->
      <div v-if="stay">
        <div class="tickets" v-if="stay.count && stay.count>0">
          住宿( {{stay.count}} )
        </div>
        <ul class="innList ticketList" v-if="stay.count && stay.count>0">
          <li v-for="item in stayarr">
            <div>
              <router-link to="">
                {{item.roomName}}
              </router-link>
            </div>
            <div>
              {{item.bedType+' | '}} {{item.breakfastNumber>0?'含早餐('+item.breakfastNumber+ '份' :'' + ''}}
              <router-link v-if="login" :to="{name:'innBook',params: {id:item.id}}" class="book">在线预订</router-link>
              <p v-else class="book" @click="inBook(item.id)">在线预订</p>
            </div>
            <div>
              <span>{{item.abolitionRules==1?'最晚'+item.abolitionDays+'天'+ item.abolitionPoints +'以前可免费取消':item.abolitionRules==2?'随时退':item.abolitionRules==3?'不可退':''}}</span>
            </div>
            <div>
              <span>￥{{item.bookingPrice}}元</span> <span class="line">￥{{item.listingPrice}}元</span> &nbsp;|&nbsp;<a class="know" @click.stop="innknow(item.id)">购买须知></a>
            </div>
          </li>
          <li class="more" :style="{display:(stay.count>5 && stayarr.length !=stay.count)?'block':'none'}" @click="inncheck">查看全部{{stay.count}}个住宿 <i class="iconfont icon-xiala"></i></li>
        </ul>
        <div class="separate" v-if="stay.count!=0"></div>
      </div>
      <!-- 美食代金券 -->
      <div v-if="voucher">
        <div class="tickets" v-if='voucher.count&&voucher.count>0'>
          美食代金券( {{voucher.count}} )
        </div>
        <ul class="ticketList" v-if='voucher.count&&voucher.count>0'>
          <li v-for="item in voucher.voucherList">
            <div>
              <router-link to="">
                {{item.voucherName}}
              </router-link>
            </div>
            <div class="clear">
              <span>{{item.abolitionRules == 1? '有条件退':item.abolitionRules == 2? '随时退':item.abolitionRules == 3? '不可退':''}}</span>
              {{item.usePeriod}} | {{item.isBespoke == 0?'免预约':'需要预约'}}
              <router-link v-if="login" :to="{name:'foodBook',params:{ type: 1, id: item.id}}" class="book">抢购</router-link>
              <div v-else class="book" @click="FooBook(item.id)">抢购</div>
            </div>
            <div><span>￥{{item.voucherPrice}}元</span> <span class="line">￥{{item.costPrice}}元</span> &nbsp;|&nbsp;<a @click='voucherknow(item.id)' class="know">购买须知></a></div>
          </li>
          <li class="more" :style="{display:(voucher.count>5 && voucher.voucherList !=voucher.count )?'block':'none'}" @click="vouchercheck">查看全部{{voucher.count}}个美食 <i class="iconfont icon-xiala"></i></li>
        </ul>
        <div class="separate" v-if="voucher.count!=0"></div>
      </div>
      <!-- detail -->
      <div v-if="detail">
        <!--景点介绍-->
        <div class="introduce">
          <span>简介</span>
          <div style="padding-top: .1rem" v-html="detail.grangeSynopsis || '暂无'">
            <!--{{detail.grangeSynopsis || "暂无"}}-->
          </div>
          <!--<button>查看全部&nbsp;&nbsp;<i class="iconfont icon-xia"></i></button>-->
        </div>
        <div class="separate"></div>
        <!--交通指引-->
        <div class="traffic" id="anchorr">
          <span>交通指引</span>
          <div>
            <span>开车路线</span>
            <span>
            {{detail.drivingRoute || '暂无'}}
          </span>
          </div>
          <div>
            <span>乘车路线</span>
            <span>
            {{detail.busRoutes || '暂无'}}
          </span>
          </div>
        </div>
      </div>
      <!--地图显示-->
      <div class="map" @click="navigation(detail)">
        <div id="container"></div>
        <a v-if="detail" class="van-ellipsis">
          <i class="iconfont icon-dizhi"></i>
          <span class="van-ellipsis">
            {{detail.fcityName + '-'}}{{detail.fareaName + '-'}}{{detail.fstreetName + '-'}}{{detail.fvillageName + '-'}}{{detail.addressDetail}}
          </span>
          <i class="iconfont icon-gengduo1"></i>
        </a>
      </div>
      <div class="separate"></div>
      <!--评论--->

      <div class="remark">
        <p class="clear">
          点评
          <a class="comment" @click="tocomment">我要点评</a>
        </p>
        <p>
          星级<stars :rate="5"></stars>&nbsp;<span>5.0分</span>&nbsp;|&nbsp;<span>{{comment.length}}条评论</span>
        </p>
      </div>
      <div v-if="commentlist.length > 0">
        <!--点评列表-->
        <ul class="commentlist">
          <li v-for="(item,index) in commentlist" :key="index">
            <van-row gutter="20">
              <van-col span="4" class="left">
                <img :src="item.headUrl" alt="">
              </van-col>
              <van-col span="20" class="right">
                <p>
                  <span>{{item.nickName}}</span>
                  <span>{{item.createTime}}</span>
                </p>
                <p><stars :rate="item.starLevel"></stars></p>
                <p>{{item.comment}}</p>
                <div class="imgdiv" v-if="item.images !=null">
                  <div v-for="(aa,bb) in (item.images.split(',').slice(0,3))" :style="{background:'url('+aa+') center center no-repeat',backgroundSize:'cover'}"></div>
                </div>
                <span @click="wants(item.id,index)">有用({{item.usefulNumber}})</span>
              </van-col>
            </van-row>
          </li>
          <li class="more" :style="{display:(comment.length>5 && commentlist.length != comment.length)?'block':'none'}" @click="checkcomment">加载更多评论</li>
        </ul>



        <div class="separate"></div>
      </div>

      <div v-if="farmhouse.length>0">
        <!--周边农房-->
        <div class="scenic">
          <div class="scenic_top clear">
            周边农房
          </div>
          <div class="scenic_bottom" style="overflow: hidden;">
            <scroll ref="scroll" class="recommend-content" :data="farmhouse">
              <div :style="'width:' + farmhouse.length * 3.2 + 'rem'">
                <router-link v-for="(item,index) in farmhouse" :to="{name:'rentDetail',params:{id:item.farmhouseRentalsNumber}}">
                  <div style="width: 3rem; display: inline-block; padding-right: .2rem">
                    <div  :style="'background:url(' + (item.fileURL ? item.fileURL:aaimg ) + ');width: 100%;height: 2rem;background-size:cover;background-position: center center'"></div>
                    <div style="font-size: 0.26rem;" class="van-ellipsis">{{item.farmhouseTitle}}</div>
                    <p>
                    <span style="color: red">{{item.is_interview == 1 ? "面谈":item.rentingPrice}}万元</span>&nbsp; &nbsp;
                    <span style="color: grey">{{item.rentingYears}}年</span>&nbsp; &nbsp;
                    <span style="color: grey">{{item.coveredArea}}平</span>
                    </p>
                  </div>
                </router-link>
              </div>
            </scroll>
          </div>
        </div>
        <div class="separate"></div>
      </div>

	  <div v-show="stayList.length > 0&&foodList.length > 0&&playList.length > 0">
        <!--周边农庄-->
        <div class="farm">
          <div class="scenic_top clear">
            <span>周边农庄</span>
            <van-tabs type="card">
              <van-tab title="住宿">
                <div class="scenic_bottom" style="overflow: hidden;">
                  <scroll ref="scroll" class="recommend-content" :data="stayList">
                    <div :style="'width:' + stayList.length * 3.2 + 'rem'">
                      <router-link v-for="(item,index) in stayList" :to="{name:'grangedetail',params:{id:item.grangeNumber}}">
                        <div style="width: 3rem; display: inline-block; padding-right: 0.2rem;position: relative">
                          <div :style="'background:url(' + (item.fileURL ? item.fileURL:aaimg )+ ');width: 100%;height: 2rem;background-size:cover;background-position: center center'"></div>
                          <div style="font-size: 0.26rem;" class="van-ellipsis">{{item.grangeName}}</div>
                          <span style="position: absolute;bottom: 0.7rem;display: inline-block;width: 1.2rem;height: 0.3rem;left: 0.1rem;background: rgba(0, 0, 0, 0.5);text-align: center;color: white;border-radius: 0.3rem;line-height: 0.3rem;">￥{{item.personConsumption}}起</span>
                          <p>
                          <span style="color: #ff6500"><stars :rate="item.totalMark || 0"></stars> {{item.totalMark}}分</span>
                          &nbsp; &nbsp;
                          <span style="color: grey">{{item.fareaName}}</span>
                          </p>
                        </div>
                      </router-link>
                    </div>
                  </scroll>
                </div>
              </van-tab>

              <van-tab title="美食">
                <div class="scenic_bottom" style="overflow: hidden;">
                  <scroll ref="scroll" class="recommend-content" :data="foodList">
                    <div :style="'width:' + foodList.length * 3.2 + 'rem'">
                      <router-link v-for="(item,index) in foodList" :to="{name:'grangedetail',params:{id:item.grangeNumber}}">
                        <div style="width: 3rem; display: inline-block; padding-right: 0.2rem;position: relative">
                          <div  :style="'background:url(' + (item.fileURL ? item.fileURL:aaimg ) + ');width: 100%;height: 2rem;background-size:cover;background-position: center center'"></div>
                          <div style="font-size: 0.26rem;" class="van-ellipsis">{{item.grangeName}}</div>
                          <span style="position: absolute;bottom: 0.7rem;display: inline-block;width: 1.2rem;height: 0.3rem;left: 0.1rem;background: rgba(0, 0, 0, 0.5);text-align: center;color: white;border-radius: 0.3rem;line-height: 0.3rem;">￥{{item.personConsumption}}起</span>
                          <p>
                            <span style="color: #ff6500"><stars :rate="item.totalMark || 0"></stars> {{item.totalMark}}分</span>
                            &nbsp; &nbsp;
                            <span style="color: grey">{{item.fareaName}}</span>
                          </p>
                        </div>
                      </router-link>
                    </div>
                  </scroll>
                </div>
              </van-tab>
              <van-tab title="游玩">
                <div class="scenic_bottom" style="overflow: hidden;">
                  <scroll ref="scroll" class="recommend-content" :data="playList">
                    <div :style="'width:' + playList.length * 3.2 + 'rem'">
                      <router-link v-for="(item,index) in playList" :to="{name:'grangedetail',params:{id:item.grangeNumber}}">
                        <div style="width: 3rem; display: inline-block; padding-right: 0.2rem;position: relative">
                          <div  :style="'background:url(' + (item.fileURL ? item.fileURL:aaimg ) + ');width: 100%;height: 2rem;background-size:cover;background-position: center center'"></div>
                          <div style="font-size: 0.26rem;" class="van-ellipsis">{{item.grangeName}}</div>
                          <span style="position: absolute;bottom: 0.7rem;display: inline-block;width: 1.2rem;height: 0.3rem;left: 0.1rem;background: rgba(0, 0, 0, 0.5);text-align: center;color: white;border-radius: 0.3rem;line-height: 0.3rem;">￥{{item.personConsumption}}起</span>
                          <p>
                            <span style="color: #ff6500"><stars :rate="item.totalMark || 0"></stars> {{item.totalMark}}分</span>
                            &nbsp; &nbsp;
                            <span style="color: grey">{{item.fareaName}}</span>
                          </p> 
                        </div>
                      </router-link>
                    </div>
                  </scroll>
                </div>
              </van-tab>
            </van-tabs>
          </div>
        </div>
        <div class="separate"></div>
      </div>




      <!-- detail -->
      <!--<div v-if="detail !== null">-->
        <!--&lt;!&ndash;底部导航&ndash;&gt;-->
        <!--<div class="currentVCity" v-if="detail.busRoutes && detail.busRoutes!==null">-->
          <!--{{detail.busRoutes}}-->
          <!--&lt;!&ndash; [当前城市]三乡工程网 >  [当前城市]景点 > [当前区县]景点 > [当前景点名称] &ndash;&gt;-->
        <!--</div>-->
        <!--<div class="separate"></div>-->
      <!--</div>-->
      <!--底部tab-->
      <!-- <div class="navBar">
        <van-tabs>
          <van-tab title="同地区景点">
            <div>

              姚家集景点

              长岭景点

              王家河景点

            </div>
          </van-tab>
          <van-tab title="周边街道景点">
            <div>
              姚家集景点

              长岭景点

              王家河景点
            </div>
          </van-tab>
          <van-tab title="周边地区景点">
            <div>

              汉南区景点

              江夏区景点

              蔡甸区景点

            </div>
          </van-tab>
        </van-tabs>
      </div> -->
      <goTotop/>
      <!--上拉菜单-->
      <Actionsheet v-model="show"
                   class="pullmenu"
                   :close-on-click-overlay="false"
                    title="分享给好友">
        <div class="banner clear">
          <div>
            <img src="../../../assets/wechat.png" alt="">
            <p>微信好友</p>
          </div>
          <div @click="xinlang">
            <img src="../../../assets/blog.png" alt="">
            <p>新浪微博</p>
          </div>
          <div @click="zone">
            <img src="../../../assets/QQ.png" alt="">
            <p>QQ空间</p>
          </div>
        </div>
      </Actionsheet>
    </div>
</template>

<script>
    import stars from '../../common/rates'
    import Header from "../../common/header"
    import { Actionsheet } from 'vant';
    import Scroll from 'com/common/swiperX'
    import noimg from '@/assets/noimg.jpg'
    import goTotop from 'com/common/goTop'
    export default {
      name: "grangeDetail",
      components:{Header,stars,Actionsheet,Scroll,goTotop},
      data() {
          return {
            aaimg:noimg,
            title: '农庄详情',
            isback: true,
            login: false, //登录状态
            isCollection: false,
            indicators: false,
            current: 0, // 指示器
            detail:null,
            ticket: null,
            ticketlist:[],//门票的列表
            stay: null,//住宿
            stayarr:[],//住宿的列表
            voucher: null,
            voucherlist:[],//代金券列表
            commentlist:[],//评论列表
            ak:'92yMYGfePMtrmLGGvUjGAUZiR8XtTYr0',
            farmhouse:[],
            foodList:[],
            playList:[],
            stayList:[],
            comment: [],
            list:['垂钓','烧烤','农家饭','野菜'],
            play_list:[
            ],//游玩
            show: false,
            showpopup:false,
            pullbanner:[
              {
                src:'../../../../static/images/shanjing.png',
                text:'微信好友'
              },
              {
                src:'../../../../static/images/shanjing.png',
                text:'微信朋友圈'
              },
              {
                src:'../../../../static/images/shanjing.png',
                text:'QQ空间'
              },
              {
                src:'../../../../static/images/shanjing.png',
                text:'QQ好友'
              }
            ],
            Span:['美丽乡村','有山有水'],
            location: {
              lng: '114.312',
              lat: '30.598'
            },

            longitude:0,//经度
            latitude:0,//唯度
            name:'',
          }
      },
      methods: {
        //新浪
        xinlang() {
          var name =this.detail.grangeName+`—【武汉市三乡工程网】`;
          var top = window.screen.height / 2 - 250;
          var left = window.screen.width / 2 - 300;
          var height = window.screen.height;
          var width =  window.screen.width;
          /*title是标题，rLink链接，summary内容，site分享来源，pic分享图片路径,分享到新浪微博*/
          var desc_ =name
          var title = desc_;
          var   rLink =  window.location.href;
          var backUrl = "http://wx.hengfu100.com/member/c_friend";
          var site = desc_;
          var pic = "";
          window.open("http://service.weibo.com/share/share.php?pic=" +encodeURIComponent(pic) +"&title=" +
            encodeURIComponent(title.toString().replace(/ /g, " ").replace(/<br \/>/g, " "))+ "&url=" + encodeURIComponent(rLink),
            "分享至新浪微博",
            "height=500,width=600,top=" + top + ",left=" + left + ",toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no");
          this.show=false;
        },


        // QQ空间
        zone() {
          // 输入信息
          var name =this.detail.grangeName+`—【武汉市三乡工程网】`;
          var desc_ = name;
          var _url = window.location.href;
          var _showcount = 0;
          var _desc = desc_;
          var _title = name;
          var _site = "";
          var _width = "600px";
          var _height = "800px";
          var _summary = "";
          var _pic = "";
          var _shareUrl = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
          _shareUrl += 'url=' + encodeURIComponent(_url||document.location);   //参数url设置分享的内容链接|默认当前页location
          _shareUrl += '&showcount=' + _showcount||0;      //参数showcount是否显示分享总数,显示：'1'，不显示：'0'，默认不显示
          _shareUrl += '&desc=' + encodeURIComponent(_desc||'分享的描述');    //参数desc设置分享的描述，可选参数
          //_shareUrl += '&summary=' + encodeURIComponent(_summary||'分享摘要');    //参数summary设置分享摘要，可选参数
          _shareUrl += '&title=' + encodeURIComponent(_title||document.title);    //参数title设置分享标题，可选参数
          //_shareUrl += '&site=' + encodeURIComponent(_site||'');   //参数site设置分享来源，可选参数
          _shareUrl += '&pics=' + encodeURIComponent(_pic||'');   //参数pics设置分享图片的路径，多张图片以＂|＂隔开，可选参数
          window.open(_shareUrl,'width='+_width+',height='+_height+',top='+(screen.height-_height)/2+',left='+(screen.width-_width)/2+',toolbar=no,menubar=no,scrollbars=no,resizable=1,location=no,status=0');
          this.show=false;
        },



        navigation(aa){
          let map=JSON.stringify(aa);
          this.$router.push({name:'navigation',params:{id:map}})
        },
        anchor(select){//锚点
          let anch=this.$el.querySelector(select).offsetTop;
          let step=anch/50;
          let distance=document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
          (function autoAnimation(){
            if(distance<anch){
              distance+=step;
              document.body.scrollTop=distance;
              document.documentElement.scrollTop=distance;
              setTimeout(autoAnimation,10)
            }else{
              document.body.scrollTop=anch;
              document.documentElement.scrollTop=anch;
            }
          })()
        },

        wants(id,index){
          if(localStorage.getItem('userInfo')){
            let useid=JSON.parse(localStorage.getItem('userInfo')).userId;
            const params={
              id:id,
              userId:useid,
            };
            this.$http.post('appServiceGrange/usefulNumber',params).then(res=>{
              if(res.msg=='success'){
                this.commentlist[index].usefulNumber++;
              }else{
                this.$toast(res.info)
              }
            })
          }else{
            this.$toast('登录之后再点击')
            setTimeout(()=>{
              this.$router.push('/login')
            })
          }
        },
        tocomment(){//农庄评论、
          if(localStorage.getItem('userInfo')){
            this.$router.push({
              name:'grangeDetailcomment',
              params:{
                id:this.detail.id,
              },
            });
          }else{
            this.$toast('登录之后可点评');
            setTimeout(()=>{
              this.$router.push('/login')
            })
          }

        },

        innknow(id){//住宿的购买须知

          if(localStorage.getItem('userInfo')){
            let ticketarr={};
            this.stay.stayList.map(item=>{
              if(item.id==id){
                ticketarr=item;
              }
            });
            let idd=encodeURIComponent(JSON.stringify(ticketarr));
            let imgURL=this.detail.fileUrls.length !=0 ? this.detail.fileUrls[0].fileUrl :"";
            let some={name:this.detail.grangeName,score:this.detail.totalMark,url:imgURL};
            let dee=encodeURIComponent(JSON.stringify(some));
            this.$router.push({
              name:'innknow',
              params:{
                id:idd,
                de:dee,
              },
            });
          }else{
            this.$toast('登录之后可查看')
            setTimeout(()=>{
              this.$router.push('/login')
            })
          }

        },


        ticketKnow(id){//门票须知
          if(localStorage.getItem('userInfo')){
            let ticketarr={};
            this.ticket.ticketList.map(item=>{
              if(item.id==id){
                ticketarr=item;
              }
            });
            let idd=encodeURIComponent(JSON.stringify(ticketarr));
            let imgURL=this.detail.fileUrls.length !=0 ? this.detail.fileUrls[0].fileUrl :"";
            let some={name:this.detail.grangeName,score:this.detail.totalMark,url:imgURL,time:this.detail.businessHours};
            let dee=encodeURIComponent(JSON.stringify(some));
            this.$router.push({
              name:'ticketKnow',
              params:{
                id:idd,
                de:dee,
              },
            });
          }else{
            this.$toast('登录之后可查看')
            setTimeout(()=>{
              this.$router.push('/login')
            })
          }

        },

        voucherknow(id){//美食须知
          if(localStorage.getItem('userInfo')){
            let ticketarr={};
            this.voucher.voucherList.map(item=>{
              if(item.id==id){
                ticketarr=item;
              }
            });
            let idd=encodeURIComponent(JSON.stringify(ticketarr));
            let imgURL=this.detail.fileUrls.length !=0 ? this.detail.fileUrls[0].fileUrl :"";
            let some={name:this.detail.grangeName,score:this.detail.totalMark,url:imgURL};
            let dee=encodeURIComponent(JSON.stringify(some));
            this.$router.push({
              name:'foodKnow',
              params:{
                id:idd,
                de:dee,
              },
            });
          }else{
            this.$toast('登录之后可查看')
            setTimeout(()=>{
              this.$router.push('/login')
            })
          }
        },

        inncheck(){//住宿查看全部
          this.stayarr=this.stayarr.concat(this.stay.stayList.slice(5));
        },

        staycheck(){//门票查看
          this.ticketlist=this.ticketlist.concat(this.ticket.ticketList.slice(5))
        },
        vouchercheck(){//美食查看全部
          this.voucherlist=this.voucherlist.concat(this.voucher.voucherList.slice(5));
        },
        checkcomment(){//查看全部的评论
          this.commentlist=this.commentlist.concat(this.comment.slice(5))
        },
        setmap(){
          let map = new BMap.Map('container');
          let point =new BMap.Point(this.longitude,this.latitude);
          map.centerAndZoom(point, 15);
          let marker = new BMap.Marker(point);
          map.addOverlay(marker);
          //设置一个标签
          let opts = {
            position : point,    // 指定文本标注所在的地理位置
            offset   : new BMap.Size(-55,-90)    //设置文本偏移量
          }
          var label = new BMap.Label(this.name, opts);
          label.setStyle({
            color : "black",
            fontSize : "0.2rem",
            height : "40px",
            lineHeight : "40px",
            fontFamily:"微软雅黑",
            padding:'5px',
            border:'none',
            textAlign:'center',
            width:'100px',
            overflow:'hidden',
            whiteSpace:'nowrap',
            textOverflow:'ellipsis',
          });
          map.addOverlay(label);
        },


        share(){//分享
          this.show=true;
        },
        ckeckScenic(){//查看景点详情
          this.showpopup=true;
        },
        onChange(index) {
          this.current = index;
        },
        init(grangeNumber){
          this.$http.post('appServiceGrange/getGrangeDetail', {grangeNumber:grangeNumber}).then(res=>{
            if(res.msg=='success'){
              this.detail = res.data.detail;
              this.ticket = res.data.ticket;
              this.name=res.data.detail.grangeName;//景点名称

              this.longitude=res.data.detail.longitude;//经度
              this.latitude=res.data.detail.latitude;//维度
              if(this.ticket.count>5){//门票
                this.ticketlist=this.ticket.ticketList.slice(0,5);
              }else{
                this.ticketlist=this.ticket.ticketList;
              }
              this.stay = res.data.stay;
              if(this.stay.count>5){//住宿
                this.stayarr=this.stay.stayList.slice(0,5)
              }else{
                this.stayarr=this.stay.stayList;
              }
              this.voucher = res.data.voucher

              if(this.voucher.count>5){//美食
                this.voucherlist=this.voucher.voucherList.slice(0,5)
              }else{
                this.voucherlist=this.voucher.voucherList;
              }
              this.comment=res.data.comment;
              if(this.comment.length>5){//评论
                this.commentlist =this.comment.slice(0,5);
              }else{
                this.commentlist=this.comment;
              }

              // 周边部分
              this.farmhouse = res.data.farmhouse
              this.foodList = res.data.foodList
              this.playList = res.data.playList
              this.stayList = res.data.stayList
              this.isCollection = res.data.detail.isCollection
              this.setmap();
            }else{
              this.$toast(res.info)
            }
          })
        },
        collection(){  //收藏按钮
          if(localStorage.getItem('userInfo')){
            this.$http.post('appServiceGrange/collection', {grangeId: this.detail.id}).then(res=>{
              if(res.msg=='success'){
                this.$toast(res.info)
                // this.isCollection = !this.isCollection
                this.isCollection = true
              }else{
                  this.$toast(res.info)
              }
            })
          } else {
            this.$toast('登录之后可收藏!');
            setTimeout(()=>{
              this.$router.push({name: 'login'})
            },800)
          }
        },
        TiBook(id){//门票预订
          if(localStorage.getItem('userInfo')){
            this.$router.push({name:'ticketBook',params:{type:1,id:id}})
          }else{
            this.$toast("登录之后可预订");
            setTimeout(()=>{
              this.$router.push('/login')
            })
          }
        },
        inBook(id){//住宿预订
          if(localStorage.getItem('userInfo')){
            this.$router.push({name:'innBook',params:{id:id}})
          }else{
            this.$toast("登录之后可预订");
            setTimeout(()=>{
              this.$router.push('/login')
            })
          }
        },
        FooBook(id){//美食预订
          if(localStorage.getItem('userInfo')){
            this.$router.push({name:'foodBook',params:{id:id}})
          }else{
            this.$toast("登录之后可抢购");
            setTimeout(()=>{
              this.$router.push('/login')
            })
          }
        },
        payment(){
          if(localStorage.getItem('userInfo')){
            if(this.detail.id && this.name){
              if(this.$proType == 1){         // App支付
                window.open('https://m.3xgc.com/#/payOnline?userId=' + JSON.parse(localStorage.getItem('userInfo')).userId + '&id=' + this.detail.id + '&name=' + this.name, '_self')
                return false
              }
              this.$router.push({ name:'payOnline', query:{ id:this.detail.id, name: this.name }})
            }
          }else{
            this.$toast("登录之后可买单");
            setTimeout(()=>{
              this.$router.push('/login')
            })
          }
        }
      },
      computed: {},
      created: function () {
        this.login = localStorage.getItem('userInfo') ? true : false
        var id = this.$route.params.id;
        this.init(id)
      },
      mounted: function () {

      },
      watch:{
        '$route'(){
          var id = this.$route.params.id;
          this.init(id);
        },
      },
    }
</script>

<style scoped lang="less" type="text/less">
  .grangedetail{
    .payment-online{
      line-height: .6rem;
      padding: .2rem .3rem;
      text-align: right
    }
    .payment-online span{
      float: left;
      font-weight: bold;
      font-size: 0.3rem;
    }
    width: 100%;
    overflow: hidden;
    .swiper_wrap{
		height: 4.48rem;
      	position: relative;
	      .van-swipe{
	        height: 100%;
	        img{
	          height: 100%;
	        }
	      }
	      .share{
	        position: absolute;
	        top: 0.2rem;
	        right: 0.2rem;
	        span{
	          display: inline-block;
	          width: 0.5rem;
	          height: 0.5rem;
	          background-color:rgba(0, 0, 0, 0.4);
	          text-align: center;
	          line-height: 0.5rem;
	          border-radius: 50%;
	          text-align: center;
	          i{
	            color: white;
	            font-size: 0.25rem;
	          }
	        }
	      }
    }
    .detail{
      .top{
        height: 1rem;
        font-size: .32rem;
        line-height: 1rem;
        margin: 0 0.3rem;
        border-bottom: 0.01rem solid #f1f0f6;
      }
      .bottom{
        height: 0.85rem;
        line-height: 0.85rem;
        margin: 0 0.3rem;
        &>span{
          font-size: 0.24rem;
          padding: .05rem .1rem;
          border-radius: 0.05rem;
          margin-right: 0.05rem;
        }
        &>span:first-child{
          border: 0.01rem solid #00a0e9;
          color:#00a0e9 ;
        }
        &>span:nth-child(2){
          border: 0.01rem solid #099b4c;
          color:#099b4c ;
        }
        &>span:nth-child(3){
          border: 0.01rem solid #eb3d00;
          color:#eb3d00 ;
        }
        &>span:nth-child(4){
          border: 0.01rem solid #e3007b;
          color:#e3007b ;
        }
        div{
          float: right;
          font-size: 0.22rem;
          display: inline-block;
          span:last-child{
            color: #ff6500;
          }
        }
      }
    }
    //隔开
    .separate{
      height: 0.2rem;
      background-color: #f1f0f6;
    }
    .scenicList{
      margin:0 0.2rem 0.5rem 0.2rem;
      color: #28282B;
      li{
        height: 0.85rem;
        border-top: 0.01rem solid #f1f0f6;
        line-height: 0.85rem;
        font-size: 0.26rem;
        &>i{
          font-size: 0.3rem;
          color: #c7c6cb;
          vertical-align: middle;
        }
        .ditu{
          float: right;
          margin-right: 0.5rem;
          color: #78a5ff;
        }
        .gaga{
          width: 4rem;
          display: inline-block;
          vertical-align: middle;
        }
      }
      .check{
        line-height: normal;
        padding-top: 0.2rem;
        div{
          text-align: center;
          img{
            width: 0.5rem;
            height: 0.5rem;
          }
          p{
            text-align: center;
            font-size: 0.20rem!important;
            color: #919096
          }
          float: left;
          margin-right: 0.3rem;
          &:last-of-type{
            margin-right: 0;
          }
        }
      }

    }
    .tickets{
      height: 1rem;
      margin: 0 0.3rem;
      line-height: 1rem;
      font-weight: bold;
      font-size: 0.3rem;
      border-bottom: 0.01rem solid #f1f0f6;
    }
    .ticketList{
      margin: 0 0.3rem;
      li{
        border-bottom: 0.01rem solid #f1f0f6;
        div:first-child{
          a{
            height: 0.7rem;
            font-size: 0.28rem;
            line-height: 0.7rem;
          }
        }
        div:nth-child(2){
          font-size: 0.24rem;
          color:grey;
          span{
            margin-right: .05rem;
            border: 0.01rem solid #099b4c;
            font-size: 0.22rem;
            color: #099b4c;
            border-radius: 0.02rem;
            padding: .05rem 0.1rem;
          }
          .book{
            vertical-align: middle;
            display: inline-block;
            width: 1.48rem;
            height: 0.55rem;
            float: right;
            font-size: 0.22rem;
            background-color: #ff6200;
            color: white;
            text-align: center;
            line-height: 0.55rem;
            border-radius: 0.55rem;
          }
        }
        div:last-child{
          font-size: 0.22rem;
          color:grey ;
          margin-bottom: 0.2rem;
          span{
            color: #e21909;
          }
          .line{
            color: grey;
            text-decoration: line-through;
          }
          .know{
            color: #099b4c;
            font-size: 0.22rem;
          }
        }
      };
      .more{    padding: 0;
        height: 0.85rem;
        text-align: center;
        line-height: 0.85rem;
        color: #ff6400;
        font-size: 0.22rem;
      }
    }
    .innList{
      margin: 0 0.3rem;
      li{
        border-bottom: 0.01rem solid #f1f0f6;
        div:first-child{
          height: 0.6rem;
          overflow: hidden;
          a{
            font-size: 0.28rem;
            line-height: 0.7rem;
          }
        }
        div:nth-child(2){
          font-size: 0.24rem;
          color:grey;
          span{
            border: 0.01rem solid #099b4c;
            font-size: 0.22rem;
            color: #099b4c;
            border-radius: 0.02rem;
            padding: .05rem 0.1rem;
          }
          .book{
            vertical-align: middle;
            display: inline-block;
            width: 1.48rem;
            height: 0.55rem;
            float: right;
            font-size: 0.22rem;
            background-color: #ff6200;
            color: white;
            text-align: center;
            line-height: 0.55rem;
            border-radius: 0.55rem;
          }
        }
        div:nth-child(3){
          font-size: 0.24rem;
          padding: 0.05rem 0;
          color: #099BD1
        }
        div:last-child{
          // font-size: 0.26rem;
          color: #e90b08;
          line-height: 1.6;
          padding-bottom: .16rem;
        }
      }
      .more{    padding: 0;
        height: 0.85rem;
        text-align: center;
        line-height: 0.85rem;
        color: #ff6400;
        font-size: 0.22rem;
      }
    }
    //景点介绍
    .introduce{
      margin: 0.2rem 0.3rem;
      span{
        font-weight: bold;
        font-size: 0.3rem;
      }
      div{
        font-size: 0.26rem;
        color: grey;
        padding: 0.2rem 0;
      }
      button{
        width: 100%;
        border: none;
        height: 0.3rem;
        font-size: 0.22rem;
        background-color: white;
        color:#ff6500;
        margin-bottom: 0.1rem;
      }
    }
    //交通线路
    .traffic{
      margin: 0.2rem 0.3rem;
      &>span{
        font-weight: bold;
        font-size: 0.3rem;
      }
      div{
        margin-top: 0.1rem;
        &>span:first-child{
          color: grey;
          font-size: .26rem;
          vertical-align: top;
          padding-right: .06rem;
        }
        &>span:last-child{
          display: inline-block;
          width: 83%;
          font-size: .26rem;
        }
      }
    }
    //地图
    .map{
      #container{
        height: 4rem;
      }
      a{
        display: inline-block;
        width: 100%;
        font-size: 0.22rem;
        padding: 0.4rem 0.2rem;
        box-sizing: border-box;
        span{
          width: 6.16rem;
          display: inline-block;
          vertical-align: middle;
        }
        .icon-dizhi{
          color:grey;
          vertical-align: middle;
        }
        .icon-gengduo1{
          float: right;
          margin-top: 0.1rem;
        }
      }
    }
    //点评
    .remark{
      padding: 0.3rem 0.3rem .1rem;
      p:first-child{
        font-size: 0.3rem;
        font-weight: bold;
        padding-bottom: .1rem;
        .comment{
          float: right;
          font-size: 0.22rem;
          width: 1.5rem;
          height: 0.5rem;
          border-radius: 0.5rem;
          display: inline-block;
          color: #fff;
          background-color: #00b034;
          font-weight: normal;
          text-align: center;
          line-height: 0.5rem;
        }
      }
      p:last-child{
        font-size: 0.22rem;
        padding-bottom: 0.2rem;
        border-bottom: 0.01rem solid #E6E6E6;
        color: #5F5F5F
      }
    }
    .commentlist{
      li{
        margin: 0 0.3rem;
        padding: 0.2rem 0;
        border-bottom: 0.01rem solid #E6E6E6;
        .left{
          img{
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            margin-right: .1rem;
          }
        }
        .right{
          p:first-child{
            font-size: 0.26rem;
            color: grey;
            line-height: .26rem;
            span:last-child{
              font-size: 0.22rem;
            line-height: .26rem;
              float: right;
            }
            padding: .1rem 0;
          }
          p:nth-child(3){
            font-size: 0.26rem;
            line-height: 1.6;
          }
          &>span{
            margin-top: 0.09rem;
            width: 1.5rem;
            height: 0.4rem;
            text-align: center;
            line-height: 0.4rem;
            float: right;
            background-color: #06a3ea;
            border-radius: 0.4rem;
            font-size: 0.18rem;
            color: white;
          }
          .imgdiv{
            div{
              width: 1.8rem;
              height: 1.8rem;
              display: inline-block;
            }
          }
        }
      }
      .more{
        height: 0.85rem;    padding: 0;
        text-align: center;
        line-height: 0.85rem;
        color: #ff6400;
        font-size: 0.22rem;
        border: none;
      }
    }
    //周边农房
    .scenic{
      .scenic_top{
        padding: 0 0.3rem;
        height: 1.1rem;
        line-height: 1.1rem;
        font-size: 0.3rem;
        font-weight: bold;
      }
      .scenic_bottom{
        border-bottom: 0.02rem #e4e4e4 solid;
        padding-bottom: 0.2rem;
        padding-left:0.3rem;
        .rank{
          padding-right:0.2rem;
          div{
            height: 2.87rem;
            img{
              height: 2rem;
            }
            a{
              display: block;
              line-height: 1.8;
              font-size: 0.26rem;
            }
            p{
              font-size: 0.22rem;
              color: #979798;
              span{
                color: #FA6300;
              }
              span:nth-child(3){
                color: #979798;
                float: right;
              }
            }
          }
        }
      }
    }
    //周边农庄
    .farm{
      .scenic_top{
        padding: 0.2rem 0 0.2rem  0.3rem;
        font-size: 0.22rem;
        font-weight: bold;
        position: relative;
        &>span{
          font-size: 0.3rem;
          position: absolute;
          line-height: .7rem;
        }
      }
      .scenic_bottom{
        // border-bottom: 0.02rem #e4e4e4 solid;
        // padding-bottom: 0.2rem;
        .rank{
          padding-right:0.2rem;
          div{
            position: relative;
            height: 2.87rem;
            .price{
              width: 1rem;
              height: 0.4rem;
              background-color: rgba(0, 0, 0, 0.4);
              position: absolute;
              top: 1.5rem;
              text-align: center;
              line-height: 0.4rem;
              color: #fff;
              font-weight: normal;
              border-radius: 0.4rem;
              left: 0.2rem;
            }
            img{
              height: 2rem;
            }
            a{
              display: block;
              font-size: 0.26rem;
              line-height: 1.8;
              font-weight: normal;
            }
            p{
              font-size: 0.22rem;
              font-weight: normal;
              span:nth-child(2){
                color: #ff6500;
              }
              span:nth-child(3){
                color: #979798;
                float: right;
              }
            }
          }
        }
      }
    }
    //上拉菜单
    .pullmenu{
      div{
        text-align: center;
      }
      .banner{
        margin:0.2rem 0;
       &>div{
         float: left;
         width: 33%;
         text-align: center;
         img{
           width: 40%;
         }
         p{
           margin-top: 0.3rem;
           text-align: center;
           font-size: 0.32rem;
         }
       }
      }
    }
    .pullmenu /deep/.van-actionsheet__header div{
      text-align: center;
    }
  }
  .currentVCity{
    padding: .3rem;
    font-size: .24rem;
    line-height: 1.8;
    color: #626263
  }
</style>
<style lang="less" type="text/less">
  #grangedetail{
    .navBar .van-tab{
        color: #28282B
    }
    .navBar .van-tab--active{
      color: #FF6500
    }
    .navBar .van-tabs__line{
      background: #FF6500;
    }
    .scenicDetail .van-tabs--card .van-tabs__wrap,
    &.grangedetail .van-tabs--card .van-tabs__wrap{
      margin-top: .15rem;
    }
    .scenicDetail .van-tabs__nav--card,
    &.grangedetail .van-tabs__nav--card{
      background: #F6F5FB;
    }
    .scenicDetail .van-tabs__nav--card,
    &.grangedetail .van-tabs__nav--card,
    .scenic_top .van-tabs__nav--card{
      border: 0;
      border-radius: .28rem;
      box-shadow: 0 0 .002rem #CECBCE
    }
    .scenic_top .van-tab{
      background: transparent;
      border: none
    }
    .scenic_top .van-tabs__nav--card .van-tab{
      border: none
    }
    .scenicDetail .van-tabs__nav--card .van-tab.van-tab--active,
    .van-tabs__nav--card .van-tab.van-tab--active{
      background: #FF6500!important;
      border-radius: .2rem
    }
    .scenicDetail .van-tabs--card,
    &.grangedetail .van-tabs--card{
      padding-top: .9rem;
    }
    &.grangedetail .traffic > span[data-v-270c5266],
    &.grangedetail .introduce span[data-v-270c5266]{
        line-height: 0.6rem;
        padding-bottom: .3rem;
        /* font-size: .24rem; */
    }
    .scenic_bottom .van-swipe-item{
    }
  }
</style>
