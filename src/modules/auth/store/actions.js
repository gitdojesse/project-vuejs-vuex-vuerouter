import services from "../../../http";
import * as storage from "../storage";
import * as types from "./mutation-type";

export const ActionDoLogin = ({ dispatch }, payload) => {
  return services.auth.login(payload).then(res => {
    dispatch("ActionSetUser", res.data.user);
    dispatch("ActionSetToken", res.data.token);
  });
};

export const ActionCheckToken = ({ dispatch, state }) => {
  if (state.token) {
    return Promise.resolve(state.token);
  }

  const token = storage.getLocalToken();

  if (!token) {
    return Promise.reject(new Error("Token inválido"));
  }

  dispatch("ActionSetToken", token);
  return dispatch("ActionLoadSession");
};

export const ActionLoadSession = ({ dispatch }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {
        data: { user }
      } = await services.auth.loadSession();
      dispatch("ActionSetUser", user);
      resolve();
    } catch (err) {
      dispatch("ActionSignOut");
      reject(err);
    }
  });
};

export const ActionSetUser = ({ commit }, payload) => {
  commit(types.SET_USER, payload);
};

export const ActionSetToken = ({ commit }, payload) => {
  storage.setHeaderToken(payload);
  storage.setLocalToken(payload);
  commit(types.SET_TOKEN, payload);
};

export const ActionSignOut = ({ dispatch }) => {
  storage.setHeaderToken("");
  storage.deleteLocalToken();
  dispatch("ActionSetUser", {});
  dispatch("ActionSetToken", "");
};
