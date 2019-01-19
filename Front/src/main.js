import Vue from 'vue'
import Vuex from 'vuex'
import Notifications from 'vue-notification'

import App from './App.vue'
import { router } from './router'
import store from './store'
import { getProductList, getProduct, addProduct, updateProduct, deleteProduct } from '@/services/ProductService'
import { getTagList, getTag, addTag, updateTag, deleteTag } from '@/services/TagService'
import { getUser, addUser, updateUser, deleteUser } from '@/services/UserServive'

Vue.use(Vuex)
Vue.use(Notifications)

new Vue({
  el: '#app',
  store,
  router,
  getProductList, getProduct, addProduct, updateProduct, deleteProduct,
  getTagList, getTag, addTag, updateTag, deleteTag,
  getUser, addUser, updateUser, deleteUser,
  render: h => h(App)
})
