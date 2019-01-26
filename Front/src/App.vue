<template >
  <section id="app">
    <section id='ToolBar' v-bind:style="{ visibility: isShown }">
      <router-link class='float-left' to="/"><img src="./assets/mongoose_256.png" class="logo" alt="Mongoose logo" /></router-link>
      <router-link class='float-right' to="/addproduct"><span class='router-link'>Add product</span></router-link>
      <router-link class='float-right' to="/cart"><span class='router-link'>Cart</span></router-link>
      <router-link class='float-right' to="/settings"><span class='router-link'>Settings</span></router-link>
      <router-link class='float-right' to="/login"><span class='router-link'>Login</span></router-link>
    </section>
    <div class='clear'></div>
    <section class="router-view">
      <router-view></router-view>
    </section>
    <Footer></Footer>
    <notifications group="product" />
  </section>
</template>

<script>
import Footer from './components/Footer/Footer'

export default {
  data: function () {
    return {
      isShown: 'hidden'
    }
  },
  components: {
    Footer
  },
  methods: {
    toolBarDisplay: function () {
      if (localStorage.getItem('mongoose-user') && localStorage.getItem('mongoose-token')) {
        this.isShown='visible'
      } else {
        this.isShown = 'hidden'
      }
    }
  },
  mounted() {
    this.toolBarDisplay()
  },
  updated() {
    this.toolBarDisplay()
  },
}
</script>

<style>
  @import './styles/styles.css'
</style>
