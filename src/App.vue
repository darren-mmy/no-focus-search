<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.nav {
  padding: 30px;
  background-color: var(--bgColor);

  a {
    font-weight: bold;
    color: var(--textColor);

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
