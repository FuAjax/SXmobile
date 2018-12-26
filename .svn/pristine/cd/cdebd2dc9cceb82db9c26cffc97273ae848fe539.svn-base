import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
  userInfo:'' || JSON.parse(sessionStorage.getItem('userInfo')),
}
const mutations={
  userInfo(state,v){
    state.userInfo=v
  },
}

export default new Vuex.Store({
  state,
  mutations
})
