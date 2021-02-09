import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const ifAuth = (to, from, next) => {
  if (sessionStorage.getItem('key')){
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
    beforeEnter: ifAuth,
    children: [
      {
        path: "staff/",
        name:'chart',
        component: function () {
          return import('../components/chart.vue')
        },
      },
      {
        path: "/",
        name:'chart2',
        component: function () {
          return import('../components/userhome.vue')
        },
      },
      {
        path: '/profile',
        name: 'profile',
        component: function () {
          return import('../views/profile.vue')
        }
      },
      {
        path: '/profile/create',
        name: 'create_user',
        component: function () {
          return import('../views/createuser.vue')
        }
      },
      {
        path: '/profile/staff',
        name: 'profile_staff',
        component: function () {
          return import('../views/profilestaff.vue')
        }
      },
      {
        path: '/profile/staff/detail',
        name: 'profile_detail',
        component: function () {
          return import('../views/userdetail.vue')
        }
      },
      {
        path: '/all/users',
        name: 'all_users',
        component: function () {
          return import('../views/allusers.vue')
        }
      }
    ]
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
  },
  {
    path: '/chart2',
    name: 'chart2',
    component: function () {
      return import('../components/ecgchart2.vue')
    }
  },
  {
    path: '/',
    name: 'base',
    component: function () {
      return import('../views/base.vue')
    }
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
