<template>
  <article v-show="showCompletedList" class="completed">
    <h3 class="completed__title">Completed</h3>
    <ul class="completed__tasks">
      <template v-for="{ id, title, completed } in list.todos" :key="id">
        <li v-if="completed" class="completed__task">
          <the-task :listID="listID" :id="id" :title="title" :checked="true"></the-task>
        </li>
      </template>
    </ul>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';
import TheTask from './TheTask.vue';

export default {
  name: 'completedList',
  props: ['listID'],
  components: {
    TheTask,
  },
  computed: {
    ...mapGetters({
      lists: 'getLists',
    }),
    list() {
      return this.lists.find((list) => list.id === this.listID);
    },
    showCompletedList() {
      return this.list.todos.some((todo) => todo.completed === true);
    },
  },
};
</script>

<style lang="scss" scoped>
.completed {
  padding: 0.5rem 0;

  &__completed {
    padding: 0.5rem 0;
  }

  &__tasks {
    padding-left: 0;
  }

  &__task {
    padding-bottom: 0;

    .task__title {
      text-decoration: line-through;
    }
  }
}
</style>
