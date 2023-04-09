<template>
  <div class="app__container">
    <section class="app__header">
      <app-header></app-header>
    </section>
    <main class="app__content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppHeader from './components/modules/AppHeader.vue';

export default {
  name: 'app',
  components: {
    AppHeader,
  },
  computed: {
    ...mapGetters({
      defaultTheme: 'getDefaultTheme',
    }),
  },
  watch: {
    defaultTheme(newValue, oldValue) {
      document.getElementById('body').classList.remove(oldValue);
      document.getElementById('body').classList.add(newValue);
    },
  },
  methods: {
    ...mapActions([
      'setDefaultTheme',
    ]),
  },
};
</script>

<style lang="scss">
@import './assets/scss/styles.scss';
</style>
