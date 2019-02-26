import React from 'react';
import { connect } from 'react-redux';
import NewQuestion from '../components/NewQuestion';
import Question from '../components/Question';
import { createStyles } from '@material-ui/core';

class Questionnaire extends React.Component {
  componentWillMount() {
    this.props.fetchQuestions();
  }

  render() {
    const { questions } = this.props;
    return (
      <div >
        {
          // renderQuestions(questions)
        }
        <NewQuestion />
      </div>
    );
  }
}

const renderQuestions = questions =>
  questions.length > 0 ? questions.map(question => <Question key={question._id} question={question} />) : (<div>Loading...</div>);

const mapDispatchToProps = {

};

const mapStateToProps = state => ({
  ...state.question
});

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
