/*import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
*/

import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

//screenshot
