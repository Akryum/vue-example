<template>
  <div class="hello">
    <section>
      <h2>Nice list</h2>
      <div>
        <input
          v-model="newLabel"
          placeholder="Type new item"
          @keyup.enter="addItem()"
        >
      </div>
      <ul>
        <li
          v-for="item in list"
          :key="item.id"
          :data-id="item.id"
        >{{ item.label }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
let uid = 3
export default {
  name: 'HelloWorld',

  data () {
    return {
      newLabel: '',
      list: [{ id: 1, label: 'foo' }, { id: 2, label: 'bar' }],
    }
  },

  computed: {
    newItemValid () {
      return !!this.newLabel
    },
  },

  mounted () {
    console.log('%cHelloWorld Vue component', 'color: #2c3e50; background: #42b983; padding: 2px; border-radius: 3px;')
    console.log('It has `$data`, `$props` and computed props which are also proxied on the instance.')
    console.log(this)
  },

  methods: {
    addItem () {
      this.list.push({
        id: uid++,
        label: this.newLabel,
      })
      this.newLabel = ''
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
