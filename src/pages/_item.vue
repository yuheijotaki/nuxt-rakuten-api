<template lang="pug">
  div
    header.header
      Logo
    main.main
      div.single-item
        p.single-item__img
          img(:src="getImageFullsize(item.mediumImageUrls[0].imageUrl)")
        section.single-item-unit
          h2.single-item-unit__title 商品名
          p.single-item-unit__content(
            v-html="item.itemName"
          )
        section.single-item-unit
          h2.single-item-unit__title 商品キャプション
          p.single-item-unit__content(
            v-html="item.itemCaption"
          )
        section.single-item-unit
          h2.single-item-unit__title 価格
          p.single-item-unit__content ¥{{ item.itemPrice }}
        div(v-if="item.asurakuFlag === 1")
          section.single-item-unit
            h2.single-item-unit__title あす楽
            p.single-item-unit__content {{ asurakuFlagText(item.asurakuFlag) }}
          section.single-item-unit
            h2.single-item-unit__title あす楽対象エリア
            p.single-item-unit__content {{ item.asurakuArea }}
        section.single-item-unit
          h2.single-item-unit__title 商品URL
          p.single-item-unit__content
            a(
              :href="item.itemUrl"
              target="_blank"
            ) {{item.itemUrl}}
        section.single-item-unit
          h2.single-item-unit__title ショップ名
          p.single-item-unit__content
            a(
              :href="item.shopUrl"
              target="_blank"
            ) {{item.shopName}}
        p.single-item__back
          nuxt-link(to="/") 戻る
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from 'axios'

export default {
  components: {
    Logo
  },
  head () {
    return {
      title: '詳細ページ'
    }
  },
  data () {
    return {
      item: {}
    }
  },
  asyncData ({ params }) {
    const baseUrl = `${process.env.API_URL}`
    const appId = `applicationId=${process.env.APPLICATION_ID}`
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
  },
  methods: {
    getImageFullsize(url) {
      return url.replace( '?_ex=128x128', '')
    },
    asurakuFlagText: function(flag) {
      if (flag === 1) {
        return 'あす楽対応'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  border-top: #f5f5f5 10px solid;
  padding-top: 40px;
}
.single-item {
  width: 640px;
  margin: 0 auto;
}
.single-item__img {
  max-width: 420px;
  margin: 0 auto;
  img {
    width: 100%;
    height: auto;
  }
}
.single-item-unit {
  color: #111;
  display: flex;
  margin-top: 10px;
  padding-top: 10px;
  border-top: #eee 1px solid;
}
.single-item-unit__title {
  width: 30%;
  font-size: 16px;
}
.single-item-unit__content {
  width: 70%;
  margin-top: 4px;
  font-size: 14px;
  a {
    color: #4287f5;
  }
}
.single-item__back {
  margin-top: 40px;
  width: 100%;
  text-align: center;
  font-size: 16px;
  line-height: 1;
  font-weight: bold;
  a {
    display: block;
    background-color: #4287f5;
    padding: 16px;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
  }
}
</style>
