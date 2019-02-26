import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  firebaseConnect,
  isLoaded,
  isEmpty,
  withFirebase,
} from 'react-redux-firebase';
import { withHandlers } from 'recompose';
import { Card, CircularProgress, List, Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import NewTopic from './NewTopic';
import { changeTopic } from '../../actions/topics';

const generateTopics = (topics, deleteTopic, choosenTopic, changeTopic) =>
  topics.map(topic => (
    <Card
      style={{ marginBottom: 15 }}
    >
      <Button
        key={topic.key}
        style={{ backgroundColor: topic.key === choosenTopic ? 'grey' : 'white' }}
        onClick={() => changeTopic(topic.key)}
      >
        {topic.value.topic}
      </Button >
      <Button
        key={`${topic.key}DEL`}
        onClick={() => deleteTopic(topic.key)}
      >
        <Delete />
      </Button>
    </Card>));

const Topics = ({ topics, deleteTopic, choosenTopic, changeTopic, addTopic }) => (
  <List>
    <NewTopic style={{ marginBottom: 15 }} addTopic={addTopic} />
    {
      !isLoaded(topics)
        ? <CircularProgress />
        : isEmpty(topics)
          ? 'Topics are empty'
          : generateTopics(topics, deleteTopic, choosenTopic, changeTopic)
    }
  </List>
);

const enhance = compose(
  withFirebase,
  firebaseConnect(() => ['topic']),
  withHandlers({
    deleteTopic: props => id => props.firebase.ref(`topic/${id}`).remove(),
    addTopic: props => topicName => {
      if (topicName !== '') {
        return props.firebase.ref('topic').push({ topic: topicName });
      }
    }
  }),
  connect(
    ({ firebase, topics }) =>
      ({
        topics: firebase.ordered.topic,
        choosenTopic: topics.topicID
      }),
    {
      changeTopic
    }
  )
);

export default enhance(Topics);
