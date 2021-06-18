import { createStore } from 'vuex'
import instance from '@/api/instance.js'

export default createStore({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  mutations: {
    auth_request (state) {
      state.status = 'loading'
    },
    auth_success (state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error (state) {
      state.status = 'error'
    },
    logout (state) {
      state.status = ''
      state.token = ''
    }
  },
  actions: {
    login ({ commit }, [email, password]) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        instance
          .post('/api/login', { username: email, password: password })
          .then((resp) => {
            const token = resp.data.token
            const user = JSON.parse(resp.data.user)
            console.log(user)
            localStorage.setItem('token', token)
            instance.defaults.headers.common.Authorization = token
            commit('auth_success', token, user)
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
    authStatus: (state) => state.status
  }
})
