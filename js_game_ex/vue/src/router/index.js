import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/common/Home.vue'
import Table from '../components/common/Table.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/table',
    name: 'Table',
    component: Table
  },
  {
    path: "/header",
    name: "Header",
    meta: {
        title: '头部'
    },
    component: () => import ( /* webpackChunkName: "login" */ "../components/common/Header.vue")
},
{
  path: "/a",
  name: "A",
  meta: {
      title: '头部'
  },
  component: () => import ( /* webpackChunkName: "login" */ "../components/common/A.vue")
},
{
  path: "/style",
  name: "Style",
  meta: {
      title: '样式'
  },
  component: () => import ( /* webpackChunkName: "login" */ "../components/common/Style.vue")
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
