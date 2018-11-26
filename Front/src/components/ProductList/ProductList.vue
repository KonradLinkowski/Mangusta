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
    console.log(this)

    fetch(`https://jsonplaceholder.typicode.com/todos/`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        vm.productList = json
        console.log('chuj', this.productList)
      })
      .catch(err => console.log(err))
  }
}
</script>
