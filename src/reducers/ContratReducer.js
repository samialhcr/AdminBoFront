import { GET_CONTRATS,GET_CONTRATBYID } from "../actions/types";

const intitialState = {
  contrats: [],
  contrat: {}
};

export default function(state = intitialState, action) {
  switch (action.type) {
    case GET_CONTRATS:
      return {
        ...state,
        contrats: action.payload
      };

      case GET_CONTRATBYID:
        return {
          ...state,
          contrat: action.payload
        };

    default:
      return state;
  }
}
