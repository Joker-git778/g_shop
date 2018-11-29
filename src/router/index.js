import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import MSite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MSite',
      component: MSite
    },
    {
      path: '/MSite',
      name: 'MSite',
      component: MSite,
      meta : {
      	showFooter : true
      }
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order,
      meta : {
      	showFooter : true
      }
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile,
      meta : {
      	showFooter : true
      }
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search,
      meta : {
      	showFooter : true
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
