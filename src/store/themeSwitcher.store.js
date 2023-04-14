const initialState = {
  title: 'Switch Theme',
  defaultTheme: 'dark',
  toggleThemeSwitcher: false,
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
  getToggleThemeSwitcher: (state) => state.toggleThemeSwitcher,
};

const mutations = {
  SET_TITLE(state, value) {
    state.title = value;
  },
  SET_TOGGLE_THEME_SWITCHER(state, value) {
    state.toggleThemeSwitcher = value;
  },
  SET_DEFAULT_THEME(state, value) {
    state.defaultTheme = value;
  },
};

const actions = {
  setTitle({ commit }, value) {
    commit('SET_TITLE', value);
  },
  setToggleThemeSwitcher({ state, commit }) {
    commit('SET_TOGGLE_THEME_SWITCHER', !state.toggleThemeSwitcher);
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
