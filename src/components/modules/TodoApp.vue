<template>
  <section class="app">
    <section class="app__header">
      <app-header :title="title"></app-header>
    </section>
    <main class="app__content">
    </main>
  </section>
</template>

<script>
import AppHeader from './AppHeader.vue';

export default {
  name: 'todoApp',
  components: {
    AppHeader,
  },
  data() {
    return {
      title: 'Todo App',
      todos: [
        {
          id: 1,
          title: 'Learn Vue',
          completed: false,
        },
        {
          id: 2,
          title: 'Learn Vuex',
          completed: false,
        },
        {
          id: 3,
          title: 'Learn Vue Router',
          completed: false,
        },
      ],
    };
  },
};
</script>
