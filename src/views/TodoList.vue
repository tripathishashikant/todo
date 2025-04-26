<template>
  <div
    class="list"
    :class="{ list__horizontalLayout: getIsHorizontalLayoutClass }"
  >
    <div class="list__cardContainer">
      <base-card
        v-for="list in lists"
        :key="list.id"
        class="list__card"
      >
        <section class="list__wrapper">
          <h2 class="list__title">
            {{ list.name }}
          </h2>
          <div class="list__addTask">
            <add-task :list-i-d="list.id" />
          </div>
          <div class="list__pending">
            <pending-list
              :list-i-d="list.id"
              :show-alert-message="false"
            />
          </div>
          <div class="list__completed">
            <completed-list
              :list-i-d="list.id"
              :show-title="true"
              :show-alert-message="false"
            />
          </div>
        </section>
      </base-card>
      <div class="list__card list__card--addListBtn">
        <add-list />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PendingList from '../components/modules/PendingList.vue';
import CompletedList from '../components/modules/CompletedList.vue';
import AddTask from '../components/modules/AddTask.vue';
import AddList from '../components/modules/AddList.vue';

export default {
  name: 'TodoList',
  components: {
    PendingList,
    CompletedList,
    AddTask,
    AddList,
  },
  computed: {
    ...mapGetters({
      lists: 'getLists',
      getCurrentLayout: 'layoutSwitcherStore/getCurrentLayout',
      getIsHorizontalLayoutClass: 'layoutSwitcherStore/getIsHorizontalLayoutClass',
    }),
  },
};
</script>
