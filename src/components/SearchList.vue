<template>
  <div class="providers-list">
    <ul>
      <ListEntry v-for="provider in getFilteredProviders"
          :provider="provider"
          :key="provider.doctor_id" />
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ListEntry from './ListEntry'

export default {
  components: {
    ListEntry
  },

  computed: {
    ...mapGetters('ProvidersStore', [ 'getFilteredProviders' ])
  }
}
</script>