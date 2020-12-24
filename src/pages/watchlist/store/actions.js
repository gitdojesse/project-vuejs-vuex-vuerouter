import services from "../../../http";
import * as types from "./mutation-type";

export const ActionFindWatchlist = ({ commit }) => {
  return services.watchlist.findWatchlist().then(res => {
    commit(types.SET_WATCHLIST, res.data.data);
  });
};

export const ActionAddOnWatchlist = (context, payload) => {
  services.watchlist.addOnWatchlist(payload);
};

export const ActionDeleteFromWatchlist = (context, payload) => {
  services.watchlist.deleteFromWatchlist({ id: payload });
};
