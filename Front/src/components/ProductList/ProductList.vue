<template src="./ProductList.html"></template>
<style lang="sass" scoped>
  @import './ProductList.scss'
</style>
<script>
import Product from '../Product/Product'
export default {
  components: Product,
  data() {
    return {
      productList: []
    }
  },
  created: function () {
    fetch(`http://localhost:3000/product/?size=10`, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000/product/'
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
</script>
