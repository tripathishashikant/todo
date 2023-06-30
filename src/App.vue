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
import CONSTANTS from './constants/index';

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
    // setting default theme
    const currentTheme = localStorage.getItem(CONSTANTS.LOCAL_STORAGE.currentTheme);

    if (currentTheme) {
      this.setDefaultTheme(currentTheme);
    } else {
      localStorage.setItem(CONSTANTS.LOCAL_STORAGE.currentTheme, this.defaultTheme);
    }
  },
  methods: {
    ...mapActions({
      setDefaultTheme: 'themeSwitcherStore/setDefaultTheme',
      setDefaultLayout: 'layoutSwitcherStore/setDefaultLayout',
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
