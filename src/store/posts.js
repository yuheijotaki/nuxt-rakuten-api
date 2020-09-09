export const state = () => ({
  posts: []
})

export const actions = {
  async getItems({ commit }, word) {
    const baseUrl = `${process.env.apiUrl}`
    const appId = `applicationId=${process.env.applicationId}`
    const keywordPrefix = '&keyword='
    const keyword = word
    const getUrl = encodeURI(baseUrl + appId + keywordPrefix + keyword)
    const res = await this.$axios.$get(getUrl)
    commit('setPosts', res)
  }
}

export const mutations = {
  setPosts(state, data) {
    state.posts = data
  }
}