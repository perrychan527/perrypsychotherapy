import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const about = () => import("../../page/about.vue")
const therapy = () => import("../../page/therapy.vue")
const sessioninfo = () => import("../../page/sessioninfo.vue")
const memories = () => import("../../page/memories.vue")
const sd = () => import("../../page/sd.vue")
const london = () => import("../../page/london.vue")


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: about, name: 'default' },
    { path: '/:locale', component: about, name: 'about' },
    { path: '/:locale/therapy', component: therapy, name: 'therapy' },
    { path: '/:locale/sessioninfo', component: sessioninfo, name: 'sessioninfo' },
    { path: '/:locale/memories', component: memories, name: 'memories' },
    { path: '/:locale/sd', component: sd, name: 'sd' },
    { path: '/:locale/sd/london', component: sd, name: 'london' }


  ]
})

export default router