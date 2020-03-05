import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeContainer from '../components/tabbar/HomeContainer'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomeContainer
  }
]

const router = new VueRouter({
  routes
})

export default router
