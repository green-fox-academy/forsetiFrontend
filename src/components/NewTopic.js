import React from 'react';
import { Fab, TextField, CardActions, CardContent, Card } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';

const NewTopic = ({ topics }) => (
  <Card color="primary">
    <CardContent>
      <TextField
        placeholder="add new topic..."
        id="new"
        label={'new topic'} />
    </CardContent>
    <CardActions>
      <Fab
        size="small"
        color="secondary"
        onClick={() => {
          const newTopicElement = document.getElementById('new').value;
          addNewTopic(newTopicElement);
        }}>
        <AddIcon />
      </Fab>
    </CardActions>
  </Card>
);

const addNewTopic = topicName => {
  if (topicName && topicName !== '') {
    database.ref('questionnaire').push({
      topic: topicName
    });
  }
};

const mapStateToProps = state => ({
  ...state.topics
});

export default connect(mapStateToProps)(NewTopic);