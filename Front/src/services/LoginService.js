import { origin, protocol } from '@/assets/dictionary'
import axios from 'axios'
import {
  logInSuccess,
  logInError,
  // logOutSuccess,
  // logOutError
} from '@/assets/notifications'

/*eslint-disable*/
export const logIn = async function (login, password) {
  if (!login ||
    !password ||
    !login.match(/^[a-zA-Z]+$/) ||
    !password.match(/^[a-zA-Z0-9]+$/)) {
    this.$notify(logInError)
    console.log('Log in error')
    return
  } else {
    let hash = `${login}:${password}`.toString('base64')
    let response = await axios.post(`${protocol}://${origin}/auth/login`, null, { 'Authorization': `Basic ${hash}` })
    this.$notify(logInSuccess)
  }
}
/*eslint-enable*/