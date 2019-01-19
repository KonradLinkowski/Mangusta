import axios from 'axios'
import { origin, protocol } from '@/assets/dictionary'

/*eslint-disable*/
export const getTagList = async () => {
  try {
    let response = await axios.get(`${protocol}://${origin}/tag`)
    return response.data
  }
  catch (error) {
    console.log(error)
    return []
  }
}


export const getTag = async (uuid) => {
  try {
    let response = await axios.get(`${protocol}://${origin}/tag/${uuid}`)
    return response.data
  }
  catch (error) {
    console.log(error)
    return {}
  }
}

export const addTag = async (data) => {
  try {
    let response = await axios.post(`${protocol}://${origin}/tag/`, data)
    return response.data
  }
  catch (error) {
    console.log(error)
  }
}

export const updateTag = async (uuid, data) => {
  try {
    let response = await axios.put(`${protocol}://${origin}/tag/${uuid}`, data)
    return response.data
  }
  catch (error) {
    console.log(error)
  }
}

export const deleteTag = async (uuid) => {
  try {
    let response = await axios.delete(`${protocol}://${origin}/tag/${uuid}`)
    return response.data
  }
  catch (error) {
    console.log(error)
  }
}
/*eslint-enable*/
