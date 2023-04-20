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
          v-for="{ id, title, completed } in list.todos"
        >
          <li
            v-if="!completed"
            :key="id"
            class="pending__task"
          >
            <the-task
              :id="id"
              :list-i-d="list.id"
              :title="title"
            />
          </li>
        </template>
      </ul>
    </div>
    <div
      v-show="showNoTaskPresentAlert"
      class="alert"
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
    listID: {
      type: Number,
      default: 0,
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
    showPendingList() {
      return this.list.todos.some((todo) => todo.completed === false);
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
