import services from "../../../http";
import * as types from "./mutation-type";

export const ActionFindSerie = ({ commit }, payload) => {
  return services.showSerie.findSerie({ id: payload }).then(res => {
    commit(types.SET_SERIE, res.data.data);
  });
};
