<template lang="pug">
  div
    Search
    Posts
</template>

<script>
import Search from '~/components/Search.vue'
import Posts from '~/components/Posts.vue'

export default {
  components: {
    Search,
    Posts
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
