<template >
  <section id="app">
    <section id='ToolBar' v-bind:style="{ visibility: isShown }">
      <router-link class='float-left' to="/"><span class='router-link' style='padding: 0;'>
        <img src="./assets/mongoose_256.png" class="logo" alt="Mongoose logo" />
      </span></router-link>
      <router-link class='float-right' to="/login"><span class='router-link'>
        <img src="./assets/user_yellow.png" class='menu-icon' alt="User icon --> log out link" />
      </span></router-link>
      <router-link class='float-right' to="/settings"><span class='router-link'>
        <img src="./assets/settings_yellow.png" class='menu-icon' alt="Settings icon" />
      </span></router-link>
      <router-link class='float-right' to="/cart"><span class='router-link'>
        <img src="./assets/cart_empty_yellow.png" class='menu-icon' alt="Cart icon" />
      </span></router-link>
      <router-link class='float-right' to="/userproductlist"><span class='router-link'>
        <img src="./assets/checklist_yellow.png" class='menu-icon' alt="User product list icon" />
      </span></router-link>
      <router-link class='float-right' to="/addproduct"><span class='router-link'>
        <img src="./assets/add_yellow.png" class='menu-icon' alt="Add product icon" />
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
