import { GET_COMPTES,GET_ACOMPTEBYID } from "../actions/types";

const intitialState = {
  comptes: [],
  compte: {}
};

export default function(state = intitialState, action) {
  switch (action.type) {
    case GET_COMPTES:
      return {
        ...state,
        comptes: action.payload
      };

      case GET_ACOMPTEBYID:
        return {
          ...state,
          compte: action.payload
        };

    default:
      return state;
  }
}
