import axios from 'axios'
import { origin, protocol } from '@/assets/dictionary'

/*eslint-disable*/
export const getUser = async (uuid) => {
  try {
    let response = await axios.get(`${protocol}://${origin}/user/${uuid}`)
    return response.data
  }
  catch (error) {
    console.log(error)
    return {}
  }
}

export const addUser = async (data) => {
  try {
    let response = await axios.post(`${protocol}://${origin}/user/`, data)
    return response.data
  }
  catch (error) {
    console.log(error)
  }
}

export const updateUser = async (uuid, data) => {
  try {
    let response = await axios.put(`${protocol}://${origin}/user/${uuid}`, data)
    return response.data
  }
  catch (error) {
    console.log(error)
  }
}

export const deleteUser = async (uuid) => {
  try {
    let response = await axios.delete(`${protocol}://${origin}/user/${uuid}`)
    return response.data
  }
  catch (error) {
    console.log(error)
  }
}
/*eslint-enable*/
