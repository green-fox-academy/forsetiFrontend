import { FECTH_QUESTIONS, NEW_QUESTION } from '../constants/action_types';

const initialState = {
  questions: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FECTH_QUESTIONS:
      return {
        ...state,
        questions: payload
      };
    case NEW_QUESTION:
      return {
        ...state,
        questions: [...state.questions, payload],
      };
    default:
      return state;
  }
};
