<template>
  <div>
    <ul
      v-waterfall-lower="loadMore"
      waterfall-disabled="disabled"
      waterfall-offset="1"
    >
      <li v-for="item in list">{{ item.spot }}</li>
    </ul>
  </div>
</template>

<script>
  import {Waterfall} from 'vant';

  export default {
    directives: {
      WaterfallLower: Waterfall('lower'),
      WaterfallUpper: Waterfall('upper')
    },
    name: "List",
    data() {
      return {
        list: [
          {
            goodsID: 1,
            src: '../../../static/images/slide_01.jpg',
            spot: '木兰天池',
            a: 'AAAAA级风景区',
            score: 4,
            yuan: 35,
          },
          {
            goodsID: 2,
            src: '../../../static/images/slide_01.jpg',
            spot: '木兰天池',
            a: 'AAAAA级风景区',
            score: 4,
            yuan: 35,
          }
        ],
        disabled: false,
      };
    },

    methods: {
      loadMore() {
        this.disabled = false;
        setTimeout(() => {
          for (let i = 0; i < 5; i++) {
            this.list.push(this.list.length);
          }
          this.disabled = false;
        }, 200);
      }
    }
  };

</script>

<style scoped lang="less" type="text/less">

</style>
