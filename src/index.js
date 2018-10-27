import React from 'react';
import { render } from 'react-dom';
import App from './containers/App/index';
import "babel-polyfill";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './reducers';

const rootEl = document.getElementById('app');

let store = createStore(reducers);

render(
  <Provider store={store}>
      <App />
  </Provider>,
  rootEl
);

if (module.hot) {
  module.hot.accept();
}
