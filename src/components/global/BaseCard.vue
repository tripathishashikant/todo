<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.card {
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: $secondaryBgColor;
  box-shadow: 0 0.1rem 0.2rem 0 rgba($primaryBoxShadowColor, 1);
  overflow: hidden;
}
</style>
