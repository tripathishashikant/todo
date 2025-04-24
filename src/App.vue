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
    // Init authentication
    this.init();
  },
  methods: {
    ...mapActions({
      setDefaultTheme: 'themeSwitcherStore/setDefaultTheme',
      setDefaultLayout: 'layoutSwitcherStore/setDefaultLayout',
      init: 'authStore/init',
    }),
  },
};
</script>

<style lang="scss">
@use '@/assets/scss/styles.scss' as *;
</style>

<style lang="scss" scoped>
.app {
  &__container {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
    grid-template-areas: "header" "content";
    min-height: 100vh;
  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;

    padding:0 1.5rem;
  }
}
</style>
