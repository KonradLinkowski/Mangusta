import axios from 'axios'
import { origin, protocol } from '@/assets/dictionary'
import { getHeaders } from './LoginService'

/*eslint-disable*/
export const getTagList = async () => {
  try {
    let response = await axios.get(`${protocol}://${origin}/tag`, getHeaders())
    return response.data
  }
  catch (error) {
    console.log(error)
    return []
  }
}


export const getTag = async (uuid) => {
  try {
    let response = await axios.get(`${protocol}://${origin}/tag/${uuid}`, getHeaders())
    return response.data
  }
  catch (error) {
    console.log(error)
    return {}
  }
}

export const addTag = async (data) => {
  try {
    let response = await axios.post(`${protocol}://${origin}/tag/`, data, getHeaders())
    return response.data
  }
  catch (error) {
    console.log(error)
    return {}
  }
}

export const updateTag = async (uuid, data) => {
  try {
    let response = await axios.put(`${protocol}://${origin}/tag/${uuid}`, data, getHeaders())
    return response.data
  }
  catch (error) {
    console.log(error)
    return {}
  }
}

export const deleteTag = async (uuid) => {
  try {
    let response = await axios.delete(`${protocol}://${origin}/tag/${uuid}`, getHeaders())
    return response.data
  }
  catch (error) {
    console.log(error)
    return {}
  }
}
/*eslint-enable*/
