<template>
  <section class="pending">
    <ul class="pending__tasks">
      <template v-for="{ id, title, completed } in list.todos" :key="id">
        <li v-if="!completed" class="pending__task">
          <the-task :listID="list.id" :id="id" :title="title"></the-task>
        </li>
      </template>
    </ul>
  </section>
</template>

<script>
import TheTask from './TheTask.vue';

export default {
  name: 'pendingList',
  props: ['list'],
  components: {
    TheTask,
  },
};
</script>

<style lang="scss" scoped>
.pending {
  &__tasks {
    padding-left: 0;
  }

  &__task {
    padding-bottom: 0;
  }
}
</style>
