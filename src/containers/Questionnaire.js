import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions/question';
import Header from '../components/Header';
import NewQuestion from '../components/NewQuestion';
import Question from '../components/Question';



class Questionnaire extends React.Component {
  componentWillMount() {
    this.props.fetchQuestions();
  }

  render() {
    const { questions } = this.props;
    return (
      <div>
        <Header />
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
    .map(question => (<Question key={question._id} question={question} />)) : (<div>Loading...</div>);

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions())
});

const mapStateToProps = state => ({
  questions: state.question.questions
});

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);

