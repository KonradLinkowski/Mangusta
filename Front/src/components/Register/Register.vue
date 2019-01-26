<template src="./Register.html"></template>
<style lang="sass" scoped>
  @import './Register.scss'
</style>
<script>
import { register } from '@/services/LoginService'

/* eslint-disable */
export default {
  data () {
    return {
      login: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  },
  methods: {
    async registerAction () {
      try {
        const user = {
          username: this.login,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        }
        const response = await register(user)
        console.log('here', response)
      } catch (error) {
        console.log('register error: ', error)
      }
    },
    // isUserValid () {
    //   !this.login.match(/$[a-zA-Z0-9]+^/) && (this.loginError = true)
    //   !this.email.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/) && (this.emailError = true)
    //   !this.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/) && (this.passwordError = true)
    // },
  }
}
/* eslint-enable */
</script>