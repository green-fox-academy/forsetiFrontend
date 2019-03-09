import React from 'react';
import { Fab, TextField, CardActions, CardContent, Card } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import { addNewTopic, addTopic } from '../actions/topics';

const NewTopic = ({ topics, addTopic }) => (
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
          const newTopicElement = document.getElementById('new');
          addIfNotExists(topics, newTopicElement, addTopic);
        }}>
        <AddIcon />
      </Fab>
    </CardActions>
  </Card>
);

const topicNotExists = (topics, newTopic) => !topics.includes(newTopic.value);

const addIfNotExists = (topics, newTopic, addTopic) =>
  topicNotExists(topics, newTopic) ? addTopic({ title: newTopic.value }) : newTopic.value = '';

const mapDispatchToProps = {
  addTopic
};

const mapStateToProps = state => ({
  ...state.topics
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTopic);