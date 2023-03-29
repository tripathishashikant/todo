<template>
  <section class="list">
    <header class="list__header">
      <h2 class="list__headerTitle">{{ title }}</h2>
    </header>
    <base-card v-for="list in lists" :key="list.id">
      <article class="list__article">
        <h3 class="list__title">{{ list.name }}</h3>
        <section class="list_pending">
          <completed-list
            :listID="list.id"
            :show="false"
            :showAlertMessage="true">
          </completed-list>
        </section>
      </article>
    </base-card>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import CompletedList from '../components/modules/CompletedList.vue';

export default {
  name: 'CompletedTasks',
  components: {
    CompletedList,
  },
  data() {
    return {
      title: 'Completed Tasks',
    };
  },
  computed: {
    ...mapGetters({
      lists: 'getLists',
    }),
  },
};
</script>
