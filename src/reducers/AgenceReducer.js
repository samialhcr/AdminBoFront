import { GET_AGENCES,GET_AGENCEBYID } from "../actions/types";

const intitialState = {
  agences: [],
  agence: {}
};

export default function(state = intitialState, action) {
  switch (action.type) {
    case GET_AGENCES:
      return {
        ...state,
        agences: action.payload
      };

      case GET_AGENCEBYID:
        return {
          ...state,
          agence: action.payload
        };

    default:
      return state;
  }
}
