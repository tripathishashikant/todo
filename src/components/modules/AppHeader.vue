<template>
  <header class="header">
    <h1 class="header__title">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'appHeader',
  props: ['title'],
};
</script>

<style lang="scss" scoped>
.header {
  &__title {
    text-align: center;
  }
}
</style>
