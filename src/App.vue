<template>
  <TodoApp />
</template>

<script>
import TodoApp from './components/modules/TodoApp.vue';

export default {
  name: 'app',
  components: {
    TodoApp,
  },
};
</script>

<style lang="scss">
@import './assets/scss/styles.scss';
</style>
