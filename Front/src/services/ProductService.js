import axios from 'axios'
// import {
//   productAddSuccess,
//   productAddError,
//   productUpdateSuccess,
//   productUpdateError,
//   productDeleteSuccess,
//   productDeleteError,
//   serverError
// } from '@/assets/notifications'
// import { backendAddress, protocol } from '../assets/dictionary'
import { getHeaders } from './LoginService'

var backendAddress = 'localhost:3000'
var protocol = 'http'


// because of console logs
/*eslint-disable*/
export const getProductList = async (searchTerm = '', priceMin = '', priceMax = '', category = [], userId ='') => {
  let query = ''
  if (searchTerm || priceMin || priceMax || category.length) {
    query += '?'
    searchTerm && (query += `search=${searchTerm}&`)
    priceMin && (query += `priceMin=${priceMin}&`)
    priceMax && (query += `priceMax=${priceMax}&`)
    category.length && (query += `category=${category}&`)
    query = query.substring(0, query.length - 1)
  }
  userId && (backendAddress += `/user/${userId}`)
  try {
    let response = await axios.get(`${protocol}://${backendAddress}/product/${query}`, getHeaders())
    return response.data
  }
  catch (error) {
    console.log(error)
    return []
  }
}

export const getProduct = async (uuid) => {
  try {
    let response = await axios.get(`${protocol}://${backendAddress}/product/${uuid}`, getHeaders())
    return response.data
  }
  catch (error) {
    console.log(error)
    // this.$notify(serverError)
    return {}
  }
}

export const addProduct = async (data) => {
  try {
    let response = await axios.post(`${protocol}://${backendAddress}/product/`, data, getHeaders())
    // this.$notify(productAddSuccess)
    return response.data
  }
  catch (error) {
    console.log(error)
    // this.$notify(productAddError)
    return {}
  }
}

export const updateProduct = async (uuid, data) => {
  try {
    let response = await axios.put(`${protocol}://${backendAddress}/product/${uuid}`, data, getHeaders())
    // this.$notify(productUpdateSuccess)
    return response.data
  }
  catch (error) {
    console.log(error)
    // this.$notify(productUpdateError)
    return {}
  }
}

export const deleteProduct = async (uuid) => {
  try {
    let response = await axios.delete(`${protocol}://${backendAddress}/product/${uuid}`, getHeaders())
    // this.$notify(productDeleteSuccess)
    return response.data
  }
  catch (error) {
    console.log(error)
    // this.$notify(productDeleteError)
    return {}
  }
}
/*eslint-enable*/
