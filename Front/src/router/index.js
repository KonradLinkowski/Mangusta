import Vue from 'vue'
import Router from 'vue-router'
// page components
import Home from '../components/Home/Home'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Settings from '../components/Settings/Settings'
import ProductList from '../components/ProductList/ProductList'
import AddProduct from '../components/AddProduct/AddProduct'
import Product from '../components/Product/Product'
import NotFound from '../components/NotFound/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/products',
      name: 'products',
      component: ProductList
    },
    {
      path: '/addproduct',
      component: AddProduct
    },
    {
      path: '/products/:id',
      name: 'product',
      component: Product
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    { // don't know yet will it work, need to check it - the idea is "if !path -> go to 404 page"
      path: '*',
      redirect: '404',
    }
  ]
})