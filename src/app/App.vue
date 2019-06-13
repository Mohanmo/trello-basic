<template>
  <div id="app">
    <div>
      <h1 class="is-size-3">Tasks</h1>
      <p class="subtitle is-6">Add Tasks and Manage it</p>
    </div>
    <div>
      <board/>
    </div>
  </div>
</template>

<script>
import Board from 'elements/Board'
export default {
  components: {
    Board
  }
}
</script>

<style lang="scss">
  html, body {
    height: 100%;
  }

  body {
    padding: 20px;
  }

  h1{
    color:#ffffff;
    font-weight: 600;
  }
  .subtitle{
    font-size: 14px;
    color: #cccccc;
  }
</style>
