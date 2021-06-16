import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LOCALE_KEY = 'xrpl-dev-grants-locale'
const defaultLocale = 'en'

export interface State {
  locale: string
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  state: {
    // locale: localStorage.getItem(LOCALE_KEY) || defaultLocale
    locale: defaultLocale
  },
  getters: {
    localStorageLocale: () => {
      // return localStorage.getItem(LOCALE_KEY) || ''
      return ''
    }
  },
  mutations: {
    saveLocale: (state: State, locale: string) => {
      state.locale = locale
      localStorage.setItem(LOCALE_KEY, locale)
    }
  }
})
