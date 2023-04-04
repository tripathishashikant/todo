<template>
  <div class="list" :class="{ list__horizontalLayout: !showVerticalIconStatus }">
    <div class="list__cardContainer">
      <base-card v-for="list in lists" :key="list.id" class="list__card">
        <section class="list__wrapper">
          <h2 class="list__title">{{ list.name }}</h2>
          <div class="list__addTask">
            <add-task :listID="list.id"></add-task>
          </div>
          <div class="list__pending">
            <pending-list
              :listID="list.id"
              :showAlertMessage="false">
            </pending-list>
          </div>
          <div class="list__completed">
            <completed-list
              :listID="list.id"
              :showTitle="true"
              :showAlertMessage="false">
            </completed-list>
          </div>
        </section>
      </base-card>
      <div class="list__card list__card--addListBtn">
        <add-list></add-list>
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
  name: 'todoList',
  components: {
    PendingList,
    CompletedList,
    AddTask,
    AddList,
  },
  computed: {
    ...mapGetters({
      lists: 'getLists',
      showVerticalIconStatus: 'appHeaderStore/showVerticalIconStatus',
    }),
  },
};
</script>
