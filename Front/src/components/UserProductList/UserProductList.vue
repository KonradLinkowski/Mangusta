<template src='./UserProductList.html'></template>
<style lang='sass' scoped>
  @import './UserProductList.scss'
</style>
<script>
import Product from '../Product/Product'
import { getProductList } from '@/services/ProductService'
export default {
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
    this.productList = await getProductList('', '', '', [], JSON.parse(localStorage.getItem('mongoose-user')).id)
  },
  methods: {
    async search () {
        try {
          this.productList = await getProductList(this.searchTerm, this.priceMin, this.priceMax, this.category)
        } catch (error) {
          // eslint-disable-next-line
          console.log(error)
        }
      }
  }
}
</script>
