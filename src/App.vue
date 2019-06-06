<template>
  <div id="app">
    <m-header/>
    <router-view/>
  </div>
</template>

<script>
  import MHeader from "./components/molecules/Header"
  export default {
    components: {MHeader}
  }
</script>