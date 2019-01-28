import { backendAddress, protocol } from '../assets/dictionary'
import axios from 'axios'
import { router } from '../router'

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
    let response = await axios.post(`${protocol}://${backendAddress}/auth/login`, { "username": login, "password": password })
    console.log(response)
    localStorage.setItem('mongoose-token', response.data['x-auth-token'])
    localStorage.setItem('mongoose-user', response.data.user)
    router.push('/')
    return true
  }
}

export const logInCheck = async () => {
  const token = localStorage.getItem('mongoose-token')
  if (!token || !localStorage.getItem('mongoose-user')) {
    logOut()
    return false
  } else {
    return true
    // try {
    //   let response = await axios.post(`${protocol}://${backendAddress}/auth/login`, getHeaders())
    //   console.log(response)
    //   localStorage.setItem('mongoose-item', response.headers['x-auth-token'])
    //   localStorage.setItem('mongoose-user', JSON.stringify(response.data))
    //   return true
    // } catch (error) {
    //   console.log('Login check error: ', error)
    //   logOut()
    //   return false
    // }
  }
}

export const register = async (data) => {
  try {
    let response = await axios.post(`${protocol}://${backendAddress}/auth/register`, data, getHeaders())
    router.push('/login')
    console.log('register response: ', response)
    return response.data
  }
  catch (error) {
    console.log('register action error: ', error)
    return {}
  }
}

export const logOut = async () => {
  tokenRemoveHandler()
  router.push('/login')
  try {
    let response = await axios.post(`${protocol}://${backendAddress}/auth/logout`)
    console.log('log out response: ', response)
  } catch (error) {
    console.log('log out error: ', error)
  }
}

/*eslint-enable*/