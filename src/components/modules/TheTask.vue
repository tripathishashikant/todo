<template>
  <div class="task">
    <label class="task__label" :for="'list-' + listID + '-checkbox-' + '-task-' + id">
      <input
        class="task__checkbox"
        type="checkbox"
        :id="'list-' + listID + '-checkbox-' + '-task-' + id"
        :name="title"
        v-model="completed"
        @click="toggleCompletedTask({ listID, id })">
    </label>
    <input
      ref="task__title"
      class="task__title"
      type="text"
      :id="'list-' + listID + '-edit-task-' + id"
      :name="title"
      :value="title"
      @blur="editComplete(listID, id)"
      @keypress.enter="editComplete(listID, id)"
      readonly>
    <button
      class="task__edit nostyle"
      title="Edit this task"
      v-if="!completed"
      @click="editTheTask()">&#9998;</button>
    <button
      class="task__delete nostyle"
      title="Delete this task"
      @click="deleteTask({ listID, id })">&#10006;</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'theTask',
  props: ['listID', 'id', 'title', 'checked'],
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
    cursor: pointer;
    border: 0 none;
    background: transparent;

    &:hover {
      color: $sage;
    }
  }

  &__edit {
    padding: 0.5rem 0.5rem 0.3rem;
    position: absolute;
    top: 50%;
    right: 2.5rem;
    transform: translateY(-50%);
    font-size: 1.4rem;
    cursor: pointer;
    border: 0 none;
    background: transparent;

    &:hover {
      color: $sage;
    }
  }
}
</style>
