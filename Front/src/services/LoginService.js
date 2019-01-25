import { origin, protocol } from '@/assets/dictionary'
import axios from 'axios'

/*eslint-disable*/
export const getHeaders = async () => {
  let token = localStorage.getItem('mongoose-token')
  let user = localStorage.getItem('mongoose-user')

  if (token && user) {
    return { headers: { 'x-auth-token': token } }
  } else {
    tokenRemoveHandler()
    return ''
  }
}

export const tokenRemoveHandler = () => {
  localStorage.removeItem('mongoose-token')
  localStorage.removeItem('mongoose-user')
}

export const logIn = async (login, password) => {
  if (!login ||
    !password ||
    !login.match(/^[a-zA-Z]+$/) ||
    !password.match(/^[a-zA-Z0-9]+$/)) {
    console.log('Log in error')
    return false
  } else {
    const hash = `${login}:${password}`.toString('base64')
    let response = await axios.post(`${protocol}://${origin}/auth/login`, null, { 'Authorization': `Basic ${hash}` })
    console.log(response)
    localStorage.setItem('mongoose-item', response.headers['x-auth-token'])
    localStorage.setItem('mongoose-user', JSON.stringify(response.data))
    return true
  }
}

export const logOut = async () => {
  let response = await axios.post(`${protocol}://${origin}/auth/logout`)
  console.log(response)
  tokenRemoveHandler()
}

/*eslint-enable*/