import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enUS from './lang/en-US'

Vue.use(VueI18n)

// 默认语言
export const defaultLanguage = 'en-US'

const messages = {
  'en-US': {
    ...enUS
  }
}

const i18n = new VueI18n({
  locale: defaultLanguage,
  fallbackLocale: defaultLanguage,
  messages
})

export default i18n

const loadedLanguages = [defaultLanguage]

if (defaultLanguage !== localStorage.lang) {
  loadLanguageAsync(localStorage.lang)
}

function setI18nLanguage (lang) {
  i18n.locale = lang
  // axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export function loadLanguageAsync (lang = defaultLanguage) {
  return new Promise(resolve => {
    // 缓存语言设置
    localStorage.lang = lang
    if (i18n.locale !== lang) {
      if (!loadedLanguages.includes(lang)) {
        return import(/* webpackChunkName: "lang-[request]" */ `./lang/${lang}`).then(msg => {
          i18n.setLocaleMessage(lang, msg.default)
          loadedLanguages.push(lang)
          return setI18nLanguage(lang)
        })
      }
      return resolve(setI18nLanguage(lang))
    }
    return resolve(lang)
  })
}
