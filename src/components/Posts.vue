<template lang="pug">
  div
    div
      input(
        v-model="searchText"
      )
      button(
        v-on:click="query"
        value="検索"
      ) 検索
    ul
      Post(
        v-for="(item,index) in results"
        :key="index"
        :post="item"
      )
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
      results: [],
      searchText: '仙人掌'
    }
  },
  mounted :function(){
    const baseUrl = `${process.env.apiUrl}`
    const appId = `applicationId=${process.env.applicationId}`
    const keywordPrefix = '&keyword='
    const keyword = this.searchText
    const getUrl = encodeURI(baseUrl + appId + keywordPrefix + keyword)
    axios.get( getUrl )
    .then( response => {
      this.results = response.data.Items
    })
    .catch( error => {
      console.log(error)
    })
  },
  methods:{
    query: function(){
      const baseUrl = `${process.env.apiUrl}`
      const appId = `applicationId=${process.env.applicationId}`
      const keywordPrefix = '&keyword='
      const keyword = this.searchText
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
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  list-style: none;
}
</style>
