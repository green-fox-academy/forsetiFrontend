import React from 'react';
import { addAnswerToQuestion } from '../actions/question';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

const AnswerButton = ({ questionId, answer, addAnswerToQuestion }) => (
  <Button
    color="primary"
    style={{ flexGrow: answer.occurancy }}
    onClick={() => addAnswerToQuestion({ questionId: questionId, text: answer.text })}
  >
    {`${answer.text} (${answer.occurancy})`}
  </Button>
);

const mapDispatchToProps = {
  addAnswerToQuestion
};


export default connect(null, mapDispatchToProps)(AnswerButton);
