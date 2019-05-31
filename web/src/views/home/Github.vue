<template>
  <div class="box" style="padding: 12px;" v-loading="loading">
    <a :href="repo.html_url">
      <img src="@/assets/github_logo.png" style="height: 30px"/>
    </a>
    <div v-if="!loading">
      <div class="github">
        <a href="https://github.com/github-tools/github/stargazers"
           class="btn btn-sm btn-with-count js-toggler-target">
          <svg class="octicon octicon-star v-align-text-bottom"
               viewBox="0 0 14 16"
               version="1.1"
               width="14"
               height="16"
               aria-hidden="true">
            <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
          </svg>
          {{ stars.toLocaleString() }}
        </a>
        <summary class="btn btn-sm btn-with-count" title="Fork your own copy of zzyyxxww/abides to your account" role="button">
          <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true">
            <path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path>
          </svg>
          {{ repo.forks }}
        </summary>
        <span class="btn btn-sm btn-with-count" role="button">
          <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
            <path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z">
            </path>
          </svg>
          {{ repo.open_issues }}
        </span>
        <span class="btn btn-sm btn-with-count" role="button">
          {{ repo.language }}
        </span>
      </div>
    </div>
    <span >Created {{ createdAgo }}</span>
  </div>
</template>
<script>
import { format } from 'timeago.js'

export default {
  components: {
  },
  props: {
    repo: { type: Object, default: '' },
    loading: { type: Boolean },
  },
  computed: {
    createdAgo: ({ repo: { created_at } }) => format(created_at),
    stars: ({ repo }) => repo.stargazers_count || '',
  },
}
</script>
<style lang="scss" scoped>
@import '~@primer/css/buttons/index.scss';

.github {
  height: 30px;
}
.github > * {
  margin-right: 5px;
}
</style>
