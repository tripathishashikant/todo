<template>
  <div
    v-show="showPendingList"
    class="pending"
  >
    <div
      class="pending_wrapper"
    >
      <ul class="pending__tasks">
        <template
          v-for="{ id, docId, title, isCompleted } in pendingTasks"
        >
          <li
            v-if="!isCompleted"
            :key="id"
            class="pending__task"
          >
            <the-task
              :id="id"
              :task-doc-id="docId"
              :list-doc-id="listDocId"
              :title="title"
            />
          </li>
        </template>
      </ul>
    </div>
    <div
      v-show="showNoTaskPresentAlert"
      class="alert"
      role="alert"
    >
      <p class="alert__title">
        Hurray you have completed all the tasks from this list!
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TheTask from './TheTask.vue';

export default {
  name: 'PendingList',
  components: {
    TheTask,
  },
  props: {
    listDocId: {
      type: String,
      default: '',
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
    pendingTasks() {
      return this.tasks.filter((task) => task.listId === this.listDocId);
    },
    showPendingList() {
      return this.pendingTasks.some((task) => task.isCompleted === false);
    },
    showNoTaskPresentAlert() {
      if (this.showAlertMessage && !this.showPendingList) {
        return true;
      }

      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;

.pending {
  padding: 0.5rem 0;

  &__tasks {
    padding-left: 0;
  }

  &__task {
    position: relative;
    padding-bottom: 0;

    &:hover {
      background-color: $tertiary-bg-dark;

      .light & {
        background-color: $tertiary-bg-light;
      }

      &:before,
      &:after {
        background-color: $tertiary-bg-dark;

        .light & {
          background-color: $tertiary-bg-light;
        }
      }
    }

    &:before,
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      background-color: transparent;
    }

    &:before {
      left: -100%;
    }

    &:after {
      right: -100%;
    }
  }
}
</style>
