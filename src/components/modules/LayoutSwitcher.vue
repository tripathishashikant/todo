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
import CONSTANTS from '../../constants/index';

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

    switch (currentLayout) {
      case CONSTANTS.LAYOUT_SWITCHER.vertical.id:
        this.setVerticalLayout();
        break;

      case CONSTANTS.LAYOUT_SWITCHER.horizontal.id:
        this.setHorizontalLayout();
        break;

      default:
        this.setDefaultLayout();
        localStorage.setItem('currentLayout', this.getDefaultLayout);
        break;
    }
  },
  methods: {
    ...mapActions({
      setDefaultLayout: 'layoutSwitcherStore/setDefaultLayout',
      switchLayout: 'layoutSwitcherStore/switchLayout',
      setVerticalLayout: 'layoutSwitcherStore/setVerticalLayout',
      setHorizontalLayout: 'layoutSwitcherStore/setHorizontalLayout',
    }),
  },
};
</script>

<style lang="scss" scoped>
.layoutSwitcher {
  width:100%;
  height: 100%;
  cursor: pointer;
  transform: rotate(90deg);
  transition: all 0.1s ease-in;

  &--horizontal {
    transform: rotate(0deg);
  }
}
</style>
