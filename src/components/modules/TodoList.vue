<template>
  <article class="list" v-for="(list, i) in lists" :key="list.id">
    <h2 class="list__title">{{ list.listName }}</h2>
    <section class="list__wrapper">
      <section class="list__pending">
        <h3 class="list__subtitle">Pending tasks</h3>
        <ul class="list__pendingItems">
          <template v-for="( { id, title, completed }, j ) in list.todos" :key="id">
            <li v-if="!completed" class="list__item">
              <label class="list__label" :for="id">
                <input
                  :id="id"
                  class="list__checkbox"
                  type="checkbox"
                  :name="title"
                  @click="$emit('markComplete', { 'todoIndex': i, 'taskIndex': j })">
              </label>
              <p class="list__task">{{ title }}</p>
            </li>
          </template>
          <li v-show="showPendingTaskMessage">
            <p class="list__error">Hurray you completed all your pending task!</p>
          </li>
        </ul>
      </section>
      <section class="list__completed">
        <h3 class="list__subtitle">Completed tasks</h3>
        <ul class="list__completedItems">
          <template v-for="( { id, title, completed }, j) in list.todos" :key="id">
            <li v-if="completed" class="list__item">
              <label class="list__label" :for="id">
                <input
                  :id="id"
                  class="list__checkbox"
                  type="checkbox"
                  checked
                  :name="title"
                  @click="$emit('markComplete', { 'todoIndex': i, 'taskIndex': j })">
              </label>
              <p class="list__task list__task--completed">{{ title }}</p>
            </li>
          </template>
          <li v-show="showCompletedTaskMessage">
            <p class="list__error">Not a single task is completed yet!</p>
          </li>
        </ul>
      </section>
    </section>
  </article>
</template>

<script>
export default {
  name: 'todoList',
  props: ['lists'],
  emits: ['markComplete'],
  computed: {
    showPendingTaskMessage() {
      return this.lists.every((list) => list.todos.every((task) => task.completed !== false));
    },
    showCompletedTaskMessage() {
      return this.lists.every((list) => list.todos.every((task) => task.completed !== true));
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  &__title {
    padding: 0.5rem 0 1rem;
    text-align: center;
  }

  &__subtitle {
    padding: 0.5rem 0 1rem;
    text-align: center;
  }

  &__wrapper {
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

    &--completed {
      text-decoration: line-through;
    }
  }

  &__error {
    padding-top: 1rem;
    font-size: 2rem;
    text-align: center;
  }

  &__completed {
    padding: 1.5rem 0 0;
  }
}
</style>
