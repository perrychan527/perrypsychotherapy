import Vue from 'vue'
import VueI18n from 'vue-i18n'
import utility from '../utility/utility'

import { locale as en } from './locale/en.js'
import { locale as tc } from './locale/tc.js'
import { locale as sc } from './locale/sc.js'
import { locale as ja } from './locale/ja.js'

Vue.use(VueI18n)

let messages = {}
messages = { ...messages, en, tc, sc, ja }

const i18n = new VueI18n({
  locale: "en",
  messages
})

export default i18n