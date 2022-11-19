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
              :name="title"
              @click="$emit('markPending', i)">
          </label>
          <p class="completed__task">{{ title }}</p>
        </li>
      </template>
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
    };
  },
};
</script>

<style lang="scss" scoped>
.completed {
  &__title {
    text-align: center;
  }

  &__list {
    padding-left: 0;
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
  }

  &__task {
    padding-bottom: 0;
  }
}
</style>
