import { combineReducers } from 'redux';
import ui from './ui';
import question from './question';

const reducers = {
  ui,
  question
};

const rootReducer = combineReducers(reducers);

export default rootReducer;