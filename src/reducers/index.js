import { combineReducers } from 'redux';
import { reducer as firebase } from 'react-redux-firebase';
import question from './question';
import topics from './topics';

const reducers = {
  question,
  topics,
  firebase
};

const rootReducer = combineReducers(reducers);

export default rootReducer;