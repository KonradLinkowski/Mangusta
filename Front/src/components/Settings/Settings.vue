<template src="./Settings.html"></template>
<style lang="sass" scoped>
  @import './Settings.scss'
</style>
<script>
import { updateUser } from '@/services/UserService'

/* eslint-disable */
export default {
  data: function () {
    return {
      login: '',
      email: '',
      id: null
    }
  },
  methods: {
    async getData () {
      try {
        let user = JSON.parse(localStorage.getItem('mongoose-user'))
        console.log(user)
        if (user && user.id) {
          this.login = user.login
          this.email = user.email
          this.id = user.id
        } else { console.log(':<') }
      } catch (error) {
        console.log(error)
      }
    },
    async updateData () {
      if (this.login && this.email) {
        try {
          let data = {
            login: this.login,
            email: this.email
          }
          let user = await updateUser(this.id, data)
          localStorage.removeItem('mongoose-user')
          localStorage.setItem('mongoose-user', data)
        } catch (error) {
          console.log(error)
        }
      } else { console.log('Fill all the form fields!') }
    }
  },
  created: function () {
    this.getData()
  }
}
/* eslint-enable */
</script>
