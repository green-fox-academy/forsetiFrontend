import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import MainScreen from './containers/MainScreen';
import history from './history';

const initialState = window && window.__INITIAL_STATE__; // set initial state here

import configureStore from './store/index';

const store = configureStore(initialState);

const reactRoot = document.getElementById('react-root');
const baseComponent =
  <Router history={history}>
    <Provider store={store}>
      <App >
        <Route exact path="/" component={MainScreen} />
      </App>
    </Provider>
  </Router>;

ReactDOM.render(baseComponent, reactRoot);