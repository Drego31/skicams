<template>
  <div id="app">
    <m-header/>
    <router-view/>
    <m-footer/>
  </div>
</template>

<script>
  import MHeader from "./components/molecules/Header"
  import MFooter from "./components/molecules/Footer"
  export default {
    components: {MFooter, MHeader}
  }
</script>