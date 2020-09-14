<template lang="pug">
  li
    //- a(:href="item.Item.itemUrl")
    nuxt-link(:to="item.Item.itemCode")
      p.image
        img(:src="item.Item.mediumImageUrls[0].imageUrl")
      p.name {{ item.Item.itemName.slice(0,20) + "..." }}
      p.price ¥{{ item.Item.itemPrice }}
      p asuraku{{ item.Item.asurakuFlag }}
</template>

<script>
export default {
  name: 'Item',
  props:{
    'item': {
      type: Object,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  width: 200px;
  text-align: center;
  background: #eee;
  border: #ccc 1px solid;
}
a {
  display: block;
  color: #111;
  text-decoration: none;
}
.image {
  font-size: 0;
  line-height: 0;
}
.name {
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.4;
  font-weight: bold;
  text-align: center;
}
</style>
