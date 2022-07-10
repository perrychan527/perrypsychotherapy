import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const about = () => import("../../page/about/about.vue")
const therapy = () => import("../../page/therapy/therapy.vue")
const sessioninfo = () => import("../../page/sessionInfo/sessioninfo.vue")
const memories = () => import("../../page/memories/memories.vue")
const socialDreaming = () => import("../../page/socialDreaming/socialDreaming.vue")
const london = () => import("../../page/socialDreaming/london/london.vue")


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: about, name: 'default' },
    { path: '/:locale', component: about, name: 'about' },
    { path: '/:locale/therapy', component: therapy, name: 'therapy' },
    { path: '/:locale/sessioninfo', component: sessioninfo, name: 'sessioninfo' },
    { path: '/:locale/memories', component: memories, name: 'memories' },
    { path: '/:locale/sd', component: socialDreaming, name: 'socialDreaming', children: [
      { path: 'london', component: london, name: 'london' }

    ]},
    


  ]
})

export default router