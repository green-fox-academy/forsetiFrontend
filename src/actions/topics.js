import { FETCH_TOPICS, NEW_TOPIC } from '../constants/action_types';

export const fetch_topics = topics => ({
  type: FETCH_TOPICS,
  payload: topics,
});

export const new_topic = result => ({
  type: NEW_TOPIC,
  payload: result,
});

