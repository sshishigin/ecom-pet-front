<template>
    <div class='profile'>
        Имя:
        {{user.first_name}} {{user.last_name}} <br>
        Заказы:
        {{orders}}
    </div>
</template>

<script>
import instance from '@/api/instance.js'

export default {
  name: 'Profile',
  components: {},
  data () {
    return {
      user: this.$store.state.user,
      orders: {},
      likedItems: {}
    }
  },
  mounted () {
    instance.get('api/order/').then(meta => { this.orders = meta.data })
  }
}
</script>
