import Vue from 'vue'
import Vuex from 'vuex'
import Notifications from 'vue-notification'

import App from './App.vue'
import { router } from './router'
import store from './store'
import { getProductList, getProduct, addProduct, updateProduct, deleteProduct } from '@/services/ProductService'
// import {  } 

Vue.use(Vuex)
Vue.use(Notifications)

new Vue({
  el: '#app',
  store,
  router,
  getProductList, getProduct, addProduct, updateProduct, deleteProduct,
  render: h => h(App)
})
