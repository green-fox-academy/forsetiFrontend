import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UI_ACTIONS from './actions/ui_actions';
import { fetchQuestions } from './actions/question';
import './styles/index.scss';

class App extends React.Component {
  componentWillMount() {
    this.props.fetchQuestions();
  }

  render() {
    const { userName, count, webSite } = this.props.ui;
    return (
      <div>
        <label>Creator - <a href={webSite} target="_blank">{userName}</a></label>
        <br />
        <div className="wrapper">
        </div>
        <div>
          Count is {count}
          <button onClick={this.props.uiActions.incrementCount}>INCREMENT COUNT</button>
        </div>
      </div >
    );
  }
}

const mapDispatchToProps = dispatch => ({
  uiActions: bindActionCreators(UI_ACTIONS, dispatch),
  fetchQuestions: () => dispatch(fetchQuestions())
});

const mapStateToProps = state => ({
  ui: state.ui
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
