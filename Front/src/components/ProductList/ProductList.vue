<template src="./ProductList.html"></template>
<style lang="sass" scoped>
  @import './ProductList.scss'
</style>
<script>
import Product from '../Product/Product'
import { getProductList } from '@/services/ProductService'
import { productUpdateError, serverError } from '@/assets/notifications'
export default {
  components: { Product },
  data: function() {
    return {
      productList: [],
      searchTerm: "",
      category: [],
      priceMin: "",
      priceMax: ""
    }
  },
  created: function() {
    this.search()
  },
  methods: {
    async search (event) {
        try {
          this.productList = await getProductList(this.searchTerm, this.priceMin, this.priceMax, this.category)
        } catch (error) {
          console.log(error)
        }
      }
  }
}
</script>
