<template>
  <div class="themeSwitcher">
    <div
      class="themeSwitcher__wrapper"
      :aria-label="title"
    >
      <div
        class="themeSwitcher__svg themeSwitcher__svg--moon"
        @click="updateTheme('dark')"
      >
        <MoonSVG />
      </div>
      <div
        class="themeSwitcher__svg themeSwitcher__svg--circle"
        title="circle image"
      >
        <span class="visually-hidden">circle</span>
      </div>
      <div
        class="themeSwitcher__svg themeSwitcher__svg--sun"
        @click="updateTheme('light')"
      >
        <SunSVG />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import MoonSVG from '../svgs/MoonSVG.vue';
import SunSVG from '../svgs/SunSVG.vue';

export default {
  name: 'ThemeSwitcher',
  components: {
    SunSVG,
    MoonSVG,
  },
  computed: {
    ...mapGetters({
      title: 'themeSwitcherStore/getThemeSwitcherTitle',
      defaultTheme: 'themeSwitcherStore/getDefaultTheme',
      toggleThemeSwitcher: 'themeSwitcherStore/getToggleThemeSwitcher',
    }),
  },
  methods: {
    ...mapActions({
      setDefaultTheme: 'themeSwitcherStore/setDefaultTheme',
      setToggleThemeSwitcher: 'themeSwitcherStore/setToggleThemeSwitcher',
    }),
    updateTheme(themeName) {
      this.setDefaultTheme(themeName);
      this.setToggleThemeSwitcher();
    },
  },
};
</script>

<style lang="scss" scoped>
.themeSwitcher {
  position: relative;
  padding: 0 0 0 2rem;

  &__wrapper {
    width: 4.5rem;
    height: 2.3rem;
    position: relative;
    border: none;
    border-radius: 1.5rem;
    background-color: $quaternary-bg-dark;
  }

  &__svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 0;

    &--sun {
      width: 2rem;
      height: 2rem;
      left: 0.2rem;
      cursor: pointer;
    }

    &--circle {
      width: 1.7rem;
      height: 1.7rem;
      border: 0 none;
      border-radius: 1.7rem;
      background-color: $primary-bg-light;
      z-index: 1;
      transition: all 0.25s ease-in;

      .dark & {
        left: calc(100% - 2rem);
      }

      .light & {
        left: 0.2rem;
      }
    }

    &--moon {
      width: 1.6rem;
      height: 2rem;
      right: 0.3rem;
      cursor: pointer;
    }
  }

  &__title {
    display: none;
    padding: 0;
    cursor: pointer;
  }

  &__dropdown {
    position: absolute;
    top: calc(100% + 1rem);
    right: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    border: 0.1rem solid $primary-body-dark;

    .light & {
      border-color: $primary-body-light;
    }
  }

  &__theme {
    padding: 0.5rem 1rem;
    text-align: center;
    cursor: pointer;
  }
}
</style>
