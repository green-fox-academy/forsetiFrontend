import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions/question';
import Header from '../components/Header';
import NewQuestion from '../components/NewQuestion';
import Question from '../components/Question';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import * as materialColor from '@material-ui/core/colors';

import '../styles/index.scss';

const theme = createMuiTheme({
  palette: {
    primary: materialColor.teal,
    secondary: materialColor.lightBlue,
    background: materialColor.teal,
  },
  typography: {
    useNextVariants: true,
  },
  spacing: {
    unit: 15
  },
  shape: {
    borderRadius: 15
  }
});


class App extends React.Component {
  componentWillMount() {
    this.props.fetchQuestions();
  }

  render() {
    const { questions } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Header />
        {
          renderQuestions(questions)
        }
        <NewQuestion />
      </MuiThemeProvider>
    );
  }
}

const renderQuestions = questions =>
  questions ? questions
    .map(question => (<Question key={question._id} id={question._id} />)) : (<div>Loading...</div>);

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions())
});

const mapStateToProps = state => ({
  questions: state.question.questions
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

