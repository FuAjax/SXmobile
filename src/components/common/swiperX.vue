
<template>
    <div ref="wrapper">
      <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroll',
  // 父子组件
  props: {
  },
  mounted() {
    setTimeout(() => {
      this.$nextTick(()=>{
        this._initScroll()
      })
    }, 20) 
  },
  methods: {
     // 初始化
    _initScroll() {
      this.$nextTick(() => {
        if (!this.$refs.wrapper) {
          return
        }
        let scroll = new BScroll(this.$refs.wrapper, {
            scrollX: true,
            click: true,
            // preventDefault: false,
            eventPassthrough: 'vertical',
            probeType: 2
        })
      })
    }
  },
  watch: {
  }
}
</script>
