import Vue from 'vue'
import Router from 'vue-router'
// import { logInCheck } from '../services/LoginService'
// page components
import Home from '../components/Home/Home'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Settings from '../components/Settings/Settings'
import Cart from '../components/Cart/Cart'
import ProductList from '../components/ProductList/ProductList'
import AddProduct from '../components/AddProduct/AddProduct'
import ProductPage from '../components/ProductPage/ProductPage'
import UserProductList from '../components/UserProductList/UserProductList'
import UserProduct from '../components/UserProduct/UserProduct'
import NotFound from '../components/NotFound/NotFound'
import ForgotPassword from '../components/ForgotPassword/ForgotPassword'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/forgot-password', component: ForgotPassword },
    { path: '/settings', component: Settings },
    { path: '/cart', component: Cart },
    { path: '/products', component: ProductList },
    { path: '/addproduct', component: AddProduct },
    { path: '/products/:id', component: ProductPage },
    { path: '/userproductlist', component: UserProductList },
    { path: '/userproductlist/:product_id', component: UserProduct },
    { path: '/404', component: NotFound },
    { path: '*', redirect: '/404', }
  ]
})

// router.beforeEach(async (to, from, next) => {
//   const publicPages = ['/login', '/register', '/404', '/forgot-password']
//   const authRequired = !publicPages.includes(to.path)
//   const loggedIn = await(authRequired ? logInCheck() : false)

//   if (authRequired && !loggedIn) {
//     return next('/login')
//   }

//   next()
// })