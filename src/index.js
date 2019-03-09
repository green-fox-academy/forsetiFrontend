/* eslint-disable no-unused-vars */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './App';
import history from './history';
import MainScreen from './containers/MainScreen';
import io from 'socket.io-client';
import createSocketIoMiddleware from 'redux-socket.io';

let socket = io('http://localhost:3003');

const socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

const configureStore = initialState => createStore(
  rootReducer, initialState,
  applyMiddleware(thunk, socketIoMiddleware));

const store = configureStore({});

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