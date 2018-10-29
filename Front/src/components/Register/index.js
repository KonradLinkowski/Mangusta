import Vue from 'vue'
import Register from './component/Register.vue'

export default Register

new Vue({
  el: '#Register',
  render: h => h(Register)
}).$mount('#Register')