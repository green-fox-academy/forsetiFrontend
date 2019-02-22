import React, { Component } from 'react';
import { Card, CardActions, createStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import Answer from './Answer';
import AnswerButton from './AnswerButton';
import QuestionItem from '../components/QuestionItem';

const styles = createStyles({
  cardWrapper: {
    display: 'inline-table',
    justifyContent: 'space-around',
  },
  questionSection:
  {
    direction: 'ltr',
    display: 'flex',
    justifyContent: 'space-between',
  },
  card: {
    padding: 20,
  },
  wordWrapper: {
    wordBreak: 'break-all'
  }
});

export const Question = ({ question }) => {
  return (
    <Card style={styles.card}>
      <div style={styles.questionSection}>
        <QuestionItem question={question} />
        <Answer questionId={question._id} />
      </div>
      <CardActions style={styles.cardWrapper}>
        {
          generateButtons(question)
        }
      </CardActions>
    </Card >
  );
};

const generateButtons = question =>
  question.answers.length >= 0
    ? question.answers.sort((ans1, ans2) => ans2.occurancy - ans1.occurancy)
      .map(answer =>
        <AnswerButton key={answer._id} answer={answer} questionId={question._id} style={styles.wordWrapper} />)
    : (<div>No answer yet...</div>);

const mapStateToProps = state => ({
  ...state.question
});


export default connect(mapStateToProps)(Question);

