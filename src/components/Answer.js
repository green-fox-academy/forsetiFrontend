import React from 'react';
import { connect } from 'react-redux';
import { Fab, TextField, Card } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const Answer = ({ questionId, addAnswerToQuestion }) => (
  <div style={{ margin: 25 }}>
    <TextField
      placeholder="add new answer..."
      id={`${questionId}`}
      label={'new answer'} />
    <Fab
      size="small"
      color="secondary"
      onClick={() => {
        const text = document.getElementById(`${questionId}`).value;
        // sendIfNotEmpty(questionId, text, addAnswerToQuestion);
      }}>
      <AddIcon />
    </Fab>
  </div>
);

const sendIfNotEmpty = (questionId, text, addAnswerToQuestion) => validNewAnswer(text) ? addAnswerToQuestion({ questionId, text }) : () => { };

const validNewAnswer = text => text !== null && text.trim() !== '';

const mapDispatchToProps = {
  
};

export default connect(null, mapDispatchToProps)(Answer);
