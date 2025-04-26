<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;

.card {
  width: 100%;
  max-width: 80rem;
  margin: 2rem auto;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: $secondary-bg-dark;
  box-shadow: 0 0.1rem 0.2rem 0 $primary-shadow-dark;
  overflow: hidden;

  .list__horizontalLayout & {
    flex: 0 0 30rem;
    max-width: none;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .light & {
    background-color: $secondary-bg-light;
    box-shadow: 0 0.1rem 0.2rem 0 $primary-shadow-light;
  }
}
</style>
