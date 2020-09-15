export const state = () => ({
  items: [],
  keyword: 'カーヴィ',
  asuraku: 0
})

export const actions = {
  async getItems({ commit }, { text, asrk }) {
    const baseUrl = `${process.env.API_URL}`
    const appId = `applicationId=${process.env.APPLICATION_ID}`
    const keywordPrefix = '&keyword='
    const keyword = text
    // const pagePrefix = '&page='
    // const page = 1
    const asurakuPrefix = '&asurakuFlag='
    const asuraku = asrk
    const getUrl = encodeURI(baseUrl + appId + keywordPrefix + keyword + asurakuPrefix + asuraku)
    const res = await this.$axios.$get(getUrl)
    commit('setItems', res)
    commit('setKeyword', keyword)
    commit('setCheck', asuraku)
  }
}

export const mutations = {
  setItems(state, data) {
    state.items = data
  },
  setKeyword(state, text) {
    state.keyword = text
  },
  setCheck(state, check) {
    state.asuraku = check
  }
}
