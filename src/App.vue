<template>
  <div id="app">
    <Dashboard />
    <ProviderSearchModal />
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'
import ProviderSearchModal from './components/shared/ProviderSearchModal.vue'

export default {
  name: 'Galileo-Providers-Dashboard',

  components: {
    Dashboard,
    ProviderSearchModal
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: #0f152f;
}

#app {
  font-family: sofia,"Helvetica Neue",Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 10px;
  color: #ffffff;
  flex: 1;
  max-width: 1024px;
}
</style>
