<template src="./Login.html"></template>
<style lang="sass" scoped>
  @import './Login.scss'
</style>
<script>
import { logIn } from '@/services/LoginService'

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
        // eslint-disable-next-line
        console.log('login action success')
        if (response) {
          this.$router.push('/')
        } else {
          console.log('Something went wrong!')
        }
      } catch (error) {
        // eslint-disable-next-line
        console.log(error)
      }
    }
  }
}
</script>
