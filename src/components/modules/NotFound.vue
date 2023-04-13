<template>
  <base-card>
    <article class="errorPage__article">
      <h2 class="errorPage__title"> Page not found! Maybe view our <router-link to="/">Home
          page</router-link>?
      </h2>
    </article>
  </base-card>
</template>

<script>
export default {
  name: 'notFound',
};
</script>

<style lang="scss" scoped>
.errorPage {
  padding: 0 1.5rem;

  &__title {
    padding: 0.5rem 0;
    text-align: center;
  }
}
</style>
