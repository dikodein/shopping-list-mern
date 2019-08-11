import { createStore, applyMiddleware, combineReducers, compose } from "redux";

// Logger with default options
import logger from "redux-logger";
import thunk from "redux-thunk";

// Reducers
import modalReducer from "./reducers/modalReducer"

const reducer = combineReducers({
  modal: modalReducer,
})

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, compose(applyMiddleware(logger), applyMiddleware(thunk)));
  return store;
}
