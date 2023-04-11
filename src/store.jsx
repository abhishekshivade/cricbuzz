import { createStore, applyMiddleware, compose } from "redux";
// import composeWithDevTools from "redux-devtools-extension";
// import composeWithDevTools from "redux-devtools/extension";
// import composeWithDevTools from "@redux-devtools/extension"
import thunk from "redux-thunk";
import rootReducer from "./reducers";

function configureStore() {
  const initialState = {};

  const middleware = [thunk];
  const middlewareEnhancer = applyMiddleware(...middleware);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);
  const store = createStore(rootReducer, initialState, composedEnhancers);

  return store;
}
export default configureStore;
