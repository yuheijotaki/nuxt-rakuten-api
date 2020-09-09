<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Page
      </h1>
      <div class="links">
        <nuxt-link to="/" class="button--green">Back</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  // components: {
  //   Logo
  // },
  head () {
    return {
      title: '下層ページ'
    }
  }
}
</script>

<style>
</style>
