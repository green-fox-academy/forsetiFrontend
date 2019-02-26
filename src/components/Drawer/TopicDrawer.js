import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Drawer, CircularProgress, List, ListItem, ListItemText } from '@material-ui/core';
import NewTopic from './NewTopic';
import Topic from './Topic';;

const TopicDrawer = () =>
  <div>
    <List>
      <ListItem>
        <ListItemText color="primary" primary="Forseti" secondary="the questionnaire" />
      </ListItem>
    </List>
    <Divider />
    <List>
      <Topic></Topic>
    </List>
  </div>
  ;


export default (TopicDrawer);
