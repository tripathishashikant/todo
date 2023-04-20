<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <SiteLogo />
        <h1 class="header__pageTitle">
          {{ title }}
        </h1>
      </div>
      <div class="header__menu">
        <SiteMenu />
      </div>
      <div class="header__layoutSwitcher">
        <LayoutSwitcher />
      </div>
      <div class="header__themeSwitcher">
        <theme-switcher />
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import SiteLogo from './SiteLogo.vue';
import SiteMenu from './SiteMenu.vue';
import LayoutSwitcher from './LayoutSwitcher.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';

export default {
  name: 'AppHeader',
  components: {
    SiteLogo,
    SiteMenu,
    LayoutSwitcher,
    ThemeSwitcher,
  },
  computed: {
    ...mapGetters({
      title: 'getTitle',
    }),
  },
};
</script>

<style lang="scss" scoped>
.header {
  &__container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;

    padding: 2rem 1.5rem;
  }

  &__logo {
    flex: 0 1 11rem;

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;

    position:relative;
    right: 0.6rem;
  }

  &__menu {
    flex: 1 1 auto;

    display: flex;
    flex-flow:row nowrap;
    justify-content: space-around;
    align-items: center;
  }

  &__layoutSwitcher {
    flex: 0 1 auto;

    width:2.5rem;
    height:2.5rem;
  }
}
</style>
