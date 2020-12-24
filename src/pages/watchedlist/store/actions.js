import services from "../../../http";
import * as types from "./mutation-type";

export const ActionFindWatchedlist = ({ commit }) => {
  return services.watchedlist.findWatchedlist().then(res => {
    commit(types.SET_WATCHEDLIST, res.data.data);
  });
};
