<template>
  <div id="app" class="container">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
const DEFAULT_LAYOUT = 'main'

export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || DEFAULT_LAYOUT) + '-layout'
    }
  },

  created () {
    // nothing defined here (when this.$route.path is other than "/")
    console.log(this.$route, this.$route.meta.layout)
  },

  updated () {
    // something defined here whatever the this.$route.path
    console.log(this.$route, this.$route.meta.layout)
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
