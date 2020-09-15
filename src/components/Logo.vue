<template lang="pug">
  h1.logo
    nuxt-link.logo__anchor(to="/") Nuxt.js + 楽天市場API
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss" scoped>
.logo {
  font-size: 18px;
  line-height: 1;
}
.logo__anchor {
  color: #111;
  text-decoration: none;
}
</style>
