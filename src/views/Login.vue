<template>
  <div class="login">
    <v-container>
      <v-row rows="5">
        <form @submit.prevent="login">
          <input type="text" placeholder="@" v-model="email" />
          <input type="password" placeholder="Password" v-model="password" />
          <input type="submit" value="Login" />
        </form>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const email = this.email
      const password = this.password
      this.$store.dispatch('login', [email, password])
    }
  }
}
</script>
