import * as types from "./mutation-type";

export default {
  [types.SET_SERIE](state, payload) {
    state.serie = payload;
  }
};
