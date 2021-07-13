<template>
  <div class="home">
          <v-devider />
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

export default {
  name: 'Home',
  components: {
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
    console.log(this.items)
  }
}
</script>
