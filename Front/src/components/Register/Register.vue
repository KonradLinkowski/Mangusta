<template src="./Register.html"></template>
<style lang="sass" scoped>
  @import './Register.scss'
</style>
<script>
import { addUser } from '@/services/UserService'

export default {
  data () {
    return {
      login: '',
      loginError: false,
      email: '',
      emailError: false,
      password: '',
      passwordError: false
    }
  },
  methods: {
    async registerAction () {
      try {
        const user = {
          login: this.login,
          email: this.email,
        }
        addUser({  })
        console.log('here')
      } catch (error) {
        // eslint-disable-next-line
        console.log(error)
      }
    },
    isUserValid () {
      !this.login.match(/$[a-zA-Z0-9]+^/) && (this.loginError = true)
      !this.email.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/) && (this.emailError = true)
      !this.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/) && (this.passwordError = true)

    }
  }
}
</script>