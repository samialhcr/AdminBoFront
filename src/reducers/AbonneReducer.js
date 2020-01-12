import { GET_ABONNES,GET_ABONNEBYID } from "../actions/types";

const intitialState = {
  abonnes: [],
  abonne: {}
};

export default function(state = intitialState, action) {
  switch (action.type) {
    case GET_ABONNES:
      return {
        ...state,
        abonnes: action.payload
      };

      case GET_ABONNEBYID:
        return {
          ...state,
          abonne: action.payload
        };

    default:
      return state;
  }
}
