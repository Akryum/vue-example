import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state () {
    return {
      loading: 0,
    }
  },

  getters: {
    loading: state => state.loading > 0,
  },

  mutations: {
    loadingAdd (state) {
      state.loading++
    },

    loadingRemove (state) {
      state.loading--
    },
  },
})
