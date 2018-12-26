<template>
  <div class="specil">
    <div class="top">
      <div class="left">
        <p>{{specil}}</p>
        <p>{{recommend}}</p>
      </div>
    </div>
    <div class="content">
      <div class="con_top">
        <img :src="imgSrc" alt="">
        <p><span>{{name}}</span></p>
      </div>
      <div class="con_bot">
        <ul v-for="(item,index) in list">
          <li>
            <img :src="item.imgSrc" alt="">
            <p>
              {{item.name}}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "specil",
    data() {
      return {
        specil: "特色",
        recommend: "推荐",
        imgSrc: "http://07.imgmini.eastday.com/mobile/20180302/b293c7af30c8a9eba71d44fe49d21cbc.jpeg",
        name: "还原农村的诗意还原农村的诗意还原农村的诗意还原农村的诗意还原农村的诗意",
        list: [
          {
            goodsID: 2, imgSrc: "http://07.imgmini.eastday.com/mobile/20180302/b293c7af30c8a9eba71d44fe49d21cbc.jpeg"
            , name: "还原农村的诗意还原农村的诗意还原农村的诗意还原农村的诗意还原农村的诗意",
          },
          {
            goodsID: 3, imgSrc: "http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg"
            , name: "还原农村的诗意还原农村的诗意还原农村的诗意还原农村的诗意还原农村的诗意",
          },
          {
            goodsID: 4,
            imgSrc: "http://img.idol001.com/origin/2017/06/20/36a6298c214e4cb4784ef0c5494428801497949779.jpg"
            ,
            name: "还原农村的诗意还原农村的诗意还原农村的诗意还原农村的诗意还原农村的诗意",
          },

        ]
      }
    },
    methods: {
      onChange() {

      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../style/public.less";

  .specil {
    padding: 0.4rem 0.3rem 0.5rem 0.32rem;
    border-bottom: 0.01rem solid #e6e6e6;
    .top {
      height: 0.75rem;
      width: 100%;
      .left {
        float: left;
        p {
          float: left;
          font-size: 0.35rem;
          font-weight: 600;
          &:nth-child(1) {
            color: #fd5c02
          }
          &:nth-child(2) {
            color: #000005
          }
        }
      }
    }
    .content {
      .con_top {
        position: relative;
        img {
          width: 100%;
          height: 2.8rem;
        }
        p {
          height: 0.61rem;
          line-height: 0.61rem;
          position: absolute;
          left: 0;
          bottom: 0.03rem;
          font-size: 0.25rem;
          color: #fff;
          background-color: rgba(0, 0, 0, 0.5);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
          span {
            margin-left: 0.18rem;
            margin-right: 0.3rem;
          }
        }
      }
      .con_bot {
        margin-top: 0.2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        ul {
          width: 30%;
          margin-right: 0.16rem ;
          &:last-child{
            margin-right: 0;
          }
          li {
            img{
              height: 1.73rem;
            }
            p{
              width: 100%;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              margin-top: 0.2rem;
            }
          }
        }
      }
    }
  }


</style>



