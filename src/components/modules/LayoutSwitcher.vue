<template>
  <div
    class="layoutSwitcher"
    :class="{ 'layoutSwitcher--horizontal': getIsHorizontalLayoutClass }"
    :title="getAccessibilityTitle"
    @click="switchLayout()"
  >
    <LayoutSVG />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import LayoutSVG from '../svgs/LayoutSVG.vue';

export default {
  name: 'LayoutSwitcher',
  components: {
    LayoutSVG,
  },
  computed: {
    ...mapGetters({
      getAccessibilityTitle: 'layoutSwitcherStore/getAccessibilityTitle',
      getDefaultLayout: 'layoutSwitcherStore/getDefaultLayout',
      getIsHorizontalLayoutClass: 'layoutSwitcherStore/getIsHorizontalLayoutClass',
    }),
  },
  mounted() {
    const currentLayout = localStorage.getItem('currentLayout');

    if (currentLayout) {
      this.setCurrentLayout(currentLayout);
    } else {
      this.setCurrentLayout(this.getDefaultLayout);
      localStorage.setItem('currentLayout', this.getDefaultLayout);
    }
  },
  methods: {
    ...mapActions({
      setCurrentLayout: 'layoutSwitcherStore/setCurrentLayout',
      switchLayout: 'layoutSwitcherStore/switchLayout',
    }),
  },
};
</script>

<style lang="scss" scoped>
.layoutSwitcher {
  width:100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.1s ease-in;

  &--horizontal {
    transform: rotate(90deg);
  }
}
</style>
