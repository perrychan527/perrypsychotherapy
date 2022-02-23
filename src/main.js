import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueI18n from 'vue-i18n'

import { locale as en } from './locale/en.js'
import { locale as tc } from './locale/tc.js'
import { locale as sc } from './locale/sc.js'
import { locale as ja } from './locale/ja.js'

Vue.use(VueI18n)
Vue.config.productionTip = false

let messages = {}
messages = { ...messages, en, tc, sc, ja }

const i18n = new VueI18n({
  locale: 'en',
  messages
})


new Vue({
  vuetify,
  i18n,
  render: function (h) { return h(App) }
}).$mount('#app')

