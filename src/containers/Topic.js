import React from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { getTopics } from '../actions/topics';
import history from '../history';

const Topics = ({ topics, getTopics }) => (
  <div>
    {
      renderOfFetch(topics, getTopics)
    }
  </div>
);

const renderOfFetch = (topics, getTopics) => {
  if (topics.length > 0) {
    return topics.map((topic, index) => <Button
      key={index}
      onClick={
        () => window.location.assign(`/questionnaire/${topic}`)
      }
    >
      {topic}
    </Button >);
  } else {
    getTopics();
    return <div>loading...</div>;
  }
};

const mapStateToProps = state => ({
  ...state.topics
});

const mapDispatchToProps = {
  getTopics
};

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
