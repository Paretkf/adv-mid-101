import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        username: 'admin',
        password: '1234',
        balance: 500
      }
    ],
    loginUser: ''
  },
  mutations: {
    SET_LOGINUSER (state, data) {
      state.loginUser = data
    },
    DEPOSITE (state, data) {
      let index = state.users.findIndex(user => user.username === data.username)
      state.users[index].balance += data.amount
    },
    // data = {
    //   username: 'admin',
    //   password: '1234',
    //   balance: 500
    // }
    ADD_USER (state, data) {
      state.users.push(data)
    }
  },
  actions: {
    setLoginUser ({ commit }, data) {
      commit('SET_LOGINUSER', data)
    },
    deposite ({ commit }, data) {
      commit('DEPOSITE', data)
    },
    addUser ({ commit }, data) {
      commit('ADD_USER', data)
    }
  }
})
