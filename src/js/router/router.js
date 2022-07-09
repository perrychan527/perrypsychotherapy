import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home = () => import("../../page/home.vue")
const test = () => import("../../page/test.vue")
const test2 = () => import("../../page/test2.vue")


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: home, name: 'default' },
    { path: '/:locale', component: home, name: 'home' },
    { path: '/:locale/test', component: test, name: 'test' },
    { path: '/:locale/test2', component: test2, name: 'test2' }

  ]
})

export default router