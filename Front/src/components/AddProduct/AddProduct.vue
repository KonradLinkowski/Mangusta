<template src="./AddProduct.html"></template>
<style scoped lang="sass">
  @import './AddProduct.scss'
</style>
<script>
import { productAddSuccess, productAddError } from '@/assets/notifications'
import { getTagList } from '@/services/TagService'
import { addProduct } from '@/services/ProductService'

export default {
  data() {
    return {
      product: {
        category: [],
        name: '',
        description: '',
        price: 0.01,
        quantity: 1,
        userId: '5c4e31cb48deed083b14259b' // 'aaa' 'aaa'
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
          const result = await addProduct(this.product)
          // eslint-disable-next-line
          console.log(result)
          this.$notify(productAddSuccess)
          // this.$router.push({ name: `products/${result._id}` })
        } catch (err) {
          this.$notify(productAddError)
        }
      } else {
        this.$notify(productAddError)
      }
    },
    validateProduct () {
      const entries = Object.entries(this.$refs)
      return entries.reduce((p, ref) =>{
        if (!this.isValid(ref[0])) {
          // eslint-disable-next-line
          console.log(ref, 'is not valid')
          ref[1].classList.toggle('input-error', true)
          return false
        }
        ref[1].classList.toggle('input-error', false)
        return p && true
      }, true)
    },
    isValid (prop) {
      switch (prop) {
        case 'price':
          return !Number.isNaN(Number(this.product.price)) && this.product.price.toString().split('.')[1].length === 2
        case 'quantity':
          return Number.isInteger(Number(this.product.quantity))
        case 'name':
          return this.product.name.match(/^[^\s]+(\s+[^\s]+)*$/)
        default:
          return true
      }
    },
    async getTags () {
      // eslint-disable-next-line
      try { this.tags = await getTagList() } catch (error) { console.log(error) }
    },
    async getUserId () {
      let user = JSON.parse(localStorage.getItem('mongoose-user'))
      if(user && user._id) {
        this.userId = user._id
      }
    }
  },
  mounted() {
    this.getTags()
    this.getUserId()
  }
}
</script>
