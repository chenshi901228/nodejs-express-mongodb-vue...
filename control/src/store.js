import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import projectStore from './views/project/store/projectStore'
import newsStore from './views/news/store/newsStore'

export default new Vuex.Store({
  modules: {
    project: projectStore,
    news:newsStore
  }
})
