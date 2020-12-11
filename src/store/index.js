import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },
  getters: {
    getData: state => {
      return state.data
    }
  },
  mutations: {
    setData (state, n) {
      state.data = n
    }
  },
  actions: {
    SAVE_TODO: async (context, payload) => {
      context.commit('setData', payload);
    },
  },
  modules: {
  }
})
