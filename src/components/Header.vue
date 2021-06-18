<template>
  <v-app-bar density="compact">
    <v-app-bar-title>Logo</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn text>Developer</v-btn>

    <v-btn class="mr-3" text>Help</v-btn>
    <router-link to="/login" v-if="!isLoggedIn">
      <v-btn class="mr-3" text>LogIn </v-btn>
    </router-link>
    <v-divider inset vertical></v-divider>
    <v-btn @click="logout" class="mr-3" v-if="isLoggedIn" text>Logout</v-btn>
    <v-btn class="mr-4 ml-5" color="primary" plain>
      <v-icon left icon="mdi-handshake-outline"></v-icon>

      <span v-if="isLoggedIn">Id: {{ user.id }} </span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    isLoggedIn: function () {
      console.log(this.$store.getters.isLoggedIn)
      return this.$store.getters.isLoggedIn
    },
    user: function () {
      console.log(this.$store.state.user, 'User IS HERE')
      return this.$store.state.user
    }
  },
  name: 'Header',
  components: {},
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  },
  mounted () {
    console.log('user here')
  }
}
</script>
