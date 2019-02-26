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
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import NewTopic from './NewTopic';
import List from '@material-ui/core/List';
import { Delete } from '@material-ui/icons';


const generateTopics = (topics, deleteQuestionnare) =>
  topics.map(topic => (
    <Card
      style={{ marginBottom: 15 }}
    >
      <Button
        key={topic.key}
      >
        {topic.value.topic || 'no title yet'}
      </Button >
      <Button
        key={`${topic.key}DEL`}
        onClick={() => deleteQuestionnare(topic.key)}
      >
        <Delete />
      </Button>
    </Card>));

const Topics = ({ topics, deleteQuestionnare }) => (
  <List>
    <NewTopic style={{ marginBottom: 15 }} />
    {
      !isLoaded(topics)
        ? <CircularProgress />
        : isEmpty(topics)
          ? 'Topics are empty'
          : generateTopics(topics, deleteQuestionnare)
    }
  </List>
);

const enhance = compose(
  withFirebase,
  firebaseConnect(() => ['questionnaire']),
  withHandlers({
    deleteQuestionnare: props => id => props.firebase.ref(`questionnaire/${id}`).remove()
  }),
  connect(
    ({ firebase }) => ({
      topics: firebase.ordered.questionnaire,
    })
  )
);

export default enhance(Topics);
