import React from 'react';
import { connect } from 'react-redux';
import { Input, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { addAnswerToQuestion } from '../actions/question';

const Answer = ({ questionId, addAnswerToQuestion }) => {
  return (
    <div>
      <Input placeholder="add new answer..." id="answerText" ></Input>
      <Fab size="small" color="primary" aria-label="Add"
        onClick={() => {
          const text = document.querySelector('#answerText').value;
          validNewAnswer(text) ?
            addAnswerToQuestion({ questionId, text }) : () => { };
        }}>
        <AddIcon />
      </Fab>
    </div>
  );
};

const validNewAnswer = text => text !== null && text !== '';

const mapDispatchToProps = {
  addAnswerToQuestion
};

export default connect(null, mapDispatchToProps)(Answer);
