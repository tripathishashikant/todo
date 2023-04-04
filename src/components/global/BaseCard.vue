<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.card {
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 0.8rem rgba($black, 0.26);
  overflow: hidden;
}
</style>
