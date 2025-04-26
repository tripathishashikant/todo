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
        v-for="{ id, docId, title } in lists"
        :key="id"
        class="list__card"
      >
        <article class="list__article">
          <h3 class="list__title">
            {{ title }}
          </h3>
          <section class="list_completed">
            <completed-list
              :list-doc-id="docId"
              :show="false"
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
      getIsHorizontalLayoutClass: 'layoutSwitcherStore/getIsHorizontalLayoutClass',
    }),
  },
};
</script>
