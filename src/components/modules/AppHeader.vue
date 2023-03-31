<template>
  <header class="header">
    <section class="header__container">
      <div class="header__logo logo">
        <router-link to="/" class="logo__link">
          <the-logo></the-logo>
          <h1 class="logo__title">{{ title }}</h1>
        </router-link>
      </div>
    </section>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import TheLogo from '../svgs/TheLogo.vue';

export default {
  name: 'appHeader',
  components: {
    TheLogo,
  },
  computed: {
    ...mapGetters({
      title: 'getTitle',
    }),
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/modules/logo';
</style>

<style lang="scss" scoped>
.header {
  &__container {
    padding: 2rem 1.5rem;

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
