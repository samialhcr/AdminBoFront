import { combineReducers } from "redux";
import errorReducer from "./erreurReducer";
import abonneReducer from "./AbonneReducer";
import comptereducer from "./CompteReducer";
import contratreducer from "./ContratReducer";
import offrereducer from "./OffreReducer";
import boreducer from "./BoReducer";
import agencereducer from "./AgenceReducer";
import operationreducer from './OperationReducer';

export default combineReducers({
  errors: errorReducer,
  abonne: abonneReducer,
  compte: comptereducer,
  contrat: contratreducer,
  offre: offrereducer,
  bo :boreducer,
  agence:agencereducer,
  operation: operationreducer

  });
  