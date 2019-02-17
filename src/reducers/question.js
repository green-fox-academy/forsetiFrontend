import { FECTH_QUESTIONS } from "../constants/action_types";

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
    default:
      return state;
  }
};
