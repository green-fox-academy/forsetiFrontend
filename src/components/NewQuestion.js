import React from 'react';
import { connect } from 'react-redux';
import { addQuestion } from '../actions/question';

const NewQuestion = (props) => (
  <div>
    <input type="text"></input>
  </div>
);


export default connect(null, { addQuestion })(NewQuestion);
