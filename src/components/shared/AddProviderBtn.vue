<template>
  <div class="add-provider-btn-container">
    <button @click="toggleProviderSearchModal">
      Add Provider
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    toggleProviderSearchModal () {
      this.$store.commit('ModalStore/toggleVisibility')
    }
  }
}
</script>

<style scoped>
.add-provider-btn-container {
  margin-top: 36px;
  width: 100%;
  display: flex;
  justify-content: center;
}

button {
  background-color: #0f152f;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 18px;
  font-size: 24px;
  padding: 18px;
  cursor: pointer;
  transition: background-color 0.5s, color 0.5s;
}

button:hover {
  background-color: #ffffff;
  color: #0f152f;
}
</style>