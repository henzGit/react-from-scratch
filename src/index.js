import React from 'react'
import { render } from 'react-dom'
import App from './containers/App/index'
import "babel-polyfill"
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { reducers } from './reducers'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware, ConnectedRouter }
  from 'connected-react-router'

const rootEl = document.getElementById('app');
const history = createBrowserHistory();
const initialState = {};

const store = createStore(
  connectRouter(history)(reducers), // new root reducer with router state
  initialState,
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      // ... other middlewares ...
    ),
  ),
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  rootEl
);

if (module.hot) {
  module.hot.accept();
}
