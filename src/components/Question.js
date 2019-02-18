import React, { Component } from 'react';
import { Card, CardActions } from '@material-ui/core';
import { connect } from 'react-redux';
import CardTitle from './CardTitle';
import Answer from './Answer';
import AnswerButton from "./AnswerButton"


export const Question = ({ question }) => {
  const { text, body } = question;
  return (
    <Card display={{ display: 'flex' }}>
      <CardTitle details={{ text, body }} />
      <Answer questionId={question._id} />
      <CardActions style={{ justifyContent: 'space-between' }}>
        {
          generateButtons(question)
        }
      </CardActions>
    </Card >
  );
};

const generateButtons = question =>
  question.answers ? question.answers.sort((ans1, ans2) => ans2.occurancy - ans1.occurancy).map(
    answer => <AnswerButton key={answer._id} answer={answer} questionId={question._id} />)
    : <div>No answer yet...</div>;

const mapStateToProps = state => ({
  questions: state.question.questions
});


export default connect(mapStateToProps)(Question);

