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
  mounted () {
    // eslint-disable-next-line
    console.log('chuj')
  },
  methods: {
    async loginAction () {
      try {
        let response = await logIn(this.login, this.password)
        // eslint-disable-next-line
        console.log('login action success')
        localStorage.setItem('mongoose-token', response.headers['x-auth-token'])
        localStorage.setItem('mongoose-user', JSON.stringify(response.data))
      } catch (error) {
        // eslint-disable-next-line
        console.log(error)
      }
    }
  }
}
</script>
