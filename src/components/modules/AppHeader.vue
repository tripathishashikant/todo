<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo logo">
        <router-link
          to="/"
          class="logo__link"
        >
          <the-logo />
          <h1 class="logo__title">
            {{ title }}
          </h1>
        </router-link>
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
import TheLogo from '../svgs/TheLogo.vue';
import VerticalLayoutIcon from '../svgs/VerticalLayoutIcon.vue';
import HorizontalLayoutIcon from '../svgs/HorizontalLayoutIcon.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';

export default {
  name: 'AppHeader',
  components: {
    TheLogo,
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
  }

  &__menu {
    flex: 1 1 auto;
  }
}
</style>
