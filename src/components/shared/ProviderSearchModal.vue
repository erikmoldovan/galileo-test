<template>
  <div id="modal-mask"
       :class="{ 'is-hidden': !visible }"
       @click.stop="dismissModal">
    <div class="modal-container">
      <div class="search">
        <div class="title">
          Search Providers
        </div>
        <form>
          <input type="text"
                 placeholder="Enter provider name"
                 v-model="filterValue"
                 @input="updateFilter" />
        </form>
        <SearchList />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import SearchList from '../SearchList'

export default {
  computed: {
    ...mapState('ModalStore', [ 'visible' ]),
    ...mapState('ProvidersStore', [ 'selectedProviders' ]),
  },

  components: {
    SearchList
  },

  data: () => {
    return {
      filterValue: ''
    }
  },

  methods: {
    dismissModal ({ target: { id }}) {
      if (id === 'modal-mask') this.$store.commit('ModalStore/toggleVisibility')
      this.$store.commit('ProvidersStore/updateFilter')
    },

    updateFilter () {
      this.$store.commit('ProvidersStore/updateFilter', this.filterValue)
    }
  }
}
</script>

<style scoped>
#modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity .3s ease;
  cursor: pointer;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  cursor: default;
  color: #000000;
  font-size: 18px;
}

.is-hidden {
  display: none !important;
}

.search {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  text-align: center;
}

form {
  padding-top: 12px;
  margin: 0 auto;
}

input {
  font-size: 18px;
  border-radius: 18px;
  border: 1px solid #000000;
  line-height: 36px;
  padding: 0 9px;
}
</style>