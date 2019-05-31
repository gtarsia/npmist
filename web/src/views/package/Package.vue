<template>
  <div>
    <h2 class="title is-3">
      {{ pkg.package }}
    </h2>
  </div>
</template>
<script>
// import comp from './comp.vue'

export default {
  components: {
  },
  props: {
    pkg: { type: Object, required: true },
  },
}
</script>
