<template>
  <section class="card">
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 80rem;
  padding: 1.5rem;
  margin: 2rem auto;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 0.8rem rgba($black, 0.26);
  overflow: hidden;
}
</style>
