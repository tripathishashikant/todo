<template>
  <nav class="menu">
    <router-link
      class="menu__link menu__link--home"
      to="/"
    >
      <HomeSVG />
    </router-link>
    <router-link
      class="menu__link"
      to="/pending-list"
    >
      Pending Tasks
    </router-link>
    <router-link
      class="menu__link"
      to="/completed-list"
    >
      Completed Tasks
    </router-link>
    <a
      v-if="isAuthenticated"
      class="menu__link menu__link--sign-out"
      role="button"
      @click="signOut"
    >
      Sign Out {{ `(${user.email})` }}
    </a>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import HomeSVG from '../svgs/HomeSVG.vue';

export default {
  name: 'SiteMenu',
  components: {
    HomeSVG,
  },
  computed: {
    ...mapGetters({
      user: 'authStore/user',
      isAuthenticated: 'authStore/isAuthenticated',
    }),
  },
  methods: {
    ...mapActions({
      signOut: 'authStore/signOut',
    }),
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;

.menu {
  display: flex;
  flex-flow:row nowrap;
  justify-content: space-around;
  align-items: center;

  &__link {
    margin: 0 1rem;
    font-size:1.5rem;
    color: $primary-body-dark;
    text-decoration: none;

    .light & {
      color: $primary-body-light;
    }

    &:hover {
      color: $primary-link-dark;
      .light & {
        color: $primary-link-light;
      }
    }

    &--home {
      width:2.4rem;
      height:2.4rem;
      position: relative;
      top: -0.3rem;
    }

    &--sign-out {
      cursor: pointer;
    }
  }
}
</style>
