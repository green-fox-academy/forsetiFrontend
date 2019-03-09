import { FETCH_TOPICS, NEW_TOPIC } from '../constants/action_types';

const BASE_URI = 'http://localhost:3002/';
import { sendHBodyWithMethod } from './utils';


export const fetch_question = question => ({
  type: FETCH_TOPICS,
  payload: question,
});

export const addTopic = topic => {
  return {
    type: 'addtopic',
    meta: { remote: true },
    payload: topic
  }
}

export const topicAdded = () => {
  return {
    type: 'topicadded',
    // meta: { remote: true },
  }
}

export const getTopicsWS = () => ({
  type: 'server/gettopics',
})


export const new_topic = result => ({
  type: NEW_TOPIC,
  payload: result.topic,
});

export const getTopics = () => {
  return async dispatch => {
    const response = await fetch(`${BASE_URI}/topic`);
    const json = await response.json();
    return dispatch(fetch_question(json));
  };
};

export const addNewTopic = topicName => {
  return async dispatch => {
    const response = await fetch(`${BASE_URI}`, sendHBodyWithMethod({ topic: topicName }, 'POST'));
    const json = await response.json();
    return dispatch(new_topic(json));
  };
};
