<template>
  <div class="app__container">
    <section class="app__header">
      <app-header />
    </section>
    <main
      id="mainContent"
      class="app__content"
    >
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppHeader from './components/modules/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
  computed: {
    ...mapGetters({
      defaultTheme: 'themeSwitcherStore/getDefaultTheme',
    }),
  },
  watch: {
    defaultTheme(newValue, oldValue) {
      document.getElementById('body').classList.remove(oldValue);
      document.getElementById('body').classList.add(newValue);
    },
  },
  mounted() {
    // loading list from local storage
    const lists = JSON.parse(localStorage.getItem('lists'));
    if (lists) {
      this.setLists(lists);
    }
  },
  methods: {
    ...mapActions({
      setDefaultTheme: 'themeSwitcherStore/setDefaultTheme',
      setDefaultLayout: 'layoutSwitcherStore/setDefaultLayout',
      setLists: 'setLists',
    }),
  },
};
</script>

<style lang="scss">
@import './assets/scss/styles.scss';
</style>

<style lang="scss" scoped>
.app {
  &__content {
    padding:0 1.5rem;
  }
}
</style>
