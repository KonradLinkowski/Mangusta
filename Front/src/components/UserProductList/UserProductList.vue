<template src='./UserProductList.html'></template>
<style lang='sass' scoped>
  @import './UserProductList.scss'
</style>
<script>
import Product from '../Product/Product'
import { getProductList } from '@/services/ProductService'
export default {
  /* eslint-disable */
  components: { Product },
  data: function() {
    return {
      productList: []
    }
  },
  created: function () { this.getUserProductList() },
  methods: {
    async getUserProductList () {
      // this try-catch is because user can save sth stupid (Not object) as mongoose-user in local storege
      try {
        const user = JSON.parse(localStorage.getItem('mongoose-user'))
        if(user && user.id) {
          try {
            this.productList = await getProductList('', '', '', [], JSON.parse(localStorage.getItem('mongoose-user')).id)
          } catch (error) {
            console.log('Get user product list error: ', error)
            this.productList = []
          }
        } else {
          console.log('There is no user around here!')
          // here should be logOut fnc ;)
        }
      } catch (error) {
        console.log('This error means you are trying to be sneaky: ', error)
      }
    }
  },
}
/* eslint-enable */
</script>
