<template>
  <section class="list">
    <header class="list__header">
      <h2 class="list__headerTitle">{{ title }}</h2>
    </header>
    <base-card v-for="list in lists" :key="list.id">
      <article class="list__article">
        <h3 class="list__title">{{ list.name }}</h3>
        <section class="list_pending">
          <pending-list :listID="list.id" :showAlertMessage="true"></pending-list>
        </section>
      </article>
    </base-card>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import PendingList from '../components/modules/PendingList.vue';

export default {
  name: 'PendingTasks',
  components: {
    PendingList,
  },
  data() {
    return {
      title: 'Pending List',
    };
  },
  computed: {
    ...mapGetters({
      lists: 'getLists',
    }),
  },
};
</script>
