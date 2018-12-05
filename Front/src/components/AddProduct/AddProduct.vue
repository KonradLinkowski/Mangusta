<template src="./AddProduct.html"></template>
<style scoped lang="sass">
  @import './AddProduct.scss'
</style>
<script>
import { productAddSuccess, productAddError, serverError } from '@/assets/notifications'
import { getTags, createProduct } from '@/services/api'
export default {
  data() {
    return {
      product: {
        tags: [],
        name: '',
        description: '',
        price: 0,
        quantity: 0
      },
      tags: []
    }
  },
  methods: {
    async createProduct() {
      try {
        await createProduct(this.product)
        this.$notify(productAddSuccess)
      } catch (err) {
        this.$notify(productAddError)
      }
    },
  },
  mounted() {
    getTags()
    .then(tags => {
      this.tags = tags
    })
    .catch(err => {
      this.$notify(serverError)
    })
  }
}
</script>
