<template>
  <div>
    <ul>
      <post v-for="item in results" :key="item.id" :post="item">
      </post>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Post from '~/components/Post.vue'

export default {
  name: 'Posts',
  components: {
    Post
  },
  data() {
    return {
      results: []
    }
  },
  mounted :function(){
    const baseUrl = `${process.env.apiUrl}`
    const appId = `applicationId=${process.env.applicationId}`
    const keywordPrefix = '&keyword='
    const keyword = 'カービィ'
    const getUrl = encodeURI(baseUrl + appId + keywordPrefix + keyword)
    axios.get( getUrl )
    .then( response => {
      this.results = response.data.Items
    })
    .catch( error => {
      console.log(error)
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
