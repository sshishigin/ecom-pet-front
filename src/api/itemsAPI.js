export default function (instance) {
  return {
    getItems () {
      let items = null
      instance.get('/api/items/').then((meta) => {
        items = meta.data
      })
      return items
    }
  }
}
