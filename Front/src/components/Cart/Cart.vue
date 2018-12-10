<template src="./Cart.html"></template>
<style lang="sass" scoped>
  @import './Cart.scss'
</style>
<script>
import Product from '../Product/Product'
export default {
  components: { Product },
  computed: {
    productList() {
      return this.$store.getters['cart/list']
    }
  },
  methods: {
    removeFromCart(product) {
      this.$store.dispatch('cart/removeFromCart', product)
    }
  }
}
</script>
