import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Drawer, CircularProgress, List, ListItem, ListItemText } from '@material-ui/core';
import { connect } from 'react-redux';
import { getTopics } from '../../actions/topics';
import NewTopic from '../NewTopic';


const TopicDrawer = ({ topics, getTopics }) =>
  <Drawer variant="permanent" color="secondary" >
    <List>
      <ListItem>
        <ListItemText color="primary" primary="Forseti" secondary="the questionnaire" />
      </ListItem>
    </List>
    <Divider />
    <List>
      {
        drawer(topics, getTopics)
      }
      <NewTopic />
    </List>
  </Drawer >;

const drawer = (topics, getTopics) =>
  topics.length > 0 ? renderTopics(topics) : fetchAndLoad(getTopics);

const fetchAndLoad = getTopics => {
  getTopics();
  return <CircularProgress />;
};

const renderTopics = topics => topics.map((text, index) => (
  <ListItem button key={index} onClick={() => { }}>
    <ListItemText primary={text} />
  </ListItem>
));

TopicDrawer.propTypes = {
  container: PropTypes.object,
};

const mapStateToProps = state => ({
  ...state.topics
});

const mapDispatchToProps = {
  getTopics
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicDrawer);
