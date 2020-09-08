import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const ifAuth = (to, from, next) => {
  if (sessionStorage.getItem('token')){
    next()
  }
  else{
    next('/login')
  }
}


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // beforeEnter: ifAuth
  },

  {
    path: '/login',
    name: 'Login',
    component: function () {
      return import('../views/login.vue')
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: function () {
      return import('../views/register.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
