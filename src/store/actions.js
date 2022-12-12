export default {
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
