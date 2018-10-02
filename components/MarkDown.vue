<template>
  <div
    v-highlight
    class="md">
    <slot>markdownがありません</slot>
  </div>
</template>

<style lang="scss">
.md {
  max-width: 800px;
  margin: 0 auto;
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin: 10px;
  }
  pre {
    background: #282c34;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    overflow: auto;
    code {
      font-family: monaco;
      font-size: 12px;
      color: #fff !important;
    }
  }
}
</style>
