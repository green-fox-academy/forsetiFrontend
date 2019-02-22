import {
  FECTH_QUESTIONS,
  NEW_QUESTION,
  UPDATED_QUESTION
} from '../constants/action_types';

import { sendHBodyWithMethod } from './utils';

const BASE_URI = 'http://52.29.62.92:3000/baguette';


export const load_questions = questions => ({
  type: FECTH_QUESTIONS,
  payload: questions,
});

export const new_question = question => ({
  type: NEW_QUESTION,
  payload: question,
});

export const updated_quesion = question => ({
  type: UPDATED_QUESTION,
  payload: question,
});

export const fetchQuestions = () => {
  return (dispatch) => {
    return fetch(`${BASE_URI}`)
      .then(response => response.json())
      .then(json => dispatch(load_questions(json))
      );
  };
};

export const addQuestion = ({ text, body }) => {
  return (dispatch) => {
    return fetch(`${BASE_URI}/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, body }),
      }
    )
      .then(response => response.json())
      .then(json => dispatch(new_question(json))
      );
  };
};


export const incrementAnswer = ({ questionId, answerId }) => {
  return (dispatch) => {
    return fetch(`${BASE_URI}/incrementanswer`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ questionId, answerId }),
      }
    )
      .then(response => response.json())
      .then(question => dispatch(updated_quesion(question)));
  };
};


export const addAnswerToQuestion = ({ questionId, text }) => {
  return (dispatch) => {
    return fetch(`${BASE_URI}/addnewanswer`,
      sendHBodyWithMethod({ questionId, text }, 'PUT')
    )
      .then(response => response.json())
      .then(question => dispatch(updated_quesion(question)));
  };
};