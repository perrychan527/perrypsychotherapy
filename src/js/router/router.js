import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const about = () => import("../../page/about/about.vue")
const therapy = () => import("../../page/therapy/therapy.vue")
const sessioninfo = () => import("../../page/sessionInfo/sessioninfo.vue")
const memories = () => import("../../page/memories/memories.vue")
const socialDreaming = () => import("../../page/socialDreaming/socialDreaming.vue")
const socialDreamingAbout = () => import("../../page/socialDreaming/about/socialDreamingAbout.vue")
const londonJuly = () => import("../../page/socialDreaming/londonJuly/londonJuly.vue")
const londonSeptember = () => import("../../page/socialDreaming/londonSeptember/londonSeptember.vue")
const hkMay = () => import("../../page/socialDreaming/hkMay/hkMay.vue")


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: about, name: 'default' },
    { path: '/:locale', component: about, name: 'about' },
    { path: '/:locale/therapy', component: therapy, name: 'therapy' },
    { path: '/:locale/sessioninfo', component: sessioninfo, name: 'sessioninfo' },
    { path: '/:locale/memories', component: memories, name: 'memories' },
    { path: '/:locale/sd', component: socialDreaming, name: 'socialDreaming', children: [
      { path: '', component: socialDreamingAbout, name: 'default' },
      { path: 'about', component: socialDreamingAbout, name: 'socialDreamingAbout' },
      { path: 'london_july', component: londonJuly, name: 'londonJuly' },
      { path: 'london_sept', component: londonSeptember, name: 'londonSeptember' },
      { path: 'hk_may', component: hkMay, name: 'hkMay' }

    ]},
    


  ]
})

export default router