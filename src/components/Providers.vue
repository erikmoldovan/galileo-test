<template>
  <div class="providers-container">
    <Provider v-for="provider in getSelectedProviders"
              :provider="provider"
              :key="provider.doctor_id" />
  </div>
</template>

<script>
import Provider from './Provider'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('ProvidersStore', [ 'getSelectedProviders' ])
  },

  components: {
    Provider
  }
}
</script>

<style scoped>
.providers-container {
  margin-top: 36px;
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>