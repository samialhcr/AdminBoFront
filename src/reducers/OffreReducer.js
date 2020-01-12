import { GET_COFFRES,GET_OFFREBYID } from "../actions/types";

const intitialState = {
  offres: [],
  offre: {}
};

export default function(state = intitialState, action) {
  switch (action.type) {
    case GET_COFFRES:
      return {
        ...state,
        offres: action.payload
      };

      case GET_OFFREBYID:
        return {
          ...state,
          offre: action.payload
        };

    default:
      return state;
  }
}
