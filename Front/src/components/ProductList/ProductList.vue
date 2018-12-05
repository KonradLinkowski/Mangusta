<template src="./ProductList.html"></template>
<style lang="sass" scoped>
  @import './ProductList.scss'
</style>
<script>
import axios from 'axios'
import InfiniteLoading from 'vue-infinite-loading'
import Product from '../Product/Product'
export default {
  data() {
    return {
      list: [],
      index: 0
    };
  },
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        this.list.push(...this.getNewList(10))
        $state.loaded()
      }, 1000)
    },
    getNewList(n) {
      return new Array(n).fill(0).map(() => {
        return {
          index: this.index++,
          name: Math.random().toString(),
          tags: ['avc', '23123', 'toyota'],
          date: new Date(),
          price: Math.round(Math.random() * 100) / 100
        }
      })
    }
  },
  mounted() {
    this.list.push(...this.getNewList(10))
  },
  components: {
    Product,
    InfiniteLoading
  }
}
</script>
