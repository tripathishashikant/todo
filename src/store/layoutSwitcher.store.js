const initialState = {
  showVerticalIcon: true,
  layoutTitle: 'Vertical view',
};

const getters = {
  getVerticalIconStatus: (state) => state.showVerticalIcon,
  getLayoutTitle: (state) => state.layoutTitle,
};

const mutations = {
  SET_VERTICAL_ICON_STATUS(state, status) {
    state.showVerticalIcon = status;
  },
  SET_LAYOUT_TITLE(state, title) {
    state.layoutTitle = title;
  },
};

const actions = {
  setVerticalIconStatus({ state, commit }) {
    commit('SET_VERTICAL_ICON_STATUS', !state.showVerticalIcon);
  },
  setLayoutTitle({ commit }, title) {
    commit('SET_LAYOUT_TITLE', title);
  },
};

export default {
  state: initialState,
  getters,
  mutations,
  actions,
  namespaced: true,
};
