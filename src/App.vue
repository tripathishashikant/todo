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
      document.getElementsByTagName('body')[0].classList.remove(oldValue);
      document.getElementsByTagName('body')[0].classList.add(newValue);
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
@use '@/assets/scss/styles.scss' as *;
</style>

<style lang="scss" scoped>
.app {
  &__content {
    padding:0 1.5rem;
  }
}
</style>
