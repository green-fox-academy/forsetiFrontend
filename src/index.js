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
import Topics from './containers/Topic';
import Questionnaire from './containers/Questionnaire';
import NPS from './components/NPS';
import Home from './components/Home';

function configureStore(initialState) {
  return createStore(
    rootReducer, initialState,
    applyMiddleware(thunk)
  );
}

const store = configureStore({});

const reactRoot = document.getElementById('react-root');
const baseComponent =
  <Router history={history}>
    <Provider store={store}>
      <App >
        <Route exact path="/" component={Topics} />
        <Route exact path="/questionnaire/:topic" component={Questionnaire} />
        <Route exact path="/nps/:topic" component={NPS} />
        <Route exact path="/hi" component={Home} />

      </App>
    </Provider>
  </Router>;

ReactDOM.render(baseComponent, reactRoot);