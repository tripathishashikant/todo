<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <SiteLogo />
        <h1 class="header__pageTitle">
          {{ title }}
        </h1>
      </div>
      <div class="header__menu menu">
        <div
          class="menu__toggleLayout toggleLayout"
          :title="showLayoutTitle"
          @click="setVerticalIconStatus"
        >
          <vertical-layout-icon v-if="showVerticalIconStatus" />
          <horizontal-layout-icon v-else />
        </div>
      </div>
      <div class="header__themeSwitcher">
        <theme-switcher />
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SiteLogo from './SiteLogo.vue';
import VerticalLayoutIcon from '../svgs/VerticalLayoutIcon.vue';
import HorizontalLayoutIcon from '../svgs/HorizontalLayoutIcon.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';

export default {
  name: 'AppHeader',
  components: {
    SiteLogo,
    VerticalLayoutIcon,
    HorizontalLayoutIcon,
    ThemeSwitcher,
  },
  computed: {
    ...mapGetters({
      title: 'getTitle',
      showVerticalIconStatus: 'appHeaderStore/showVerticalIconStatus',
      showLayoutTitle: 'appHeaderStore/showLayoutTitle',
    }),
  },
  watch: {
    showVerticalIconStatus(value) {
      if (value) {
        this.setLayoutTitle('Vertical view');
      } else {
        this.setLayoutTitle('Horizontal view');
      }
    },
  },
  methods: {
    ...mapActions({
      setVerticalIconStatus: 'appHeaderStore/setVerticalIconStatus',
      setLayoutTitle: 'appHeaderStore/setLayoutTitle',
    }),
  },
};
</script>

<style lang="scss" scoped>
.header {
  &__container {
    padding: 2rem 1.5rem;

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
  }

  &__logo {
    flex: 0 1 11rem;

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
  }

  &__menu {
    flex: 1 1 auto;
  }
}
</style>
