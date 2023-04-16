<template>
  <div class="logo">
    <router-link
      to="/"
      class="logo__link"
    >
      <LogoSVG />
    </router-link>
  </div>
</template>

<script>
import LogoSVG from '../svgs/LogoSVG.vue';

export default {
  name: 'SiteLogo',
  components: {
    LogoSVG,
  },
};
</script>

<style lang="scss">
.logo {
  width:4rem;
  height:4rem;
  margin-right: 1rem;

  &__link {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;

    flex: 0 1 5rem;
    text-decoration: none;
  }
}
</style>
