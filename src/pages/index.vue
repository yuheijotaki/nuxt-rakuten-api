<template>
  <div>
    <!-- <logo /> -->
    <!-- <nuxt-link to="/page/" class="button--green">Page</nuxt-link> -->
    <ul>
      <li v-for="item in results" :key="item.id">
        <a :href="item.Item.itemUrl">
          <img :src="item.Item.mediumImageUrls[0].imageUrl">
          {{ item.Item.itemName.slice(0,20) + "..." }}
          ¥{{ item.Item.itemPrice }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  head () {
    return {
      title: 'トップページ'
    }
  },

  data() {
    return {
      results: []
    }
  },
  async asyncData({ app }) {
    const baseUrl = `${process.env.apiUrl}`
    const appId = `applicationId=${process.env.applicationId}`
    const keywordPrefix = '&keyword='
    const keyword = 'カービィ'
    const getUrl = encodeURI(baseUrl + appId + keywordPrefix + keyword)
    const response = await app.$axios.$get(getUrl)
    return {
      results: response.Items
    }
  }
}
</script>

<style>
</style>
