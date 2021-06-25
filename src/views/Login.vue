<template>
  <div class="login">
    <v-container>
      <v-card>
      <v-row justify="center">
        <form @submit.prevent="login">
          <v-col>
          <input type="text" placeholder="@" v-model="email" />
          </v-col>
          <v-col>
          <input type="password" placeholder="Password" v-model="password" />
          </v-col>
          <v-col>
          <v-btn text><input type="submit" value="Login" /></v-btn>
          </v-col>
        </form>
      </v-row>
      <v-dialog> Hello? </v-dialog>
      </v-card>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Login',
  components: {
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      // const email = this.email
      // const password = this.password
      const user = {
        username: this.email,
        password: this.password
      }
      this.$store.dispatch('login', user)
    }
  }
}
</script>
