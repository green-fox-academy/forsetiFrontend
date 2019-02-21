import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Drawer, CircularProgress, List, ListItem, ListItemText } from '@material-ui/core';
import { connect } from 'react-redux';
import { getTopics } from '../actions/topics';


const TopicDrawer = ({ topics, getTopics }) =>
  <Drawer variant="permanent" >
    <List>
      <ListItem>
        <ListItemText color="primary" primary="Forseti" secondary="the questionnaire"></ListItemText>
        <Divider />
      </ListItem>
      {
        drawer(topics, getTopics)
      }
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
