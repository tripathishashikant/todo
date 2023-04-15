<template>
  <div class="task">
    <label
      class="task__label"
      :for="'list-' + listID + '-checkbox-' + '-task-' + id"
    >
      <input
        :id="'list-' + listID + '-checkbox-' + '-task-' + id"
        v-model="completed"
        class="task__checkbox"
        type="checkbox"
        :name="title"
        @click="toggleCompletedTask({ listID, id })"
      >
    </label>
    <input
      :id="'list-' + listID + '-edit-task-' + id"
      ref="task__title"
      class="task__title"
      type="text"
      :name="title"
      :value="title"
      readonly
      @blur="editComplete(listID, id)"
      @keypress.enter="editComplete(listID, id)"
    >
    <button
      v-if="!completed"
      class="task__edit nostyle"
      title="Edit this task"
      @click="editTheTask()"
    >
      &#9998;
    </button>
    <button
      class="task__delete nostyle"
      title="Delete this task"
      @click="deleteTask({ listID, id })"
    >
      &#10006;
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TheTask',
  props: {
    listID: {
      type: Number,
      default: 0,
    },
    id: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: '',
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      completed: this.checked,
    };
  },
  methods: {
    ...mapActions([
      'toggleCompletedTask',
      'deleteTask',
      'editTask',
    ]),
    editTheTask() {
      this.$refs.task__title.removeAttribute('readonly');
      this.$refs.task__title.classList.add('task__title--edit');
      this.$refs.task__title.focus();
    },
    editComplete(listID, id) {
      this.editTask(listID, id, this.$refs.task__title.value);
      this.$refs.task__title.setAttribute('readonly', true);
    },
  },
};
</script>

<style lang="scss" scoped>
.task {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  padding: 0.7rem 6rem 0.5rem 0;

  &__label {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }

  &__checkbox {
    width: 100%;
    height: 100%;
  }

  &__title {
    &:read-only {
      border: 0 none;
      background: transparent;
      outline: 0 none;
    }
  }

  &__delete {
    padding: 0 0.5rem;
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
    font-size: 1.4rem;
    color: $primary-icon-dark;
    cursor: pointer;
    border: 0 none;
    background: transparent;

    .light & {
      color: $primary-icon-light;
    }

    &:hover {
      color: $tertiary-bg-light;

      .light & {
        color: $tertiary-bg-dark;
      }
    }
  }

  &__edit {
    padding: 0.5rem 0.5rem 0.3rem;
    position: absolute;
    top: 50%;
    right: 2.5rem;
    transform: translateY(-50%);
    font-size: 1.4rem;
    color: $primary-icon-dark;
    cursor: pointer;
    border: 0 none;
    background: transparent;

    .light & {
      color: $primary-icon-light;
    }

    &:hover {
      color: $tertiary-bg-light;

      .light & {
        color: $tertiary-bg-dark;
      }
    }
  }
}
</style>
