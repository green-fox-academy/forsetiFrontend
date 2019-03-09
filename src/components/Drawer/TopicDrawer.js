/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Drawer, CircularProgress, List, ListItem, ListItemText } from '@material-ui/core';
import { connect } from 'react-redux';
import { getTopicsWS } from '../../actions/topics';
import NewTopic from './NewTopic';

const TopicDrawer = ({ topics, getTopicsWS }) =>
  <div>
    <List>
      <ListItem>
        <ListItemText
          color="primary"
          primary="Forseti"
          secondary="the questionnaire"
          style={{ textAlign: 'center' }} />
      </ListItem>
    </List>
    <Divider />
    <List>
      <NewTopic />
      {
        drawer(topics, getTopicsWS)
      }
    </List>
  </div>
  ;

const drawer = (topics, getTopicsWS) =>
  topics ? renderTopics(topics) : fetchAndLoad(getTopicsWS);

const fetchAndLoad = getTopicsWS => {
  getTopicsWS();
  return <CircularProgress />;
};

const renderTopics = topics => topics.map((text, index) => (
  <ListItem button key={index} onClick={() => { }} >
    <ListItemText primary={text.title} />
  </ListItem>
));

TopicDrawer.propTypes = {
  container: PropTypes.object,
  getTopicsWS: PropTypes.func.isRequired,
  topics: PropTypes.array,
};

const mapStateToProps = state => ({
  ...state.topics
});

const mapDispatchToProps = {
  getTopicsWS,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicDrawer);
