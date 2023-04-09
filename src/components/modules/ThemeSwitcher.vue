<template>
  <div class="themeSwitcher">
    <p class="themeSwitcher__title" @click="openThemeSwitcher">
      Switch Theme
    </p>
    <ul v-show="toggleThemeSwitcher" class="themeSwitcher__dropdown">
      <li class="themeSwitcher__theme" @click="setDefaultTheme('light')">
        Light
      </li>
      <li class="themeSwitcher__theme" @click="setDefaultTheme('dark')">
        Dark
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ThemeSwitcher',
  data() {
    return {
      toggleThemeSwitcher: false,
    };
  },
  computed: {
    ...mapGetters({
      defaultTheme: 'getDefaultTheme',
    }),
  },
  methods: {
    ...mapActions([
      'setDefaultTheme',
    ]),
    openThemeSwitcher() {
      this.toggleThemeSwitcher = !this.toggleThemeSwitcher;
    },
  },
};
</script>

<style lang="scss" scoped>
.themeSwitcher {
  position: relative;
  padding: 0 2rem;

  &__title {
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
