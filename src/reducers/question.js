import {
  FECTH_QUESTIONS,
  UPDATED_QUESTION,
  NEW_QUESTION
} from '../constants/action_types';

const initialState = {
  questions: [],
  collection: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FECTH_QUESTIONS:
      return {
        ...state,
        questions: payload
      };
    case UPDATED_QUESTION:
      return {
        ...state,
        questions: addToQuestionIfNotExists(state.questions, payload),
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


const addToQuestionIfNotExists = (questions, question) =>
  questions.map(q => q._id === question._id ? q = question : q);

