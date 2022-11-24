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
        <todo-list :lists="lists" @markComplete="toggleCompleted"></todo-list>
      </base-card>
    </main>
  </section>
</template>

<script>
import AppHeader from './AppHeader.vue';
import TodoList from './TodoList.vue';
import AddTask from './AddTask.vue';

export default {
  name: 'todoApp',
  components: {
    AppHeader,
    TodoList,
    AddTask,
  },
  data() {
    return {
      title: 'Todo App',
      lists: [
        {
          listName: 'List 1',
          id: 1,
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
        },
      ],
    };
  },
  methods: {
    toggleCompleted(index) {
      const { todoIndex, taskIndex } = index;
      this.lists[todoIndex].todos[taskIndex].completed = !this.lists[todoIndex]
        .todos[taskIndex].completed;
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
