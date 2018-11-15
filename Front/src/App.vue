<template >
  <section id="app">
    <section id='ToolBar'>
      <router-link class='float-left' to="/"><img src="./assets/mongoose_256.png" class="logo" alt="Mongoose logo" /></router-link>
      <router-link class='float-right' to="/settings"><span class='router-link'>Settings</span></router-link>
      <router-link class='float-right' to="/login"><span class='router-link'>Login</span></router-link>
    </section>
    <div class='clear'></div>
    <!-- <section class='storeShow'>
      <p>{{ counter }}</p>
      <p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </p>
    </section> -->
    <section class="router-view">
      <router-view></router-view>
    </section>
    <Footer></Footer>
  </section>
</template>

<script>
import Footer from './components/Footer/Footer'

export default {
  components: {
    Footer
  },
  // computed: {
  //   counter () { return this.$store.state.counter }
  // },
  // methods: {
  //   increment() {
  //     this.$store.commit('increment')
  //   },
  //   decrement() {
  //     this.$store.commit('decrement')
  //   }
  // },
}
</script>

<style>
  @import './styles/styles.css'
</style>
