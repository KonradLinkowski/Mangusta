<template src="./ProductList.html"></template>
<style lang="sass" scoped>
  @import './ProductList.scss'
</style>
<script>
import Product from '../Product/Product'
import { getProductList } from './module/productlist'
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
    search: function(event) {
        this.productList = getProductList(this.searchTerm, this.priceMin, this.priceMax, this.category)
      }
  }
}
</script>
