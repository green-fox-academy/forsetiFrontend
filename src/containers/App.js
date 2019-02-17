import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions/question';
import Header from '../components/Header';
import NewQuestion from '../components/NewQuestion';
import '../styles/index.scss';

class App extends React.Component {
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
      </div >
    );
  }
}

const renderQuestions = questions => questions ? questions
  .map(question => (<div key={question._id} >{question.text}</div>)) : (<div>Not yet</div>)

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions())
});

const mapStateToProps = state => ({
  questions: state.question.questions
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
