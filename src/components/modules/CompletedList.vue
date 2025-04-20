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
          v-for="{ id, title, isCompleted } in completedTasks"
        >
          <li
            v-if="isCompleted"
            :key="id"
            class="completed__task"
          >
            <the-task
              :id="id"
              :list-id="listId"
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
    listId: {
      type: String,
      default: '',
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
      tasks: 'getTasks',
    }),
    completedTasks() {
      return this.tasks.filter((list) => list.listId === this.listId);
    },
    showCompletedList() {
      return this.completedTasks.some((task) => task.isCompleted);
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
