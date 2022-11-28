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
  </section>
</template>

<script>
export default {
  name: 'theTask',
  props: ['listID', 'id', 'title', 'checked'],
  inject: ['toggleCompleted'],
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
}
</style>
