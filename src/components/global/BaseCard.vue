<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.card {
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: $secondary-bg-dark;
  box-shadow: 0 0.1rem 0.2rem 0 rgba($primary-shadow-dark, 1);
  overflow: hidden;

  .light & {
    background-color: $secondary-bg-light;
    box-shadow: 0 0.1rem 0.2rem 0 rgba($primary-shadow-light, 1);
  }
}
</style>
