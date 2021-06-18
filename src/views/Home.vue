<template>
  <div class="home">
    <Header :user="user"></Header>
    <v-container>
      <v-row rows="3">
        <ItemCard v-for="item in items" :key="item.id" :item="item" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue'
import instance from '@/api/instance.js'
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header,
    ItemCard
  },
  data () {
    return {
      user: null,
      items: null
    }
  },
  async mounted () {
    await instance.get('/api/items/').then((meta) => {
      this.items = meta.data
    })
  }
}
</script>
