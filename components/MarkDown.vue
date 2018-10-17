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
    color: #35495e;
  }
  h1 {
    font-size: 35px;
  }
  pre {
    /* background: #282c34; */
    background: #fcfcfc;
    padding: 10px;
    margin: 10px;
    border: 1px solid #dbdfe1;
    border-radius: 5px;
    overflow: auto;
    code {
      background: #fcfcfc;
      font-family: monaco;
      font-size: 12px;
      color: #35495e;
      /* color: #fff !important; */
    }
  }
}
</style>
