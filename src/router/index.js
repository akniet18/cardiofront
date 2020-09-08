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
    path: '/home',
    name: 'Home',
    component: Home,
    // beforeEnter: ifAuth,
    children: [
      {
        path: "/",
        name:'chart',
        component: function () {
          return import('../components/chart.vue')
        },
      },
      {
        path: '/profile',
        name: 'profile',
        component: function () {
          return import('../views/profile.vue')
        }
      }
    ]
  },

  {
    path: '/',
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
