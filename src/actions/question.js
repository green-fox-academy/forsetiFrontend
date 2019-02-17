import { FECTH_QUESTIONS } from '../constants/action_types';

const BASE_URI = 'http://localhost:3001/question';

export const fetchQuestions2 = () => {
  return (dispatch) =>
    fetch(`${BASE_URI}/all`)
      .then(response => response.json())
      .then(parsed => dispatch(load_questions(parsed)));
};

export const load_questions = questions => ({
  type: FECTH_QUESTIONS,
  payload: questions,
});


export const fetchQuestions = () => {

  return (dispatch) => {

    return fetch(`${BASE_URI}/all`)
      .then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(load_questions(json))
      );
  };
};