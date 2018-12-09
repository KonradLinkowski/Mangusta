const state = {
  cart: []
}

const getters = {
  list: state => {
    return state.cart
  }
}

const mutations = {
  addToCart(state, product) {
    state.cart.push(product)
  } 
}

const actions = {
  addToCart({ commit }, product) {
    commit('addToCart', product)
  }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}