import React from 'react';
import { incrementAnswer } from '../actions/question';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

const AnswerButton = ({ questionId, answer, incrementAnswer }) => (
  <Button
    color="primary"
    onClick={() => incrementAnswer({ questionId: questionId, answerId: answer._id })}
  >
    {`${answer.text} (${answer.occurancy})`}
  </Button>
);

const mapDispatchToProps = {
  incrementAnswer
};

export default connect(null, mapDispatchToProps)(AnswerButton);
