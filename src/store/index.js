import { createStore } from 'vuex';

import authStore from '@/store/auth.store';
import layoutSwitcherStore from '@/store/layoutSwitcher.store';
import themeSwitcherStore from '@/store/themeSwitcher.store';

import {
  onSnapshot,
  collection,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from '@/firebase';

let todoListsRef = null;
let tasksRef = null;

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
};

export const actions = {
  async init({ dispatch, rootGetters }) {
    const user = rootGetters['authStore/user'];

    todoListsRef = collection(db, 'users', user.docId, 'todos');
    tasksRef = collection(db, 'users', user.docId, 'tasks');

    dispatch('subscribeToData');
  },
  async subscribeToData({ commit }) {
    try {
      // Subscribe to todoLists
      onSnapshot(todoListsRef, (snapshot) => {
        const todoLists = [];

        snapshot.forEach(doc => {
          todoLists.unshift({ docId: doc.id, ...doc.data() });
        });

        commit("SET_LISTS", todoLists);
        commit('SET_LISTS_LOADED', true);
      });


      // Subscribe to tasks
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
      await addDoc(todoListsRef, newList);
    }
    catch (error) {
      console.error('Error adding new list:', error);
    }
  },
  async deleteList(context, listId) {
    try {
      // Query tasks with the corresponding listId
      const tasksQuery = query(tasksRef, where("listId", "==", listId));
      const querySnapshot = await getDocs(tasksQuery);

      // Delete each task associated with the listId
      const deleteTasksPromises = querySnapshot.docs.map((doc) => deleteDoc(doc.ref));
      await Promise.all(deleteTasksPromises);

      // Delete the list itself
      await deleteDoc(doc(todoListsRef, listId));
    } catch (error) {
      console.error('Error deleting list and associated tasks:', error);
    }
  },
  async addNewTask(context, newTask) {
    try {
      await addDoc(tasksRef, newTask);
    }
    catch(error) {
      console.error('Error adding new task:', error);
    }
  },
  async deleteTask(context, taskDocId) {
    try {
      await deleteDoc(doc(tasksRef, taskDocId));
    }
    catch (error) {
      console.error('Error deleting task:', error);
    }
  },
  async editTask(context, { taskDocId, val: title }) {
    try {
      await updateDoc(doc(tasksRef, taskDocId), { title });
    }
    catch (error) {
      console.error('Error editing task:', error);
    }
  },
  async toggleCompletedTask(context, { taskDocId, completedFlag }) {
    try {
      await updateDoc(doc(tasksRef, taskDocId), { isCompleted: completedFlag });
    }
    catch (error) {
      console.error('Error toggling task completion:', error);
    }
  },
  clearLists({ commit }) {
    commit('SET_LISTS', []);
    commit('SET_LISTS_LOADED', false);
  },
  clearTasks({ commit }) {
    commit('SET_TASKS', []);
    commit('SET_TASKS_LOADED', false);
  },
};

const store = createStore({
  state: mainState,
  getters,
  mutations,
  actions,
  modules: {
    authStore,
    layoutSwitcherStore,
    themeSwitcherStore,
  },
});

export default store;
