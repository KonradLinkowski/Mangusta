<template src="./Settings.html"></template>
<style lang="sass" scoped>
  @import './Settings.scss'
</style>
<script>
import { getUser, updateUser } from '@/services/UserService'

export default {
  data: function () {
    return {
      login: '',
      email: '',
      password: '',
      newPassword: ''
    }
  },
  methods: {
    async getData () {
      try {
        let user = await getUser(localStorage.getItem('mongoose-user').id)
        this.login = user.login
        this.email = user.email
      } catch (error) {
        console.log(error)
      }
    }
  },
  created: function () {
    this.getData()
  }
}
</script>
