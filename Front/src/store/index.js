import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    product
  },
  strict: debug,
})