import { createStore } from 'vuex'
import instance from '@/api/instance.js'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

export default createStore({
  state: {
    status: '',
    user: localStorage.getItem('user'),
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    auth_request (state) {
      state.status = 'loading'
    },
    auth_success (state, payload) {
      state.status = 'success'
      state.user = payload.user
      state.token = payload.token
    },
    auth_error (state) {
      state.status = 'error'
    },
    logout (state) {
      state.status = ''
      state.token = ''
      state.user = {}
    }
  },
  actions: {
    login ({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        instance
          .post('/api/login', user)
          .then((resp) => {
            const token = resp.data.token
            const user = JSON.parse(resp.data.user)
            localStorage.setItem('token', token)
            localStorage.setItem('user', user)
            instance.defaults.headers.common.Authorization = 'Token ' + token
            commit('auth_success', { token, user })
            resolve(resp)
          })
          .catch((err) => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    logout ({ commit }) {
      return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('token')
        delete instance.defaults.headers.common.Authorization
        resolve()
      })
    }
  },
  modules: {},
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
    user: (state) => state.user
  },
  plugins: [
    createPersistedState({
      getState: (key) => Cookies.getJSON(key),
      setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
    })
  ]
})
