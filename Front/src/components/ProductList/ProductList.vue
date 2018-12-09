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
      category: []
    }
  },
  created: function () {
    this.searchFromDB(this.searchTerm)
  },methods: {
    search: function (event) {
      // `event` is the native DOM event
      if (event) {
        this.searchFromDB(this.searchTerm)
      }
    }, searchFromDB: function(searchTerm = "", category = ["product"]) {
      fetch(
        `http://localhost:3000/product/?search=${searchTerm}&category=${category}`, {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000/'
        }
      })
        .then(response => response.json())
        .then(json => {
          this.productList = json
          console.log(this.productList)
        })
        .catch(err => console.log(err))
    }
  }
}
</script>
