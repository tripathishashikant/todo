import { createStore } from 'vuex';

import layoutSwitcherStore from './layoutSwitcher.store';
import themeSwitcherStore from './themeSwitcher.store';

const initialMainState = {
  title: 'Todo',
  lists: [],
};

export const mainState = { ...initialMainState };

export const getters = {
  getTitle: (state) => state.title,
  getLists: (state) => state.lists,
};

export const mutations = {
  SET_LISTS(state, lists) {
    state.lists = lists;
  },
  SET_LISTS_TO_LOCAL_STORAGE(state) {
    localStorage.setItem('lists', JSON.stringify(state.lists));
  },
  ADD_NEW_LIST(state, newList) {
    state.lists.push(newList);
  },
  ADD_NEW_TASK(state, payload) {
    for (let i = 0; i < state.lists.length; i += 1) {
      if (state.lists[i].id === payload.listID) {
        state.lists[i].todos.unshift(payload.newTask);
        break;
      }
    }
  },
  TOGGLE_COMPLETED_TASK(state, payload) {
    const { i, j } = payload;
    state.lists[i].todos[j].completed = !state.lists[i].todos[j].completed;
  },
  DELETE_TASK(state, payload) {
    const { i, j } = payload;
    state.lists[i].todos.splice(j, 1);
  },
  EDIT_TASK(state, payload) {
    const { i, j, value } = payload;
    state.lists[i].todos[j].title = value;
  },
};

export const actions = {
  setLists({ commit }, lists) {
    commit('SET_LISTS', lists);
  },
  setListsToLocalStorage({ commit }) {
    commit('SET_LISTS_TO_LOCAL_STORAGE');
  },
  addNewList({ commit, dispatch }, newList) {
    commit('ADD_NEW_LIST', newList);
    dispatch('setListsToLocalStorage');
  },
  addNewTask({ commit, dispatch }, payload) {
    commit('ADD_NEW_TASK', payload);
    dispatch('setListsToLocalStorage');
  },
  toggleCompletedTask({ state, commit, dispatch }, ids) {
    const { listID, id } = ids;

    for (let i = 0; i < state.lists.length; i += 1) {
      if (state.lists[i].id === listID) {
        for (let j = 0; j < state.lists[i].todos.length; j += 1) {
          if (state.lists[i].todos[j].id === id) {
            commit('TOGGLE_COMPLETED_TASK', { i, j });
            break;
          }
        }
      }
    }
    dispatch('setListsToLocalStorage');
  },
  deleteTask({ state, commit, dispatch }, ids) {
    const { listID, id } = ids;

    for (let i = 0; i < state.lists.length; i += 1) {
      if (state.lists[i].id === listID) {
        for (let j = 0; j < state.lists[i].todos.length; j += 1) {
          if (state.lists[i].todos[j].id === id) {
            commit('DELETE_TASK', { i, j });
            break;
          }
        }
      }
    }
    dispatch('setListsToLocalStorage');
  },
  editTask({ state, commit, dispatch }, updatedValue) {
    const { listID, id, value } = updatedValue;
    const listLength = state.lists.length;
    let todosLength = null;

    for (let i = 0; i < listLength; i += 1) {
      if (state.lists[i].id === listID) {
        todosLength = state.lists[i].todos.length;
        for (let j = 0; j < todosLength; j += 1) {
          if (state.lists[i].todos[j].id === id) {
            commit('EDIT_TASK', { i, j, value });
            break;
          }
        }
      }
    }
    dispatch('setListsToLocalStorage');
  },
};

const store = createStore({
  state: mainState,
  getters,
  mutations,
  actions,
  modules: {
    layoutSwitcherStore,
    themeSwitcherStore,
  },
});

export default store;
