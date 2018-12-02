import axios from 'axios'
import {
  productAddSuccess,
  productAddError,
  productUpdateSuccess,
  productUpdateError,
  productDeleteSuccess,
  productDeleteError,
  serverError
} from '../assets/notifications'

import { origin, protocol } from '../assets/dictionary'

export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST'
export const GET_PRODUCT = 'GET_PRODUCT'
export const UPDATE_PRODUCT_LIST = 'UPDATE_PRODUCT_LIST'

const getProductListAction = (data = undefined) => {
  return {
    type: GET_PRODUCT_LIST,
    data: data
  }
}

const getProductAction = (data = undefined) => {
  return {
    type: GET_PRODUCT,
    data: data
  }
}

const updateProductListAction = () => {
  return {
    type: UPDATE_PRODUCT_LIST
  }
}

export const getProductList = (type) => {
  return(dispatch) => {
    return new Promise(resolve => {
      axios.get(`${protocol}://${origin}/product/products&filter=type:${type}`)
      .then(response => {
        dispatch(getProductListAction(response.data))
        resolve()
      })
      .catch(error => {
        dispatch(this.$notify(serverError))
        resolve(error)
      })
    })
  }
}

export const getProduct = (type, uuid) => {
  return(dispatch) => {
    return new Promise(resolve => {
      axios.get(`${protocol}://${origin}/product/products/${uuid}&filter=type:${type}`)
      .then(response => {
        dispatch(getProductAction(response.data))
        resolve()
      })
      .catch(error => {
        dispatch(this.$notify(serverError))
        resolve(error)
      })
    })
  }
}

export const addProduct = (data) => {
  return(dispatch) => {
    return new Promise(resolve => {
      axios.get(`${protocol}://${origin}/product/products`, data)
      .then(response => {
        dispatch(updateProductListAction())
        dispatch(this.$notify(productAddSuccess))
        resolve(response)
      })
      .catch(error => {
        dispatch(this.$notify(productAddError))
        resolve(error)
      })
    })
  }
}

export const updateProduct = (uuid, data) => {
  return(dispatch) => {
    return new Promise(resolve => {
      axios.get(`${protocol}://${origin}/product/products/${uuid}`, data)
      .then(response => {
        dispatch(updateProductListAction())
        dispatch(this.$notify(productUpdateSuccess))
        resolve(response)
      })
      .catch(error => {
        dispatch(this.$notify(productUpdateError))
        resolve(error)
      })
    })
  }
}

export const deleteProduct = (uuid) => {
  return(dispatch) => {
    return new Promise(resolve => {
      axios.get(`${protocol}://${origin}/product/products/${uuid}`)
      .then(response => {
        dispatch(updateProductListAction())
        dispatch(this.$notify(productDeleteSuccess))
        resolve(response)
      })
      .catch(error => {
        dispatch(this.$notify(productDeleteError))
        resolve(error)
      })
    })
  }
}

const ACTION_HANDLERS = {
  [GET_PRODUCT_LIST]: (state, action) => {
    return {
      ...state,
      productList: action.data
    }
  },
  [GET_PRODUCT]: (state, action) => {
    return {
      ...state,
      product: action.data
    }
  },
  [UPDATE_PRODUCT_LIST]: (state) => {
    return {
      ...state,
      updateProductList: new Date()
    }
  }
}

const initialState = {
  productList: {},
  product: {}
}

export default function ProductService (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}