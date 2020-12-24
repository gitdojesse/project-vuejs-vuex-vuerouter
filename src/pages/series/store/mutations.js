import * as types from "./mutation-type";

export default {
  [types.SET_SERIES_LIST](state, payload) {
    state.seriesList = payload;
  }
};
