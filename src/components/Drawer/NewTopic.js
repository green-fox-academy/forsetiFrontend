import React from 'react';
import { Fab, TextField, CardActions, CardContent, Card } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import { addTopic } from '../../actions/topics';

const NewTopic = ({ addTopic }) => (
  <Card color="primary">
    <CardContent>
      <TextField
        placeholder="add new topic..."
        id="new"
        label={'new topic'} />
      <Fab
        size="large"
        color="secondary"
        onClick={() => {
          const newTopicElement = document.getElementById('new');
          addTopicAction(newTopicElement, addTopic);
        }}>
        <AddIcon />
      </Fab>
    </CardContent>
  </Card>
);

const addTopicAction = (newTopic, addTopic) => {
  addTopic({ title: newTopic.value });
  newTopic.value = '';
};

const mapDispatchToProps = {
  addTopic
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NewTopic);