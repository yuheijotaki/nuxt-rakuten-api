<template lang="pug">
  li.item
    nuxt-link.item__anchor(:to="item.Item.itemCode")
      p.item__picture
        img.item__picture-img(:src="item.Item.mediumImageUrls[0].imageUrl")
      p.item__name {{ item.Item.itemName.slice(0,32) + '...' }}
      p.item__price ¥{{ item.Item.itemPrice }}
      div(v-if="item.Item.asurakuFlag === 1")
        p.item__asuraku {{ asurakuFlagText(item.Item.asurakuFlag) }}
</template>

<script>
export default {
  name: 'Item',
  props:{
    'item': {
      type: Object,
      default: ''
    }
  },
  methods: {
    asurakuFlagText: function(flag) {
      if (flag === 1) {
        return 'あす楽対応'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  width: 20%;
  font-size: 12px;
  line-height: 1.4;
  border: #f5f5f5 10px solid;
  border-top: 0;
  border-right: 0;
  &:nth-child(-n+5) {
    border-top: #f5f5f5 10px solid;
  }
  &:nth-child(5n) {
    border-right: #f5f5f5 10px solid;
  }
}
.item__anchor {
  display: block;
  color: #111;
  text-decoration: none;
  padding: 24px 16px;
  position: relative;
}
.item__picture {
  height: 120px;
}
.item__picture-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.item__name {
  margin-top: 10px;
}
.item__price {
  margin-top: 4px;
  font-size: 18px;
  font-weight: bold;
}
.item__asuraku {
  position: absolute;
  top: 0;
  left: 0;
  background: #f5f5f5;
  padding: 4px 6px;
}
</style>
