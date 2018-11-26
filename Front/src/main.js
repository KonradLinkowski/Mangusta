import Vue from 'vue'
import Vuex from 'vuex'
import Notifications from 'vue-notification'

import App from './App.vue'
import router from './router'

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
  store,
  router,
  render: h => h(App)
})

// new Vue({
//   el: '#productList',
//   data: {
//     productList: []
//   },
//   created: () => {
//     var vm = this
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(function (response) {
//       return response.json()
//     })
//     .then(function (data) {
//       vm.productList = data
//     })
//   }
// })