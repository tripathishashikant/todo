<template>
  <div
    class="layoutSwitcher"
    :class="{ 'layoutSwitcher--horizontal': !getVerticalIconStatus }"
    :title="getLayoutTitle"
    @click="setVerticalIconStatus"
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
      getLayoutTitle: 'layoutSwitcherStore/getLayoutTitle',
      getVerticalIconStatus: 'layoutSwitcherStore/getVerticalIconStatus',
    }),
  },
  watcher: {
    getVerticalIconStatus(value) {
      if (value) {
        this.setLayoutTitle = 'Vertical Layout';
      } else {
        this.setLayoutTitle = 'Horizontal Layout';
      }
    },
  },
  methods: {
    ...mapActions({
      setVerticalIconStatus: 'layoutSwitcherStore/setVerticalIconStatus',
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
