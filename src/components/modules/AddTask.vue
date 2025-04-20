<template>
  <div class="addTask">
    <div class="addTask__wrapper">
      <label
        class="addTask__label"
        :for="'addTask' + listDocId"
      >
        <input
          :id="'addTask' + listDocId"
          ref="addTask__input"
          v-model="newTask"
          class="addTask__input"
          type="text"
          placeholder="Add a task"
          @keydown.enter="addTask()"
        >
      </label>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddTask',
  props: {
    listDocId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      newTask: null,
    };
  },
  methods: {
    ...mapActions([
      'addNewTask',
    ]),
    addTask() {
      const task = {
        id: Date.now().toString(),
        listId: this.listDocId,
        title: this.newTask,
        isCompleted: false,
      };
      this.addNewTask(task);
      this.newTask = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.addTask {
  &__wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    padding: 0.5rem 0;
  }

  &__label {
    flex: 1 1 100%;
  }

  &__input {
    width: 100%;
    padding-left:0;
    padding-right:0;
    border: 0 none;
    background: transparent;
    outline: 0 none;
  }

  &__btn {
    font-size: 1.2rem;
    flex: 1 0 11rem;
  }
}
</style>
