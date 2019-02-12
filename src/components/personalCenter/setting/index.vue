<template>
  <div class="setting">
    <Header :title="title" :isback="true"/>
    <div class="setting-header">
      <img :src="image" alt>
      <div class="name">
        更换头像
        <input class="changeImg" type="file" @change="uploadimg($event)">
      </div>
    </div>
    <van-cell-group>
      <van-cell title="姓名" :value="userInfo.nickName" @click="navClick(1)"/>
      <van-cell title="手机" :value="userInfo.mobile" @click="navClick(2)"/>
      <van-cell title="性别" :value="userInfo.userSex == 0 ? '女' : '男'" @click="navClick(3)"/>
      <!-- <van-cell title="邮箱" :value="userInfo.mailbox" @click="navClick(4)"/> -->
      <van-cell title="区域" :value="userInfo.address" @click="navClick(7)"/>
      <van-cell is-link @click="navClick(8)">
        <template slot="title">
          <span class="van-cell-text">修改密码</span>
        </template>
      </van-cell>
      <van-cell title="常用联系人" value="" @click="navClick(9)"/>
    </van-cell-group>
    <div class="cover" v-show="cityShow">
      <van-popup v-model="cityShow" position="bottom" :overlay="false">
        <div class="cell-title">
          <p class="confirm-icon" @click="confirmPop">确定</p>
          <van-icon
            slot="right-icon"
            name="close"
            class="custom-icon close-icon"
            @click="closePop"
          />
        </div>
        <van-picker :columns="columns" @change="onChange"/>
        <van-picker :columns="columns1" @change="onChange1"/>
        <van-picker :columns="columns2" @change="onChange2"/>
      </van-popup>
    </div>
    <van-dialog v-model="passWordShow" show-cancel-button :before-close="beforeClose">
      <div class="title">修改密码</div>
      <van-field v-model="oldPassword" label="旧密码" type="password" placeholder="请输入旧密码"/>
      <van-field v-model="newPassword" type="password" label="新密码" placeholder="请输入新密码"/>
      <van-field v-model="newPasswordAgain" type="password" label="重复新密码" placeholder="请再次输入新密码"/>
    </van-dialog>
    <van-dialog v-model="nickNameShow" show-cancel-button :before-close="beforeNickNameClose">
      <div class="title">修改昵称</div>
      <van-field v-model="newName" label="新昵称" placeholder="请输入新昵称"/>
    </van-dialog>
    <van-dialog v-model="sexShow" show-cancel-button :before-close="beforeSexClose">
      <div class="title">修改性别</div>
      <van-radio-group v-model="radio">
        <van-radio name="1">女士</van-radio>
        <van-radio name="2">先生</van-radio>
      </van-radio-group>
    </van-dialog>
  </div>
</template>

<script>
import getToken from "com/common/token";
import city from "com/common/city";
import Header from "../../common/Header2";
export default {
  name: "setting",
  components: {
    Header
  },
  data() {
    return {
      userInfo: {},
      oldPassword: "",
      newPassword: "",
      newName: "",
      newPasswordAgain: "",
      title: "设置",
      columns: [],
      columns1: [],
      columns2: [],
      columnsIndex: 1,
      columnsIndex1: null,
      columnsIndex2: null,

      image: "http://img1.whsxgcw.net/1547455388379.png",
      cityShow: false,
      passWordShow: false,
      nickNameShow: false,
      sexShow: false,
      radio: "1"
    };
  },
  methods: {
    init() {
      this.$http.post("appServiceUser/baseInfo").then(res => {
        if (res.msg == "success") {
          this.userInfo = res.data
          this.radio = res.data.userSex + 1 + ''
          this.image = res.data.headUrl
        }
      });
    },
    navClick(o) {
      if (o == 1) {
        this.nickNameShow = true;
      }
      if (o == 2) {
        this.$router.push('/accountPhone')
      }
      if (o == 3) {
        this.sexShow = true;
      }
      if (o == 4) {
        this.$router.push('/accountMail')
      }
      if (o == 7) {
        this.cityShow = true;
      }
      if (o == 8) {
        this.passWordShow = true;
      }
      if (o == 9) {
        this.$router.push('/personList')
      }
    },
    beforeClose(action, done) {
      if (action === "confirm") {
        if (
          this.oldPassword !== "" &&
          this.newPassword !== "" &&
          this.newPasswordAgain !== ""
        ) {
          if (this.oldPassword !== this.newPassword) {
            if (this.newPasswordAgain == this.newPassword) {
              this.$http
                .post("appServiceUser/changePassword", {
                  newpwd: this.newPassword,
                  oldpwd: this.oldPassword
                })
                .then(res => {
                  if (res.msg == "success") {
                    this.$toast(res.info);
                    this.init()
                  }
                  setTimeout(done, 1000);
                });
            } else {
              this.$toast("两次输入新密码不一致");
            }
          } else {
            this.$toast("新密码和旧密码不能相同");
          }
        } else {
          this.$toast("请仔细填写密码");
        }
      } else {
        done();
      }
    },
    beforeNickNameClose(action, done) {
      if (action === "confirm") {
        if (this.newName !== "") {
          if (this.newName !== this.userInfo.nickName) {
            this.$http
              .post("appServiceUser/updateUserinfo", {
                nickName: this.newName
              })
              .then(res => {
                if (res.msg == "success") {
                  this.$toast(res.info);
                    this.init()
                }
                setTimeout(done, 1000);
              });
          } else {
            this.$toast("新昵称和旧昵称不能相同");
          }
        } else {
          this.$toast("请填写新昵称");
        }
      } else {
        done();
      }
    },
    beforeSexClose(action, done) {
      if (action === "confirm") {
        this.$http
          .post("appServiceUser/updateUserinfo", {
            userSex: this.radio - 0 - 1
          })
          .then(res => {
            if (res.msg == "success") {
              this.$toast(res.info);
              this.init()
            }
            setTimeout(done, 1000);
          });
      } else {
        done();
      }
    },
    uploadimg(e) {
      //图片上传
      let file = e.target.files[0];
      let imgSize = file.size / 1024 / 1024; //mb
      let fileType = file.name
        .substring(file.name.lastIndexOf(".") + 1, file.name.length)
        .toLocaleLowerCase();
      let params = new FormData(); //创建form对象
      let timestamp = new Date().getTime();
      let Atanisi = Math.floor(Math.random() * 999999);
      let newName = timestamp + Atanisi + "." + fileType;
      params.append("key", newName);
      if (
        fileType != "jpg" &&
        fileType != "bmp" &&
        fileType != "png" &&
        fileType != "jpeg"
      ) {
        this.$toast("上传图片格式不正确");
        return false;
      }
      if (imgSize > 10) {
        this.$toast("上传的图片不得大于10MB");
        return false;
      }
      let Token = getToken.genUpToken(2, newName);
      params.append("token", Token);
      params.append("file", file);
      let config = {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      };
      let url = getToken.niuUrl[1];
      this.$http
        .postImg("https://upload.qiniu.com/", params, null, null, config)
        .then(response => {
          this.$http
            .post("appServiceUser/updateUserinfo", {
              headUrl: url + response.key
            })
            .then(res => {
              if (res.msg == "success") {
                this.$toast(res.info);
                this.image = url + response.key;
                this.init();
              }
            });
        });
    },
    confirmPop() {
      var name = "";
      if (this.columnsIndex) {
        name += this.columns[this.columnsIndex - 1];
      }
      if (this.columnsIndex1) {
        name += "/" + this.columns1[this.columnsIndex1 - 1];
      }
      if (this.columnsIndex2) {
        name += "/" + this.columns2[this.columnsIndex2 - 1];
      }
      this.$http
        .post("appServiceUser/updateUserinfo", { address: name })
        .then(res => {
          if (res.msg == "success") {
            this.$toast(res.info);
            this.closePop();
            this.init();
          }
        });
    },
    closePop() {
      this.cityShow = false;
    },
    // 所在地区
    onChange(picker, value, index) {
      this.columnsIndex = index + 1;
      this.columnsIndex1 = null;
      this.columnsIndex2 = null;
      this.columns1 = [];
      this.columns2 = [];
      if (this.area[index].province.cities) {
        this.area[index].province.cities.forEach((item, index) => {
          this.columns1.push(item.cityName);
        });
      }
      if (this.columns1.length > 0) {
        this.columnsIndex1 = 1;
      }
    },
    onChange1(picker, value, index) {
      this.columnsIndex1 = index + 1;
      this.columnsIndex2 = null;
      this.columns2 = [];
      if (this.area[this.columnsIndex - 1].province.cities[index].areas) {
        this.area[this.columnsIndex - 1].province.cities[index].areas.forEach(
          (item, index) => {
            this.columns2.push(item.areaName);
          }
        );
      }
      if (this.columns2.length > 0) {
        this.columnsIndex2 = 1;
      }
    },
    onChange2(picker, value, index) {
      this.columnsIndex2 = index + 1;
    }
  },
  computed: {},
  created: function() {
    this.init();
    this.area = city;
    this.columns = [];
    city.forEach(element => {
      const item = element.province.provinceName;
      this.columns.push(item);
    });
    if (this.area[0].province.cities.length > 0) {
      this.area[0].province.cities.forEach((item, index) => {
        this.columns1.push(item.cityName);
      });
      this.columnsIndex1 = 1;
    }
    if (this.area[0].province.cities[0].areas.length > 0) {
      this.area[0].province.cities[0].areas.forEach((item, index) => {
        this.columns2.push(item.areaName);
      });
      this.columnsIndex2 = 1;
    }
  },
  mounted: function() {}
};
</script>
<style scoped lang="less" type="text/less">
.setting {
  padding-top: 0.92rem;
  .setting-header {
    padding: 0.2rem;
    text-align: center;
    img {
      width: 1.8rem;
      height: 1.8rem;
      display: block;
      margin: 0 auto 0.1rem;
      border-radius: 50%;
      border: #696a7f 0.02rem solid;
    }
    .name {
      position: relative;
      font-size: 0.26rem;
      border-radius: 0.08rem;
      border: 0.01rem #686868 solid;
      display: inline-block;
      padding: 0.06rem 0.16rem;
    }
  }

  input.changeImg {
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
  .title {
    font-size: 0.32rem;
    text-align: center;
    padding: 0.3rem;
    border-bottom: 0.01rem solid #f4f4f4;
  }
  .van-picker {
    width: 33.333%;
    float: left;
  }
  .cover {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
  }
  .cell-title {
    padding: 0.3rem;
  }
  .confirm-icon {
    color: #3979f5;
    font-size: 0.3rem;
    float: right;
  }
  .close-icon {
    display: inline-block;
    font-size: 0.4rem;
    color: #bababc;
  }
  .van-radio-group {
    padding: 0.2rem;
    box-sizing: border-box;
    text-align: center;
  }
  .van-radio {
    width: 40%;
    padding: 0.2rem 0;
    display: inline-block;
  }
}
</style>