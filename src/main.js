import Vue from 'vue'
import App from './page/App.vue'
import vuetify from './plugins/vuetify'
import VueMeta from 'vue-meta'

import router from './js/router/router'
import i18n from './js/i18n/i18n'

Vue.use(VueMeta)
Vue.config.productionTip = false

Vue.mixin({
  metaInfo: function() {
    var route = this.$route
    if (!route || !route.path) return {}
    var base = 'https://www.perrywtchan.com'
    var path = route.path
    // Build canonical: always use current locale path
    var canonical = base + path
    // Build hreflang alternates
    var enPath = path.replace(/^\/(hk|en)/, '/en') || '/en'
    var hkPath = path.replace(/^\/(hk|en)/, '/hk') || '/hk'
    if (!enPath.match(/^\/(en)/)) enPath = '/en' + enPath
    if (!hkPath.match(/^\/(hk)/)) hkPath = '/hk' + hkPath
    return {
      link: [
        { rel: 'canonical', href: canonical, vmid: 'canonical' },
        { rel: 'alternate', hreflang: 'en', href: base + enPath, vmid: 'hreflang-en' },
        { rel: 'alternate', hreflang: 'zh-HK', href: base + hkPath, vmid: 'hreflang-hk' },
        { rel: 'alternate', hreflang: 'x-default', href: base + enPath, vmid: 'hreflang-default' }
      ]
    }
  }
})

new Vue({
  vuetify,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')

