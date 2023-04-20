<template>
  <div
    v-show="showCompletedList"
    class="completed"
  >
    <div
      class="completed__wrapper"
    >
      <h3
        v-if="showTitle"
        class="completed__title"
      >
        Completed
      </h3>
      <ul class="completed__tasks">
        <template
          v-for="{ id, title, completed } in list.todos"
        >
          <li
            v-if="completed"
            :key="id"
            class="completed__task"
          >
            <the-task
              :id="id"
              :list-i-d="listID"
              :title="title"
              :checked="true"
              :add-completed-class="true"
            />
          </li>
        </template>
      </ul>
    </div>
    <div
      v-show="showNoTaskCompletedAlert"
      class="alert"
    >
      <p class="alert__title">
        You haven't completed any task from this list yet.
        Common start with the least difficult one!
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TheTask from './TheTask.vue';

export default {
  name: 'CompletedList',
  components: {
    TheTask,
  },
  props: {
    listID: {
      type: Number,
      default: 0,
    },
    showTitle: {
      type: Boolean,
      default: false,
    },
    showAlertMessage: {
      type: Boolean,
      default: false,
    },
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
    showNoTaskCompletedAlert() {
      if (this.showAlertMessage && !this.showCompletedList) {
        return true;
      }

      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.completed {
  padding: 0.5rem 0;

  &__title {
    padding: 1rem 0 1.5rem;
  }

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
