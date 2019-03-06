<template>
  <div class="home">
    <h1>Home Page</h1>
    <h3>{{loginUser}} Balance: {{balance}}฿</h3>
    <hr>
    amount : <input type="text" v-model="amount"> <br> <br>
    <button @click="checkDeposite()">Deposite</button> <button>Withdraw</button>
    <hr>
    <div>
      Username: <input type="text" v-model="newUser.username"> <br>
      Password: <input type="text" v-model="newUser.password"> <br>
      <button @click="addUser(newUser)">confirm</button>
    </div> 
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      amount: 0,
      newUser: {
        username: '',
        password: '',
        balance: 0
      }
    }
  },
  computed: {
    ...mapState({
      loginUser: state => state.loginUser,
      users: state => state.users
    }),
    balance () {
      return this.users.find(user => user.username === this.loginUser).balance
    }
  },
  methods: {
    ...mapActions({
      deposite: 'deposite',
      addUser: 'addUser'
    }),
    checkDeposite () {
      if (parseInt(this.amount) > 0) {
        // ssss
        this.deposite({
          username: this.loginUser,
          amount: parseInt(this.amount)
        })
      } else {
        alert('ฝากเงินให้มากกว่า 0')
      }
    }
  },
  mounted () {
    if (this.loginUser === '') {
      this.$router.push({ name: 'Login'})
    }
  }
}
</script>
