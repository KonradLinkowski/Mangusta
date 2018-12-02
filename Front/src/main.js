import Vue from 'vue'
import Notifications from 'vue-notification'

import App from './App.vue'
import store from './store'
import router from './router'

Vue.use(Notifications)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})