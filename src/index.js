import React from 'react';
import { render } from 'react-dom';
import App from './containers/App/index';
import "babel-polyfill";

const rootEl = document.getElementById('app');

render(<App />, rootEl);

if (module.hot) {
  module.hot.accept();
}
