<template>
  <section class="app">
    <section class="app__header">
      <app-header :title="title"></app-header>
    </section>
    <main class="app__content">
      <base-card>
        <add-task @addNewTask="addTask"></add-task>
      </base-card>
      <base-card>
        <pending-tasks :todos="todos" @markComplete="toggleCompleted"></pending-tasks>
      </base-card>
      <base-card>
        <completed-tasks :todos="todos" @markPending="toggleCompleted"></completed-tasks>
      </base-card>
    </main>
  </section>
</template>

<script>
import AppHeader from './AppHeader.vue';
import PendingTasks from './PendingTasks.vue';
import CompletedTasks from './CompletedTasks.vue';
import AddTask from './AddTask.vue';

export default {
  name: 'todoApp',
  components: {
    AppHeader,
    PendingTasks,
    CompletedTasks,
    AddTask,
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
  methods: {
    toggleCompleted(i) {
      this.todos[i].completed = !this.todos[i].completed;
    },
    addTask(newTask) {
      this.todos.unshift({
        id: new Date().valueOf(),
        title: newTask,
        completed: false,
      });
    },
  },
};
</script>
