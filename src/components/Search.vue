<template lang="pug">
  div
    input(
      v-model="searchText"
    )
    button(
      @click="getItems"
      value="検索"
    ) 検索
    label
      input(
        @click="toggleAsurakuCheck(); getItems();"
        type="checkbox"
        id="asuraku"
        value="あす楽対応可能"
      )
      | あす楽対応可能
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'Search',
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
        // this.$store.dispatch('items/getItems', this.searchText)
        this.$store.dispatch('items/getItems', {
          text: this.searchText,
          asrk: this.asurakuFlag
        })
      },
    }),
    toggleAsurakuCheck() {
      if (this.asurakuFlag === 0) {
        this.asurakuFlag = 1
      } else {
        this.asurakuFlag = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  margin-left: 40px;
}
input,button {
  border: #000 1px solid;
}
button {
  background: #ccc;
}
</style>
