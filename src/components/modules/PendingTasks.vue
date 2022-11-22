<template>
  <article class="pending">
    <h2 class="pending__title">{{ title }}</h2>
    <ul class="pending__list">
      <template v-for="( { id, title, completed }, i) in todos" :key="id">
        <li v-if="!completed" class="pending__item">
          <label class="pending__label" for="id">
            <input
              :id="id"
              class="pending__checkbox"
              type="checkbox"
              :name="title"
              @click="$emit('markComplete', i)">
          </label>
          <p class="pending__task">{{ title }}</p>
        </li>
      </template>
      <li v-show="showEmptyTaskMessage">
        <p class="pending__error">Hurray you completed all your pending task!</p>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'pendingTasks',
  props: ['todos'],
  data() {
    return {
      title: 'Pending Tasks',
    };
  },
  computed: {
    showEmptyTaskMessage() {
      return this.todos.every((todo) => todo.completed !== false);
    },
  },
};
</script>

<style lang="scss" scoped>
.pending {
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
    font-size: 2rem;
    padding-bottom: 0;
  }

  &__error {
    padding-top: 1rem;
    font-size: 2rem;
    text-align: center;
  }
}
</style>
