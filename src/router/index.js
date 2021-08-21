import { createRouter, createWebHistory } from 'vue-router'
import { details } from '../../../controllers/PostController'
import Home from '../views/Home.vue'
import detail from '../views/details.vue'
import add_post from '../views/add_post.vue'
import edit_post from '../views/edit_post.vue'
import login from '../views/users/login.vue'
import register from '../views/users/register.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details/:id',
    name: 'details',
    component: detail,
    props:true
  },

    {
    path: '/edit_post/:id',
    name: 'edit_post',
    component: edit_post,
    props:true
  },

  {
    path: '/create',
    name: 'add_post',
    component: add_post,
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
