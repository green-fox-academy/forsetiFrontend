import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './containers/App';

function configureStore(initialState) {
  return createStore(
    rootReducer, initialState,
    applyMiddleware(thunk)
  );
}

const store = configureStore({});

const reactRoot = document.getElementById('react-root');
const baseComponent = <Provider store={store}><App /></Provider>;

ReactDOM.render(baseComponent, reactRoot);