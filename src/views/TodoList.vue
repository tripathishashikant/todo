<template>
  <div
    v-if="siteDataLoaded"
    class="list"
    :class="{ list__horizontalLayout: getIsHorizontalLayoutClass }"
  >
    <div class="list__cardContainer">
      <base-card
        class="list__card"
        v-for="{ id, docId, title } in lists"
        :key="id"
      >
        <section class="list__wrapper">
          <div class="list__header">
            <h2 class="list__title">
              {{ title }}
            </h2>
            <button
              class="list__deleteBtn nostyle"
              @click="deleteList(docId)"
            >
              <DeleteIcon />
            </button>
          </div>

          <div class="list__addTask">
            <add-task :list-doc-id="docId" />
          </div>

          <div class="list__pending">
            <pending-list
              :list-doc-id="docId"
              :show-alert-message="false"
            />
          </div>

          <div class="list__completed">
            <completed-list
              :list-doc-id="docId"
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

  <div
    class="list__loading"
    v-else
  >
    <LoaderSVG />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PendingList from '@/components/modules/PendingList.vue';
import CompletedList from '@/components/modules/CompletedList.vue';
import AddTask from '@/components/modules/AddTask.vue';
import AddList from '@/components/modules/AddList.vue';
import LoaderSVG from '@/components/svgs/LoaderSVG.vue';
import DeleteIcon from '@/components/svgs/DeleteIcon.vue';

export default {
  name: 'TodoList',
  components: {
    PendingList,
    CompletedList,
    AddTask,
    AddList,
    LoaderSVG,
    DeleteIcon,
  },
  computed: {
    ...mapGetters({
      lists: 'getLists',
      siteDataLoaded: 'siteDataLoaded',
      getCurrentLayout: 'layoutSwitcherStore/getCurrentLayout',
      getIsHorizontalLayoutClass: 'layoutSwitcherStore/getIsHorizontalLayoutClass',
    }),
  },
  mounted() {
    // loading data from firebase firestore
    this.subscribeToData();
  },
  methods: {
    ...mapActions({
      deleteList: 'deleteList',
      subscribeToData: 'subscribeToData',
    }),
  },
};
</script>
