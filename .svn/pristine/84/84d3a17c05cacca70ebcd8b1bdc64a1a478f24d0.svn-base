<template>
  <div>
    <div class="topBar">
      <Header :title='title' :color='color' :isback='isback'/>
    </div>
    <Broker />
    <Message />
    <!--<Agent />-->
    <!--<Footer/>-->
  </div>
</template>

<script>
  import Header from '../../common/Header'
  import Footer from './components/footer'
  import Broker from './components/villagebroker'
  import Message from './components/villagemessage'
  import Agent from './components/Agent'

  export default {
    name: "villageOrder",
    data(){
      return{
        title: '预约看房',
        isback: true,
        color: '#FF6400',
        // 经纪人
        rows:[],
      }
    },
    components: {
      Header,
      Footer,
      Broker,
      Message,
      Agent
    },
    methods:{
    },
    created:function () {
    }
  }
</script>

<style scoped>

</style>
