import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions/question';
import NewQuestion from '../components/NewQuestion';
import Question from '../components/Question';
import { createStyles } from '@material-ui/core';

const styles = createStyles({
  cardLayout: {
    // padding: 15,
  }
});

class Questionnaire extends React.Component {
  componentWillMount() {
    this.props.fetchQuestions();
  }

  render() {
    const { questions } = this.props;
    return (
      <div style={styles.cardLayout}>
        {
          renderQuestions(questions)
        }
        <NewQuestion />
      </div>
    );
  }
}

const renderQuestions = questions =>
  questions ? questions
    .map(question => <Question key={question._id} question={question} />) : (<div>Loading...</div>);

const mapDispatchToProps = {
  fetchQuestions
};

const mapStateToProps = state => ({
  ...state.question
});

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
