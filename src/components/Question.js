import React, { Component } from 'react';
import { Card, CardActionArea, CardActions, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import CardTitle from './CardTitle';

import { addAnswerToQuestion } from '../actions/question';

export class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionId: this.props.id,
      text: '',
    };
    this.handleChange = (event) => {
      const { target: { name, value } } = event;
      this.setState({ [name]: value });
    };
  }


  render() {
    const { id, questions } = this.props;
    const question = getQuestionByIdProp(id, questions);
    const { text, body } = question;
    return (
      <Card >
        <CardTitle details={{ text, body }} />
        <div style={{ display: 'flex', }}>
          <input name="text" type="text" placeholder="Add new Answer" onChange={this.handleChange}></input>
          <button onClick={addAnswerToQuestion({ questionId: this.state.questionId, text: this.state.text })}>Add answer</button>
        </div>
        <CardActions style={{ display: 'flex' }}>
          {
            generateButtons(question.answers, id, addAnswerToQuestion)
          }
        </CardActions>

      </Card>
    );
  }
}


const generateButtons = (answers, questionId, addAnswerToQuestion) =>
  answers.length > 0 ? answers.map((answer, index) =>
    <div>
      <Button
        key={index}
        style={{ flexGrow: answer.occurancy }}
        onClick={addAnswerToQuestion({ questionId: questionId, text: answer.text })}
      >
        {`${answer.text} (${answer.occurancy})`}
      </Button>
    </div>) : <div>No answers yet...</div>;

const mapStateToProps = state => ({
  questions: state.question.questions
});

const mapDispatchToProps = {
  addAnswerToQuestion
};


const getQuestionByIdProp = (_id, questions) => questions.filter(q => q._id === _id)[0];


export default connect(mapStateToProps, mapDispatchToProps)(Question);

