import { origin, protocol } from '../assets/dictionary'
import axios from 'axios'
const request = axios.create({
  baseURL: `${protocol}://${origin}/`
})

export const getTags = () => {
  return new Promise((resolve, reject) => {
    request.get('tag')
    .then(({data}) => {
      resolve(data)
    })
    .catch(err => {
      reject(err)
    })
  })
}

export const createProduct = (product) => {
  return new Promise((resolve, reject) => {
    request.post('product', product)
    .then(({data}) => {
      resolve(data)
    })
    .catch(err => {
      reject(err)
    })
  })
}