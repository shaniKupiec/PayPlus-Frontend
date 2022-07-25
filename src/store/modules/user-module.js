import { authService } from "../../services/auth.service";
import { userService } from "../../services/user.service";

export default {
  state: {
    loggedInUser: null,
  },
  getters: {
    loggedInUser({ loggedInUser }) {
      return loggedInUser;
    },
  },
  mutations: {
    setLoggedInUser(state, { user }) {
      state.loggedInUser = user ? { ...user } : null;
    },
  },
  actions: {
    async loadLoggedInUser({ commit }) {
      try {
        const user = await userService.getLoggedInUser();
        commit({ type: "setLoggedInUser", user });
        return user;
      } catch (err) {
        // dispatch({
        //   type: "setUserMsg",
        //   userMsg: {
        //     type: "err",
        //     msg: "loading app failed",
        //   },
        // });
      }
    },
    async login({ commit, dispatch }, { userCred }) {
      try {
        const user = await authService.login(userCred);
        commit({ type: "setLoggedInUser", user });
        console.log('user',user)
        return user;
      } catch (err) {
        dispatch({
          type: "setUserMsg",
          userMsg: {
            type: "err",
            msg: "login failed",
          },
        });
      }
    },
    async logout({ commit, dispatch }) {
      try {
        authService.logout();
        commit({ type: "setLoggedInUser", user: null });
      } catch (err) {
        dispatch({
          type: "setUserMsg",
          userMsg: {
            type: "err",
            msg: "logout failed",
          },
        });
      }
    },
    async updateUser({ commit, dispatch }, { user }) {
      try {
        await userService.updateUser(user);
        commit({ type: "setLoggedInUser", user: user });
      } catch (err) {
        dispatch({
          type: "setUserMsg",
          userMsg: {
            type: "err",
            msg: "try again later",
          },
        });
      }
    },
  },
};
