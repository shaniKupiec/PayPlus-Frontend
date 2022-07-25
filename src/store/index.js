import { createStore } from "vuex";
import userModules from "./modules/user-module.js";

const store = createStore({
  strict: true,
  state: {
    isLoading: false,
    userMsg: null,
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    userMsg(state) {
      return state.userMsg;
    },
  },
  mutations: {
    setIsLoading(state, { isLoading }) {
      state.isLoading = isLoading;
    },
    setUserMsg(state, { userMsg }) {
      state.userMsg = userMsg;
    },
  },
  actions: {
    async setUserMsg({ commit }, { userMsg }) {
      commit({ type: "setUserMsg", userMsg });
      setTimeout(() => {
        commit({ type: "setUserMsg", userMsg: null });
      }, 3000);
    },
  },
  modules: {
    userModules,
  },
});

export default store;
