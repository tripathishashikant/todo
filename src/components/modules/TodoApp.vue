<template>
  <section class="app">
    <section class="app__header">
      <app-header :title="title"></app-header>
    </section>
    <main class="app__content">
      <todo-list :lists="lists"></todo-list>
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
  data() {
    return {
      title: 'Todo App',
      lists: [
        {
          name: 'List 1',
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
  provide() {
    return {
      lists: this.lists,
      toggleCompleted: this.toggleCompleted,
      addTask: this.addTask,
      addNewList: this.addNewList,
      deleteTask: this.deleteTask,
      editTask: this.editTask,
    };
  },
  methods: {
    addNewList(newList) {
      this.lists.push(newList);
    },
    toggleCompleted(listID, id) {
      for (let i = 0; i < this.lists.length; i += 1) {
        if (this.lists[i].id === listID) {
          for (let j = 0; j < this.lists[i].todos.length; j += 1) {
            if (this.lists[i].todos[j].id === id) {
              this.lists[i].todos[j].completed = !this.lists[i].todos[j].completed;
              break;
            }
          }
        }
      }
    },
    addTask(listID, newTask) {
      for (let i = 0; i < this.lists.length; i += 1) {
        if (this.lists[i].id === listID) {
          this.lists[i].todos.unshift({
            id: new Date().valueOf(),
            title: newTask,
            completed: false,
          });
        }
      }
    },
    deleteTask(listID, id) {
      for (let i = 0; i < this.lists.length; i += 1) {
        if (this.lists[i].id === listID) {
          for (let j = 0; j < this.lists[i].todos.length; j += 1) {
            if (this.lists[i].todos[j].id === id) {
              this.lists[i].todos.splice(j, 1);
              break;
            }
          }
        }
      }
    },
    editTask(listID, id, value) {
      for (let i = 0; i < this.lists.length; i += 1) {
        if (this.lists[i].id === listID) {
          for (let j = 0; j < this.lists[i].todos.length; j += 1) {
            if (this.lists[i].todos[j].id === id) {
              this.lists[i].todos[j].title = value;
              break;
            }
          }
        }
      }
    },
  },
};
</script>
