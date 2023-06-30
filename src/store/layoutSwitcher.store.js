import CONSTANTS from '../constants/index';

const initialState = {
  accessibilityTitle: CONSTANTS.LAYOUT_SWITCHER.vertical.title,
  defaultLayout: CONSTANTS.LAYOUT_SWITCHER.vertical.id,
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
    dispatch('setAccessibilityTitle', CONSTANTS.LAYOUT_SWITCHER.vertical.title);
    dispatch('setCurrentLayout', CONSTANTS.LAYOUT_SWITCHER.vertical.id);
    dispatch('setIsHorizontalLayoutClass', true);
  },
  setHorizontalLayout({ dispatch }) {
    dispatch('setAccessibilityTitle', CONSTANTS.LAYOUT_SWITCHER.horizontal.title);
    dispatch('setCurrentLayout', CONSTANTS.LAYOUT_SWITCHER.horizontal.id);
    dispatch('setIsHorizontalLayoutClass', false);
  },
  switchLayout({ dispatch, getters }) {
    if (getters.getCurrentLayout === CONSTANTS.LAYOUT_SWITCHER.vertical.id) {
      dispatch('setHorizontalLayout');
    } else {
      dispatch('setVerticalLayout');
    }
  },
  setDefaultLayout({ dispatch, getters }) {
    if (getters.getDefaultLayout === CONSTANTS.LAYOUT_SWITCHER.vertical.id) {
      dispatch('setVerticalLayout');
    } else {
      dispatch('setHorizontalLayout');
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
