<template>
  <div class="register">
    <v-container>
      <v-card>
        <v-row justify="center">
          <form @submit.prevent="signUp">
            <v-col>
              <input type="text" placeholder="@" v-model="email" />
            </v-col>
            <v-col>
              <input
                type="password"
                placeholder="Password"
                v-model="password"
              />
            </v-col>
            <v-col>
              <v-btn text><input type="submit" value="SignUp" /></v-btn>
            </v-col>
          </form>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import instance from '@/api/instance.js'

export default {
  name: 'Register',
  components: {},
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      const user = {
        email: this.email,
        password: this.password
      }
      instance.post('api/users/', user)
    }
  }
}
</script>
