import Vue from 'vue'
import store from '@/store'
import { defaultLanguage } from '@/locales'

export default {
  init () {
    // set last user data lang
    const cacheLang = Vue.storage.get('lang', defaultLanguage)
    store.dispatch('SetLang', cacheLang)
  }
}
