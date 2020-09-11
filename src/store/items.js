export const state = () => ({
  items: [],
  keyword: ''
})

export const actions = {
  async getItems({ commit }, { text, asrk }) {
    const baseUrl = `${process.env.apiUrl}`
    const appId = `applicationId=${process.env.applicationId}`
    const keywordPrefix = '&keyword='
    const keyword = text
    // const pagePrefix = '&page='
    // const page = 1
    const asurakuPrefix = '&asurakuFlag='
    const asuraku = asrk
    const getUrl = encodeURI(baseUrl + appId + keywordPrefix + keyword + asurakuPrefix + asuraku)
    const res = await this.$axios.$get(getUrl)
    commit('setItems', res)
  }
}

export const mutations = {
  setItems(state, data) {
    console.log(data)
    state.items = data
  },
  setKeyword(state, text) {
    state.keyword = text
  }
}