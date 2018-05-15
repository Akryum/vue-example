<template>
  <div class="hello">
    <section>
      <h2>Nice list</h2>
      <div>
        <input
          v-model="newLabel"
          placeholder="Type new item"
          :disabled="loading"
          @keyup.enter="addItem()"
        >
        <button
          type="button"
          :disabled="loading || !newItemValid"
          @click="addItem()"
        >Add</button>

        <span v-if="loading">Loading...</span>
      </div>
      <ul>
        <Item
          v-for="item in list"
          :key="item.id"
          :item="item"
        />
      </ul>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Item from './Item.vue'
import { CONSOLE_STYLE } from '../misc'

let uid = 3

export default {
  name: 'HelloWorld',

  components: {
    Item,
  },

  data () {
    return {
      newLabel: '',
      list: [{ id: 1, label: 'foo' }, { id: 2, label: 'bar' }],
    }
  },

  computed: {
    ...mapGetters([
      'loading',
    ]),

    newItemValid () {
      return !!this.newLabel
    },
  },

  mounted () {
    console.log('%cList component', CONSOLE_STYLE)
    console.log('It has `$data`, `$props` and computed props which are also proxied on the instance.')
    console.log(this)

    console.log('%cVuex store', CONSOLE_STYLE)
    console.log('It has `state` and `getters` as data.')
    console.log(this.$store)
  },

  methods: {
    ...mapMutations([
      'loadingAdd',
      'loadingRemove',
    ]),

    addItem () {
      if (!this.loading) {
        this.loadingAdd()
        setTimeout(() => {
          this.list.push({
            id: uid++,
            label: this.newLabel,
          })
          this.newLabel = ''
          this.loadingRemove()
        }, 1000)
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h1,
h2
  font-weight normal

ul
  list-style-type none
  padding 0

li
  margin 0 10px

a
  color #42b983

</style>
