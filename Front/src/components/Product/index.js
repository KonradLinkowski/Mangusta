import Vue from 'vue'
import Product from './component/Product.vue'

export default Product

new Vue({
  el: '#Product',
  render: h => h(Product)
}).$mount('#Product')