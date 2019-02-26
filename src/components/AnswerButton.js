import React from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

const AnswerButton = ({ questionId, answer }) => (
  <Button
    color="primary"
    onClick={() => { }}
  >
    {`${answer.text} (${answer.occurancy})`}
  </Button>
);

const mapDispatchToProps = {

};

export default connect(null, mapDispatchToProps)(AnswerButton);
