<template>
  <div class="section">
    <div class="box">
      <Pkg :pkg="pkg" />
    </div>
  </div>
</template>
<script>
import { npmGetPackage } from '@/api/npm'
import Pkg from './Package.vue'

export default {
  components: {
    Pkg,
  },
  data() {
    return {
      pkg: {}
    }
  },
  props: {
    name: { type: String, required: true },
  },
  async created() {
    const { name } = this
    this.pkg = await npmGetPackage(name)
  },
}
</script>
