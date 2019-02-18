import React from 'react';
import { connect } from 'react-redux';
import { Fab, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { addAnswerToQuestion } from '../actions/question';

const Answer = ({ questionId, addAnswerToQuestion }) => (
  <div>
    <TextField
      placeholder="add new answer..."
      id="answerText"
      label={'new answer'} />
    <Fab
      size="small"
      color="primary"
      onClick={() => {
        const text = document.querySelector('#answerText').value;
        sendIfNotEmpty(questionId, text, addAnswerToQuestion);
      }}>
      <AddIcon />
    </Fab>
  </div>
);

//TODO create separate action for new answer and
const sendIfNotEmpty = (questionId, text, addAnswerToQuestion) => validNewAnswer(text) ? addAnswerToQuestion({ questionId, text }) : () => { };

const validNewAnswer = text => text !== null && text.trim() !== '';

const mapDispatchToProps = {
  addAnswerToQuestion
};

export default connect(null, mapDispatchToProps)(Answer);
