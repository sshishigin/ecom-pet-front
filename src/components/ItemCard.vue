<template>
  <v-col cols="4">
    <v-card elevation="5" shaped>
      <v-card-header> {{ item.title }} </v-card-header>
      <v-card-media>
        <v-img :src="item.pic" height="250"></v-img>
      </v-card-media>
      <v-card-actions>
        <v-btn @click="addToCart(item.id)">В корзину</v-btn>
        <v-btn icon="mdi-heart" color="secondary">Лайк</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import instance from '@/api/instance.js'

export default {
  name: 'ItemCard',
  props: {
    item: Object
  },
  methods: {
    addToCart (id) {
      instance.post('/api/cart/', { quantity: 1, itemId: id })
    },
    like (id) {
      instance.post('/api/like/', { itemId: id, like: true })
    }
  }
}
</script>
