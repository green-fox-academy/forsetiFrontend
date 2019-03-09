import { FETCH_TOPICS } from '../constants/action_types';

const initialState = {
  topics: undefined
};

export default (state = initialState, { type, payload, data }) => {
  console.log(type, data);
  switch (type) {
    case 'server/topics':
      return {
        topics: [...data]
      };
    default:
      return state;
  }
};
