import axios from 'axios'
import {
  productAddSuccess,
  // productAddError,
  productUpdateSuccess,
  // productUpdateError,
  productDeleteSuccess,
  // productDeleteError,
  serverError
} from '@/assets/notifications'
import { origin, protocol } from '@/assets/dictionary'


// because of console logs
/*eslint-disable*/
export const getProductList = async (searchTerm = "", priceMin = "", priceMax = "", category = []) => {
  let query = ''
  if (searchTerm || priceMin || priceMax || category.length) {
    query += '?'
    searchTerm && (query += `search=${searchTerm}&`)
    priceMin && (query += `priceMin=${priceMin}&`)
    priceMax && (query += `priceMax=${priceMax}&`)
    category.length && (query += `category=${category}&`)
    query = query.substring(0, query.length - 1)
  }
  try {
    let response = await axios.get(`${protocol}://${origin}/product/${query}`)
    return response.data
  }
  catch (error) {
    console.log(error)
    this.$notify(serverError)
    return []
  }
}

export const getProduct = async (uuid) => {
  try {
    let response = await axios.get(`${protocol}://${origin}/product/${uuid}`)
    return response.data
  }
  catch (error) {
    console.log(error)
    this.$notify(serverError)
    return {}
  }
}

export const addProduct = async (data) => {
  try {
    await axios.post(`${protocol}://${origin}/product/`, data)
    this.$notify(productAddSuccess) }
  catch (error) {
    console.log(error)
    // this.$notify(productAddError)
  }
}

export const updateProduct = async (uuid, data) => {
  try {
    await axios.put(`${protocol}://${origin}/product/${uuid}`, data)
    this.$notify(productUpdateSuccess)
  }
  catch (error) {
    console.log(error)
    // this.$notify(productUpdateError)
  }
}

export const deleteProduct = async (uuid) => {
  try {
    await axios.delete(`${protocol}://${origin}/product/${uuid}`)
    this.$notify(productDeleteSuccess)
  }
  catch (error) {
    console.log(error)
    // this.$notify(productDeleteError)
  }
}
/*eslint-enable*/
