const state = {
  cart: []
}

const getters = {
  list: state => {
    return state.cart
  },
  productsCost: (state) => {
    var sum = 0
    for (var i = 0; i < state.cart.length; i++)
    {
      sum += state.cart[i].price
    }
    return sum
  }
}

const mutations = {
  addToCart(state, product) {
    state.cart.push(product)
  },
  removeFromCart(state, index) {
      state.cart.splice(index, 1)
    }
}

const actions = {
  addToCart({ commit, state }, product) {
    const ind = state.cart.indexOf(product)
    if (ind === -1) {
      commit('addToCart', product)
    }
  },
  removeFromCart({ commit }, product) {
    const ind = state.cart.indexOf(product)
    if (ind !== -1) {
      commit('removeFromCart', ind)
    }
  }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
