<template src="./Home.html"></template>
<style scoped lang="sass">
  @import './Home.scss'
</style>
<script>
import ProductList from '../ProductList/ProductList'
import Product from '../Product/Product'
export default {
  components: {
    ProductList,
    Product
  },
  data() {
    return {
      product: {
        "userId": 1,
        "id": 1,
        "title": "Spawarka kątowa",
        "price": 10.00
      }
    }
  }
}
</script>