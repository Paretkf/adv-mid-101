<template>
  <div>
    <h1>
      LOGIN PAGE
    </h1>
    <div>
      USERNAME - <input type="text" v-model="loginUser.username">
    </div>
    <div>
      PASSWORD - <input type="password" v-model="loginUser.password">
    </div>
    <div>
      <button @click="login()">LOGIN</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      loginUser: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      setLoginUser: 'setLoginUser'
    }),
    login () {
      const index = this.users.findIndex(user => user.username === this.loginUser.username
                    && user.password === this.loginUser.password)
      if (index !== -1) {
        alert('Login ได้')
        this.setLoginUser(this.loginUser.username)
        this.$router.push({ path: '/' })
      } else {
        alert('login ไม่ได้')
      }
    }
  },
  computed: {
    ...mapState({
      users: function (state) {
        return state.users
      }
    })
  }
}
</script>

<style scoped>

</style>
