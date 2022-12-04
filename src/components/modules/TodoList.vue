<template>
  <section class="list">
    <base-card v-for="list in lists" :key="list.id">
      <article class="list__article">
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
    </base-card>
    <section class="list__newList">
      <add-list :lists="lists" @emit:addNewList="addNewList"></add-list>
    </section>
  </section>
</template>

<script>
import PendingList from './PendingList.vue';
import CompletedList from './CompletedList.vue';
import AddTask from './AddTask.vue';
import AddList from './AddList.vue';

export default {
  name: 'todoList',
  inject: ['lists', 'addNewList'],
  components: {
    PendingList,
    CompletedList,
    AddTask,
    AddList,
  },
};
</script>

<style lang="scss" scoped>
.list {
  padding: 0 1.5rem;

  &__title {
    padding: 0.5rem 0;
  }

  &__newList {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }
}
</style>
