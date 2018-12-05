import axios from 'axios'

import { origin, protocol } from '../../assets/dictionary'

// import {
//   productAddSuccess,
//   productAddError,
//   productUpdateSuccess,
//   productUpdateError,
//   productDeleteSuccess,
//   productDeleteError,
//   serverError
// } from '../assets/notifications'

const req = axios.create({
  baseURL: `${protocol}://${origin}/product`,
})

// initial state
const state = {
  productList: []
}

// getters
const getters = {
  productList: (state) => {
    return state.productList
  }
}

// actions
const actions = {
  loadProducts ({ commit }, parameters) {
    req.get(parameters)
    .then(({ data }) => {
      commit()
    })
    .catch(err => {
      commit(err)
    })  
  }
}

// mutations
const mutations = {
  appendProductList (state, { chat }) {
    state.openedChats.push(chat)
  },
  removeChatBox(state, { chat }) {
    state.openedChats.splice(state.openedChats.findIndex(e => e == chat), 1)
  },
  fail (state, { chat }) {

  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}