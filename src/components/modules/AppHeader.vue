<template>
  <header class="header">
    <h1 class="header__title">{{ title }}</h1>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'appHeader',
  computed: {
    ...mapGetters({
      title: 'getTitle',
    }),
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 2rem 1.5rem;

  &__title {
    text-align: center;
  }
}
</style>
