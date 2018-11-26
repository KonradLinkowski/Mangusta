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
    var vm = this

    fetch(`https://jsonplaceholder.typicode.com/todos/`)
      .then(response => response.json())
      .then(json => {
        vm.productList = json
      })
      .catch(err => console.log(err))
  }
}
</script>
