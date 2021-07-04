<template>
  <div class="cart">
    <v-container>
        <h1> Корзина </h1>
        <item-card v-for="item in items" :key="item.id" :item='item' />
        <v-btn color="success">Оформить заказ</v-btn>
        <v-btn color="primary" dark @click="cleanCart()">Очистить корзину</v-btn>
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
      instance.delete('/api/cart/')
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
