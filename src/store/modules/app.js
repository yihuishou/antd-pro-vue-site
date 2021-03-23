import { loadLanguageAsync } from '@/locales'

export const SET_LANG = 'SET_LANG'
export const SET_DEVICE = 'SET_DEVICE'

const app = {
  state: {
    lang: 'en-US',
    device: 'desktop'
  },
  mutations: {
    [SET_LANG]: (state, lang) => {
      state.lang = lang
    },
    [SET_DEVICE]: (state, device) => {
      state.device = device
    }
  },
  actions: {
    // 设置界面语言
    SetLang ({ commit }, lang) {
      return new Promise(resolve => {
        commit(SET_LANG, lang)
        loadLanguageAsync(lang)
        resolve()
      })
    }
  }
}

export default app
