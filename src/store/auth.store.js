import router from '@/router/router';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '@/firebase';

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
  async signIn({ commit }, { email, password }) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in: ", userCredential.user);
      commit('SET_USER', userCredential.user);
    } catch (error) {
      console.error("Error signing in: ", error);
      throw error;
    }
  },
  async signOut({ commit }) {
    try {
      await signOut(auth)
      .then(() => {
        console.log("User signed out");
        commit('CLEAR_USER');
        router.push({ name: 'login' });
      });
    } catch (error) {
      console.error("Error signing out: ", error);
      throw error;
    }
  },
  async signUp(ctx, { email, password }) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up: ", userCredential.user);
      return userCredential;
    } catch (error) {
      console.error("Error signing up: ", error);
      throw error;
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
