<template>
  <div class="provider">
    <div class="name">{{ provider.first_name }} {{ provider.last_name }}</div>
    <ul class="tasks">
      <li v-for="task in organizeTasks()"
          :key="task.task_id">
        {{ task.task_id }}
      </li>
    </ul>
    <div class="button-container">
      <button @click="removeProvider">
        Remove
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    provider: Object
  },

  computed: {
    ...mapState('ProvidersStore', [ 'allTasks' ]),
  },

  methods: {
    removeProvider () {
      this.$store.commit('ProvidersStore/removeProvider', this.provider)
    },

    organizeTasks () {
      return this.allTasks.filter(task => task.owner === this.provider.doctor_id)
                             .sort((a, b) => b.priority - a.priority)             
    }
  }
}
</script>

<style scoped>
.provider {
  border: 1px solid #ffffff;
  font-size: 24px;
  padding: 24px;
}

.name {
  font-weight: 700;
}

ul {
  padding: 0;
  margin: 24px 0;
  text-align: center;
  list-style: inside;
}

li {
  margin: 8px;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

button {
  background-color: #0f152f;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 18px;
  font-size: 18px;
  padding: 18px;
  cursor: pointer;
  transition: background-color 0.5s, color 0.5s;
}

button:hover {
  background-color: #ffffff;
  color: #0f152f;
}
</style>