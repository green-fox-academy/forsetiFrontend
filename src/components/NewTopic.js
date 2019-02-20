import React from 'react';
import { Fab, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const NewTopic = ({ }) => (
  <div>
    <Card>
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
            const text = document.getElementById("new").value;
            console.log(text);
          }}>
          <AddIcon />
        </Fab>
      </CardActions>
    </Card>
  </div>
);


export default NewTopic;