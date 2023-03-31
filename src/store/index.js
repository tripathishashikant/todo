import { createStore } from 'vuex';

import rootGetters from './getters';
import rootMutations from './mutation';
import rootActions from './actions';

const store = createStore({
  state: {
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
    ],
  },
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions,
});

export default store;
