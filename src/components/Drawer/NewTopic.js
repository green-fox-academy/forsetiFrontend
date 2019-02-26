import React from 'react';
import { Fab, TextField, CardActions, CardContent, Card } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  firebaseConnect,
  withFirebase,
} from 'react-redux-firebase';
import { withHandlers } from 'recompose';
import AddIcon from '@material-ui/icons/Add';

const NewTopic = ({ addQuestionnaire }) => (
  <Card color="primary">
    <CardContent>
      <TextField
        placeholder="add new topic..."
        id="new"
        label={'new topic'} />
    </CardContent>
    <CardActions>
      <Fab
        onClick={() => {
          const newTopicElement = document.getElementById('new');
          addQuestionnaire(newTopicElement.value);
          newTopicElement.value = '';
        }}>
        <AddIcon />
      </Fab>
    </CardActions>
  </Card>
);

const enhance = compose(
  withFirebase,
  firebaseConnect(() => ['questionnaire']),
  withHandlers({
    addQuestionnaire: props => topicName => {
      if (topicName !== '') {
        return props.firebase.ref('questionnaire').push({ topic: topicName });
      }
    }
  }),
  connect(
    ({ firebase, topics }) => ({
      topics: firebase.ordered.questionnaire,
    })
  )
);

export default enhance(NewTopic);