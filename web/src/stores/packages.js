import { keyBy } from 'lodash'
import { npmSearch } from '@/api/npm'

export default {
  namespaced: true,
  state: {
    all: [],
    loading: false,
    byName: {},
  },
  mutations: {
    loading(state) {
      state.all = []
      state.loading = true
      state.byName = {}
    },
    all(state, all) {
      state.all = all
      state.loading = false
      state.byName = keyBy(all, 'name')
    },
  },
  actions: {
    async search({ commit }, s) {
      commit('loading')
      commit('all', await npmSearch(s))
    },
  },
  getters: {
    loading: ({ loading }) => loading,
    all: ({ all }) => all,
    ofName: ({ byName }) => (name) => byName[name],
  },
}
