<template>
  <div class="box" style="padding: 12px;">
    <div class="pkg-title">
      <a :href="pkg.links.npm">
        <img src="@/assets/npm_logo.png" style="height: 30px;"/>
      </a>
    </div>
    <div class="columns" style="margin-bottom: 0px;">
      <div class="column is-narrow" style="padding-bottom: 0px; padding-right: 0px;">
        Score: {{ roundedScore }}%
      </div>
      <div class="column" style="padding-bottom: 0px; margin-top: 3px;">
        <progress class="progress is-link" :value="roundedScore" max="100">{{ roundedScore }}%</progress>
      </div>
    </div>
    <div>Published <pre style="display: inline; padding: 0;">{{ pkg.version }}</pre>, {{ lastPublish }} </div>
    <div class="tags">
      <span class="tag is-link" v-for="(keyword,i) in pkg.keywords || []" :key="i">
        {{ keyword }}
      </span>
    </div>
  </div>
</template>
<script>
import gravatarUrl from 'gravatar-url'

export default {
  components: {
  },
  data() {
    return {
    }
  },
  props: {
    pkg: { type: Object },
    score: { type: Object },
  },
  computed: {
    roundedScore: ({ score: { final } }) => Math.round(final * 100),
    lastPublish: ({ pkg: { date: { rel } } }) => rel,
  },
}
</script>
<style>
.pkg-title > * {
  margin-right: 5px;
}
</style>
