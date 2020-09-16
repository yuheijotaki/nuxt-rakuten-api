<template lang="pug">
  div.items
    template(v-if="data.items.count !== 0")
      ul.items__list
        Item(
          v-for="(item,index) in data.items.Items"
          :key="index"
          :item="item"
        )
    template(v-else)
      div.items__empty
        p.items__empty-text 該当する検索結果がありませんでした。
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
    this.asurakuFlag = this.$store.state.items.asuraku
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
.items {
}
.items__list {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}
.items__empty {
}
.items__empty-text {
  color: #111;
  font-size: 14px;
  font-weight: bold;
}
</style>
