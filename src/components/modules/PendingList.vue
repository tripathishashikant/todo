<template>
  <section v-show="showPendingList" class="pending">
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
import { mapGetters } from 'vuex';
import TheTask from './TheTask.vue';

export default {
  name: 'pendingList',
  props: ['listID'],
  components: {
    TheTask,
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
      background-color: $aliceBlue;

      &:before,
      &:after {
        background-color: $aliceBlue;
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
