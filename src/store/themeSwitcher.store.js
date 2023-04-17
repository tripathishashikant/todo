const initialState = {
  title: 'Switch Theme',
  defaultTheme: 'dark',
  themes: {
    light: 'light',
    dark: 'dark',
  },
};

const getters = {
  getThemeSwitcherTitle: (state) => state.title,
  getDefaultTheme: (state) => state.defaultTheme,
  getLightThemeName: (state) => state.themes.light,
  getDarkThemeName: (state) => state.themes.dark,
};

const mutations = {
  SET_TITLE(state, value) {
    state.title = value;
  },
  SET_DEFAULT_THEME(state, value) {
    state.defaultTheme = value;
  },
};

const actions = {
  setTitle({ commit }, value) {
    commit('SET_TITLE', value);
  },
  setDefaultTheme({ commit }, value) {
    commit('SET_DEFAULT_THEME', value);
  },
};

export default {
  state: initialState,
  getters,
  mutations,
  actions,
  namespaced: true,
};
