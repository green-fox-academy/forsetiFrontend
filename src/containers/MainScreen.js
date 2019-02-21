import React, { Component } from 'react';

import { createMuiTheme, MuiThemeProvider, AppBar } from '@material-ui/core';
import * as materialColor from '@material-ui/core/colors';
import TopicDrawer from '../components/Drawer/TopicDrawer';
import Questionnaire from './Questionnaire';


const theme = createMuiTheme({
  palette: {
    primary: materialColor.teal,
    secondary: materialColor.pink,
  },
  direction: 'ltr',
  spacing: {
    unit: 30,
  },
  typography: {
    useNextVariants: true,
  },
  shape: {
    borderRadius: 5,
  },
  transitions: {
    easing: {

    }
  }
});

const MainScreen = () => (
  <MuiThemeProvider theme={theme}>
    <div>
      <TopicDrawer />
      <div style={{ paddingLeft: 200 }}>
        <AppBar >
          Questionnaire
        </AppBar>
        <Questionnaire />
      </div>
    </div>
  </MuiThemeProvider>
);



export default MainScreen;