import Vue from 'vue'
import Vuex from 'vuex'

import ModalStore from './store/ModalStore'
import ProvidersStore from './store/ProvidersStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    ModalStore,
    ProvidersStore
  }
})

Vue.store = store

export default store