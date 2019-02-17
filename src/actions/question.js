import { FECTH_QUESTIONS, NEW_QUESTION } from '../constants/action_types';

const BASE_URI = 'http://localhost:3001/question';

export const load_questions = questions => ({
  type: FECTH_QUESTIONS,
  payload: questions,
});
export const new_question = question => ({
  type: NEW_QUESTION,
  payload: question,
});

export const fetchQuestions = () => {
  return (dispatch) => {
    return fetch(`${BASE_URI}/all`)
      .then(response => response.json())
      .then(json => dispatch(load_questions(json))
      );
  };
};


export const addQuestion = ({ text, body }) => {
  return (dispatch) => {
    const elementToSend = { text, body };
    return fetch(`${BASE_URI}/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text, body: body }),
      }
    )
      .then(response => response.json())
      .then(json => dispatch(new_question(json))
      );
  };
};