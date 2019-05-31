<template>
  <div class="box pkg-outer has-text-left" style="padding: 1rem">
    <div style="margin-bottom: 10px;">
      <router-link class="is-size-3"
                   :to="`/package/${pkg.name}`">
        {{ pkg.name }}
      </router-link>
      <a :href="userUrl" class="is-pulled-right">
        <img :src="image" style="height: 50px"/>
      </a>
      <a class="is-pulled-right"
         :href="userUrl"
         style="line-height: 50px; margin-right: 10px;">
        {{ pkg.publisher.name }}
      </a>
      <div>{{ pkg.description }}</div>
    </div>
    <div class="columns">
      <div class="column">
        <Npm :pkg="npm.package" :score="npm.score" />
      </div>
      <div class="column">
        <Github :repo="repo" :loading="loadingRepo"/>
      </div>
    </div>
  </div>
</template>
<script>
import { githubGetRepo } from '@/api/github'
import Npm from './Npm.vue'
import Github from './Github.vue'

export default {
  components: {
    Npm,
    Github,
  },
  data() {
    return {
      repo: {},
      loadingRepo: false,
    }
  },
  props: {
    npm: { type: Object, required: true },
  },
  computed: {
    pkg: ({ npm: { package: pkg } }) => pkg,
    image: ({ pkg: { publisher: { avatars: { small } } } }) => small,
    userUrl: ({ pkg: { publisher: { name } }}) => `https://www.npmjs.com/~${name}`,
  },
  async created() {
    const { package: pkg } = this.npm
    const { links: { repository } } = pkg
    if (repository) {
      const [match, owner, repo] = repository.match(/https:\/\/github\.com\/([^/]+)\/([^/]+)/)
      if (match) {
        this.loadingRepo = true
        this.repo = await githubGetRepo({ owner, repo })
        this.loadingRepo = false
      }
    }
  },
}
</script>
<style>
.box {
  border-radius: 1px;
}
</style>
