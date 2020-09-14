<template lang="pug">
  div
    header
      Logo
      Search
    Items
</template>

<script>
import Logo from '~/components/Logo.vue'
import Search from '~/components/Search.vue'
import Items from '~/components/Items.vue'

export default {
  components: {
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
header {
  display: flex;
  align-items: center;
  margin: 40px;
}
</style>
