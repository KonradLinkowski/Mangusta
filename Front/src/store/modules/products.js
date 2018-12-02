import ProductService from '../../services'

// initial state
const state = {
    all: []
}

const getters = {}

const actions = {
    getAllProducts({ commit }) {
        ProductService.getProductList(products => {
            commit('setProducts', products)
        })
    }
}

const mutations = {
  setProducts (state, products) {
    state.all = products
  },

  decrementProductQuantity (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.quantity--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}