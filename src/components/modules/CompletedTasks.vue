<template>
  <article class="completed">
    <h2 class="completed__title">{{ title }}</h2>
    <ul class="completed__list">
      <template v-for="( { id, title, completed }, i) in todos" :key="id">
        <li v-if="completed" class="completed__item">
          <label class="completed__label" for="id">
            <input
              :id="id"
              class="completed__checkbox"
              type="checkbox"
              checked
              :name="title"
              @click="$emit('markPending', i)">
          </label>
          <p class="completed__task">{{ title }}</p>
        </li>
      </template>
      <li v-show="showEmptyTaskMessage">
        <p class="completed__error">{{ noTaskMessage }}</p>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'completedTasks',
  props: ['todos'],
  data() {
    return {
      title: 'Completed tasks',
      noTaskMessage: 'Not a single task is completed yet!',
    };
  },
  computed: {
    showEmptyTaskMessage() {
      return this.todos.every((todo) => todo.completed !== true);
    },
  },
};
</script>

<style lang="scss" scoped>
.completed {
  &__title {
    text-align: center;
  }

  &__list {
    padding: 1rem 0;
  }

  &__item {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;

    flex: 1 1 100%;

    padding-bottom: 0;
  }

  &__label {
    display: flex;
    align-items: center;

    margin-right: 2rem;
  }

  &__checkbox {
    width: 2rem;
    height: 2rem;
  }

  &__task {
    padding-bottom: 0;
    font-size: 2rem;
    text-decoration: line-through;
  }

  &__error {
    padding-top: 1rem;
    font-size: 2rem;
    text-align: center;
  }
}
</style>
