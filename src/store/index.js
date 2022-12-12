import { createStore } from 'vuex';

import rootGetters from './getters';
import rootMutations from './mutation';
import rootActions from './actions';

const store = createStore({
  state: {
    title: 'Todo App',
    lists: [
      {
        name: 'List 1',
        id: 1,
        todos: [
          {
            id: 1,
            title: 'Learn Vue 3',
            completed: false,
          },
          {
            id: 2,
            title: 'Learn Vuex',
            completed: false,
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
            completed: false,
          },
        ],
      },
    ],
  },
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions,
});

export default store;
