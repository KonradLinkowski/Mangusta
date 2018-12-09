<template src="./ProductPage.html"></template>
<style lang="sass" scoped>
  @import './ProductPage.scss'
</style>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      product: null
    }
  },
  methods: {
    addToCart(productID) {
      // TODO add to cart
    },
    async loadProduct(productID) {
      try {
        this.product = (await axios.get(`http://localhost:3000/product/${ productID }`)).data
      } catch (e) {
        console.log(e)
      }
    }
  },
  watch: {
    '$route' (to, from) {
      this.loadProduct(to.params.id)
    }
  },
  async created() {
    await this.loadProduct(this.$route.params.id)
  }
}
</script>
