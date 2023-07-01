<template>
  <section
    class="list"
    :class="{ list__horizontalLayout: getIsHorizontalLayoutClass }"
  >
    <header class="list__header">
      <h2 class="list__headerTitle">
        {{ title }}
      </h2>
    </header>
    <div class="list__cardContainer">
      <base-card
        v-for="list in lists"
        :key="list.id"
      >
        <article class="list__article">
          <h3 class="list__title">
            {{ list.name }}
          </h3>
          <section class="list_pending">
            <pending-list
              :list-i-d="list.id"
              :show-alert-message="true"
            />
          </section>
        </article>
      </base-card>
    </div>
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
      title: 'Pending Tasks',
    };
  },
  computed: {
    ...mapGetters({
      lists: 'getLists',
      getIsHorizontalLayoutClass: 'layoutSwitcherStore/getIsHorizontalLayoutClass',
    }),
  },
};
</script>
