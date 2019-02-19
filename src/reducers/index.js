import { combineReducers } from 'redux';
import question from './question';
import topics from './topics';

const reducers = {
  question,
  topics
};

const rootReducer = combineReducers(reducers);

export default rootReducer;