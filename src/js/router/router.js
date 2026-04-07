import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const about = () => import("../../page/about/about.vue")
const therapy = () => import("../../page/therapy/therapy.vue")
const sessionInfoParent = () => import("../../page/sessionInfo/sessionInfoParent.vue")
const sessionInfoGateway = () => import("../../page/sessionInfo/sessionInfoGateway.vue")
const sessionEdinburgh = () => import("../../page/sessionInfo/edinburgh.vue")
const sessionOnlineUK = () => import("../../page/sessionInfo/onlineUK.vue")
const sessionHongKong = () => import("../../page/sessionInfo/hongKong.vue")
const sessionInternational = () => import("../../page/sessionInfo/international.vue")
const memories = () => import("../../page/memories/memories.vue")
const socialDreaming = () => import("../../page/socialDreaming/socialDreaming.vue")
const socialDreamingAbout = () => import("../../page/socialDreaming/about/socialDreamingAbout.vue")
const londonJuly = () => import("../../page/socialDreaming/londonJuly/londonJuly.vue")
const londonSeptember = () => import("../../page/socialDreaming/londonSeptember/londonSeptember.vue")
const hkMay = () => import("../../page/socialDreaming/hkMay/hkMay.vue")


const router = new VueRouter({
  mode: 'history',
  scrollBehavior: function(to, from) {
    if (to.name === from.name) return
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve({ x: 0, y: 0 })
      }, 50)
    })
  },
  routes: [
  
  
    // Redirect old tc URLs to hk
	{ path: '/tc', redirect: '/hk' },
	{ path: '/tc/', redirect: '/hk' },
	{ path: '/tc/*', redirect: to => to.path.replace(/^\/tc(\/|$)/, '/hk$1') },
  
    { path: '/', component: about, name: 'default' },
    { path: '/:locale', component: about, name: 'about' },
    { path: '/:locale/therapy', component: therapy, name: 'therapy' },
    { path: '/:locale/sessioninfo', component: sessionInfoParent, children: [
      { path: '', component: sessionInfoGateway, name: 'sessioninfo' },
      { path: 'edinburgh', component: sessionEdinburgh, name: 'sessionEdinburgh' },
      { path: 'online-uk', component: sessionOnlineUK, name: 'sessionOnlineUK' },
      { path: 'hong-kong', component: sessionHongKong, name: 'sessionHongKong' },
      { path: 'international', component: sessionInternational, name: 'sessionInternational' },
    ]},
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