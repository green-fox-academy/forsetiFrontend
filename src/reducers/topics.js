import { changeTopic } from '../actions/topics';
import { handleActions } from 'redux-actions';

const defaultState = { topicID: '' };

const reducer = handleActions(
  new Map([
    [
      changeTopic,
      (state, action) => ({
        topicID: action.payload
      })
    ],
  ]),
  defaultState
);


export default reducer;