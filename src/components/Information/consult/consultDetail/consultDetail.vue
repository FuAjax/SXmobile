<template>
  <div>
    <div class="topBar" v-if="(!isapp)">
      <Header :title='title' :isback='isback'/>
    </div>
    <Top :consult="consult"/>
    <Require :consult="consult"/>
    <Question :newConsult="newConsult"/>
    <Link/>
  </div>
</template>

<script>
  import Header from "../../../common/Header2"
  import Link from "../../../common/Link"
  import Top from "./components/top"
  import Require from "./components/require"
  import Question from "./components/question"
  import methods from './m/methods'

  export default {
    name: "consultDetail",
    data() {
      return {
        consult: [],
        newConsult: [],
        isback:true,
        title: '咨询详情',
        // color: '#FF6400',
      }
    },
    components: {
      Header,
      Link,
      Top,
      Require,
      Question
    },
    methods: methods,
    created: function () {
      this.init()

    }
  }
</script>

<style scoped lang="less" type="text/less">

</style>
