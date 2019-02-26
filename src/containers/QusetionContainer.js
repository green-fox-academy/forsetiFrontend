import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  firebaseConnect,
  isLoaded,
  isEmpty,
  withFirebase,
} from 'react-redux-firebase';
import { CircularProgress } from '@material-ui/core';
import { withHandlers } from 'recompose';
import QuestionComponent from '../components/Questions/QustionComponent';
import { QuestionAnswerSharp } from '@material-ui/icons';

const generateQuestionsBasedOnCoosenTopic = ({ choosenTopicID, topics }) => {
  console.log(topics, choosenTopicID);
  let question = [];
  topics.forEach(topic => {
    if (topic.key === choosenTopicID) {
      question.push(topic);
    }
  });
  if (question.length > 0) {
    return <QuestionComponent details={question} />;
  } else {
    <div>noQustions</div>;
  }
};


const QusetionContainer = ({ choosenTopicID, topics }) => {
  return (
    <div>
      {
        !isLoaded(topics) ?
          <CircularProgress />
          : generateQuestionsBasedOnCoosenTopic({ choosenTopicID, topics })
      }
    </div>
  );
};


QusetionContainer.propTypes = {

};

const enhance = compose(
  withFirebase,
  firebaseConnect(() => ['topic']),
  withHandlers({
    // getQuestions: props => choosenTopic => props.firebase.ref(`topic/${choosenTopic}`),
  }),
  connect(
    ({ firebase, topics }) =>
      ({
        choosenTopicID: topics.topicID,
        topics: firebase.ordered.topic,
      }),
    {

    }
  )
);

export default enhance(QusetionContainer);
