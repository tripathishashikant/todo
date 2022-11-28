<template>
  <article class="list" v-for="list in lists" :key="list.id">
    <h2 class="list__title">{{ list.name }}</h2>
    <section class="list__addTask">
      <add-task :listID="list.id"></add-task>
    </section>
    <section class="list__pending">
      <pending-list :list="list"></pending-list>
    </section>
    <section class="list__completed">
      <completed-list :list="list"></completed-list>
    </section>
  </article>
</template>

<script>
import PendingList from './PendingList.vue';
import CompletedList from './CompletedList.vue';
import AddTask from './AddTask.vue';

export default {
  name: 'todoList',
  props: ['lists'],
  components: {
    PendingList,
    CompletedList,
    AddTask,
  },
};
</script>

<style lang="scss" scoped>
.list {
  &__title {
    padding: 0.5rem 0;
  }

  &__pending {
    padding: 0.5rem 0;
  }

  &__completed {
    padding: 0.5rem 0;
  }
}
</style>
