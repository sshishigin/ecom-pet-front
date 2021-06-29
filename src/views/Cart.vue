<template>
  <div class="cart">
    <v-container>
        <h1> Корзина </h1>
        <item-card v-for="item in items" :key="item.id" :item='item' />
    </v-container>
  </div>
</template>

<script>
import instance from '@/api/instance.js'
import ItemCard from '@/components/CartItemCard.vue'

export default {
  name: 'Cart',
  components: { 'item-card': ItemCard },
  data () {
    return {
      items: []
    }
  },
  methods: {
    cleanCart () {
      instance.patch('/api/cart/', { clearCart: true })
    },
    remove (id) {
      instance.put('/api/cart/', { itemIdList: [id], clearCart: false })
      this.items[id].removed = true
    }
  },
  mounted () {
    instance.get('/api/cart/').then((meta) => {
      this.items = meta.data
    })
  }
}
</script>
