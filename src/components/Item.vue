<template>
  <li
    class="item"
    :data-id="item.id"
  >
    {{ item.label }}
  </li>
</template>

<script>
import { CONSOLE_STYLE } from '../misc'

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  mounted () {
    console.log('%cItem component', CONSOLE_STYLE)
    console.log('It has `$data`, `$props` and computed props which are also proxied on the instance.')
    console.log(this)
    console.log('`item` prop:')
    console.log(this.item)
  },
}
</script>
