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
    clear(e) {
      e.target.classList.toggle('input-error', false)
    },
    async createProduct(e) {
      e.preventDefault()
      if (this.validateProduct(this.product)) {
        try {
          const result = await createProduct(this.product)
          this.$notify(productAddSuccess)
          this.$router.push({ name: 'products/id', params: { id: result._id } })
        } catch (err) {
          this.$notify(productAddError)
        }
      } else {
        this.$notify(productAddError)
      }
    },
    validateProduct(prod) {
      const entries = Object.entries(this.$refs)
      return entries.reduce((p, ref) =>{
        if (!this.isValid(ref[0])) {
          console.log(ref, 'is not valid')
          ref[1].classList.toggle('input-error', true)
          return false
        }
        return p && false
      }, true)
    },
    isValid(prop) {
      const prod = this.product
      switch (prop) {
        case 'price':
        return !Number.isNaN(Number(prod.price)) && prod.price.toString().split('.')[1].length === 2
        case 'quantity':
        return Number.isInteger(prod.quantity)
        case 'name':
        return prod.name.length !== 0
        case 'description':
        return prod.description.length !== 0
        case 'tags':
        return prod.tags.length !== 0
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
