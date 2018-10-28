import React from 'react'
import { render } from 'react-dom'
import App from './containers/App/index'
import "babel-polyfill"
import { Provider } from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import configureStore from './configureStore'
import {createBrowserHistory} from "history";

const rootEl = document.getElementById('app');
const initialState = {};
const history = createBrowserHistory();
const store = configureStore(initialState, history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  rootEl
);

if (module.hot) {
  // Enable Webpack hot module replacement for rootReducer
  module.hot.accept('./rootReducer', () => {
    const nextRootReducer = require('./rootReducer');
    store.replaceReducer(nextRootReducer);
  });
}
