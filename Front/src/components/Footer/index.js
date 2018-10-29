import Vue from 'vue'
import Footer from './component/Footer.vue'

export default Footer

new Vue({
  el: '#Footer',
  year: (new Date()).getFullYear(),
  render: h => h(Footer)
}).$mount('#Footer')