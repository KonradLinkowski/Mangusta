<template >
  <section id="app">
    <section id='ToolBar' v-bind:style="{ visibility: isShown }">
      <router-link class='float-left' to="/"><span class='router-link' style='padding: 0;'>
        <img src="./assets/mongoose_256.png" class="logo" alt="Mongoose logo" />
      </span></router-link>
      <a class='float-right' v-on:click.stop="logUserOut"><span class='router-link menu-icon' id='icon_user'>
      </span></a>
      <router-link class='float-right' to="/settings"><span class='router-link menu-icon' id='icon_settings'>
      </span></router-link>
      <router-link class='float-right' to="/cart">
        <span v-bind:style="{ display: cartEmptyDisplay }" class='router-link menu-icon' id='icon_cart_empty'></span>
      </router-link>
      <router-link class='float-right' to="/cart">
        <span v-bind:style="{ display: cartFullDisplay }" class='router-link menu-icon' id='icon_cart_full'></span>
      </router-link>
      <router-link class='float-right' to="/userproductlist"><span class='router-link menu-icon' id='icon_checklist'>
      </span></router-link>
      <router-link class='float-right' to="/addproduct"><span class='router-link menu-icon' id='icon_add'>
      </span></router-link>
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
import { logOut } from './services/LoginService'

export default {
  data: function () {
    return {
      isShown: 'hidden',
      cartFullDisplay: 'none',
      cartEmptyDisplay: 'block'
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
    },
    logUserOut: function () {
      console.log('clicked!')
      logOut()
    }
  },
  mounted() {
    this.toolBarDisplay()
  },
  updated() {
    this.toolBarDisplay()
  }
}
</script>

<style>
  @import './styles/styles.css'
</style>
