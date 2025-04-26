import router from '@/router/router';
import {
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth, db } from '@/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { unSubscribeTodoLists, unSubscribeTasks } from '@/store/index';

const state = {
  user: null,
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  user: (state) => state.user,
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  CLEAR_USER(state) {
    state.user = null;
  },
};

const actions = {
  onAuthStateChange({ commit, dispatch }) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        commit('SET_USER', { docId: user.uid, email: user.email });
        dispatch('init', null, { root: true });
        router.push({ name: 'home' });
      } else {
        commit('CLEAR_USER');
        dispatch('clearLists', null, { root: true });
        dispatch('clearTasks', null, { root: true });
        router.push({ name: 'login' });
      }
    });
  },
  async signUp(ctx, { email, password }) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Add the user to the Firestore 'users' collection only if it doesn't already exist
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        createdAt: serverTimestamp(),
      }, { merge: false });
    } catch (error) {
      console.error("Error signing up: ", error);
    }
  },
  async signIn({ dispatch }, { email, password }) {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        dispatch('subscribeToData', null, { root: true });
      });
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  },
  async signOut(ctx) {
    try {
      await signOut(auth);

      if (unSubscribeTodoLists) {
        unSubscribeTodoLists();
      }

      if (unSubscribeTasks) {
        unSubscribeTasks();
      }
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
