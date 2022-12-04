<template>
  <section class="task">
    <label class="task__label" :for="id">
      <input
        :id="id"
        class="task__checkbox"
        type="checkbox"
        :name="title"
        v-model="completed"
        @click="toggleCompleted(listID, id)">
    </label>
    <p class="task__title">{{ title }}</p>
    <button class="task__delete nostyle" @click="deleteTask(listID, id)">x</button>
  </section>
</template>

<script>
export default {
  name: 'theTask',
  props: ['listID', 'id', 'title', 'checked'],
  inject: ['toggleCompleted', 'deleteTask'],
  data() {
    return {
      completed: this.checked,
    };
  },
};
</script>

<style lang="scss" scoped>
.task {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  padding: 0.5rem 0;

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
    line-height: normal;
    padding: 0.1rem 0 0;
  }

  &__delete {
    padding: 0 0.5rem;
    position: absolute;
    top: 50%;
    right: 00.5rem;
    transform: translateY(-50%);
    font-size: 1.6rem;
    cursor: pointer;
    border: 0 none;
    background: transparent;

    &:hover {
      outline: 0.1rem solid $tangaroa;
    }
  }
}
</style>
