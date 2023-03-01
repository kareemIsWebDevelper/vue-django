import Vue from 'vue'
import VueRouter from '../../frontUI/node_modules/vue-router'
import Home from '../views/Home'
import Page from '../views/page/Page'
import Admin from '../views/admin/admin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/blog/:slug',
  //   name: 'blog-post',
  //   component: BlogPost
  // },
  {
     path: '/blog/:id', component: Page 
    
  },
  {
    path: '/admin', component: Admin 
   
 },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
