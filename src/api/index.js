import instance from './instance'

import itemsModule from './itemsAPI'

export default {
  items: itemsModule(instance)
}
