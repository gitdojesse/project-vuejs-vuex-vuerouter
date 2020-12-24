import * as types from "./mutation-type";

export default {
  [types.SET_WATCHEDLIST](state, payload) {
    state.watchedlist = payload;
  }
};
