import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import rights from './modules/rights'
import scores from './modules/scores'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    home,
    rights,
    scores
  },
  state: {
    userName: 'youtingting'
  },
  mutations: {
    selectNav (state, curPage) {
      state.curPage = curPage
    }
  }
})
