import React, { Component } from 'react';

import { createMuiTheme, MuiThemeProvider, Button, AppBar } from '@material-ui/core';
import * as materialColor from '@material-ui/core/colors';
import TopicDrawer from './TopicDrawer';
import Questionnaire from './Questionnaire';


const theme = createMuiTheme({
  palette: {
    primary: materialColor.teal,
    secondary: materialColor.pink,
  },
  typography: {
    useNextVariants: true,
  },
  shape: {
    borderRadius: 10,
  },
});

export default class MainScreen extends Component {
  render() {
    return (
      // <MuiThemeProvider theme={theme}>
      <div>
        <TopicDrawer />
        <div style={{ paddingLeft: 200 }}>
          <AppBar >
            Questionnaire
          </AppBar>
          <Questionnaire />
        </div>
      </div>
      // </MuiThemeProvider>
    );
  }
}
