import services from "../../../http";
import * as types from "./mutation-type";

export const ActionFindSeries = ({ commit }) => {
  return services.series.findSeries().then(res => {
    commit(types.SET_SERIES_LIST, res.data.data);
  });
};
