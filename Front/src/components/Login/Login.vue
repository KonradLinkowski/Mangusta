<template src="./Login.html"></template>
<style lang="sass" scoped>
  @import './Login.scss'
</style>
<script>
import { logIn } from '@/services/LoginService'

/* eslint-disable */
export default {
  data () {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    async loginAction () {
      try {
        let response = await logIn(this.login, this.password)
        console.log('login action success')
        if (response) {
          this.$router.push('/')
        } else {
          console.log('Something went wrong!')
        }
      } catch (error) {
        console.log('Login catched error: ', error)
      }
    }
  }
}
/* eslint-enable */
</script>
