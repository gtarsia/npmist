<template>
  <div>
    <h1 class="title is-1">
      Packages
    </h1>
    <Search @change="search" />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import Search from './Search.vue'

export default {
  components: {
    Search,
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapActions({
      search: 'packages/search',
    }),
  },
}
</script>
