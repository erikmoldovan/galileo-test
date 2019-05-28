import ProvidersAPI from '../api/ProvidersAPI'

export default {
  namespaced: true,

  state: {
    allProviders: [],
    allTasks: [],
    selectedProvidersIDs: [],
    filterValue: ''
  },

  actions: {
    getAllProviders (context) {
      context.commit('updateAllProviders', ProvidersAPI.getAllProviders())
    },

    getAllTasks (context) {
      context.commit('updateAllTasks', ProvidersAPI.getProviderTasks())
    },

    selectProvider (context, provider) {
      context.commit('addProviderToView', provider)
    },

    filterProviders (context) {
      context.getters.getFilteredProviders
    }
  },

  mutations: {
    updateAllProviders (state, providersList) {
      providersList.then(data => {
        state.allProviders = data
      })
    },

    updateAllTasks (state, tasksLists) {
      tasksLists.then(data => {
        state.allTasks = data
      })
    },

    updateFilter (state, newValue) {
      state.filterValue = newValue ? newValue : ''
    },

    addProviderToView (state, { doctor_id }) {
      state.selectedProvidersIDs.push(doctor_id)
    },

    removeProvider (state, { doctor_id }) {
      state.selectedProvidersIDs = state.selectedProvidersIDs.filter(id => id !== doctor_id)
    }
  },

  getters: {
    getFilteredProviders (state) {
      if (!state.filterValue) return state.allProviders
      return state.allProviders.filter(provider => {
        return provider.first_name.includes(state.filterValue) ||
               provider.last_name.includes(state.filterValue) ||
               state.selectedProvidersIDs.includes(provider.doctor_id)
      })
    },

    getSelectedProviders (state) {
      return state.allProviders.filter(provider => {
        return state.selectedProvidersIDs.includes(provider.doctor_id)
      })
    }
  }
}