<template>
  <v-app-bar density="comfortable">
    <v-app-bar-title> <router-link to="/"> Home </router-link> </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn text>Профиль</v-btn>
    <router-link to="/cart">
      <v-btn class="mr-3" text>Корзина</v-btn>
    </router-link>
    <router-link to="/login" v-if="!isLoggedIn">
      <v-btn class="mr-3" text>LogIn </v-btn>
    </router-link>
    <v-divider inset vertical></v-divider>
    <v-btn @click="logout" class="mr-3" v-if="isLoggedIn" text>Logout</v-btn>
    <router-link to="/register" v-if="!isLoggedIn">
      <v-btn class="mr-3" > Sign up </v-btn>
    </router-link>
    <v-btn class="mr-4 ml-5" color="primary" plain>
      <v-icon left icon="mdi-handshake-outline"></v-icon>

      <span v-if="isLoggedIn">Здравствуйте, {{ user.first_name }} </span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn
    },
    user: function () {
      return this.$store.state.user
    }
  },
  name: 'Header',
  components: {},
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
