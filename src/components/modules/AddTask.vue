<template>
  <article class="addTask">
    <h2 class="addTask__title">{{ title }}</h2>
    <section class="addTask__wrapper">
      <label class="addTask__label" for="addTask">
        <input
          id="addTask"
          class="addTask__input"
          type="text"
          placeholder="what's on your mind?"
          v-model="newTask"
          @keydown.enter="addTask()" />
      </label>
      <button class="addTask__btn" type="button" @click="addTask()">Add task</button>
    </section>
  </article>
</template>

<script>
export default {
  name: 'addTask',
  emits: ['addNewTask'],
  data() {
    return {
      title: 'Add New Task',
      newTask: null,
    };
  },
  methods: {
    addTask() {
      this.$emit('addNewTask', this.newTask);
      this.newTask = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.addTask {
  &__title {
    text-align: center;
  }

  &__wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 0;
  }

  &__input {
    font-size: 2rem;
  }

  &__btn {
    font-size: 2rem;
  }
}
</style>
