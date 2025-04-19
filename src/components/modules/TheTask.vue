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
      :class="{ 'task__title--completed': addCompletedClass}"
      type="text"
      :name="title"
      :value="title"
      readonly
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
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    checked: {
      type: Boolean,
      default: false,
    },
    addCompletedClass: {
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
      this.editTask({ listID, id, value: this.$refs.task__title.value });
      this.$refs.task__title.classList.remove('task__title--edit');
      this.$refs.task__title.setAttribute('readonly', true);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;

.task {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  padding: 0.3rem 6rem 0.3rem 0;

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
    &--edit {
      .dark & {
        color: $tertiary-body-dark;
      }
    }

    &:read-only {
      border: 0 none;
      background: transparent;
      outline: 0 none;
    }

    &--completed {
      text-decoration: line-through;
    }
  }

  &__delete {
    padding: 0 0.5rem;
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
    font-size: 1.4rem;
    color: $primary-body-dark;
    cursor: pointer;
    border: 0 none;
    background: transparent;

    .light & {
      color: $primary-body-light;
    }

    &:hover {
      color: rgba($primary-body-dark, 0.5);

      .light & {
        color: rgba($primary-body-light, 0.5);
      }
    }
  }

  &__edit {
    padding: 0.5rem 0.5rem 0.3rem;

    position: absolute;
    top: 50%;
    right: 2.5rem;
    transform: translateY(-50%);

    font-family: $fontMerriweather;
    font-size: 1.4rem;
    color: $primary-body-dark;
    cursor: pointer;
    border: 0 none;
    background: transparent;

    .light & {
      color: $primary-body-light;
    }

    &:hover {
      color: rgba($primary-body-dark, 0.5);

      .light & {
        color: rgba($primary-body-light, 0.5);
      }
    }
  }
}
</style>
