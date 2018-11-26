import Vue from 'vue'
import Router from 'vue-router'
// page components
import Home from '../components/Home/Home'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Settings from '../components/Settings/Settings'
import ProductList from '../components/ProductList/ProductList'
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
      path: '/products/products',
      name: 'product',
      component: Product
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '*',
      redirect: '404',
    }
  ]
})