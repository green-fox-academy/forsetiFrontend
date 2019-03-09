import { FETCH_TOPICS } from '../constants/action_types';

const initialState = {
  topics: []
};

export default (state = initialState, { type, payload, data }) => {

  switch (type) {
    case FETCH_TOPICS:
      return {
        ...state,
        topics: [...payload],
      };
    case 'message':

      return {
        ...state,
        topics: data
      };
    default:
      return state;
  }
};
