<template lang="pug">
  li
    a(:href="post.Item.itemUrl")
      p.image
        img(:src="post.Item.mediumImageUrls[0].imageUrl")
      p.name {{ post.Item.itemName.slice(0,20) + "..." }}
      p.price ¥{{ post.Item.itemPrice }}
</template>

<script>
export default {
  name: 'Post',
  props:{
    'post': {
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
