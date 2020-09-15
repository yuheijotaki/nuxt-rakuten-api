<template lang="pug">
  div
    header.header
      Logo
      Search
    main.main
      Items
</template>

<script>
import Logo from '~/components/Logo.vue'
import Search from '~/components/Search.vue'
import Items from '~/components/Items.vue'

export default {
  components: {
    Logo,
    Search,
    Items
  },
  head () {
    return {
      title: 'トップページ'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
