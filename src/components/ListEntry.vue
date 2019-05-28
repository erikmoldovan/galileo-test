<template>
  <li>
    <button @click="addProvider" :disabled="checkIfSelected()">
      Add
    </button>
    <span>{{ provider.first_name }} {{ provider.last_name }}</span>
  </li>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('ProvidersStore', [ 'getSelectedProviders' ])
  },

  props: {
    provider: Object
  },

  methods: {
    addProvider () {
      this.$store.dispatch('ProvidersStore/selectProvider', this.provider)
    },

    checkIfSelected () {
      return this.getSelectedProviders.filter(provider => {
        return provider.doctor_id === this.provider.doctor_id
      }).length > 0
    }
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
  margin: 8px 0;
}

button {
  position: relative;
  top: -1px;
  margin-right: 8px;
}
</style>