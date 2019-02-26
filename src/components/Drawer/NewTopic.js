import React from 'react';
import { Fab, TextField, CardActions, CardContent, Card } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const NewTopic = ({ addTopic }) => (
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
          addTopic(newTopicElement.value);
          newTopicElement.value = '';
        }}>
        <AddIcon />
      </Fab>
    </CardActions>
  </Card>
);



export default NewTopic;