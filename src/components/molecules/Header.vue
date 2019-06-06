<template>
  <div class="m-header">
    <div class="m-mobile-content f-header">
      <div class="m-logo">
        <img
          class="a-logo"
          src="@/assets/logo.png"
          alt="PGS Software"
        />
      </div>
      <div class="m-nav">
        <router-link class="a-link f-menu f-selected" to="/">About Us</router-link>
        <router-link class="a-link f-menu" to="/skicams">Skicams</router-link>
        <router-link class="a-link f-menu" to="/contact">Contact</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "m-header"
}
</script>