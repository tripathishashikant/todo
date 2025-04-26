import { createStore } from 'vuex';

import layoutSwitcherStore from '@/store/layoutSwitcher.store';
import themeSwitcherStore from '@/store/themeSwitcher.store';

import {
  onSnapshot,
  collection,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from '@/firebase';

const initialMainState = {
  title: 'Todo',
  lists: [],
  tasks: [],
  hasListsLoaded: false,
  hasTasksLoaded: false,
};

export const mainState = { ...initialMainState };

export const getters = {
  getTitle: (state) => state.title,
  getLists: (state) => state.lists,
  getTasks: (state) => state.tasks,
  getListsLoaded: (state) => state.hasListsLoaded,
  getTasksLoaded: (state) => state.hasTasksLoaded,
  siteDataLoaded: (state) => state.hasListsLoaded && state.hasTasksLoaded,
};

export const mutations = {
  SET_LISTS(state, lists) {
    state.lists = lists;
  },
  SET_TASKS(state, tasks) {
    state.tasks = tasks;
  },
  SET_LISTS_LOADED(state, flag) {
    state.hasListsLoaded = flag;
  },
  SET_TASKS_LOADED(state, flag) {
    state.hasTasksLoaded = flag;
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
  async subscribeToData({ commit }) {
    try {
      // Subscribe to todoLists
      const todoListsRef = collection(db, "todos");

      onSnapshot(todoListsRef, (snapshot) => {
        const todoLists = [];

        snapshot.forEach(doc => {
          todoLists.unshift({ docId: doc.id, ...doc.data() });
        });

        commit("SET_LISTS", todoLists);
        commit('SET_LISTS_LOADED', true);
      });


      // Subscribe to tasks
      const tasksRef = collection(db, "tasks");

      onSnapshot(tasksRef, (snapshot) => {
        const tasks = [];

        snapshot.forEach(doc => {
          tasks.unshift({ docId: doc.id, ...doc.data() });
        });

        commit("SET_TASKS", tasks);
        commit('SET_TASKS_LOADED', true);
      });

    } catch (error) {
      console.error('Error fetching lists from Firestore:', error);
    }
  },
  async addNewList(context, newList) {
    try {
      await addDoc(collection(db, "todos"), newList);
    }
    catch (error) {
      console.error('Error adding new list:', error);
    }
  },
  async deleteList(context, listId) {
    try {
      await deleteDoc(doc(db, "todos", listId));
    }
    catch (error) {
      console.error('Error deleting list:', error);
    }
  },
  async addNewTask(context, newTask) {
    try {
      await addDoc(collection(db, 'tasks'), newTask);
    }
    catch(error) {
      console.error('Error adding new task:', error);
    }
  },
  async toggleCompletedTask(context, { taskDocId, completedFlag }) {
    try {
      await updateDoc(doc(db, "tasks", taskDocId), {
        isCompleted: completedFlag
      });
    }
    catch (error) {
      console.error('Error toggling task completion:', error);
    }
  },
  async deleteTask(context, taskDocId) {
    try {
      await deleteDoc(doc(db, "tasks", taskDocId));
    }
    catch (error) {
      console.error('Error deleting task:', error);
    }
  },
  async editTask(context, { taskDocId, val: title }) {
    try {
      await updateDoc(doc(db, "tasks", taskDocId), { title });
    }
    catch (error) {
      console.error('Error editing task:', error);
    }
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
