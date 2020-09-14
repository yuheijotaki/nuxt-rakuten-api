<template lang="pug">
  div
    //- code {{item}}
    p
      nuxt-link(to="/") back
    p.image
      img(:src="item.mediumImageUrls[0].imageUrl")
    p.name {{ item.itemName.slice(0,20) + "..." }}
    p.price ¥{{ item.itemPrice }}
    p asuraku{{ item.asurakuFlag }}
    p
      a(:href="item.itemUrl") {{item.itemUrl}}
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      item: {}
    }
  },
  asyncData ({ params }) {
    const baseUrl = `${process.env.apiUrl}`
    const appId = `applicationId=${process.env.applicationId}`
    const itemCodePrefix = '&itemCode='
    const itemCode = params.item
    const getUrl = encodeURI(baseUrl + appId + itemCodePrefix + itemCode)
    return axios.get(getUrl)
      .then(response => {
        return { item: response.data.Items[0].Item }
      })
      .catch((error) => {
        return { error: error }
      })
  }
}
</script>

<style lang="scss" scoped>
</style>
