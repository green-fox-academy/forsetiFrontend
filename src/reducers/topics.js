import { FETCH_TOPICS, NEW_TOPIC } from '../constants/action_types';

const initialState = {
  topics: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TOPICS:
      return {
        ...state,
        topics: [...payload],
      };
    case NEW_TOPIC:
      return {
        ...state,
        topics: [...state.topics, payload]
      };
    default:
      return state;
  }
};
