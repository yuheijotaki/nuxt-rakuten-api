<template lang="pug">
  div
    input(
      v-model="searchText"
    )
    button(
      @click="getItems"
      value="検索"
    ) 検索
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'Search',
  data() {
    return {
      searchText: 'カービィ'
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
        this.$store.dispatch('items/getItems', this.searchText)
      },
    })
  }
}
</script>

<style lang="scss" scoped>
div {
  margin-left: 40px;
}
input {
  border: #000 1px solid;
}
</style>
