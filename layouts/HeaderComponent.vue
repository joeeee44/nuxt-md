<template>
  <header>
    <nuxt-link to="/">
      <h1 class="header-title">nuxt-md</h1>
    </nuxt-link>
  </header>
</template>

<script>
// export default {
//   computed: {
//   }
// }
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background: #24292e;
  color: #fff;
  a {
    text-decoration: none;
  }
}

.header-title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 35px;
  color: #fff;
  letter-spacing: 1px;
  padding: 5px 10px;
}
</style>
