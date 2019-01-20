import { origin, protocol } from '@/assets/dictionary'
import axios from 'axios'
import {
  logInSuccess,
  logInError,
  logOutSuccess,
  logOutError
} from '@/assets/notifications'

export const logIn = async function (login, password) {
  if (!login ||
    !password ||
    !login.match(/^[a-zA-Z]+$/) ||
    !password.match(/^[a-zA-Z0-9]+$/)) {
    this.$notify(logInError)
    return
  } else {
    let hash = `${login}:${password}`.toString('base64')
    response = await axios.post(`${protocol}://${origin}/login`, null, { 'Authorization': `Basic ${hash}` })
    
  }
}