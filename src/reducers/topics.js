import { FETCH_TOPICS } from '../constants/action_types';

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
    default:
      return state;
  }
};
