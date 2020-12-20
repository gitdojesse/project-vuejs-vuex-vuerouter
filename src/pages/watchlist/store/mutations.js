import * as types from "./mutation-type";

export default {
  [types.SET_WATCHLIST](state, payload) {
    state.watchlist = payload;
  }
};
