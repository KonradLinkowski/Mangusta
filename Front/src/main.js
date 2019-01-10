import Vue from 'vue'
import Vuex from 'vuex'
import Notifications from 'vue-notification'

import App from './App.vue'
import { router } from './router'
import store from './store'

Vue.use(Vuex)
Vue.use(Notifications)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
