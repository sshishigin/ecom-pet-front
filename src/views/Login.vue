<template>
  <div class="login">
    <v-container>
        <v-row justify="center">
          <v-col cols='4'>
            <form @submit.prevent="login">
              <v-list>
              <v-list-item>
              <input type="text" placeholder="@" v-model="email" />
              </v-list-item>
              <v-list-item>
              <input type="password" placeholder="Password" v-model="password" />
              </v-list-item>
              <v-list-item>
              <v-btn text><input type="submit" value="Login" /></v-btn>
              </v-list-item>
              </v-list>
            </form>
             <p justify-center> Нет аккаунта? Регистрируйтесь <router-link to="/r egister"> тут. </router-link> </p>
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import router from '@/router'

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
        .then(response => {
          if (response.status === 200) {
            router.push('/')
          }
        })
    }
  }
}
</script>
