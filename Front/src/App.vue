<template >
  <section id="app">
    <section id='ToolBar' v-bind:style="{ visibility: isShown }">
      <router-link class='float-left' to="/"><span class='router-link' style='padding: 0;'>
        <img src="./assets/mongoose_256.png" class="logo" alt="Mongoose logo" />
      </span></router-link>
      <router-link class='float-right' to="/login"><span class='router-link menu-icon' id='icon_user'>
      </span></router-link>
      <router-link class='float-right' to="/settings"><span class='router-link menu-icon' id='icon_settings'>
      </span></router-link>
      <router-link class='float-right' to="/cart"><span class='router-link menu-icon' id='icon_cart'>
      </span></router-link>
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
