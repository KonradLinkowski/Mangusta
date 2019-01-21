<template src="./UserProduct.html"></template>
<style scoped lang="sass">
  @import './UserProduct.scss'
</style>
<script>
import { getTagList } from '@/services/TagService'
import { getProduct, updateProduct, deleteProduct } from '@/services/ProductService'

/* eslint-disable */
export default {
  data() {
    return {
      product: {
        category: [],
        name: '',
        description: '',
        price: 0.00,
        quantity: 0
      },
      tags: [],
      id: 0
    }
  },
  props: ['id'],
  methods: {
    clear (e) { e.target.classList.toggle('input-error', false) },
    async updateAction () {
      try {
        const result = await updateProduct(this.id, this.product)
        console.log(result)
      } catch (error) {
        console.log(error)
      }
    },
    async deleteAction () {
      try {
        const result = await deleteProduct(this.id)
        console.log(result)
        $router.push('/')
      } catch (error) {
        console.log(error)
      }
    },
    async getTags () {
      try { this.tags = await getTagList() } catch (error) { console.log(error) }
    }
  },
  async created () {
    this.getTags()
    this.product = await getProduct('', '', '', [], this.id)
  }
}
/* eslint-enable */
</script>
