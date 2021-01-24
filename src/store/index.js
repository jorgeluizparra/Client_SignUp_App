import Vue from 'vue'
import Vuex from 'vuex'

// Import modules here
import clientModule from './modules/client'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    client: clientModule
  }
})
