<template>
  <section class="card">
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
.card {
  border-radius: 1rem;
  box-shadow: 0 0.2rem 0.8rem rgba($black, 0.26);
  padding: 1.5rem;
  margin: 2rem auto;
  max-width: 40rem;
  width: 100%;
}
</style>
