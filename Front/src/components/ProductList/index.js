import Vue from 'vue'
import ProductList from './component/ProductList.vue'

export default ProductList

new Vue({
  el: '#ProductList',
  render: h => h(ProductList)
}).$mount('#ProductList')