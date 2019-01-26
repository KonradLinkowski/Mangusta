<template src='./UserProductList.html'></template>
<style lang='sass' scoped>
  @import './UserProductList.scss'
</style>
<script>
import Product from '../Product/Product'
import { getProductList } from '@/services/ProductService'
export default {
  /* eslint-disable */
  components: { Product },
  data: function() {
    return {
      productList: [],
      searchTerm: '',
      category: [],
      priceMin: '',
      priceMax: ''
    }
  },
  created: async function () {
    try {
      // const user = JSON.parse(localStorage.getItem('mongoose-user'))
      this.productList = await getProductList('', '', '', [], JSON.parse(localStorage.getItem('mongoose-user')).id)
    } catch (error) {
      console.log(error)
    }
  }
}
/* eslint-enable */
</script>
