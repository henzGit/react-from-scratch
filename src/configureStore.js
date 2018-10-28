import {applyMiddleware, compose, createStore} from "redux";
import {connectRouter, routerMiddleware} from "connected-react-router";
import {rootReducer} from "./rootReducer";

export default function configureStore(initialState = {}, history) {
  const store = createStore(
    connectRouter(history)(rootReducer), // new root reducer with router state
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
      ),
    ),
  );

  return store;
}



