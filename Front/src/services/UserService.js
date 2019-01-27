import axios from 'axios'
import { backendAddress, protocol } from '../assets/dictionary'
import { getHeaders } from './LoginService'

/*eslint-disable*/
export const getUser = async (uuid) => {
  try {
    let response = await axios.get(`${protocol}://${backendAddress}/user/${uuid}`, getHeaders())
    return response.data
  }
  catch (error) {
    console.log(error)
    return {}
  }
}

export const addUser = async (data) => {
  try {
    let response = await axios.post(`${protocol}://${backendAddress}/user`, data, getHeaders())
    return response.data
  }
  catch (error) {
    console.log(error)
    return {}
  }
}

export const updateUser = async (uuid, data) => {
  try {
    let response = await axios.put(`${protocol}://${backendAddress}/user/${uuid}`, data, getHeaders())
    return response.data
  }
  catch (error) {
    console.log(error)
    return {}
  }
}

export const deleteUser = async (uuid) => {
  try {
    let response = await axios.delete(`${protocol}://${backendAddress}/user/${uuid}`, getHeaders())
    return response.data
  }
  catch (error) {
    console.log(error)
    return {}
  }
}
/*eslint-enable*/
