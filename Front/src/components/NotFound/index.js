import Vue from 'vue'
import NotFound from './component/NotFound.vue'

export default NotFound

new Vue({
  el: '#NotFound',
  render: h => h(NotFound)
}).$mount('#NotFound')