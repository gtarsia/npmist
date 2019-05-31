<template>
  <form @submit.prevent="$refs.input.blur()">
    <input class="input" ref="input" autofocus @input="debouncedChange" v-model="search">
  </form>
</template>
<script>
import { debounce } from 'lodash'
// import comp from './comp.vue'

export default {
  components: {
  },
  data() {
    return {
      search: '',
    }
  },
  methods: {
    debouncedChange: debounce(function change() {
      this.$emit('change', this.search)
    }, 550),
  },
  mounted() {
    this.$refs.input.focus()
  },
}
</script>
