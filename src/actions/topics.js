import { FETCH_TOPICS } from '../constants/action_types';

const BASE_URI = 'http://52.29.62.92:3000/topics';

export const fetch_question = question => ({
  type: FETCH_TOPICS,
  payload: question,
});

export const getTopics = () => {
  return (dispatch) => {
    return fetch(`${BASE_URI}/`)
      .then(response => response.json())
      .then(json => dispatch(fetch_question(json)));
  };
};