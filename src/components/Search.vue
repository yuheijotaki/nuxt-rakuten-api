<template lang="pug">
  div.search
    form.search-form(
      @submit.prevent
    )
      input.search-form__input(
        v-model="searchText"
      )
      button.search-form__button(
        @click="getItems"
        value="検索"
      ) 検索
    label.search-label
      input.search-label__toggle(
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
    this.setAsurakuCheck()
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
    },
    setAsurakuCheck() {
      if (this.asurakuFlag === 1) {
        document.getElementById('asuraku').checked = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  margin-left: 40px;
  font-size: 16px;
  line-height: 1;
}
.search-form {
}
.search-form__input,
.search-form__button {
  padding: 4px 8px;
  height: 34px;
}
.search-form__input {
  border: #aaa 1px solid;
  border-right: 0;
  border-radius: 2px 0 0 2px;
  color: #111;
  width: 400px;
}
.search-form__button {
  background-color: #333;
  border: #333 1px solid;
  border-radius: 0 2px 2px 0;
  color: #fff;
}
.search-label {
  margin-left: 20px;
}
.search-label__toggle {
  margin-right: 4px;
}
</style>
