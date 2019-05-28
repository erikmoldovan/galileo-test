export default {
  namespaced: true,

  state: {
    visible: false
  },

  mutations: {
    toggleVisibility (state) {
      state.visible = !state.visible
    }
  }
}