<template>
  <div class="scenicDetailcomment">
    <div class="topBar">
      <Header :title='title' :isback='isback'/>
    </div>
    <div style="height: 0.9rem"></div>
    <div class="top clear">
      <p v-for="(item,index) in active"
         :keys="index" :class="{orange:num==index+1}"
         @click="tab(index)"
      >{{item}}</p>
    </div>
    <!--总体评分-->
    <div class="rates">
      <span>*</span>总体评分<van-rate v-model="value" @change="rateChange"/>
    </div>
    <!--评价-->
    <div class="comment">
      <van-cell-group>
        <van-field
          v-model="message"
          label="评价"
          type="textarea"
          placeholder="请输入您的评价内容"
          :autosize="autosize"
          required
        />
      </van-cell-group>
    </div>
    <!--上传图片-->
    <div class="upload">
      <p>上传图片</p>
      <div class="buttonimg">
        <div v-for="(item,index) in imglist">
          <img :src="item" alt="">
          <i @click="delIMg(index)">删除</i>
        </div>
        <span v-show="imglist.length<=3">
          <input type="file" @change="uploadimg($event)">
        </span>
      </div>

    </div>
    <div class="bottom" @click="submit">发&nbsp;布</div>
  </div>
</template>

<script>
  import getToken from 'com/common/token'
  import Header from "com/common/Header2"
    export default {
        name: "scenicDetailcomment",
      components:{Header},
      data() {
        return {
          active:['住宿','美食','游玩'],
          num:1,
          value:0,
          message:'',
          autosize:{
            maxHeight: 300,
            minHeight: 200,
          },
          title:'写点评',
          isback:true,
          imglist:[],
          landid:null,
          useid:null,
        }
      },
      methods: {


        uploadimg(e){//图片上传
          let file=e.target.files[0];
          let imgSize=file.size/1024/1024;
          let fileType=file.name.substring(file.name.lastIndexOf('.') + 1, file.name.length).toLocaleLowerCase();
          let params = new FormData(); //创建form对象
          let timestamp = (new Date()).getTime();
          let Atanisi = Math.floor(Math.random() * 999999);
          let newName=timestamp+Atanisi+"."+fileType;
          params.append('key',newName);
          if(fileType != 'jpg' && fileType != 'bmp' && fileType != 'png' && fileType != "jpeg"){
            this.$toast('上传图片格式不正确')
            return false
          }
          if(imgSize>10){
            this.$toast('上传的图片不得大于10MB')
            return false
          }
          let Token=getToken.genUpToken(2,newName);
          params.append('token',Token);
          params.append('file',file)
          let config = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
          let url=getToken.niuUrl[1];
          this.$http.postImg('https://upload.qiniu.com/',params,null,null,config).then(res=>{
            this.imglist.push(url+res.key)
            console.log(this.imglist)

          })


        },


        tab(index){
          this.num=index+1;
          console.log(this.num);
        },

        delIMg(index){//删除图片
          this.imglist.splice(index,1)
        },

        rateChange(){//评分
          console.log(this.value)
        },

        submit(){//提交
          let imgSRc=this.imglist.join(",");

          console.log(imgSRc);
          console.log(this.message);
          if(this.message==''){
            this.$toast('请输入评论内容');
            return
          }
          if(this.value==0){
            this.$toast("请评分")
            return
          }
          const params={
            commentType:this.num,
            landSpaceId:this.landid,
            starLevel:this.value,
            comment:this.message,
            images:imgSRc,
            userId:this.useid,
          }
          this.$http.post('appServiceGrange/landComment',params).then(res=>{
            if(res.msg=='success'){
              this.$toast('评论成功')
              setTimeout(()=>{
                this.$router.go(-1);
              })
            }else{
              this.$toast(res.info)
            }
          });





        }
      },
      computed: {},
      created: function () {
        this.landid=this.$route.params.id;
        this.useid=JSON.parse(localStorage.getItem('userInfo')).userId;
      },
      mounted: function () {

      },


    }
</script>

<style scoped lang="less" type="text/less">
  .scenicDetailcomment{
    .top{
      margin: 0 0.2rem;
      padding: 0.4rem 0;
      border-bottom: 0.01rem solid #e6e6e6;
      line-height: 1.1rem;
      p{
        width: 30%;
        height: 0.57rem;
        float: left;
        background-color:#e7e6ec;
        border-radius: 0.57rem;
        text-align: center;
        line-height: 0.57rem;
        margin-right: 0.22rem;
      }
    }
    .rates{
      margin: 0 0.32rem;
      padding: 0.4rem 0;
      border-bottom: 0.01rem solid #e6e6e6;
      font-size: 0.24rem;
      span{
        color: red;
        font-size: 0.24rem;
      }
      div{
        display: inline-block;
      }
    }
    .comment{
      margin: 0 0.2rem;
      border-bottom: 0.01rem solid #e6e6e6;
    }
    .upload{
      margin: 0 0.2rem;
      padding: 0.2rem 0;
      p{
        font-size: 0.24rem;
      }
      .buttonimg{
        margin-top: 0.3rem;
        div{
          width: 1.58rem;
          height: 1.58rem;
          border: 0.01rem solid #e5e5e5;
          display: inline-block;
          position: relative;
          img{
            width: 100%;
            height: 100%;
          }
          i{
            position: absolute;
            width: 100%;
            display: inline-block;
            height: 0.5rem;
            background-color: rgba(0, 0, 0, 0.5);
            bottom: 0;
            text-align: center;
            line-height: 0.5rem;
            color: white;
          }
        }
        span{
          display: inline-block;
          width: 1.58rem;
          height: 1.58rem;
          background: url("../../../assets/button.png") center center no-repeat;
          background-size: cover;
          border: 0.01rem solid #e5e5e5;
          position: relative;
          vertical-align: top;
          input{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            outline: transparent;
            opacity: 0;
          }
        }
      }
    }
    .bottom{
      height: 1rem;
      width: 100%;
      text-align: center;
      line-height: 1rem;
      background-color: #ff6500;
      color: white;
      font-size: 0.24rem;
      margin-top: 2rem;
    }
  }
</style>
<style>
  .scenicDetailcomment .comment .van-cell__title span{
    font-size: 0.24rem;
  }
  .scenicDetailcomment .comment .van-field .van-cell__title{
    max-width:1rem;
  }
  .scenicDetailcomment textarea{
    font-size: 0.24rem;
  }
</style>
