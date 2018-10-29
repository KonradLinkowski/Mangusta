import Vue from 'vue'
import Settings from './component/Settings.vue'

export default Settings

new Vue({
  el: '#Settings',
  render: h => h(Settings)
}).$mount('#Settings')