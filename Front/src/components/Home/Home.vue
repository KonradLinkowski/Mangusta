<template src="./Home.html"></template>
<style scoped lang="sass">
  @import './Home.scss'
</style>
<script>
import ProductList from '../ProductList/ProductList'
export default {
  components: {
    ProductList
  },
  data() {
    return {
      productList: [{
        id:1,
        title: 'Todo A',
        project: 'Project A',
        done: false,
      }, {
        id:2,
        title: 'Todo B',
        project: 'Project B',
        done: true,
      }, {
        id:3,
        title: 'Todo C',
        project: 'Project C',
        done: false,
      }, {
        id:4,
        title: 'Todo D',
        project: 'Project D',
        done: false,
      }]
    }
  }
}
</script>