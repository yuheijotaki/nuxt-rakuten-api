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
import {mapActions, mapState, mapMutations} from 'vuex'
import Item from '~/components/Item.vue'

export default {
  name: 'Items',
  components: {
    Item
  },
  data() {
    return {
      searchText: '',
      asurakuFlag: 0
    }
  },
  computed: {
    ...mapState({
      data: state => state.items,
    }),
  },
  mounted() {
    this.searchText = this.$store.state.items.keyword
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
