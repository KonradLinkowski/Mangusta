import Vue from 'vue'
import Home from './component/Home.vue'

export default Home

new Vue({
  el: '#Home',
  render: h => h(Home)
}).$mount('#Home')