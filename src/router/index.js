import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home-list',
    meta: {layout: 'Main'},
    component: () => import('@/views/TasksList')
  },
  {
    path: '/createTask',
    name: 'createTask',
    meta: {layout: 'Main'},
    component: () => import('@/views/CreateTask')
  },
  {
    path: '/task/:id',
    name: 'detailTask',
    meta: {layout: 'Main'},
    component: () => import('@/views/Detail')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
