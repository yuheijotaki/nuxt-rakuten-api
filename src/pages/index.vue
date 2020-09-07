<template lang="pug">
  div
    Posts
</template>

<script>
import Posts from '~/components/Posts.vue'

export default {
  components: {
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
