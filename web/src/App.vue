<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <SearchView />
        <router-view/>
      </div>
    </section>
  </div>
</template>
<script>
import SearchView from './views/search/SearchView'

export default {
  components: {
    SearchView,
  },
}
</script>
<style lang="scss">
@import "bulma";
@import "./styles/loading.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
