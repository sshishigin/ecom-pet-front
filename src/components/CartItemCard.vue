<template>
  <v-col padding=5px>
    <v-card elevation="5" shaped>
      <v-responsive :aspect-ratio="20/5">
        <v-card-media>
          <v-img :src="item.pic" max-height="250" max-width="200"></v-img>
        </v-card-media>
        <h4> {{ item.title }} </h4>
        <v-card-actions>
          <v-btn @click="removeItemFromCart(item.id)">Убрать из корзины</v-btn>
          <v-btn icon="mdi-heart" color="secondary">Лайк</v-btn>
        </v-card-actions>
      </v-responsive>
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
    removeItemFromCart (id) {
      instance.put('/api/cart/', { itemIdList: [id] })
    },
    like (id) {
      instance.post('/api/like/', { itemId: id, like: true })
    }
  }
}
</script>
