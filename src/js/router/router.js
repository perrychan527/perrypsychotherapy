import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home = () => import("../../page/home.vue")
const test = () => import("../../page/test.vue")
const test2 = () => import("../../page/test2.vue")


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: home },
    { path: '/test', component: test },
	{ path: '/test2', component: test2 }

  ]
})

export default router