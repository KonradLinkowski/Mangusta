import Vue from 'vue'
import Login from './component/Login.vue'

export default Login

new Vue({
  el: '#Login',
  render: h => h(Login)
}).$mount('#Login')