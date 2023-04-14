import { createStore } from 'vuex';

import appHeaderStore from './appHeader.store';
import themeSwitcherStore from './themeSwitcher.store';

const initialMainState = {
  title: 'Todo',
  lists: [
    {
      name: 'List 1',
      id: 1,
      todos: [
        {
          id: 1,
          title: 'Learn Vue',
          completed: false,
        },
        {
          id: 2,
          title: 'Learn Vuex',
          completed: true,
        },
        {
          id: 3,
          title: 'Learn Vue Router',
          completed: false,
        },
      ],
    },
    {
      name: 'List 2',
      id: 2,
      todos: [
        {
          id: 1,
          title: 'Learn Mocha',
          completed: false,
        },
        {
          id: 2,
          title: 'Learn Sinon',
          completed: false,
        },
        {
          id: 3,
          title: 'Learn Karma',
          completed: true,
        },
      ],
    },
    {
      name: 'List 3',
      id: 3,
      todos: [
        {
          id: 1,
          title: 'Learn Mocha',
          completed: false,
        },
        {
          id: 2,
          title: 'Learn Sinon',
          completed: false,
        },
        {
          id: 3,
          title: 'Learn Karma',
          completed: true,
        },
      ],
    },
    {
      name: 'List 4',
      id: 4,
      todos: [
        {
          id: 1,
          title: 'Learn Mocha',
          completed: false,
        },
        {
          id: 2,
          title: 'Learn Sinon',
          completed: false,
        },
        {
          id: 3,
          title: 'Learn Karma',
          completed: true,
        },
      ],
    },
  ],
};

export const mainState = { ...initialMainState };

export const getters = {
  getTitle: (state) => state.title,
  getLists: (state) => state.lists,
};

export const mutations = {
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
  addNewList({ commit }, newList) {
    commit('ADD_NEW_LIST', newList);
  },
  addNewTask({ commit }, payload) {
    commit('ADD_NEW_TASK', payload);
  },
  toggleCompletedTask({ state, commit }, ids) {
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
  },
  deleteTask({ state, commit }, ids) {
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
  },
  editTask({ state, commit }, ids) {
    const { listID, id, value } = ids;
    for (let i = 0; i < state.lists.length; i += 1) {
      if (state.lists[i].id === listID) {
        for (let j = 0; j < state.lists[i].todos.length; j += 1) {
          if (state.lists[i].todos[j].id === id) {
            commit('EDIT_TASK', { i, j, value });
            break;
          }
        }
      }
    }
  },
};

const store = createStore({
  state: mainState,
  getters,
  mutations,
  actions,
  modules: {
    appHeaderStore,
    themeSwitcherStore,
  },
});

export default store;
