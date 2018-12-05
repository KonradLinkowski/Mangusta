<template src="./Product.html"></template>
<style lang="sass" scoped>
  @import './Product.scss'
</style>
<script>
export default {
  computed: {
    date() {
      const d = this.product.date
      return `${ d.getFullYear() } - ${ d.getMonth() } - ${ d.getDate() }`
    }
  },
  props: {
    product: {
      // type: Object,
      validator(prod) {
        // if (typeof prod.price !== 'number') return false
        // if (typeof prod.name !== 'string') return false
        // if (typeof prod.index !== 'number') return false
        return true
      }
    }
  }
}
</script>
