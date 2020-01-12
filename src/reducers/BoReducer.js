import { GET_BOS,GET_BOBYID } from "../actions/types";

const intitialState = {
  bos: [],
  bo: {}
};

export default function(state = intitialState, action) {
  switch (action.type) {
    case GET_BOS:
      return {
        ...state,
        bos: action.payload
      };

      case GET_BOBYID:
        return {
          ...state,
          bo: action.payload
        };

    default:
      return state;
  }
}
