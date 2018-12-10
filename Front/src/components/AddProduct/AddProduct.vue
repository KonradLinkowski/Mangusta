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
        price: 0.01,
        quantity: 1
      },
      tags: []
    }
  },
  methods: {
    async createProduct() {
      if (this.validateProduct(this.product)) {
        try {
          await createProduct(this.product)
          this.$notify(productAddSuccess)
        } catch (err) {
          this.$notify(productAddError)
        }
      } else {
        this.$notify(productAddError)
      }
    },
    validateProduct(prod) {
      if (Number.isNaN(Number(prod.price))) {
        return false
      }
      if (!prod.price.toString().split('.')[1].lenght === 2) {
        return false
      }
      if (!Number.isInteger(prod.quantity)) {
        return false
      }
      if (prod.name.lenght !== 0) {
        
      }
    }
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
