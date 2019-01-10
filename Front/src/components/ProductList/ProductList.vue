<template src="./ProductList.html"></template>
<style lang="sass" scoped>
  @import './ProductList.scss'
</style>
<script>
import Product from '../Product/Product'
export default {
  components: { Product },
  data() {
    return {
      productList: [],
      searchTerm: "",
      category: [],
      priceMin: "",
      priceMax: ""
    }
  },
  created: function () { this.getProductList(this.searchTerm) },
  methods: {
    search: function (event) {
      event && this.getProductList(this.searchTerm, this.priceMin, this.priceMax)
    },
    getProductList: function (searchTerm = "", priceMin = "", priceMax = "", category = []) {
      let query = ''
      if (searchTerm || priceMin || priceMax || category.length) {
        searchTerm && (query += `search=${searchTerm}&`)
        priceMin && (query += `priceMin=${priceMin}&`)
        priceMax && (query += `priceMax=${priceMax}&`)
        category && (query += `category=${category}&`)
        query = query.substring(0, query.length - 1)
      }
      fetch(`http://localhost:3000/product/${query}`, {
        method: 'GET',
        headers: { 'Access-Control-Allow-Origin': 'http://localhost:3000/' }
      })
      .then(response => response.json())
      .then(json => {
        this.productList = json
        console.log('Product list:\n', this.productList)
      })
      .catch(error => console.log(error))
    }
  }
}
</script>
