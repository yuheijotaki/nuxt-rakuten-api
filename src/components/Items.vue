<template lang="pug">
  div
    ul
      Item(
        v-for="(item,index) in data.items.Items"
        :key="index"
        :item="item"
      )
</template>

<script>
import {mapActions, mapState} from 'vuex'
import Item from '~/components/Item.vue'

export default {
  name: 'Items',
  components: {
    Item
  },
  data() {
    return {
      searchText: 'カービィ',
      asurakuFlag: 0
    }
  },
  computed: {
    ...mapState({
      data: state => state.items,
    }),
  },
  mounted() {
    this.getItems()
  },
  methods: {
    ...mapActions({
      getItems() {
        this.$store.dispatch('items/getItems', {
          text: this.searchText,
          asrk: this.asurakuFlag
        })
      },
    })
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
