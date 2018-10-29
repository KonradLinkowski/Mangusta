import Vue from 'vue'
import Vuex from 'vuex'
import Notifications from 'vue-notification'

import App from './App.vue'
import Footer from './components/Footer'
import router from './router'

export default {
  components: {
    App,
    Footer
  }
}

Vue.use(Vuex)
Vue.use(Notifications)

const store = new Vuex.Store({
  // state: {
  //   counter: 0
  // },
  // mutations: {
  //   increment: (state) => { state.counter++ },
  //   decrement: (state) => { state.counter-- }
  // }
})

new Vue({
  el: '#app',
  components: {
    Footer
  },
  store,
  router,
  render: h => h(App)
}).$mount('#app')