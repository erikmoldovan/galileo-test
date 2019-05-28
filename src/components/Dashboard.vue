<template>
  <div>
    <Header />
    <div class="body">
      <div class="title">
        Provider's Master View
      </div>
      <AddProviderBtn />
      <Providers />
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Providers from "./Providers.vue";
import AddProviderBtn from "./shared/AddProviderBtn.vue"

export default {
  name: 'GalileoTest',
  components: {
    Header,
    Providers,
    AddProviderBtn
  },
  mounted: function() {
    this.$store.dispatch('ProvidersStore/getAllProviders')
    this.$store.dispatch('ProvidersStore/getAllTasks')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-size: 36px;
  text-align: center;
}
</style>
