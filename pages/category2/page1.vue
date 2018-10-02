<template>
  <div>
    <no-ssr>
      <markdown>
        <div v-html="page1"/>
      </markdown>
    </no-ssr>
  </div>
</template>

<script>
import page1 from './page1.md'

export default {
  computed: {
    page1() {
      return page1
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
