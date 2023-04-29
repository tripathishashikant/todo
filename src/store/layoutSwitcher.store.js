const initialState = {
  accessibilityTitle: 'Vertical Layout',
  defaultLayout: 'vertical',
  currentLayout: '',
  isHorizontalLayoutClass: false,
};

const getter = {
  getAccessibilityTitle: (state) => state.accessibilityTitle,
  getDefaultLayout: (state) => state.defaultLayout,
  getCurrentLayout: (state) => state.currentLayout,
  getIsHorizontalLayoutClass: (state) => state.isHorizontalLayoutClass,
};

const mutations = {
  SET_ACCESSIBILITY_TITLE(state, title) {
    state.accessibilityTitle = title;
  },
  SET_CURRENT_LAYOUT(state, value) {
    state.currentLayout = value;
  },
  SET_IS_HORIZONTAL_LAYOUT_CLASS(state, value) {
    state.isHorizontalLayoutClass = value;
  },
};

const actions = {
  setCurrentLayout({ commit }, value) {
    commit('SET_CURRENT_LAYOUT', value);
    localStorage.setItem('currentLayout', value);
  },
  setAccessibilityTitle({ commit }, title) {
    commit('SET_ACCESSIBILITY_TITLE', title);
  },
  setIsHorizontalLayoutClass({ commit }, value) {
    commit('SET_IS_HORIZONTAL_LAYOUT_CLASS', value);
  },
  setVerticalLayout({ dispatch }) {
    dispatch('setAccessibilityTitle', 'Vertical Layout');
    dispatch('setCurrentLayout', 'vertical');
    dispatch('setIsHorizontalLayoutClass', false);
  },
  setHorizontalLayout({ dispatch }) {
    dispatch('setAccessibilityTitle', 'Horizontal Layout');
    dispatch('setCurrentLayout', 'horizontal');
    dispatch('setIsHorizontalLayoutClass', true);
  },
  switchLayout({ dispatch, getters }) {
    if (getters.getCurrentLayout === 'vertical') {
      dispatch('setHorizontalLayout');
    } else {
      dispatch('setVerticalLayout');
    }
  },
};

export default {
  state: initialState,
  getters: getter,
  mutations,
  actions,
  namespaced: true,
};
