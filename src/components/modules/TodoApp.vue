<template>
  <section class="app">
    <section class="app__header">
      <app-header></app-header>
    </section>
    <main class="app__content">
      <todo-list></todo-list>
    </main>
  </section>
</template>

<script>
import AppHeader from './AppHeader.vue';
import TodoList from './TodoList.vue';

export default {
  name: 'todoApp',
  components: {
    AppHeader,
    TodoList,
  },
};
</script>
