import Vue from 'vue'
import App from './page/App.vue'
import vuetify from './plugins/vuetify'

import router from './js/router/router'
import i18n from './js/i18n/i18n'

Vue.config.productionTip = false

new Vue({
  vuetify,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')

