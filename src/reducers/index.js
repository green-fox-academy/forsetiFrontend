import { combineReducers } from 'redux';
import { reducer as firebase } from 'react-redux-firebase';
import topics from './topics';

const reducers = {
  topics,
  firebase
};

const rootReducer = combineReducers(reducers);

export default rootReducer;