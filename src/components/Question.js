import React, { Component } from 'react';
import { Card, CardActionArea, CardActions, Button } from '@material-ui/core';
import { connect } from 'react-redux';

export class Question extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, questions } = this.props;
    const question = getQuestionByIdProp(id, questions);
    return (
      <Card>
        <CardActions>
          {
            generateButtons(question.answers)
          }
          <CardActionArea>Add new Question</CardActionArea>
        </CardActions>
        HIHIH
      </Card>
    );
  }
}


const generateButtons = answers =>
  answers.length > 0 ? answers.map(answer => <Button key={answer._id}>{`${answer.text}`}</Button>) : null;

const mapStateToProps = state => ({
  questions: state.question.questions
});

const mapDispatchToProps = {

}


const getQuestionByIdProp = (_id, questions) => questions.filter(q => q._id === _id)[0];


export default connect(mapStateToProps, mapDispatchToProps)(Question)
