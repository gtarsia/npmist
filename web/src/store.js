import Vue from 'vue'
import Vuex from 'vuex'
import packages from './stores/packages'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    packages,
  },
})
