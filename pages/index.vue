<template>
  <div class="home-container">

    <h1 class="title">
      nuxt-md
    </h1>
    <h2 class="subtitle">
      My astounding Nuxt.js project
    </h2>
    <div class="links">
      <nuxt-link
        class="button--green"
        to="/category1">category1</nuxt-link>
      <nuxt-link
        class="button--green"
        to="/category2">category2</nuxt-link>
    </div>

  </div>
</template>

<script>
export default {
  // components: {
  // }
}
</script>

<style lang="scss" scoped>
.home-container {
  text-align: center;
}
</style>
