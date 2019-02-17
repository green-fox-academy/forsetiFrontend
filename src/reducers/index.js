import { combineReducers } from 'redux';
import question from './question';

const reducers = {
  question
};

const rootReducer = combineReducers(reducers);

export default rootReducer;