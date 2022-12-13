<template>
  <section class="app">
    <section class="app__header">
      <app-header></app-header>
    </section>
    <main class="app__content">
      <router-view></router-view>
    </main>
  </section>
</template>

<script>
import AppHeader from './AppHeader.vue';

export default {
  name: 'todoApp',
  components: {
    AppHeader,
  },
};
</script>
