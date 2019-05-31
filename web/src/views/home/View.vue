<template>
  <div class="section"
       style="min-height: 150px;"
       v-loading="loading">
    <div class=""
         v-for="(pkg,i) in packages"
         :key="i">
      <PackageComponent :npm="pkg" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import PackageComponent from './Package.vue'

export default {
  components: {
    PackageComponent,
  },
  computed: {
    ...mapGetters({
      packages: 'packages/all',
      loading: 'packages/loading',
    }),
  },
}
</script>
