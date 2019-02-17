import { FECTH_QUESTIONS } from '../constants/action_types';

export const incrementCount = () => {
  return (dispatch) => {

    return dispatch({ type: UI_ACTIONS.INCREMENT_COUNT, data: count + 1 });
  };
}

export const fetch_questions = questions => ({
  type: FECTH_QUESTIONS,
  payload: questions,
});
